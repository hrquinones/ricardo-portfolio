export interface ExpertiseGroup {
  id: string;
  label: string;
  items: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "NestJS", "PHP", "Laravel", "Yii", "Java", "JSP"],
  },
  {
    id: "architecture",
    label: "Architecture",
    items: [
      "Microservices",
      "Backend for Frontend (BFF)",
      "MVC",
      "Modular / microfrontend-oriented architecture",
      "Meta4 Peoplenet services architecture",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["Angular", "JavaScript"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "SQL Server", "PostgreSQL", "PL/SQL (Oracle)"],
  },
  {
    id: "cloud-infrastructure",
    label: "Cloud / Infrastructure",
    items: [
      "Red Hat OpenShift",
      "Apache",
      "Linux (Ubuntu)",
      "Windows Server",
      "Tomcat",
      "Bitrise CI/CD",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "NFC / contactless payments", "Android Studio"],
  },
  {
    id: "observability-tooling",
    label: "Observability / Tooling",
    items: [
      "Datadog",
      "Dynatrace",
      "Firebase Console",
      "Figma",
      "GitHub Copilot",
    ],
  },
];
