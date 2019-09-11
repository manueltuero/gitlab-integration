module.exports = {
  development: {
    accessKeyId: $REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: $REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: $REACT_APP_BUCKET_REGION,
    bucket: $REACT_APP_BUCKET_NAME,
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
