import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import * as path from 'path';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. S3 Bucket — static hosting, public access blocked
    const siteBucket = new s3.Bucket(this, 'PortfolioBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // 2. Origin Access Identity (OAI) — grants CloudFront read access to S3
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      'PortfolioOAI',
      {
        comment: 'OAI for portfolio site',
      },
    );
    siteBucket.grantRead(originAccessIdentity);

    // 3. CloudFront Distribution — serves S3 content, HTTP→HTTPS redirect
    const distribution = new cloudfront.Distribution(this, 'PortfolioDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(siteBucket, {
          originAccessIdentity,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // 4. BucketDeployment — uploads dist/ contents to S3
    new s3deploy.BucketDeployment(this, 'DeployPortfolio', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../dist'))],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    // 5. CfnOutput — prints CloudFront URL after deploy
    new cdk.CfnOutput(this, 'DistributionUrl', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront distribution URL for the portfolio site',
    });
  }
}
