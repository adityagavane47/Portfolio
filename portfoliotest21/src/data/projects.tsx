import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        {/* @ts-ignore */}
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          {/* @ts-ignore */}
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  neo4j: {
    title: "Neo4j",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />, // Placeholder
  },
  celery: {
    title: "Celery",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  lidar: {
    title: "Lidar",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  llm: {
    title: "LLM",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  quantum: {
    title: "Quantum",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "third-eye",
    category: "Autonomous Agent / Threat Analysis",
    title: "Third Eye",
    src: "/assets/projects-screenshots/project-pics/third-eye.png",
    screenshots: ["third-eye.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.celery,
        PROJECT_SKILLS.neo4j,
        PROJECT_SKILLS.llm,
      ],
    },
    live: "https://github.com/adityagavane47/Third_Eye.V1",
    github: "https://github.com/adityagavane47/Third_Eye.V1",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time Web3 Threat Detection and Incident Response
          </TypographyP>
          <TypographyP className="font-mono">
            Third Eye is an autonomous AI agent for real-time Web3 threat detection and incident response, utilizing Neo4j graph analytics, Isolation Forest ML models, and Zero-Knowledge (ZK) proofs to secure blockchain ecosystems.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono">Tools used: Python, FastAPI, Celery, Redis, Neo4j, Isolation Forest ML, SP1 (ZKVM), Groq API (Llama 3), Solidity (Base Sepolia).</p>
        </div>
      );
    },
  },
  {
    id: "granthi-protocol",
    category: "Payment Protocol & Threat Verification",
    title: "Granthi Protocol",
    src: "/assets/projects-screenshots/project-pics/granthi.png",
    screenshots: ["granthi.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.node,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.neo4j,
      ],
    },
    live: "https://github.com/adityagavane47/Granthi-Protocol",
    github: "https://github.com/adityagavane47/Granthi-Protocol",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Escrow-Verified x402 Payment Gateway
          </TypographyP>
          <TypographyP className="font-mono">
            Granthi Protocol enforces the x402 payment standard on Algorand Testnet. It secures autonomous AI agent endpoints by requiring conditional on-chain atomic payments verified through parallel off-chain workers running Neo4j and Isolation Forest ML.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono">Tools used: Hono (Node.js), Algorand Testnet, x402-avm, Python, FastAPI, Neo4j, Scikit-Learn Isolation Forest.</p>
        </div>
      );
    },
  },
  {
    id: "cookmate",
    category: "Intelligent Cooking OS",
    title: "Cookmate",
    src: "/assets/projects-screenshots/project-pics/cookmate.png.jpeg",
    screenshots: ["cookmate.png.jpeg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.llm],
    },
    live: "https://github.com/adityagavane47",
    github: "https://github.com/adityagavane47",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            YC Hackathon Winner. Intelligent OS designed to transform kitchen experiences using AI Computer Vision and Generative Personas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "fitcare",
    category: "AI Form Correction Ecosystem",
    title: "FitCare",
    src: "", // No screenshot available yet
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "https://github.com/adityagavane47/FitCare",
    github: "https://github.com/adityagavane47/FitCare",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time AI-powered Form Correction
          </TypographyP>
          <TypographyP className="font-mono">
            FitCare is a full-stack health and fitness application designed to provide real-time AI-powered form correction and workout analysis using Ollama (Phi-3) and TensorFlow.js.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono">Tools used: React Native (Expo), FastAPI (Python), SQLite, Ollama (Phi-3), TensorFlow.js.</p>
        </div>
      );
    },
  },
  {
    id: "sarvakshan",
    category: "Real-time Geospatial Engine",
    title: "Sarvakshan",
    src: "/assets/projects-screenshots/project-pics/sarvakshan.png",
    screenshots: ["sarvakshan.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.python],
    },
    live: "https://github.com/adityagavane47/Sarvakshan",
    github: "https://github.com/adityagavane47/Sarvakshan",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Global Data Visualization on a 3D Globe
          </TypographyP>
          <TypographyP className="font-mono">
            Sarvakshan is a real-time geospatial engine visualizing live global data on an interactive 3D globe. Utilizing a dynamic "All-Bundle" plugin architecture, independent data sources are ingested and rendered decoupled from the core 3D viewer.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono">Tools used: Next.js 16, CesiumJS, TypeScript, Zustand, PostgreSQL, Prisma, Docker.</p>
        </div>
      );
    },
  },

];
export default projects;
