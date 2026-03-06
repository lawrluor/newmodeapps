export interface Project {
  id: string;
  title: string;
  roleAndDate: string;
  techStack?: string;
  problem: string;
  solutions: string[]; // Some solutions are lists or string with <br/>, we can treat them as string[] for bullets
  impact: string;
}

export const projectsData: Project[] = [
  {
    id: 'creased',
    title: 'Creased Fashion LLC',
    roleAndDate: 'Engineering Lead • May 2025 - Present',
    techStack: 'Tech: React Native, Node.js, Social APIs',
    problem: 'The luxury sneaker community lacked a dedicated platform that effectively combined trusted resale marketplace features with genuine social engagement and content creation.',
    solutions: [
      '• Leading a cross-functional team of 3 engineers to architect and build a comprehensive social marketplace app from the ground up.',
      '• Architected and implemented core social features including Stories, Clips, direct messaging, and customizable community feeds.',
      '• Established robust testing protocols and CI/CD pipelines to ensure seamless performance for high-stakes features like real-time drop alerts and rapid transactions.'
    ],
    impact: 'Delivering a production-ready MVP that empowers sneaker enthusiasts to connect, create content, and safely trade, successfully launching early creator/seller onboarding. To be released in the second quarter of 2026.'
  },
  {
    id: 'university',
    title: 'Top 50 Research University',
    roleAndDate: 'Research App Developer • January 2024 - December 2025',
    techStack: 'Tech: Vanilla JavaScript, YouTube iframe API, CSS3 Transforms, OpenAI API',
    problem: 'The university required engineering support across multiple research initiatives, specifically needing a behavioral research platform to study scrolling habits in short-form video apps and an automated grading tool to streamline computer science education.',
    solutions: [
      '• Project 1: Behavioral Research Platform (YouTube Shorts Clone)\nBuilt a mobile-first web app to measure user scrolling patterns. Engineered custom swipe detection with CSS transforms and implemented YouTube iframe API workarounds to bypass mobile autoplay restrictions. Built an in-memory CSV export system for session data collection.',
      '• Project 2: AI-Powered Autograder\nCreated an automated grading tool leveraging the OpenAI API to provide AI-powered feedback on student code. Built features to allow professors to organize assessments by student and assignment, streamlining the code review process.'
    ],
    impact: 'Delivered two successful research tools: a functional behavioral platform that enabled data-driven analysis of user engagement, and an autograder that significantly reduced administrative overhead for professors conducting code reviews.'
  },
  {
    id: 'memorial',
    title: 'Digital Memorial Platform',
    roleAndDate: 'Lead Software Engineer • June 2023 - December 2023',
    techStack: 'Tech: React Native, Cloud Storage, Social APIs',
    problem: 'Tasked with creating a dignified, accessible app to create and view lasting digital memorials for loved ones, supporting multimedia content while maintaining a respectful user experience during emotionally difficult times.',
    solutions: [
      '• Built a robust system for users to upload and display high-resolution images, videos, and long-form text posts as digital tributes.',
      '• Designed a respectful, high-performance UI that prioritizes ease of use for a wide demographic of users during sensitive life events.'
    ],
    impact: 'Delivered a compassionate platform enabling families to honor and remember loved ones through rich multimedia tributes, accessible across all devices.'
  },
  {
    id: 'monist',
    title: 'Monist Inc. (formerly Monolog)',
    roleAndDate: 'Engineering Lead • April 2022 - Jan 2023',
    problem: 'Users struggled with performance anxiety and cognitive interference when recording video journals, leading to high session abandonment rates and poor user retention.',
    solutions: [
      '• Spearheaded a cross-functional team of 4 engineers to deliver an AI video-journaling platform with React Native, owning the end-to-end release process for iOS & Android and establishing an automated CI/CD pipeline to ensure stable deployments.',
      '• Partnered with UX to create innovative "flow-state" interfaces; implemented interactive, physics-based UI elements during recording to quiet cognitive interference and mitigate performance anxiety.',
      '• Implemented a production-ready video compression solution for lower-end devices.'
    ],
    impact: 'Reduced measured session abandonment rates by 18% through innovative UI design, while delivering a stable, production-ready platform across iOS and Android.'
  },
  {
    id: 'solperheros',
    title: 'Solperheros LLC',
    roleAndDate: 'Full-Stack Web3 Developer • October 2021 - January 2022',
    techStack: 'Tech: Solana, Rust/Anchor, Photoshop, TypeScript',
    problem: 'Launching an NFT collection requires coordinating generative art creation, blockchain smart contract deployment, and a user-friendly minting experience—all while ensuring security and trait rarity.',
    solutions: [
      '• Developed custom scripts to programmatically generate unique NFT layers and metadata from Photoshop assets, ensuring trait rarity and visual consistency.',
      '• Architected and deployed the Solana smart contracts (programs) to handle the minting logic, focusing on low-latency transactions and security.',
      '• Built the minting site, providing a seamless wallet-connection experience for users.'
    ],
    impact: 'Delivered a complete end-to-end NFT infrastructure enabling the successful launch and minting of a unique digital art collection on Solana.'
  },
  {
    id: 'automotive',
    title: 'Proprietary Data Transformation (PWA) - International Automotive Research Firm',
    roleAndDate: 'Lead Technical Consultant • August 2020 - March 2021',
    problem: 'High-risk, manual data pipeline using fragmented Excel sheets, leading to data corruption and weeks of manual reconciliation.',
    solutions: [
      '• Designed a standardized SQL schema to consolidate years of legacy data, mapping highly technical, non-standardized measurements into a single Source of Truth.',
      '• Developed a Progressive Web App (PWA) using Service Workers and IndexedDB. This allowed researchers to capture high-fidelity data in warehouses without internet connectivity.',
      '• Engineered a custom sync manager and session-persistent state to prevent data loss during multi-hour evaluations, ensuring 100% data fidelity.'
    ],
    impact: 'Eliminated the "Admin Bottleneck," reducing data compilation time from weeks to real-time and future-proofing the company\'s B2B research datasets.'
  },
  {
    id: 'cortex',
    title: 'Cortex College Consulting LLC',
    roleAndDate: 'Full Stack Developer • July 2019 - May 2020',
    problem: 'A college consulting startup needed to build their platform from scratch with limited resources, requiring both rapid development and sustainable user engagement.',
    solutions: [
      '• Engineered & shipped from concept to production, establishing the foundational codebase and creating a modular component library to accelerate future development.',
      '• Developed an automated engagement engine via notifications sent by Firebase Cloud Messaging (FCM) to drive consistent user interaction.'
    ],
    impact: 'Increased daily active usage by 20-30% as measured by Google Analytics, while establishing a scalable codebase for future feature development.'
  }
];
