export type Language = 'pt' | 'en';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface NavItem {
  id: string;
  index: string;
  label: LocalizedText;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  iconKey:
    | 'bot'
    | 'code'
    | 'cpu'
    | 'shield'
    | 'zap'
    | 'cloud'
    | 'database'
    | 'layers'
    | 'braces'
    | 'box'
    | 'terminal'
    | 'git';
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: LocalizedText;
}

export type ProjectCategory = 'all' | 'ai' | 'data' | 'fullstack';

export interface ProjectItem {
  id: string;
  title: LocalizedText;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: LocalizedText;
  year: string;
  role: LocalizedText;
  summary: LocalizedText;
  highlights: {
    pt: string[];
    en: string[];
  };
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  imageAlt: LocalizedText;
}

export interface ServiceItem {
  index: string;
  title: LocalizedText;
  deliverables: {
    pt: string[];
    en: string[];
  };
  targetSection: string;
}

export interface TrajectoryItem {
  id: string;
  period: string;
  type: LocalizedText;
  role: LocalizedText;
  organization: string;
  location: string;
  description: LocalizedText;
  highlights: {
    pt: string[];
    en: string[];
  };
  current?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: LocalizedText;
  author: string;
  role: LocalizedText;
  company: string;
  isPlaceholder?: boolean;
}

export interface TrustLogoItem {
  name: string;
  subtitle: LocalizedText;
}

