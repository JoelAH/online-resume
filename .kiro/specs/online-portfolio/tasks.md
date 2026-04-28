# Implementation Plan: Online Portfolio

## Overview

Build a dark-themed, single-page React + TypeScript portfolio site for Joel A. Hyman using Vite, CSS Modules, and CSS custom properties. The site has seven components (Navigation, Summary, Experience, TechStack, Projects, Certifications, Education) driven by a single typed data file. Infrastructure is provisioned via AWS CDK v2 (S3 + CloudFront). Testing uses Vitest, React Testing Library, and fast-check for property-based tests.

## Tasks

- [x] 1. Scaffold Vite + React + TypeScript project and configure tooling
  - [x] 1.1 Initialize the Vite project with the React + TypeScript template
    - Run `npm create vite@latest` with the react-ts template or manually create `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, and `index.html`
    - Install dependencies: `react`, `react-dom`, `typescript`, `@types/react`, `@types/react-dom`
    - Verify the project builds with `npm run build`
    - _Requirements: 11.1, 11.4_

  - [x] 1.2 Set up testing framework
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`
    - Configure Vitest in `vite.config.ts` with `jsdom` environment
    - Create a test setup file that imports `@testing-library/jest-dom`
    - _Requirements: 11.1_

  - [x] 1.3 Create global theme styles and CSS custom properties
    - Create `src/styles/global.css` with all CSS custom properties for the dark theme palette, typography scale, spacing tokens, and layout variables as defined in the design
    - Set `body` background to `--color-bg-primary`, text color to `--color-text-primary`, and apply the primary font family
    - Import `global.css` in `src/main.tsx`
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2. Implement data layer and type definitions
  - [x] 2.1 Create TypeScript interfaces and resume data file
    - Create `src/data/resumeData.ts` with all interfaces: `ResumeData`, `SummaryData`, `ExperienceEntry`, `TechCategory`, `SkillEntry`, `TechStackData`, `ProjectEntry`, `CertificationEntry`, `EducationEntry`
    - Populate the data object with Joel A. Hyman's resume content: summary (name, title, summaryText, email, linkedInUrl — no phone field), three experience entries in reverse chronological order, four tech categories with skills marked as current or previously used, three projects (QuickRating, Chrome Extension - ChatGPT Folders, AI Review Scraper & Analyzer), two certifications, and education at Northern Caribbean University
    - Export both the interfaces and the `resumeData` constant
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.4, 5.1, 6.1, 7.1, 8.1, 8.2, 8.3, 11.3, 12.1, 12.2_

- [x] 3. Implement Navigation component
  - [x] 3.1 Create Navigation component with sticky header and smooth scrolling
    - Create `src/components/Navigation/Navigation.tsx` and `Navigation.module.css`
    - Render a `<nav>` element with `aria-label="Main navigation"` containing anchor links for all six sections: Summary, Work Experience, Tech Stack, Side Projects, Certifications, Education
    - Implement click handlers that call `document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })` and prevent default anchor behavior
    - Style as a sticky/fixed header using `position: sticky; top: 0` with dark background and accent-colored links
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 3.2 Implement mobile hamburger menu for viewports below 768px
    - Add a hamburger icon button with `aria-expanded` and `aria-controls` attributes
    - Use `useState` to manage open/closed state
    - Render a mobile menu overlay with `aria-hidden` when closed
    - Close the menu after a navigation link is clicked
    - Use a CSS media query at `max-width: 767px` to show hamburger and hide desktop links, and vice versa
    - _Requirements: 2.4, 9.1, 9.2_

  - [ ]* 3.3 Write unit tests for Navigation component
    - Verify all six section links are rendered
    - Verify hamburger menu toggle behavior
    - Verify `aria-expanded` attribute updates on toggle
    - _Requirements: 2.1, 2.4_

