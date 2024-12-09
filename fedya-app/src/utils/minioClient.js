import AWS from "aws-sdk";

// Configure MinIO client
const s3 = new AWS.S3({
  endpoint: process.env.MINIO_ENDPOINT, // Your MinIO server URL
  accessKeyId: process.env.MINIO_ACCESS_KEY, // MinIO Access Key
  secretAccessKey: process.env.MINIO_SECRET_KEY, // MinIO Secret Key
  s3ForcePathStyle: true, // Path-style URLs (default for MinIO)
  signatureVersion: "v4", // Required for signed URLs
});

export default s3;
