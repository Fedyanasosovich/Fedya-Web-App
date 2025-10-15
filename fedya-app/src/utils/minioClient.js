import AWS from "aws-sdk";

// Configure AWS S3 client. Environment variables expected:
// AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
// Optionally, S3_FORCE_PATH_STYLE and S3_ENDPOINT can be used for S3-compatible services.
const s3 = new AWS.S3({
  region: process.env.AWS_REGION || "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  s3ForcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true" || false,
  endpoint: process.env.S3_ENDPOINT || undefined,
});

// Helper: return a presigned URL for a given bucket/key and expiry (seconds)
export function getPresignedUrl({ Bucket, Key, Expires = 3600 }) {
  return s3.getSignedUrl("getObject", { Bucket, Key, Expires });
}

// Helper: return a public URL for a given bucket/key (works for public buckets or when using a CDN)
export function getPublicUrl({ Bucket, Key }) {
  // If a custom endpoint is set, construct path-style or virtual-hosted style accordingly
  const endpoint = process.env.S3_ENDPOINT;
  if (endpoint) {
    // Ensure no trailing slash
    const base = endpoint.replace(/\/$/, "");
    return `${base}/${Bucket}/${encodeURIComponent(Key)}`;
  }

  // Default to AWS virtual-hosted style URL
  const region = process.env.AWS_REGION || "us-east-1";
  if (region === "us-east-1") {
    return `https://${Bucket}.s3.amazonaws.com/${encodeURIComponent(Key)}`;
  }
  return `https://${Bucket}.s3.${region}.amazonaws.com/${encodeURIComponent(
    Key
  )}`;
}

export default s3;
