// ============================================================
// DADOS PESSOAIS — edite aqui para atualizar o portfólio inteiro
// ============================================================

export const PERSONAL = {
  name: "João Victor",
  role: "Desenvolvedor Full Stack",
  email: "joaovictorro11@gmail.com", // TODO: coloque seu e-mail real
  location: "Goiânia-GO, Brasil",
  education: "Analise e Desenvolvimento de Sistemas",
  work: "Desenvolvedor Full Stack",
  bio: "Sou desenvolvedor Full Stack com foco em backend e arquitetura de sistemas, com experiência em todo o ciclo de desenvolvimento — da modelagem ao deploy. Atuo com Node.js, Go, Next.js, React, Flutter e Tailwind, além de bancos de dados relacionais. Tenho domínio em infraestrutura e deploy utilizando Docker, Portainer, Dokploy e Vercel, garantindo aplicações estáveis e prontas para produção. Já desenvolvi sistemas de gestão, plataformas SaaS e aplicações para clínicas, sempre com foco em performance, escalabilidade e solução de problemas reais.",
  socials: {
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-victor-rodrigues-de-oliveira-2918b0253/", // TODO: coloque seu LinkedIn
    github: "https://github.com/srjuao",        // TODO: coloque seu GitHub
    instagram: "https://www.instagram.com/_srjuao1/",  // TODO: coloque seu Instagram
  },
};

export const PROJECTS = [
  {
    title: "FluxoClinicas",
    subtitle: "Webapp para clinicas medicas criado com reactjs e nextjs, utilizado hoje por mais de 60 medicos",
    description: "Sistema completo de gestão para clínicas médicas. Inclui planner semanal com calendário interativo, gestão financeira com dashboard de faturamento, controle de convênios, glosas e repasses médicos. Desenvolvido com React, Next.js, Tailwind CSS e integrado com APIs REST.",
    image: "/projects/fluxoclinicas.png",
    images: ["/projects/fluxoclinicas.png", "/projects/fluxoclinicas1.png", "/projects/fluxoclinicas2.png"],
    tech: ["REACT", "Next.JS", "Supabase", "Tailwind CSS"],
    link: "https://app.fluxoclinicas.online/",
    github: "#",
  },
  {
    title: "Unitransp",
    subtitle: "Site institucional, responsivo que consome apis do sistema SSW, para consultar rastreamento de cargas.",
    description: "Site institucional da Unitransp Transportes, com integração ao sistema SSW para rastreamento de cargas em tempo real. Design responsivo com foco em usabilidade e performance.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"],
    tech: ["js", "html", "css"],
    link: "#",
    github: "#",
  },
  {
    title: "AnalyticsLog",
    subtitle: "Landing Page, responsiva.",
    description: "Landing page moderna e responsiva para a AnalyticsLog, plataforma de inteligência em logística. Design clean com animações suaves e formulário de contato integrado.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"],
    tech: ["js", "html", "css"],
    link: "#",
    github: "#",
  },
  {
    title: "Site Fluxo Clinicas",
    subtitle: "Site institucional, responsivo.",
    description: "Site institucional da FluxoClínicas, desenvolvido para apresentar os serviços e atrair novos clientes. Layout responsivo com design moderno e otimizado para conversão.",
    image:
      "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=1200"],
    tech: ["js", "html", "css"],
    link: "#",
    github: "#",
  },
];

export const SKILLS = [
  {
    name: "JavaScript",
    description:
      "A maior parte da minha experiência com JavaScript foi através do curso da Rocketseat, nele pude lidar com diversos desafios que me fizeram concluir projetos complexos e ter um nível intermediário nessa linguagem atualmente.",
    icon: "javascript",
  },
  {
    name: "HTML",
    description:
      "Hoje, posso considerar que estou em um nível avançado de HTML. A maior parte da experiência que adquiri com o mesmo, foi através de estudos auto-didatas, desenvolvendo aplicações que na época, pra mim, eram extremamente complexas.",
    icon: "html",
  },
  {
    name: "CSS",
    description:
      "Minha trajetória com o CSS é similar ao HTML, tendo em vista que no início dos meus estudos quanto a programação, me dediquei completamente a aprender essas duas competências, hoje, meu nível de CSS é avançado.",
    icon: "css",
  },
  {
    name: "ReactJS",
    description:
      "Após sentir necessidade de eficiência no desenvolvimento de aplicações web e desenvolver aplicações com alto desempenho, comecei meus estudos com ReactJS, hoje, consigo sentir boas diferenças em relação ao JavaScript puro.",
    icon: "react",
  },
  {
    name: "Go",
    description:
      "Tenho me aprofundado em Go para o desenvolvimento de sistemas de alta performance e concorrência, explorando a simplicidade e a robustez da linguagem em projetos de backend escaláveis.",
    icon: "go",
  },
  {
    name: "Flutter",
    description:
      "Com Flutter, foco no desenvolvimento mobile multiplataforma, criando interfaces fluidas e nativas para iOS e Android a partir de um único código-base, priorizando a experiência do usuário.",
    icon: "flutter",
  },
];
