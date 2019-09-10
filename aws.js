module.exports = {
  development: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_BUCKET_REGION,
    bucket: process.env.REACT_APP_BUCKET_NAME,
    Action: [
      "s3:GetObject",
      "s3:GetObjectAcl",
      "s3:ListMultipartUploadParts",
      "s3:PutObject",
      "s3:PutObjectAcl",
      "s3:DeleteObject",
      "cloudfront:CreateInvalidation"
    ]
  }
};
