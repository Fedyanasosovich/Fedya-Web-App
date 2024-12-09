import s3 from "../../../utils/minioClient";

export async function POST(request) {
  try {
    const { bucketName } = await request.json();

    // List objects in the bucket
    const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();

    const objects = data.Contents || [];

    // Generate pre-signed URLs for each object
    const urls = objects.map((obj) => ({
      key: obj.Key,
      url: s3.getSignedUrl("getObject", {
        Bucket: bucketName,
        Key: obj.Key,
        Expires: 168 * 60 * 60, // Link expiration time in seconds
      }),
    }));

    return new Response(JSON.stringify({ urls }), { status: 200 });
  } catch (error) {
    console.error("Error listing objects or generating URLs:", error);
    return new Response(
      JSON.stringify({ error: "Error listing objects or generating URLs" }),
      { status: 500 }
    );
  }
}
