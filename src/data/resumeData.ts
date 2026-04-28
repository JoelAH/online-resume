export interface SummaryData {
  name: string;
  title: string;
  summaryText: string;
  email: string;
  linkedInUrl: string;
  // Note: no phone field — excluded by design for privacy
}

export interface ExperienceEntry {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
}

export interface SkillEntry {
  name: string;
  isCurrent: boolean;
}

export interface TechCategory {
  categoryName: string;
  skills: SkillEntry[];
}

export interface TechStackData {
  categories: TechCategory[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  url?: string;
}

export interface CertificationEntry {
  name: string;
  issuer?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export interface ResumeData {
  summary: SummaryData;
  experience: ExperienceEntry[];
  techStack: TechStackData;
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  education: EducationEntry;
}

export const resumeData: ResumeData = {
  summary: {
    name: 'Joel A. Hyman',
    title: 'Full Stack Software Engineer',
    summaryText:
      'Full Stack Software Engineer with over 10 years of experience building scalable web applications and cloud-based solutions. Specializing in React, TypeScript, and AWS, with a focus on delivering clean, maintainable code and intuitive user experiences.',
    email: 'joelhyman.mail@gmail.com',
    linkedInUrl: 'https://www.linkedin.com/in/joel-a-hyman',
  },

  experience: [
    {
      company: 'Praos Health Inc',
      jobTitle: 'Full Stack Software Engineer',
      location: 'Remote',
      startDate: 'Apr 2022',
      endDate: 'Apr 2026',
      accomplishments: [
        'Developed and maintained full-stack features using React, TypeScript, and Node.js for a healthcare credentialing platform',
        'Designed and implemented RESTful APIs and microservices deployed on AWS Lambda and API Gateway',
        'Led migration of legacy jQuery components to modern React with TypeScript, improving maintainability and performance',
        'Implemented CI/CD pipelines using AWS CodePipeline and CodeBuild for automated testing and deployment',
        'Collaborated with cross-functional teams to deliver HIPAA-compliant solutions for healthcare providers',
      ],
    },
    {
      company: 'Medullan Inc',
      jobTitle: 'Software Engineer',
      location: 'Remote',
      startDate: 'Nov 2017',
      endDate: 'May 2022',
      accomplishments: [
        'Built and maintained web applications using React, Angular, and Node.js for digital health clients',
        'Developed cloud-native solutions on AWS including serverless architectures with Lambda, DynamoDB, and S3',
        'Implemented responsive UI components following accessibility best practices and WCAG guidelines',
        'Participated in agile development processes including sprint planning, code reviews, and retrospectives',
        'Mentored junior developers on modern JavaScript frameworks and cloud development patterns',
      ],
    },
    {
      company: 'Epic Technologies Jamaica',
      jobTitle: 'Programmer / Junior Programmer',
      location: 'Kingston, Jamaica',
      startDate: 'May 2015',
      endDate: 'Nov 2017',
      accomplishments: [
        'Developed web applications using PHP, JavaScript, and MySQL for local business clients',
        'Built and maintained e-commerce platforms and content management systems',
        'Implemented database schemas and optimized SQL queries for improved application performance',
        'Provided technical support and training to clients on web application usage and maintenance',
      ],
    },
  ],

  techStack: {
    categories: [
      {
        categoryName: 'Languages/Frameworks',
        skills: [
          { name: 'React', isCurrent: true },
          { name: 'TypeScript', isCurrent: true },
          { name: 'JavaScript', isCurrent: true },
          { name: 'Node.js', isCurrent: true },
          { name: 'HTML/CSS', isCurrent: true },
          { name: 'Angular', isCurrent: false },
          { name: 'jQuery', isCurrent: false },
          { name: 'PHP', isCurrent: false },
          { name: 'C#', isCurrent: false },
          { name: 'ASP.NET', isCurrent: false },
        ],
      },
      {
        categoryName: 'Cloud/Backend',
        skills: [
          { name: 'AWS Lambda', isCurrent: true },
          { name: 'API Gateway', isCurrent: true },
          { name: 'AWS S3', isCurrent: true },
          { name: 'CloudFront', isCurrent: true },
          { name: 'AWS CDK', isCurrent: true },
          { name: 'DynamoDB', isCurrent: true },
          { name: 'SSM', isCurrent: true },
          { name: 'CloudWatch', isCurrent: true },
          { name: 'Serverless Framework', isCurrent: true },
        ],
      },
      {
        categoryName: 'Databases',
        skills: [
            { name: 'MongoDB', isCurrent: true },
            { name: 'DynamoDB', isCurrent: true },
            { name: 'MySQL', isCurrent: false },
        ],
      },
      {
        categoryName: 'Tools',
        skills: [
          { name: 'Git', isCurrent: true },
          { name: 'VS Code', isCurrent: true },
          { name: 'Docker', isCurrent: true },
          { name: 'Jira', isCurrent: true },
        ],
      },
    ],
  },

  projects: [
    {
      name: 'QuickRating',
      description:
        'A lightweight web application that allows users to quickly rate and review products or services. Built with React and TypeScript, featuring a clean UI and real-time rating aggregation.',
      url: 'https://quickrating.page/',
    },
    {
      name: 'Chrome Extension - ChatGPT Folders',
      description:
        'A Chrome browser extension that adds folder organization capabilities to the ChatGPT interface, allowing users to categorize and manage their conversations efficiently.',
      url: 'https://chromewebstore.google.com/detail/chatgpt-folders/lapefebfdhoomaehglkomljbpfbjcham',
    },
    {
      name: 'AI Review Scraper & Analyzer',
      description:
        'An automated tool that scrapes product reviews from various platforms and uses AI to analyze sentiment, extract key themes, and generate summary insights for decision-making.',
      url: 'https://www.appreviewquest.com/',
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
    },
    {
      name: 'Certification in Client Needs and Software Requirements',
      issuer: 'Coursera',
    },
  ],

  education: {
    institution: 'Northern Caribbean University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2012 – 2015',
  },
};
