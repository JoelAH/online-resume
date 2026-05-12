# Online Portfolio

🔗 **Live site:** https://d25vvkco16jx7l.cloudfront.net

## About

A single-page online resume/portfolio showcasing experience, tech stack, certifications, side projects, and education. Built as a modern React SPA and deployed to AWS via CDK.

## Tech Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for bundling and dev server
- **CSS Modules** for scoped component styling
- **Vitest** + React Testing Library for testing

### Infrastructure

- **AWS CDK** (TypeScript) for infrastructure-as-code
- **Amazon S3** for static asset hosting (public access blocked)
- **Amazon CloudFront** for CDN distribution with HTTPS

### Project Structure

```
src/
├── components/       # UI components (Navigation, Summary, Experience, etc.)
├── data/             # Resume data source
├── hooks/            # Custom React hooks
├── styles/           # Global styles
└── test/             # Test setup

infra/
├── bin/              # CDK app entry point
└── lib/              # CDK stack definition (S3 + CloudFront)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Deployment

```bash
cd infra
npm install
npx cdk deploy
```

The CDK stack provisions an S3 bucket, CloudFront distribution, and deploys the built `dist/` folder automatically.
