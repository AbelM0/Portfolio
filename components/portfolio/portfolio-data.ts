export const projects = [
  {
    year: '2026',
    title: 'AI Meeting Intelligence System',
    type: 'AI Engineering',
    description:
      'A meeting workspace that turns long recordings into searchable transcripts, concise summaries, decisions, and accountable action items.',
    contribution:
      'Designed the end-to-end workflow across audio ingestion, transcription, post-processing, and structured extraction. Action items include validated owner, due date, and priority fields.',
    stack: ['Next.js', 'NestJS', 'Deepgram', 'Clerk'],
    image: '/MeetingInt.png',
    imageAlt: 'AI Meeting Intelligence System interface preview',
    githubUrl: 'https://github.com/AbelM0/AI-Meeting-Intelligence-System',
    liveUrl: 'https://ai-meeting-intelligence-system-web.vercel.app/',
    privateNote: null,
  },
  {
    year: '2026',
    title: 'AI Operations Assistant',
    type: 'Applied AI',
    description:
      'A bilingual assistant that helps Ethiopian small businesses understand invoices, receipts, PDFs, and everyday expenses.',
    contribution:
      'Built document ingestion, OCR, streaming chat, expense summaries, and grounded retrieval using PostgreSQL and pgvector.',
    stack: ['Next.js', 'Supabase', 'pgvector', 'Vercel AI SDK'],
    image: '/AiOps.png',
    imageAlt: 'AI Operations Assistant interface preview',
    githubUrl: 'https://github.com/AbelM0/ai-operations-assistant',
    liveUrl: 'https://ai-operations-assistant-psi.vercel.app/',
    privateNote: null,
  },
  {
    year: '2025',
    title: 'Women, Children & Youth Affairs Management System',
    type: 'Full-stack Engineering',
    description:
      'A government platform connecting adoption, complaints, applicant portals, care centers, and sensitive case workflows.',
    contribution:
      'Worked across seven specialized modules with role-based access, multilingual interfaces, audit logs, backups, and operational notifications.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL'],
    image: '/placeholder.svg',
    imageAlt: 'Placeholder preview for the AWCSA management system',
    githubUrl: null,
    liveUrl: null,
    privateNote: 'Private project. Currently in testing with no public deployment.',
  },
  {
    year: '2025',
    title: 'LearnLink',
    type: 'Full-stack Engineering',
    description:
      'A real-time learning platform with multi-channel workspaces, collaborative chat, file sharing, and virtual classrooms.',
    contribution:
      'Implemented Socket.io messaging, LiveKit video and audio, Prisma data models, and NextAuth v5 authorization.',
    stack: ['Next.js 15', 'NeonDB', 'Socket.io', 'LiveKit', 'Prisma'],
    image: '/learnlink.png',
    imageAlt: 'LearnLink interface preview',
    githubUrl: 'https://github.com/AbelM0/LearnLink',
    liveUrl: 'https://learn-link-9hun.vercel.app/',
    privateNote: null,
  },
] as const;

export const skillGroups = [
  ['Languages', 'TypeScript, JavaScript, Python, SQL, Java, C++'],
  ['Applied AI', 'RAG, Vercel-AI SDK, Langsmith, LangGraph, Deepgram'],
  ['Frontend', 'React 19, Next.js 15, Tailwind CSS, Motion, Shadcn UI'],
  ['Backend', 'NestJS, Node.js, PostgreSQL, Supabase, pgvector, Prisma'],
  ['Tools', 'Git, GitHub, Docker, Vercel, Postman'],
] as const;