- [x] 4. Implement Summary and Experience sections
  - [x] 4.1 Create Summary component
    - Create `src/components/Summary/Summary.tsx` and `Summary.module.css`
    - Render the name as an `<h1>` heading
    - Render professional summary as paragraph text
    - Render email as a `mailto:` link
    - Render LinkedIn URL as an external link with `target="_blank"` and `rel="noopener noreferrer"`
    - Ensure no phone number is rendered
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 12.1_

  - [ ]* 4.2 Write unit tests for Summary component
    - Verify name heading is rendered
    - Verify email mailto link is present
    - Verify LinkedIn link opens in new tab
    - Verify no phone number pattern appears in rendered output
    - _Requirements: 3.1, 3.3, 3.4, 3.5, 12.1_

  - [x] 4.3 Create Experience component
    - Create `src/components/Experience/Experience.tsx` and `Experience.module.css`
    - Iterate over the experience array and render each entry with company name, job title, location, and date range
    - Render accomplishments as a `<ul>` list for each entry
    - Data is already in reverse chronological order in `resumeData.ts`
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [ ]* 4.4 Write property test for Experience reverse chronological order
    - **Property 1: Experience entries are in reverse chronological order**
    - Generate random `ExperienceEntry[]` arrays with `fc.array(...)`, render the Experience component, and verify entries appear in the DOM in the same order as the input array (which the component must preserve)
    - **Validates: Requirements 4.1**

  - [ ]* 4.5 Write property test for Experience entry field rendering
    - **Property 2: Experience entry renders all fields and accomplishments**
    - Generate random `ExperienceEntry` objects with non-empty fields using fast-check arbitraries, render the Experience component, and verify the rendered output contains the company name, job title, location, date range, and every accomplishment string
    - **Validates: Requirements 4.2, 4.3**

- [x] 5. Checkpoint - Verify core sections
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement TechStack and Projects sections
  - [x] 6.1 Create TechStack component
    - Create `src/components/TechStack/TechStack.tsx` and `TechStack.module.css`
    - Render four category groups: Languages/Frameworks, Cloud/Backend, Databases, Tools
    - Render each skill as a distinct badge/chip element
    - Apply different CSS classes for `isCurrent: true` vs `isCurrent: false` skills within Languages/Frameworks to visually distinguish them
    - _Requirements: 5.1, 5.2, 5.3_

  - [ ]* 6.2 Write property test for skill element count
    - **Property 3: Each skill is rendered as a distinct element**
    - Generate random `TechCategory` objects with varying numbers of `SkillEntry` items, render the TechStack component, and verify the number of rendered skill elements equals the number of skills in the input
    - **Validates: Requirements 5.2**

  - [ ]* 6.3 Write property test for current vs previously used skill distinction
    - **Property 4: Current and previously used skills are visually distinguished**
    - Generate pairs of `SkillEntry` with `isCurrent: true` and `isCurrent: false`, render them within a TechStack component, and verify the rendered elements have different CSS class names
    - **Validates: Requirements 5.3**

  - [x] 6.4 Create Projects component
    - Create `src/components/Projects/Projects.tsx` and `Projects.module.css`
    - Render each project as a visually distinct card element
    - Display project name and description on each card
    - Conditionally render a clickable link with `target="_blank"` and `rel="noopener noreferrer"` when a project has a URL
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ]* 6.5 Write property test for project card rendering
    - **Property 5: Project card renders description and conditional URL link**
    - Generate random `ProjectEntry` objects with and without `url` fields, render the Projects component, and verify: description is always present, anchor element with correct `href` and `target="_blank"` exists when URL is defined, no external link anchor exists when URL is undefined
    - **Validates: Requirements 6.2, 6.3**

  - [ ]* 6.6 Write unit tests for Projects component
    - Verify three project names are rendered with concrete data
    - Verify project cards are distinct elements
    - _Requirements: 6.1, 6.4_

