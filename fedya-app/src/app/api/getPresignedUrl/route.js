import s3, { getPresignedUrl, getPublicUrl } from "../../../utils/minioClient";

export async function POST(request) {
  try {
    const { bucketName } = await request.json();

    if (!bucketName) {
      return new Response(JSON.stringify({ error: "bucketName is required" }), {
        status: 400,
      });
    }

    // List objects in the bucket
    const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();
    const objects = data.Contents || [];

    const usePublic = process.env.USE_PUBLIC_S3_URLS === "true";
    const presignedExpirySeconds =
      Number(process.env.PRESIGNED_URL_EXPIRY_SECONDS) || 168 * 60 * 60;

    const urls = objects.map((obj) => {
      const key = obj.Key;
      const url = usePublic
        ? getPublicUrl({ Bucket: bucketName, Key: key })
        : getPresignedUrl({
            Bucket: bucketName,
            Key: key,
            Expires: presignedExpirySeconds,
          });

      return { key, url };
    });

    return new Response(JSON.stringify({ urls }), { status: 200 });
  } catch (error) {
    console.error("Error listing objects or generating URLs:", error);
    return new Response(
      JSON.stringify({ error: "Error listing objects or generating URLs" }),
      { status: 500 }
    );
  }
}
