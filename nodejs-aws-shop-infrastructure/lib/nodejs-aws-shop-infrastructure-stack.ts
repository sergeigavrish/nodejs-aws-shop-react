import {
  Stack,
  StackProps,
  RemovalPolicy,
  CfnOutput,
  Duration,
} from "aws-cdk-lib";
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket, BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import path = require("path");

export class NodejsAwsShopInfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "NodejsAwsShopInfrastructureBucket", {
      bucketName: "nodejs-aws-shop-infrastructure-s3",
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const distribution = new Distribution(
      this,
      "NodejsAwsShopInfrastructureDistribution",
      {
        defaultBehavior: {
          origin: S3BucketOrigin.withOriginAccessControl(bucket),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: "index.html",
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: Duration.seconds(0),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: Duration.seconds(0),
          },
        ],
      }
    );

    new BucketDeployment(this, "NodejsAwsShopInfrastructureBucketDeployment", {
      destinationBucket: bucket,
      sources: [Source.asset(path.join(__dirname, "../../dist"))],
      prune: true,
      distribution,
      distributionPaths: ["/*"],
    });

    new CfnOutput(this, "NodejsAwsShopInfrastructureDistributionDomainName", {
      value: distribution.distributionDomainName,
      exportName: "ExportedNodejsAwsShopInfrastructureDistributionDomainName",
      description: "Nodejs aws shop distribution domain name",
    });
  }
}
