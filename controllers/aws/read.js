import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";


const BUCKET = process.env.S3_BUCKET_NAME;

const read = async (req, res) => {
    // GET /s3/presign-download?key=...  → front pide URL de lectura (GET)
    try {
        const { key, asAttachment } = req.query;

        const cmd = new GetObjectCommand({
            Bucket: BUCKET,
            Key: String(key),
            ...(asAttachment
                ? { ResponseContentDisposition: `attachment; filename="${String(key).split("/").pop()}"` }
                : {})
        });

        const url = await getSignedUrl(req.app.get("s3"), cmd, { expiresIn: 60 });
        return res.json({ url });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "No se pudo generar URL de descarga" });
    }

}

export { read }
