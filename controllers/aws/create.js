import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { lookup as mimeLookup } from "mime-types";
import { v4 as uuid } from "uuid";

const BUCKET = process.env.S3_BUCKET_NAME;

// POST /s3/presign-upload  → front pide URL de subida (PUT)


let create = async (req, res) => {
    try {
        console.log("entro a create");

        const { fileName, contentType, folder = "uploads", userId = "anon" } = req.body;
        // 1) Validar tipo permitido
        const safeType = mimeLookup(fileName) || contentType || "application/octet-stream";
        const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf", "video/mp4"];
        if (!allowed.includes(safeType)) {
            return res.status(400).json({ error: "Tipo de archivo no permitido" });
        }

        // 2) Generar un key seguro
        const ext = fileName.includes(".") ? fileName.split(".").pop() : "bin";
        const key = `${folder}/${userId}/${uuid()}.${ext}`;

        // 3) Comando PUT prefirmado
        const cmd = new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            ContentType: safeType
        });

        const url = await getSignedUrl(req.app.get("s3"), cmd, { expiresIn: 60 }); // 60s
        return res.json({ url, key, contentType: safeType });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "No se pudo generar URL de subida" });
    }
}

export { create }