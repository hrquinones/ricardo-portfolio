export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  date: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  positioning: string;
  location: string;
  email: string;
  linkedin: string;
  yearsOfExperience: number;
  summary: string;
  education: EducationEntry[];
  certifications: Certification[];
}

export const profile: Profile = {
  name: "Ricardo Quiñones",
  title: "Senior Backend Engineer · Tech Lead",
  tagline: "I build systems that scale.",
  positioning:
    "Builds scalable systems, modernizes legacy architectures, and turns complex engineering problems into reliable, measurable solutions.",
  location: "Santiago del Estero, Argentina",
  email: "hrquinones@gmail.com",
  linkedin: "https://www.linkedin.com/in/ricardo-quiñones/",
  yearsOfExperience: 19,
  summary:
    "More than 19 years of experience as a software developer, working on web development, microservices, software management, scalable architecture design, and process optimization. Led the card development team at Personal Pay, optimizing the card-issuance process and reducing the error rate from 15% to under 1%. Worked in the public sector to optimize judicial processes during the pandemic, replacing physical case-file intake with a virtual web desk that remains in use today. Participated in migrating legacy systems to corporate platforms across several LATAM countries, contributing to the modernization and scalability of enterprise solutions.",
  education: [
    {
      institution: "Universidad Católica de Santiago del Estero",
      degree: "Ingeniería en Computación",
      location: "Santiago del Estero, Argentina",
      date: "2005-12",
    },
  ],
  certifications: [
    {
      name: "Oracle Nivel Introductorio",
      issuer: "UTN (Buenos Aires)",
      year: "2008",
    },
    { name: "Oracle DBA Jr", issuer: "UTN (Buenos Aires)", year: "2009" },
    {
      name: "Programa de Desarrollo de Habilidades de Gestión",
      issuer: "EY (Buenos Aires)",
      year: "2013",
    },
    {
      name: "Gestión Eficiente de Equipo de Trabajo",
      issuer: "Capacitarte (Buenos Aires)",
      year: "2014",
    },
    {
      name: "Metodología Scrum",
      issuer: "Educación IT (Buenos Aires)",
      year: "2017",
    },
    {
      name: "Red Hat Development - Microservices",
      issuer: "Red Hat Training",
      year: "2021",
    },
  ],
};