- [x] 7. Implement Certifications and Education sections
  - [x] 7.1 Create Certifications component
    - Create `src/components/Certifications/Certifications.tsx` and `Certifications.module.css`
    - Render each certification as a distinct visual element (card or badge)
    - _Requirements: 7.1, 7.2_

  - [x] 7.2 Create Education component
    - Create `src/components/Education/Education.tsx` and `Education.module.css`
    - Render institution name, degree, and attendance period
    - _Requirements: 8.1, 8.2, 8.3_

  - [ ]* 7.3 Write unit tests for Certifications and Education components
    - Verify two certification names are rendered
    - Verify institution, degree, and period are rendered for Education
    - _Requirements: 7.1, 8.1, 8.2, 8.3_

- [ ] 8. Compose App component and responsive layout
  - [ ] 8.1 Create App component that wires all sections together
    - Create `src/App.tsx` and `src/App.module.css`
    - Import `resumeData` and pass relevant data to each section component as props
    - Render `<Navigation />` followed by each section component in order: Summary, Experience, TechStack, Projects, Certifications, Education
    - Wrap each section in a `<section>` element with an `id` attribute matching the navigation link targets
    - _Requirements: 11.2, 11.3_

  - [ ] 8.2 Update `src/main.tsx` entry point
    - Render the `<App />` component into the root DOM element
    - Import `global.css` for theme styles
    - _Requirements: 11.1_

  - [ ] 8.3 Implement responsive layout styles
    - Add responsive CSS rules: single-column vertical stack below 768px, wider multi-column layouts at 768px and above
    - Ensure no horizontal overflow from 320px to 2560px viewports
    - Use `max-width: var(--max-content-width)` with auto margins for content centering
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ]* 8.4 Write unit tests for App component and privacy
    - Verify all six section elements are rendered with correct `id` attributes
    - Verify no phone number pattern (e.g., regex for phone formats) appears anywhere in the rendered App output
    - _Requirements: 11.2, 12.1, 12.2_

- [ ] 9. Checkpoint - Verify full application
  - Ensure all tests pass, run `npm run build` to verify static output, ask the user if questions arise.

- [ ] 10. Implement AWS CDK infrastructure stack
  - [ ] 10.1 Set up CDK project structure
    - Create `infra/` directory with `bin/infra.ts` and `lib/portfolio-stack.ts`
    - Install CDK dependencies: `aws-cdk-lib`, `constructs`
    - Create `infra/tsconfig.json` for the CDK TypeScript project
    - Create a `cdk.json` configuration file pointing to the infra entry point
    - _Requirements: 10.1_

  - [ ] 10.2 Implement the PortfolioStack CDK construct
    - In `infra/lib/portfolio-stack.ts`, create a CDK stack that provisions:
      - An S3 bucket with public access blocked (`blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL`)
      - An Origin Access Identity (OAI) granting CloudFront read access to the S3 bucket
      - A CloudFront distribution serving from the S3 bucket with `ViewerProtocolPolicy.REDIRECT_TO_HTTPS`
      - A `BucketDeployment` that uploads the `../dist` directory to the S3 bucket
      - A `CfnOutput` that prints the CloudFront distribution URL
    - In `infra/bin/infra.ts`, instantiate the stack
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [ ]* 10.3 Write CDK assertion tests for the infrastructure stack
    - Verify S3 bucket has `PublicAccessBlockConfiguration` with all four block settings enabled
    - Verify CloudFront distribution exists with OAI configuration
    - Verify `ViewerProtocolPolicy` is set to `redirect-to-https`
    - Verify `CfnOutput` for the distribution URL exists
    - Verify `BucketDeployment` construct references the correct source path
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 11. Final checkpoint - Ensure all tests pass
  - Run all unit tests, property-based tests, and CDK assertion tests. Ensure `npm run build` produces a clean `dist/` output. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document using fast-check
- Unit tests validate specific examples and edge cases using React Testing Library
- CDK assertion tests validate infrastructure correctness without deploying
- All components use CSS Modules for scoped styling and CSS custom properties for theme consistency
