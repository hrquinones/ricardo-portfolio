export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  focus: string;
  responsibilities: string[];
  technologies: string[];
  relatedCaseStudySlugs?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "personal-pay",
    company: "Personal Pay",
    role: "Senior Backend Engineer | Tech Lead",
    location: "Buenos Aires, Argentina",
    startDate: "2021-11",
    endDate: "present",
    focus:
      "Led the card-issuance platform modernization: error reduction, microservices migration, NFC contactless payments, and a per-product frontend BFF architecture.",
    responsibilities: [
      "Led the optimization of the card-issuance process, reducing the error rate and minimizing provider API calls, resulting in a significant cost reduction.",
      'Designed a scalable architecture, migrating a card "microlith" to a more efficient microservices structure.',
      "Participated in the frontend architecture redesign through a per-product Backend for Frontend (BFF), improving separation of concerns and establishing higher-abstraction service contracts.",
      "Led the development of reusable UI components for other teams and restructured the codebase toward a modular, product-based architecture with a view to evolving into microfrontends.",
      "Built Datadog and Dynatrace dashboards for monitoring and observability.",
      "Led the NFC contactless payments frontend via a React Native SDK bridge, contributed to security definitions, and adjusted Bitrise CI/CD to ensure reliable deployments.",
      "As Backend Developer: built a card-shipment tracking service integrating a streaming API and SQS, managing events through a microservice with configurable response mapping for end users.",
    ],
    technologies: [
      "React Native 0.77",
      "Node.js 18",
      "NestJS 9.4",
      "Datadog",
      "Dynatrace",
      "Firebase Console",
      "Bitrise",
      "SQS",
    ],
    relatedCaseStudySlugs: ["card-onboarding", "card-platform", "nfc-payments"],
  },
  {
    id: "poder-judicial",
    company: "Poder Judicial de Santiago del Estero",
    role: "Full Stack Developer",
    location: "Santiago del Estero, Argentina",
    startDate: "2018-02",
    endDate: "2021-11",
    focus:
      "Modernized legacy judicial case-management systems and built a virtual case-file desk that replaced physical intake during the pandemic.",
    responsibilities: [
      "Migrated legacy PHP 5 systems with no design patterns to MVC-based frameworks, applying best practices that eased maintenance and the delivery of new features.",
      "Built a web-based virtual desk for case-file intake, replacing the physical front desk during the pandemic; reached a functional MVP in one month and later fully replaced the physical office, reducing operating costs and freeing resources for more critical areas.",
      "Optimized SQL Server queries and transactions in the case-file notification system, improving per-request response time by 50% and nearly eliminating batch-processing errors for notified filings.",
    ],
    technologies: [
      "PHP 7",
      "JavaScript",
      "Yii 2",
      "Laravel 8",
      "Angular 10",
      "Node.js 14",
      "Java",
      "Apache 2",
      "Ubuntu 20.04",
      "MySQL 5",
      "SQL Server 2000",
      "Red Hat OpenShift",
    ],
    relatedCaseStudySlugs: ["judicial-platform", "legacy-modernization"],
  },
  {
    id: "istorming",
    company: "Istorming S.A.",
    role: "Senior Developer",
    location: "Buenos Aires, Argentina",
    startDate: "2018-03",
    endDate: "2021-10",
    focus:
      "Concurrent contractor role (alongside Poder Judicial) building HR-management modules and a Meta4 services architecture.",
    responsibilities: [
      "Developed garnishment and license modules for an HR-management platform, using Angular on the frontend and Laravel on the backend.",
      "Designed, configured, and implemented the Meta4 services architecture on a Windows Server 2016 data center, serving requests from web clients and running batch processes efficiently.",
    ],
    technologies: [
      "Meta4 Peoplenet 8",
      "PL/SQL Oracle 12c",
      "Laravel 8",
      "PostgreSQL 10",
      "Angular 10",
    ],
  },
  {
    id: "prosegur",
    company: "Prosegur S.A.",
    role: "Senior Developer / Technical Lead",
    location: "Buenos Aires, Argentina",
    startDate: "2010-01",
    endDate: "2018-01",
    focus:
      "Implemented HR and payroll systems at scale and led legacy-to-corporate-platform migrations across LATAM.",
    responsibilities: [
      "Implemented an HR-management and payroll system for more than 10,000 employees, streamlining administration and salary processes.",
      "Migrated legacy systems to corporate platforms across several LATAM countries, contributing to the modernization and scalability of enterprise solutions.",
    ],
    technologies: ["Meta Peoplenet 7", "PL/SQL Oracle 11g", "JSP", "Tomcat"],
    relatedCaseStudySlugs: ["legacy-modernization"],
  },
];
