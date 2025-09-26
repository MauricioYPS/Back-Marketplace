
import {  DeleteObjectCommand } from "@aws-sdk/client-s3";
const BUCKET = process.env.S3_BUCKET_NAME;

const deleter = async (req, res) => {
      try {
    const { key } = req.body;
    const cmd = new DeleteObjectCommand({ Bucket: BUCKET, Key: key });
    await req.app.get("s3").send(cmd);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "No se pudo eliminar el objeto" });
  }
}

export { deleter }