export const portfolioData = {
  profile: {
    brandName: 'Tucci',
    fullName: 'Gustavo Martinez Tucci',
    shortName: 'Gustavo Tucci',
    role: {
      pt: 'Engenheiro de Dados Assistente | GenAI, LLMs & Sistemas Multiagente',
      en: 'Assistant Data Engineer | GenAI, LLMs & Multi-Agent Systems',
    },
    drawerBio: {
      pt: 'Engenheiro de Dados Assistente na 2RP Net (projeto Banco Digio) e estudante de ADS no SENAI-SP. Especialista em sistemas multiagente com Google ADK, Python, GCP e desenvolvimento full-stack.',
      en: 'Assistant Data Engineer at 2RP Net (Banco Digio project) and Systems Analysis student at SENAI-SP. Focused on multi-agent systems with Google ADK, Python, GCP, and full-stack engineering.',
    },
    location: 'Salto de Pirapora, SP — Brazil',
    email: 'gutucci23@gmail.com',
    phone: '+55 (15) 98132-2692',
    whatsappUrl: 'https://wa.me/5515981322692',
    githubUrl: 'https://github.com/GustavoTucci',
    linkedinUrl: 'https://www.linkedin.com/in/gustavo-martinez-tucci',
    cvUrl: '/cv-gustavo-tucci.pdf',
    // Para adicionar sua foto, salve-a em public/avatar.jpg e atualize avatarUrl para '/avatar.jpg'
    avatarUrl: '',
    avatarAlt: {
      pt: 'Foto de perfil de Gustavo Martinez Tucci',
      en: 'Profile photo of Gustavo Martinez Tucci',
    },
    availability: {
      pt: 'Aberto a projetos & conexões em GenAI / Dados',
      en: 'Open to GenAI / Data projects & connections',
    },
    languagesSpoken: {
      pt: 'Português (Nativo) · Inglês (C1)',
      en: 'Portuguese (Native) · English (C1)',
    },
  },

  navLinks: [
    { id: 'home', index: '01', label: { pt: 'Início', en: 'Home' } },
    { id: 'about', index: '02', label: { pt: 'Sobre', en: 'About' } },
    { id: 'trajectory', index: '03', label: { pt: 'Trajetória', en: 'Trajectory' } },
    { id: 'services', index: '04', label: { pt: 'Especialidades', en: 'Services' } },
    { id: 'portfolio', index: '05', label: { pt: 'Projetos', en: 'Portfolio' } },
    { id: 'contact', index: '06', label: { pt: 'Contato', en: 'Contact' } },
  ] satisfies NavItem[],

  hero: {
    greeting: {
      pt: 'Olá, eu sou Gustavo Tucci',
      en: "Hi there, I'm Gustavo Tucci",
    },
    headlineLine1: {
      pt: 'ENGENHARIA',
      en: 'DATA',
    },
    headlineLine2: {
      pt: 'DE IA',
      en: '& AI',
    },
    headlineLine3: {
      pt: '& DADOS',
      en: 'ENGINEERING',
    },
    subtitle: {
      pt: 'Engenheiro de Dados Assistente na 2RP Net (projeto Banco Digio). Construo sistemas multiagente determinísticos com Google ADK, APIs em Python/FastAPI, infraestrutura GCP e interfaces modernas.',
      en: 'Assistant Data Engineer at 2RP Net (Banco Digio project). I build deterministic multi-agent systems with Google ADK, Python/FastAPI backends, GCP cloud pipelines, and modern web experiences.',
    },
    ctaPrimary: {
      pt: 'Vamos Conversar',
      en: "Let's Talk",
    },
    ctaSecondary: {
      pt: 'Baixar Currículo',
      en: 'Download CV',
    },
    rotatingBadgeText: {
      pt: 'GENAI • DADOS • GOOGLE ADK • PYTHON • ',
      en: 'GENAI • DATA • GOOGLE ADK • PYTHON • ',
    },
    photoPlaceholderHint: {
      pt: 'Espaço reservado para sua foto profissional (public/avatar.jpg)',
      en: 'Reserved space for your professional photo (public/avatar.jpg)',
    },
    photoBadgeLabel: {
      pt: '2RP Net · Banco Digio',
      en: '2RP Net · Banco Digio',
    },
  },

  skills: [
    { name: 'Google ADK', proficiency: 95, iconKey: 'bot' },
    { name: 'Python', proficiency: 94, iconKey: 'code' },
    { name: 'Multi-Agent Systems', proficiency: 92, iconKey: 'cpu' },
    { name: 'Pydantic', proficiency: 92, iconKey: 'shield' },
    { name: 'FastAPI', proficiency: 90, iconKey: 'zap' },
    { name: 'GCP', proficiency: 88, iconKey: 'cloud' },
    { name: 'PostgreSQL', proficiency: 88, iconKey: 'database' },
    { name: 'React & Next.js', proficiency: 86, iconKey: 'layers' },
    { name: 'TypeScript', proficiency: 85, iconKey: 'braces' },
    { name: 'Vue 3 & Angular', proficiency: 82, iconKey: 'layers' },
    { name: 'Docker', proficiency: 84, iconKey: 'box' },
    { name: 'Java', proficiency: 78, iconKey: 'terminal' },
    { name: 'Git & Git Flow', proficiency: 92, iconKey: 'git' },
  ] satisfies SkillItem[],

  about: {
    tag: {
      pt: '// SOBRE MIM',
      en: '// ABOUT ME',
    },
    experienceCardLabel: {
      pt: 'Repositórios públicos no GitHub com projetos reais de IA, Dados e Web.',
      en: 'Public GitHub repositories featuring real-world AI, Data, and Web projects.',
    },
    headlineParts: {
      pt: {
        before: 'Transformo ',
        highlight1: 'LLMs e sistemas multiagente',
        middle: ' em soluções confiáveis de produção, unindo ',
        highlight2: 'engenharia de dados, GCP',
        after: ' e desenvolvimento full-stack.',
      },
      en: {
        before: 'I turn ',
        highlight1: 'LLMs and multi-agent systems',
        middle: ' into reliable production software, bridging ',
        highlight2: 'data engineering, GCP',
        after: ', and full-stack development.',
      },
    },
    description: {
      pt: 'Efetivado em menos de um ano na 2RP Net, atuo hoje na squad de Gestão Eletrônica de Documentos (GED) do Banco Digio — trabalhando com backend, integrações externas, SSO, frontend e banco de dados no GCP. Paralelamente, curso Análise e Desenvolvimento de Sistemas no SENAI-SP e lidero projetos de IA generativa e governança de modelos de Machine Learning.',
      en: 'Promoted to full-time in under a year at 2RP Net, I currently work on Banco Digio’s Electronic Document Management (GED) squad — handling backend, external integrations, SSO, frontend, and databases on GCP. Alongside this, I study Systems Analysis & Development at SENAI-SP and lead GenAI and ML model governance projects.',
    },
    stats: [
      {
        value: 24,
        suffix: '+',
        label: { pt: 'Repositórios GitHub', en: 'GitHub Repositories' },
      },
      {
        value: 3,
        prefix: '0',
        suffix: '+',
        label: { pt: 'Projetos como Tech Leader', en: 'Tech Leader Projects' },
      },
      {
        value: 1,
        prefix: '<',
        suffix: ' Ano',
        label: { pt: 'Efetivação na 2RP Net', en: 'Full-Time at 2RP Net' },
      },
    ] satisfies StatItem[],
    quickInfo: {
      emailLabel: { pt: 'E-mail Direto', en: 'Direct Email' },
      locationLabel: { pt: 'Localização', en: 'Location' },
      languageLabel: { pt: 'Idiomas', en: 'Languages' },
    },
  },

  portfolio: {
    tag: {
      pt: '// PORTFÓLIO SELECIONADO',
      en: '// SELECTED WORK',
    },
    title: {
      pt: 'PROJETOS RECENTES',
      en: 'LATEST PROJECTS',
    },
    viewLabel: {
      pt: 'Ver',
      en: 'View',
    },
    categories: [
      { id: 'all', label: { pt: 'Todos', en: 'All' } },
      { id: 'ai', label: { pt: 'IA & Agentes', en: 'AI & Agents' } },
      { id: 'data', label: { pt: 'Dados & Backend', en: 'Data & Backend' } },
      { id: 'fullstack', label: { pt: 'Full-Stack & Web', en: 'Full-Stack & Web' } },
    ] as { id: ProjectCategory; label: LocalizedText }[],
    modalLabels: {
      role: { pt: 'Papel no Projeto', en: 'Role' },
      highlights: { pt: 'Destaques Técnicos', en: 'Technical Highlights' },
      stack: { pt: 'Stack Tecnológica', en: 'Tech Stack' },
      viewDeploy: { pt: 'Acessar Deploy', en: 'Live Demo' },
      viewRepo: { pt: 'Ver no GitHub', en: 'View on GitHub' },
      privateOrPending: { pt: 'Projeto Privado / Em Desenvolvimento', en: 'Private / In Development' },
      close: { pt: 'Fechar', en: 'Close' },
    },
    projects: [
      {
        id: 'synapse-multi-agent',
        title: {
          pt: 'Synapse — Sistema Multiagente de Análise de Crédito',
          en: 'Synapse — Multi-Agent Credit Analysis System',
        },
        category: 'ai',
        categoryLabel: { pt: 'IA & Agentes', en: 'AI & Agents' },
        year: '2026',
        role: { pt: 'Tech Leader · Equipe de 4', en: 'Tech Leader · Team of 4' },
        summary: {
          pt: 'Arquitetura multiagente em Google ADK para análise de risco de crédito sobre as 7 tabelas do dataset Home Credit, com cálculos determinísticos em Python e saída validada por Pydantic.',
          en: 'Multi-agent architecture built with Google ADK for credit risk analysis across the 7 Home Credit tables, using deterministic Python tools and Pydantic-validated JSON outputs.',
        },
        highlights: {
          pt: [
            'Orquestrador que delega tarefas para 4 agentes especialistas: bureau, pagamentos, cartão e contratos.',
            'Cálculos executados exclusivamente em tools determinísticas em Python/pandas, sem expor dados brutos ao LLM.',
            'Resposta final estruturada e validada via schemas Pydantic.',
          ],
          en: [
            'Orchestrator delegating tasks to 4 specialist agents: bureau, payments, credit card, and contracts.',
            'All numerical computations run inside deterministic Python/pandas tools without sending raw data to the LLM.',
            'Structured final output strictly validated with Pydantic schemas.',
          ],
        },
        techStack: ['Python', 'Google ADK', 'Pydantic', 'pandas', 'Multi-Agent'],
        repoUrl: 'https://github.com/GustavoTucci/multi-agent-system-synapse',
        imageUrl:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
        imageAlt: {
          pt: 'Representação visual de rede neural e sistema multiagente para análise de crédito',
          en: 'Visual representation of neural network and multi-agent credit analysis system',
        },
      },
      {
        id: 'ml-governance-platform',
        title: {
          pt: 'Plataforma de Treinamento & Governança de ML',
          en: 'ML Training & Governance Platform',
        },
        category: 'data',
        categoryLabel: { pt: 'Dados & Backend', en: 'Data & Backend' },
        year: '2026',
        role: { pt: 'Tech Leader · SENAI-SP', en: 'Tech Leader · SENAI-SP' },
        summary: {
          pt: 'Projeto Integrador no SENAI-SP focado no ciclo completo de desenvolvimento, treinamento, rastreabilidade e governança de modelos de Machine Learning em nuvem.',
          en: 'SENAI-SP integrative project focused on end-to-end development, training, traceability, and governance of Machine Learning models on the cloud.',
        },
        highlights: {
          pt: [
            'Liderança técnica com foco na arquitetura de backend em Python e FastAPI.',
            'Infraestrutura e serviços integrados ao Google Cloud Platform (GCP).',
            'Interface web em React para acompanhamento de experimentos e governança.',
          ],
          en: [
            'Technical leadership focused on Python & FastAPI backend architecture.',
            'Cloud infrastructure and services integrated with Google Cloud Platform (GCP).',
            'React web interface for experiment tracking and model governance.',
          ],
        },
        techStack: ['Python', 'FastAPI', 'GCP', 'React', 'ML Governance'],
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        imageAlt: {
          pt: 'Dashboard de métricas e governança de modelos de Machine Learning',
          en: 'Machine Learning model metrics and governance dashboard',
        },
      },
      {
        id: 'dilly-sports-sgm',
        title: {
          pt: 'Central de Manutenção 4.0 — Dilly Sports',
          en: 'Maintenance Central 4.0 — Dilly Sports',
        },
        category: 'data',
        categoryLabel: { pt: 'Dados & Backend', en: 'Data & Backend' },
        year: '2026',
        role: { pt: 'Liderança & Full-Stack', en: 'Team Lead & Full-Stack' },
        summary: {
          pt: 'Sistema de Gerenciamento de Manutenção Industrial (SGM) desenvolvido em equipe para digitalizar ordens de serviço, chamados, estoque de peças e histórico fabril.',
          en: 'Industrial Maintenance Management System (SGM) built in a team to digitalize work orders, tickets, spare-parts inventory, and equipment history.',
        },
        highlights: {
          pt: [
            'Controle completo de Ordens de Serviço (OS), chamados técnicos e estoque.',
            'Persistência relacional em PostgreSQL e ambiente containerizado com Docker.',
            'Atuação no desenvolvimento full-stack, liderança do grupo e documentação.',
          ],
          en: [
            'End-to-end management of Work Orders, maintenance tickets, and inventory.',
            'Relational persistence with PostgreSQL and containerized setup with Docker.',
            'Full-stack implementation, team leadership, and technical documentation.',
          ],
        },
        techStack: ['JavaScript', 'PostgreSQL', 'Docker', 'HTML5', 'CSS3'],
        repoUrl: 'https://github.com/GustavoTucci/Projeto_Integrador_Sem1-Dilly_Sports',
        imageUrl:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        imageAlt: {
          pt: 'Sistema industrial 4.0 para gestão de manutenção na Dilly Sports',
          en: 'Industry 4.0 maintenance management system for Dilly Sports',
        },
      },
      {
        id: 'barbearia-e-financas',
        title: {
          pt: 'Sistema de Agendamento — Barbearia Aguiar',
          en: 'Scheduling System — Barbearia Aguiar',
        },
        category: 'fullstack',
        categoryLabel: { pt: 'Full-Stack & Web', en: 'Full-Stack & Web' },
        year: '2026',
        role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
        summary: {
          pt: 'Sistema completo de agendamento online com painel administrativo para gestão de horários, serviços e atendimento da Barbearia Aguiar.',
          en: 'Full online scheduling system with an admin dashboard for managing appointments, services, and operations at Barbearia Aguiar.',
        },
        highlights: {
          pt: [
            'Painel administrativo completo para gestão de horários e serviços.',
            'Fluxo de agendamento focado em agilidade para clientes no mobile e desktop.',
          ],
          en: [
            'Full admin dashboard for managing appointments and services.',
            'Fast booking flow optimized for both mobile and desktop clients.',
          ],
        },
        techStack: ['React', 'JavaScript', 'APIs REST', 'UI/UX'],
        // Adicione aqui a URL do deploy da Barbearia Aguiar:
        liveUrl: '',
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: {
          pt: 'Painel financeiro e de agendamentos em React',
          en: 'Financial and scheduling dashboard built with React',
        },
      },
    ] satisfies ProjectItem[],
  },

  services: {
    tag: {
      pt: '// ESPECIALIDADES',
      en: '// SPECIALTIES',
    },
    title: {
      pt: 'O QUE EU CONSTRUO',
      en: 'WHAT I BUILD',
    },
    items: [
      {
        index: '01',
        title: {
          pt: 'GenAI & Sistemas Multiagente',
          en: 'GenAI & Multi-Agent Systems',
        },
        deliverables: {
          pt: [
            'Orquestração com Google ADK',
            'Tools Determinísticas em Python',
            'Saída Estruturada com Pydantic',
          ],
          en: [
            'Google ADK Orchestration',
            'Deterministic Python Tools',
            'Pydantic Structured Outputs',
          ],
        },
        targetSection: '#portfolio',
      },
      {
        index: '02',
        title: {
          pt: 'Engenharia de Dados & Backend',
          en: 'Data Engineering & Backend',
        },
        deliverables: {
          pt: [
            'APIs de Alta Performance (FastAPI)',
            'Modelagem PostgreSQL & pandas',
            'Integrações Externas & SSO',
          ],
          en: [
            'High-Performance FastAPI Services',
            'PostgreSQL & pandas Pipelines',
            'External Integrations & SSO',
          ],
        },
        targetSection: '#trajectory',
      },
      {
        index: '03',
        title: {
          pt: 'Cloud (GCP) & Governança de ML',
          en: 'Cloud (GCP) & ML Governance',
        },
        deliverables: {
          pt: [
            'Serviços & Bancos no GCP',
            'Containerização com Docker',
            'Ciclo & Governança de Modelos',
          ],
          en: [
            'GCP Cloud Services & Databases',
            'Docker Containerization',
            'ML Lifecycle & Governance',
          ],
        },
        targetSection: '#portfolio',
      },
      {
        index: '04',
        title: {
          pt: 'Desenvolvimento Front-end',
          en: 'Front-end Engineering',
        },
        deliverables: {
          pt: [
            'React, Next.js & TypeScript',
            'Vue 3 & Angular',
            'Interfaces Criativas & Motion',
          ],
          en: [
            'React, Next.js & TypeScript',
            'Vue 3 & Angular',
            'Creative UI & Motion Design',
          ],
        },
        targetSection: '#portfolio',
      },
    ] satisfies ServiceItem[],
  },

  textTicker: {
    pt: [
      { text: 'SISTEMAS MULTIAGENTE', outline: false },
      { text: 'ENGENHARIA DE DADOS', outline: true },
      { text: 'GOOGLE ADK & LLMS', outline: false },
      { text: 'CLOUD GCP & FULL-STACK', outline: true },
    ],
    en: [
      { text: 'MULTI-AGENT SYSTEMS', outline: false },
      { text: 'DATA ENGINEERING', outline: true },
      { text: 'GOOGLE ADK & LLMS', outline: false },
      { text: 'GCP CLOUD & FULL-STACK', outline: true },
    ],
  },

  trajectory: {
    tag: {
      pt: '// TRAJETÓRIA & FORMAÇÃO',
      en: '// TRAJECTORY & EDUCATION',
    },
    title: {
      pt: 'EXPERIÊNCIA EM PRODUÇÃO',
      en: 'PRODUCTION EXPERIENCE',
    },
    items: [
      {
        id: '2rp-assistant',
        period: '10/2026 – Atual',
        type: { pt: 'Experiência Profissional', en: 'Work Experience' },
        role: {
          pt: 'Engenheiro de Dados Assistente',
          en: 'Assistant Data Engineer',
        },
        organization: '2RP Net · Projeto Banco Digio',
        location: 'Brasil',
        current: true,
        description: {
          pt: 'Atuação na squad responsável pela aplicação de Gestão Eletrônica de Documentos (GED) do Banco Digio, conectando backend, segurança e nuvem.',
          en: 'Member of the squad building Banco Digio’s Electronic Document Management (GED) platform, connecting backend services, security, and cloud.',
        },
        highlights: {
          pt: [
            'Desenvolvimento backend e integrações com plataformas externas e SSO.',
            'Atuação transversal em frontend e banco de dados no Google Cloud Platform (GCP).',
          ],
          en: [
            'Backend development and integrations with external platforms and SSO.',
            'Cross-functional contributions across frontend and GCP databases.',
          ],
        },
      },
      {
        id: '2rp-intern',
        period: '02/2026 – 10/2026',
        type: { pt: 'Estágio & Efetivação Rápida', en: 'Internship & Fast Promotion' },
        role: {
          pt: 'Estagiário de TI (GenAI & Dados)',
          en: 'IT Intern (GenAI & Data)',
        },
        organization: '2RP Net',
        location: 'Brasil',
        description: {
          pt: 'Imersão prática em Python, GCP, fundamentos de ML/LLMs e desenvolvimento de sistemas multiagente com Google ADK.',
          en: 'Hands-on immersion in Python, GCP, ML/LLM fundamentals, and multi-agent engineering with Google ADK.',
        },
        highlights: {
          pt: [
            'Desenvolvimento em equipe do sistema multiagente de análise de crédito.',
            'Ingresso no projeto do Banco Digio ainda durante o estágio e efetivação em menos de 1 ano.',
          ],
          en: [
            'Co-developed the multi-agent credit risk analysis system.',
            'Joined the Banco Digio project while still an intern and promoted to full-time in under 1 year.',
          ],
        },
      },
      {
        id: 'senai-ads',
        period: '2026 – 12/2027 (Prev.)',
        type: { pt: 'Formação Acadêmica', en: 'Education' },
        role: {
          pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          en: 'Associate Degree in Systems Analysis & Development',
        },
        organization: 'SENAI-SP',
        location: 'Sorocaba / SP',
        description: {
          pt: '2º semestre em andamento com forte foco prático em projetos integradores reais, liderança técnica e engenharia de software.',
          en: 'Currently in the 2nd semester with strong hands-on focus on real integrative projects, technical leadership, and software engineering.',
        },
        highlights: {
          pt: [
            'Tech Leader na Plataforma de Treinamento e Governança de Modelos de ML.',
            'Liderança e desenvolvimento full-stack na Central de Manutenção 4.0 (Dilly Sports).',
          ],
          en: [
            'Tech Leader for the ML Model Training & Governance Platform.',
            'Team lead and full-stack developer for Maintenance Central 4.0 (Dilly Sports).',
          ],
        },
      },
    ] satisfies TrajectoryItem[],
  },

  testimonials: {
    tag: {
      pt: '// DEPOIMENTOS & RECONHECIMENTO',
      en: '// TESTIMONIALS & TRUST',
    },
    title: {
      pt: 'O QUE DIZEM SOBRE O MEU TRABALHO',
      en: 'WHAT PEOPLE SAY',
    },
    trustTitle: {
      pt: 'Empresas, projetos e tecnologias da minha jornada',
      en: 'Companies, projects & technologies from my journey',
    },
    trustLogos: [
      { name: '2RP Net', subtitle: { pt: 'Dados & GenAI', en: 'Data & GenAI' } },
      { name: 'Banco Digio', subtitle: { pt: 'Projeto GED', en: 'GED Project' } },
      { name: 'SENAI-SP', subtitle: { pt: 'ADS & Pesquisa', en: 'Systems Dev' } },
      { name: 'Dilly Sports', subtitle: { pt: 'Indústria 4.0', en: 'Industry 4.0' } },
      { name: 'Google ADK', subtitle: { pt: 'Multi-Agent', en: 'Multi-Agent' } },
      { name: 'Google Cloud', subtitle: { pt: 'Infraestrutura', en: 'Cloud Infra' } },
    ] satisfies TrustLogoItem[],
    items: [
      {
        id: 'testimonial-1',
        quote: {
          pt: 'Espaço reservado para recomendação de liderança ou colega da 2RP Net — destacando sua evolução rápida do estágio à efetivação no projeto Banco Digio, domínio de Python/GCP e entrega em sistemas multiagente.',
          en: 'Reserved space for a recommendation from a 2RP Net lead or teammate — highlighting your fast promotion from intern to full-time on the Banco Digio project, Python/GCP skills, and multi-agent delivery.',
        },
        author: 'Liderança / Squad 2RP Net',
        role: { pt: 'Recomendação (Substituir pelo LinkedIn)', en: 'Recommendation (Replace from LinkedIn)' },
        company: '2RP Net · Banco Digio',
        isPlaceholder: true,
      },
      {
        id: 'testimonial-2',
        quote: {
          pt: 'Espaço reservado para depoimento de colega de equipe ou docente do SENAI-SP — destacando sua atuação como Tech Leader no projeto Synapse (Google ADK) e na plataforma de governança de ML.',
          en: 'Reserved space for a SENAI-SP teammate or professor testimonial — highlighting your Tech Leader role on the Synapse (Google ADK) and ML Governance projects.',
        },
        author: 'Equipe / Mentoria SENAI-SP',
        role: { pt: 'Recomendação Acadêmica (Substituir)', en: 'Academic Recommendation (Replace)' },
        company: 'SENAI-SP',
        isPlaceholder: true,
      },
    ] satisfies TestimonialItem[],
  },

  contact: {
    tag: {
      pt: '// VAMOS CONVERSAR',
      en: '// GET IN TOUCH',
    },
    title: {
      pt: 'TEM UM PROJETO OU DESAFIO EM IA & DADOS?',
      en: 'HAVE AN AI & DATA PROJECT OR CHALLENGE?',
    },
    copiedFeedback: {
      pt: 'Copiado!',
      en: 'Copied!',
    },
    copyHint: {
      pt: 'Clique no e-mail acima para copiar',
      en: 'Click the email above to copy',
    },
    form: {
      firstName: { pt: 'Nome', en: 'First Name' },
      lastName: { pt: 'Sobrenome', en: 'Last Name' },
      email: { pt: 'Seu E-mail', en: 'Email Address' },
      subject: { pt: 'Assunto / Empresa', en: 'Subject / Company' },
      message: { pt: 'Conte sobre o projeto, vaga ou ideia...', en: 'Tell me about your project, role, or idea...' },
      submit: { pt: 'Enviar Mensagem', en: 'Send Message' },
      sending: { pt: 'Abrindo cliente de e-mail...', en: 'Preparing message...' },
      success: {
        pt: 'Mensagem pronta! Seu cliente de e-mail foi acionado ou você pode copiar gutucci23@gmail.com diretamente.',
        en: 'Ready! Your email client was triggered, or you can copy gutucci23@gmail.com directly.',
      },
    },
  },

  footer: {
    copyright: {
      pt: '© 2026 Gustavo Martinez Tucci. Construído com React, TypeScript & Framer Motion.',
      en: '© 2026 Gustavo Martinez Tucci. Built with React, TypeScript & Framer Motion.',
    },
    backToTop: {
      pt: 'Voltar ao Topo',
      en: 'Back to Top',
    },
  },
};
