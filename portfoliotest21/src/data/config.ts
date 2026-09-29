const config = {
  title: "Aditya Gavane | Software Engineer",
  description: {
    long: "Aditya Gavane is a Software Engineer specialized in architecting scalable systems, backend architecture, and high-performance engineering. Discover my latest work including Apex Interceptor, Cookmate, and Satark.",
    short:
      "Architecting Scalable Systems — Backend & Design.",
  },
  keywords: [
    "Aditya Gavane",
    "portfolio",
    "software engineer",
    "backend architecture",
    "scalable systems",
    "Apex Interceptor",
    "Cookmate",
    "Satark",
    "Nexus Lidar",
    "Asha Copilot",
    "Quantum Neural Agent",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Aditya Gavane",
  email: "gavaneaaditya5@gmail.com",
  site: "https://adityagavane47.github.io",

  // for github stars button
  githubUsername: "adityagavane47",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/adityagavane07",
    instagram: "https://www.instagram.com/adityaagavane47/",
    github: "https://github.com/adityagavane47",
  },
};
export { config };
