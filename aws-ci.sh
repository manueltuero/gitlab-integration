#!/bin/bash
'module.exports = {
  development: {
    accessKeyId: '$1',
    secretAccessKey: '$2,'
    region: '$3,'
    bucket: '$4,'
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
};'
