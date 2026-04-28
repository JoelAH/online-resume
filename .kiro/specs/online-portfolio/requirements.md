# Requirements Document

## Introduction

This document defines the requirements for an online portfolio/resume website for Joel A. Hyman. The website is a dark-themed, professional, and elegant single-page React application that showcases a professional summary, work experience, technical skills, side projects, certifications, and education. The site will be deployed to AWS using S3 and CloudFront, with infrastructure managed by AWS CDK. Phone number is explicitly excluded for privacy reasons.

## Glossary

- **Portfolio_Site**: The React-based single-page web application serving as the online resume/portfolio
- **Summary_Section**: The section of the Portfolio_Site displaying the professional summary and contact information
- **Experience_Section**: The section of the Portfolio_Site displaying work history in reverse chronological order
- **TechStack_Section**: The section of the Portfolio_Site displaying technical skills organized by category
- **Projects_Section**: The section of the Portfolio_Site displaying personal/side projects with descriptions and links
- **Certifications_Section**: The section of the Portfolio_Site displaying professional certifications
- **Education_Section**: The section of the Portfolio_Site displaying academic background
- **Navigation**: The component that allows users to navigate between sections of the Portfolio_Site
- **CDK_Stack**: The AWS CDK infrastructure-as-code stack that provisions S3, CloudFront, and related resources for hosting
- **Visitor**: Any person viewing the Portfolio_Site in a web browser
- **Theme_System**: The dark color palette and styling system applied consistently across the Portfolio_Site

## Requirements

### Requirement 1: Dark Theme and Professional Visual Design

**User Story:** As a Visitor, I want the Portfolio_Site to have a dark, professional, and elegant visual design, so that the site conveys a polished and modern impression.

#### Acceptance Criteria

1. THE Theme_System SHALL apply a dark color palette with a primary background color below a luminance value of 30% and light-colored text with a contrast ratio of at least 4.5:1 against the background
2. THE Theme_System SHALL use a consistent typographic scale with no more than three font families across the Portfolio_Site
3. THE Portfolio_Site SHALL render all sections with consistent spacing, alignment, and visual hierarchy
4. THE Portfolio_Site SHALL use subtle accent colors to highlight interactive elements and section headings

### Requirement 2: Navigation

**User Story:** As a Visitor, I want to navigate between sections of the Portfolio_Site easily, so that I can find the information I am looking for without excessive scrolling.

#### Acceptance Criteria

1. THE Navigation SHALL display links to all six content sections: Summary, Work Experience, Tech Stack, Side Projects, Certifications, and Education
2. WHEN a Visitor clicks a Navigation link, THE Portfolio_Site SHALL smooth-scroll to the corresponding section
3. THE Navigation SHALL remain accessible as the Visitor scrolls through the Portfolio_Site
4. WHEN the viewport width is less than 768 pixels, THE Navigation SHALL collapse into a mobile-friendly menu

### Requirement 3: Summary Section

**User Story:** As a Visitor, I want to see a professional summary and contact details, so that I can quickly understand the candidate's profile and reach out.

#### Acceptance Criteria

1. THE Summary_Section SHALL display the full name "Joel A. Hyman" prominently as a heading
2. THE Summary_Section SHALL display the professional summary text describing experience, specializations, and focus areas
3. THE Summary_Section SHALL display the email address "joelhyman.mail@gmail.com" as a clickable mailto link
4. THE Summary_Section SHALL display a link to the LinkedIn profile "https://www.linkedin.com/in/joel-a-hyman" that opens in a new browser tab
5. THE Summary_Section SHALL NOT display a phone number

### Requirement 4: Work Experience Section

**User Story:** As a Visitor, I want to see detailed work experience listed in reverse chronological order, so that I can evaluate the candidate's professional background.

#### Acceptance Criteria

1. THE Experience_Section SHALL display work experience entries in reverse chronological order
2. THE Experience_Section SHALL display for each entry: company name, job title, location, and employment date range
3. THE Experience_Section SHALL display a list of accomplishments or responsibilities for each work experience entry
4. THE Experience_Section SHALL display the following three positions: "Full Stack Software Engineer at Praos Health Inc (Apr 2022 – Apr 2026)", "Software Engineer at Medullan Inc (Nov 2017 – May 2022)", and "Programmer / Junior Programmer at Epic Technologies Jamaica (May 2015 – Nov 2017)"

