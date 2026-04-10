// This file keeps most editable content in one place so the site is easy to maintain.
export const portfolio = {
  name: 'Nana Dwuma Daniel',
  headline: 'Data Analyst | Python, SQL, Power BI, Excel',
  valueStatement:
    'I turn data into clear insights, stronger reporting, and practical business solutions that help teams make confident decisions.',
  heroBadge: 'Data analytics portfolio',
  about: [
    'I am a Data Analyst with 4+ years of experience spanning analytics, auditing, business advisory, and data-driven problem solving. My work centers on making information more useful, reliable, and actionable for the people who depend on it.',
    'I am currently pursuing an MBA and an M.S. in Applied Data Analytics at Appalachian State University, expanding my ability to connect technical analysis with strategic business thinking.',
    'Across my projects, I bring a thoughtful mix of analytical rigor, process improvement, and automation to streamline reporting, surface insights, and support better decision-making.',
  ],
  stats: [
    { value: '4+ Years', label: 'Analytics and advisory experience' },
    { value: '2 Graduate Degrees', label: 'MBA + M.S. in Applied Data Analytics' },
    { value: 'End-to-End', label: 'Reporting, modeling, automation, and insight delivery' },
  ],
  skills: [
    {
      category: 'Programming & Analysis',
      items: ['Python', 'SQL', 'R', 'Data Cleaning', 'Business Analysis', 'Reporting'],
    },
    {
      category: 'Data Visualization',
      items: ['Power BI', 'Tableau', 'Excel', 'Data Visualization', 'Dashboard Design'],
    },
    {
      category: 'Databases & Warehousing',
      items: ['Data Modeling', 'Data Warehousing', 'Database Administration', 'Query Optimization'],
    },
    {
      category: 'Business & Process Tools',
      items: ['Automation', 'Process Improvement', 'Audit Support', 'Stakeholder Reporting'],
    },
  ],
  projects: [
    {
      title: 'ORBIT Payroll Reporting Automation Tool',
      summary:
        'Built a Python-based solution that transformed Excel payroll data into a standardized CNT file format for payroll reporting.',
      tools: ['Python', 'Excel', 'Process Automation', 'Data Validation'],
      impact:
        'Reduced manual effort, improved consistency, lowered reporting errors, and created a more reliable payroll reporting workflow.',
    },
    {
      title: 'Privacy Policy Compliance Analysis',
      summary:
        'Researched privacy policies using natural language processing and machine learning to evaluate GDPR and CCPA compliance signals.',
      tools: ['Python', 'NLP', 'Machine Learning', 'Research Analysis'],
      impact:
        'Combined text analytics with structured research methods to support rigorous compliance assessment and insight generation.',
    },
    {
      title: 'Business Intelligence Dashboards',
      summary:
        'Designed dashboards and reporting solutions in Power BI and Excel to support performance tracking and business decision-making.',
      tools: ['Power BI', 'Excel', 'Data Visualization', 'KPI Reporting'],
      impact:
        'Turned complex data into clear, stakeholder-friendly reporting that improved visibility, alignment, and decision support.',
    },
  ],
  resume: {
    file: '/resume/Nana-Resume.pdf',
    note: 'Replace the placeholder PDF in public/resume/Nana-Resume.pdf with your actual resume file.',
  },
  // Edit section headings and short supporting text here.
  sectionContent: {
    about: {
      eyebrow: 'About',
      title: 'Analytical, business-minded, and focused on practical impact.',
      description:
        'I bring together technical analysis, reporting discipline, and business context to help organizations make better use of their data.',
      highlights: [
        'Strong foundation in analytics, auditing, and business advisory.',
        'Graduate training in business leadership and applied data analytics.',
        'Experience improving reporting quality, efficiency, and usability through automation.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical strengths built for reporting, analysis, and business insight.',
      description:
        'The stack below reflects the tools and capabilities I use to clean data, model information, automate reporting, and communicate results clearly.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work focused on automation, insight generation, and decision support.',
      description:
        'Each project highlights how I use data tools to solve operational, analytical, or research-oriented problems with measurable value.',
    },
    resume: {
      eyebrow: 'Resume',
      title: 'A clear path for recruiters and hiring managers.',
      description:
        'The resume download button is already connected to the public resume folder, so replacing the placeholder file later is straightforward.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s connect.',
      description:
        'I’m open to opportunities, professional conversations, and collaborations where data can drive better decisions and better outcomes.',
    },
  },
  contact: {
    email: 'nana.email@example.com',
    linkedIn: 'https://www.linkedin.com/in/replace-with-your-link',
    github: 'https://github.com/replace-with-your-profile',
  },
  // Everything below powers the separate /projects page.
  projectPage: {
    title: 'Expanded case studies and portfolio work.',
    description:
      'This page gives you room for a fuller set of projects, stronger business context, and more dashboard-style visuals.',
    dashboardTitle: 'Dashboard showcase',
    dashboardDescription:
      'These visual blocks give recruiters a quick sense of the reporting and dashboard experiences you can speak to in interviews.',
    projects: [
      {
        title: 'ORBIT Payroll Reporting Automation Tool',
        summary:
          'Built a Python-based solution that transformed Excel payroll data into a standardized CNT file format for payroll reporting.',
        tools: ['Python', 'Excel', 'Process Automation', 'Data Validation'],
        impact:
          'Reduced manual effort, improved consistency, lowered reporting errors, and created a more reliable payroll reporting workflow.',
      },
      {
        title: 'Privacy Policy Compliance Analysis',
        summary:
          'Researched privacy policies using natural language processing and machine learning to evaluate GDPR and CCPA compliance signals.',
        tools: ['Python', 'NLP', 'Machine Learning', 'Research Analysis'],
        impact:
          'Combined text analytics with structured research methods to support rigorous compliance assessment and insight generation.',
      },
      {
        title: 'Business Intelligence Dashboards',
        summary:
          'Designed dashboards and reporting solutions in Power BI and Excel to support performance tracking and business decision-making.',
        tools: ['Power BI', 'Excel', 'Data Visualization', 'KPI Reporting'],
        impact:
          'Turned complex data into clear, stakeholder-friendly reporting that improved visibility, alignment, and decision support.',
      },
      {
        title: 'Executive Performance Reporting Suite',
        summary:
          'Created executive-facing reporting views that combined KPI tracking, trend analysis, and concise monthly performance summaries.',
        tools: ['Power BI', 'Excel', 'SQL', 'Stakeholder Reporting'],
        impact:
          'Improved leadership visibility into operational results and made recurring review meetings more data-driven and efficient.',
      },
      {
        title: 'Audit Analytics and Exception Review',
        summary:
          'Analyzed financial and operational records to identify anomalies, support audit procedures, and strengthen reporting quality.',
        tools: ['Excel', 'SQL', 'Data Analysis', 'Audit Support'],
        impact:
          'Helped reduce review time, improved control visibility, and supported better issue prioritization during audit work.',
      },
      {
        title: 'Process Improvement Reporting Automation',
        summary:
          'Streamlined recurring reporting tasks by standardizing data preparation steps and reducing manual spreadsheet work.',
        tools: ['Python', 'Excel', 'Automation', 'Process Improvement'],
        impact:
          'Saved time, reduced repetitive manual effort, and made reporting outputs easier to maintain across reporting cycles.',
      },
    ],
    dashboards: [
      {
        label: 'Dashboard 01',
        title: 'Operations Performance Dashboard',
        summary:
          'A sample dashboard layout for tracking throughput, completion rates, and period-over-period performance trends.',
        metrics: [
          { name: 'Completion', value: '94%' },
          { name: 'Cycle Time', value: '2.8d' },
          { name: 'Open Items', value: '18' },
        ],
        chartBars: ['50%', '68%', '74%', '61%', '82%', '88%', '76%'],
        breakdown: [
          { label: 'On Track', value: '64%', width: '64%' },
          { label: 'At Risk', value: '23%', width: '23%' },
          { label: 'Delayed', value: '13%', width: '13%' },
        ],
      },
      {
        label: 'Dashboard 02',
        title: 'Financial Reporting Snapshot',
        summary:
          'A dashboard concept for budget visibility, variance monitoring, and executive reporting summaries.',
        metrics: [
          { name: 'Budget Used', value: '78%' },
          { name: 'Variance', value: '-4.2%' },
          { name: 'Forecast', value: '$1.2M' },
        ],
        chartBars: ['42%', '58%', '63%', '70%', '75%', '72%', '84%'],
        breakdown: [
          { label: 'Revenue', value: '46%', width: '46%' },
          { label: 'Expenses', value: '34%', width: '34%' },
          { label: 'Other', value: '20%', width: '20%' },
        ],
      },
      {
        label: 'Dashboard 03',
        title: 'People and Payroll Trends',
        summary:
          'A visual reporting concept for payroll-related trends, processing quality, and exception monitoring.',
        metrics: [
          { name: 'Payroll Run', value: '99.3%' },
          { name: 'Exceptions', value: '7' },
          { name: 'Records', value: '2.4k' },
        ],
        chartBars: ['35%', '49%', '54%', '67%', '71%', '85%', '91%'],
        breakdown: [
          { label: 'Processed', value: '81%', width: '81%' },
          { label: 'Reviewed', value: '14%', width: '14%' },
          { label: 'Flagged', value: '5%', width: '5%' },
        ],
      },
      {
        label: 'Dashboard 04',
        title: 'Compliance Review Dashboard',
        summary:
          'A dashboard layout for monitoring document review progress, classification results, and compliance signals.',
        metrics: [
          { name: 'Policies', value: '126' },
          { name: 'Reviewed', value: '88%' },
          { name: 'Flags', value: '14' },
        ],
        chartBars: ['44%', '53%', '61%', '66%', '72%', '79%', '87%'],
        breakdown: [
          { label: 'Compliant', value: '58%', width: '58%' },
          { label: 'Partial', value: '29%', width: '29%' },
          { label: 'Needs Review', value: '13%', width: '13%' },
        ],
      },
    ],
  },
};

export const navLinks = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', href: '/projects', isRoute: true },
  { label: 'Resume', sectionId: 'resume' },
  { label: 'Contact', sectionId: 'contact' },
];

// Helper function for the Contact section cards.
// It keeps the JSX in App.jsx shorter and easier to scan.
export function getContactItems() {
  return [
    {
      label: 'Email',
      value: portfolio.contact.email,
      href: `mailto:${portfolio.contact.email}`,
      helper: 'Replace this placeholder email in src/data/portfolio.js.',
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: portfolio.contact.linkedIn,
      helper: 'Replace this placeholder LinkedIn URL in src/data/portfolio.js.',
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      href: portfolio.contact.github,
      helper: 'Replace this placeholder GitHub URL in src/data/portfolio.js.',
    },
  ];
}
