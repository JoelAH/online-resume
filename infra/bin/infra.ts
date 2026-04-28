#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();
new PortfolioStack(app, 'PortfolioStack', {
  description: 'Online portfolio hosted on S3 and served via CloudFront',
});
