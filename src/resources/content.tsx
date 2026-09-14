import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Guilherme",
  lastName: "Damico Balsi",
  name: `Guilherme Damico Balsi`,
  role: "Desenvolvedor Full-Stack e Designer UX/UI",
  avatar: "/images/profile.png",
  email: "guilhermebalsi@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Inglês", "Português", "Espanhol"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Se inscreva na Newsletter de {person.firstName}</>,
  description: <>Minha newsletter semanal sobre criatividade e desenvolvimento</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/guibalsi1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guilhermebalsi/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home-gui.png",
  label: "Home",
  title: `Portfolio de ${person.name} `,
  description: `Portfólio mostrando o trabalho de ${person.name} em desenvolvimento full-stack e design UX/UI.`,
  headline: <>Produtos digitais claros, da interface à arquitetura.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Portifolio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          OnceUI
        </Text>
      </Row>
    ),
    href: "/",
  },
  subline: (
    <>
      Sou Guilherme Damico Balsi, Desenvolvedor Full-Stack e Designer UX/UI.
      <br /> Uno estratégia, design de interfaces e engenharia para criar produtos modernos, úteis e escaláveis.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/guilherme-damico-balsi",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Sou desenvolvedor fullstack com experiência em criar soluções digitais completas, do front-end ao back-end.
        Minha atuação combina lógica de programação, boas práticas de arquitetura e atenção ao design de interfaces.
        Busco transformar ideias em aplicações modernas, escaláveis e fáceis de usar, sempre com foco em usabilidade e performance.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudos",
    institutions: [
      {
        name: "IBILCE - UNESP",
        description: <>Graduando em Ciência da Computação.</>,
      },
      {
        name: "Alura Cursos Online",
        description: <>Cursos de desenvolvimento web, mobile e design.</>,
      },
      {
        name: "DIO - Digital Innovation One",
        description: <>Boot Camp de Desenvolvimento JAVA</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        category: "Desenvolvimento Back-end",
        title: "APIs e serviços",
        description: <>Desenvolvimento back-end com Java e Spring Boot.</>,
        tags: [{ name: "Java", icon: "java" }, { name: "Spring Boot" }],
        images: [],
      },
      {
        category: "Desenvolvimento Front-end",
        title: "Interfaces web",
        description: <>Construção de interfaces com JavaScript, React e Next.js.</>,
        tags: [{ name: "JavaScript", icon: "javascript" }, { name: "React", icon: "react" }, { name: "Next.js", icon: "next" }],
        images: [],
      },
      {
        category: "Desenvolvimento Front-end",
        title: "Tipagem e qualidade",
        description: <>Desenvolvimento front-end tipado com TypeScript.</>,
        tags: [{ name: "TypeScript", icon: "typescript" }],
        images: [],
      },
      {
        category: "Dados e infraestrutura",
        title: "Bancos de dados relacionais",
        description: <>Modelagem e consultas em bancos de dados relacionais.</>,
        tags: [{ name: "MySQL", icon: "mysql" }],
        images: [],
      },
      {
        category: "Dados e infraestrutura",
        title: "Bancos de dados não relacionais",
        description: <>Trabalho com bancos de dados não relacionais como MongoDB.</>,
        tags: [{ name: "MongoDB", icon: "mongodb" }],
        images: [],
      },
      {
        category: "Dados e infraestrutura",
        title: "Versionamento",
        description: <>Controle de versão e colaboração em equipe.</>,
        tags: [{ name: "Git", icon: "git" }],
        images: [],
      },
      {
        category: "Dados e infraestrutura",
        title: "Containerização",
        description: <>Containerização e implantação de aplicações.</>,
        tags: [{ name: "Docker", icon: "docker" }],
        images: [],
      },
      {
        category: "Dados e infraestrutura",
        title: "Nuvem",
        description: <>Serviços de computação em nuvem e implantação.</>,
        tags: [
          { name: "AWS", icon: "aws" },
        ],
        images: [],
      },
      {
        category: "UX/UI Design",
        title: "Prototipagem",
        description: <>Prototipagem de interfaces com Figma.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        category: "Plataformas",
        title: "Salesforce",
        description: <>Aprendizagem estruturada da plataforma Salesforce por meio do Trailhead.</>,
        tags: [{ name: "Salesforce" }, { name: "Trailhead" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre tech e mais... ",
  description: `Leia o que  ${person.name} esta trabalhando atualmnte`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
