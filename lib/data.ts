export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string; // the ? means optional
};

export const projects: Project[] = [
  { title: "Personal website", description: "This site!", tech: ["Next.js", "TypeScript"] },
  {
    title: "Search Engine",
    description:
      "A distributed, Google-like search engine built on a MapReduce framework, with a segmented inverted index and fault-tolerant Manager/Worker modules.",
    tech: ["Python", "JavaScript", "Hadoop/MapReduce"],
  },
  {
    title: "Instagram Clone",
    description:
      "A full-stack social app with a dynamic React frontend, infinite scroll, and a relational SQL schema for users, posts, comments, and likes, deployed on AWS.",
    tech: ["Python", "React", "HTML/CSS", "SQL", "AWS"],
  },
  {
    title: "Volunteer Engagement Tool",
    description:
      "Built at the JPMorgan Chase Code for Good hackathon for the nonprofit Rebuilding Together Aurora, with bilingual support, an admin portal, and hours tracking.",
    tech: ["Python (Flask)", "React", "REST APIs"],
  },
];