### Requirement 5: Tech Stack Section

**User Story:** As a Visitor, I want to see the candidate's technical skills organized by category, so that I can quickly assess technical competencies.

#### Acceptance Criteria

1. THE TechStack_Section SHALL organize technical skills into the following categories: Languages/Frameworks, Cloud/Backend, Databases, and Tools
2. THE TechStack_Section SHALL display each skill as a distinct visual element within its category
3. THE TechStack_Section SHALL visually distinguish between most recent and previously used technologies within the Languages/Frameworks category

### Requirement 6: Side Projects Section

**User Story:** As a Visitor, I want to see personal projects with descriptions and links, so that I can evaluate initiative and breadth of skills beyond employment.

#### Acceptance Criteria

1. THE Projects_Section SHALL display the following projects: "QuickRating", "Chrome Extension - ChatGPT Folders", and "AI Review Scraper & Analyzer"
2. THE Projects_Section SHALL display a description for each project
3. WHEN a project has an associated URL, THE Projects_Section SHALL display the URL as a clickable link that opens in a new browser tab
4. THE Projects_Section SHALL present each project as a visually distinct card or block element

### Requirement 7: Certifications Section

**User Story:** As a Visitor, I want to see professional certifications, so that I can verify the candidate's validated expertise.

#### Acceptance Criteria

1. THE Certifications_Section SHALL display the following certifications: "AWS Certified Solutions Architect – Associate" and "Certification in Client Needs and Software Requirements from Coursera"
2. THE Certifications_Section SHALL display each certification as a distinct visual element

### Requirement 8: Education Section

**User Story:** As a Visitor, I want to see the candidate's educational background, so that I can understand academic qualifications.

#### Acceptance Criteria

1. THE Education_Section SHALL display the institution name "Northern Caribbean University"
2. THE Education_Section SHALL display the degree "Bachelor of Science in Computer Science"
3. THE Education_Section SHALL display the attendance period "2012 – 2015"

### Requirement 9: Responsive Layout

**User Story:** As a Visitor, I want the Portfolio_Site to display correctly on devices of varying screen sizes, so that I can view the portfolio on desktop, tablet, or mobile.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render all content without horizontal overflow on viewport widths from 320 pixels to 2560 pixels
2. WHEN the viewport width is less than 768 pixels, THE Portfolio_Site SHALL stack content sections vertically in a single-column layout
3. WHEN the viewport width is 768 pixels or greater, THE Portfolio_Site SHALL use wider layouts that take advantage of available horizontal space

### Requirement 10: AWS Infrastructure Deployment

**User Story:** As a developer, I want the Portfolio_Site to be deployed to AWS S3 and served through CloudFront using CDK, so that the site is fast, globally distributed, and infrastructure is version-controlled.

#### Acceptance Criteria

1. THE CDK_Stack SHALL provision an S3 bucket configured for static website hosting with public access blocked
2. THE CDK_Stack SHALL provision a CloudFront distribution that serves content from the S3 bucket using an Origin Access Identity
3. THE CDK_Stack SHALL configure the CloudFront distribution to redirect HTTP requests to HTTPS
4. THE CDK_Stack SHALL output the CloudFront distribution URL after deployment
5. THE CDK_Stack SHALL use the `cdk deploy` command to deploy all infrastructure and upload the built React application assets to the S3 bucket

### Requirement 11: React Application Structure

**User Story:** As a developer, I want the Portfolio_Site built as a React application with a clean component architecture, so that the codebase is maintainable and extensible.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be built using React with TypeScript
2. THE Portfolio_Site SHALL organize each content section as a separate React component
3. THE Portfolio_Site SHALL store all resume data in a dedicated data file separate from presentation components
4. THE Portfolio_Site SHALL produce a static build output suitable for S3 hosting

### Requirement 12: Privacy Protection

**User Story:** As the portfolio owner, I want my phone number excluded from the Portfolio_Site, so that my personal phone number is not publicly accessible.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL NOT include a phone number anywhere in the rendered output
2. THE Portfolio_Site SHALL NOT include a phone number in the source code, data files, or HTML metadata
