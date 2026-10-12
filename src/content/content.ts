/**
 * PAGE CONTENT
 * All copy lives here so it can be edited without touching components.
 * Anything in [SQUARE BRACKETS] is a placeholder or needs confirming with Nahim.
 *
 * Sources used for the facts in this file:
 * - East London Advertiser (MBE interview; British Citizen Award article)
 * - Poplar HARCA news (MBE announcement)
 * - UCL Bartlett news and student Q&A
 * - Aziz Foundation scholar profile
 * - London Youth "Our People"
 * - The Young Foundation (Community Advisory Board)
 * - CareKnowledge "Violence Free Futures" webinar
 * - Nahim's own LinkedIn posts
 */

// ───────────────────────────────────────────────────────────── HERO
export const hero = {
  headline: 'Nobody is hard to reach.',
  // Alternatives considered: "Words can crush you. Or they can become fuel." / "Just a youth worker. Exactly."
  name: 'Dr Nahim Ahmed MBE',
  descriptor: 'Keynote speaker. Youth worker. Born and raised in Tower Hamlets.',
  primaryCta: { label: 'Book Nahim to speak', href: '#book' },
  secondaryCta: { label: 'My story', href: '#story' },
  scrollHint: 'Scroll',
};

// ───────────────────────────────────────────────────────────── INTRO
export const intro = {
  lead: "I'm Nahim. I've been a youth worker in Tower Hamlets for over fifteen years, and I'm still one now.",
  paragraphs: [
    "I grew up on the estates I work on. I know what it's like to be written off at school, to lose friends, and to have no idea what you're for. I also know what happens when one person decides to show up for you anyway.",
    "These days I run youth and community engagement for Poplar HARCA and its youth service, Spotlight, and I speak to conferences, leadership teams, schools and youth workers about what I've learned along the way. The MBE and the doctorate are nice. The work is the point.",
  ],
  pull: "I don't just talk about purpose. I've seen what happens when people live without it.",
};

// ───────────────────────────────────────────────────────────── STORY
export type StoryChapter = {
  id: string;
  kicker: string; // small line above
  statement: string; // the big line
  body: string[]; // short paragraphs
  image?: { src: string; alt: string; caption?: string };
};

export const story = {
  heading: 'Where I started, and what changed.',
  intro:
    "This isn't a rags-to-riches story. It's a story about what happens when a young person gets the right people around them — and what he does with it afterwards.",
  chapters: [
    {
      id: 'poplar',
      kicker: 'Poplar, East London',
      statement: 'I was one of the young people I now work with.',
      body: [
        'I grew up in Tower Hamlets, one of the most deprived boroughs in the country. Crime, gang violence and youth violence weren\u2019t things I read about. They were the backdrop.',
        'Some of my closest friends didn\u2019t make it out. Some went to prison. Some we lost to mental health. None of them had the right support at the right time.',
      ],
      image: {
        src: '/images/story-poplar.jpg',
        alt: '[STORY PHOTO 1] Nahim on the streets of Poplar, East London',
        caption: 'Poplar. The same streets, then and now.',
      },
    },
    {
      id: 'school',
      kicker: 'School',
      statement: '“You won\u2019t even have the skills to be a dustbin cleaner.”',
      body: [
        'That\u2019s what a teacher told me, in front of my classmates, as I came to the end of my A Levels. My GCSEs had already gone badly. I\u2019d failed, miserably, by my own account.',
        'It wasn\u2019t feedback. It was a verdict. I carried it for a long time — not because I believed it, but because I couldn\u2019t understand why someone whose job was to inspire would choose to do the opposite.',
      ],
    },
    {
      id: 'turning-point',
      kicker: 'The wake-up call',
      statement: 'Then I lost a close friend to reckless driving. Everything changed.',
      body: [
        'I went back to college and retook my GCSEs while working three jobs. In 2009 I started a degree in Youth and Community Work at the University of East London.',
        'I wanted to build a better future. Not just for me — for the people around me, and especially for the young people coming up behind me.',
      ],
      image: {
        src: '/images/story-turning-point.jpg',
        alt: '[STORY PHOTO 2] Nahim as a young youth worker',
      },
    },
    {
      id: 'the-work',
      kicker: 'The work',
      statement: 'Fifteen years on the frontline. Most of it on the streets.',
      body: [
        'Youth services are the gateway for young people who don\u2019t know what\u2019s out there — mental health support, training, jobs, someone to talk to. If we don\u2019t go to them, most will never come to us.',
        'So I went to them. Detached youth work on the corners and estates of Poplar, often late at night and often in my own time. Building trust one ordinary moment at a time: showing up, remembering names, keeping promises.',
      ],
      image: {
        src: '/images/story-the-work.jpg',
        alt: '[STORY PHOTO 3] Nahim with young people at Spotlight youth service',
        caption: 'Spotlight, Poplar HARCA\u2019s youth service.',
      },
    },
    {
      id: 'recognition',
      kicker: 'Eid, 2021',
      statement: 'I found out about the MBE in the mosque, straight after Eid prayers.',
      body: [
        'For services to disadvantaged young people in Tower Hamlets. A borough I was told I\u2019d amount to nothing in.',
        'Since then: a master\u2019s at UCL on a full scholarship, completed while working full time. An honorary doctorate in Youth and Community Work. A Lifetime Achievement Award. Four universities, from someone who once had no GCSEs to speak of.',
      ],
      image: {
        src: '/images/story-mbe.jpg',
        alt: '[STORY PHOTO 4] Nahim receiving his MBE',
      },
    },
    {
      id: 'now',
      kicker: 'Now',
      statement: 'The words that were meant to crush me became fuel.',
      body: [
        'I still work in Tower Hamlets. I still do the work. And now I get to stand in front of rooms full of people and tell them what I know for certain: nobody is hard to reach. We just have to be the ones who go.',
      ],
    },
  ] as StoryChapter[],
  timeline: [
    { year: 'Early years', label: 'Grows up in Poplar, Tower Hamlets' },
    { year: 'School', label: 'Fails GCSEs; told he\u2019ll never amount to anything' },
    { year: 'Turning point', label: 'Loses a close friend. Retakes GCSEs while working three jobs' },
    { year: '2009', label: 'Starts BA (Hons) Youth and Community Work, University of East London' },
    { year: '[YEAR]', label: 'British Citizen Award, presented at the Houses of Parliament' },
    { year: '2021', label: 'MBE, Queen\u2019s Birthday Honours' },
    { year: '2023', label: 'Completes MSc at UCL as an Aziz Foundation scholar' },
    { year: '[YEAR]', label: 'Honorary Doctorate in Youth and Community Work' },
    { year: 'Now', label: 'Head of Strategic Engagement (Youth & Community), Poplar HARCA / Spotlight' },
  ],
};

// ───────────────────────────────────────────────────────────── ABOUT
export const about = {
  heading: 'The professional bit.',
  intro:
    'Nahim is a JNC-qualified youth worker and senior leader with over fifteen years across the voluntary, public and private sectors, all of it focused on young people and communities in East London.',
  columns: [
    {
      title: 'Current role',
      items: [
        'Head of Strategic Engagement (Youth & Community), Poplar HARCA and Spotlight — Poplar HARCA\u2019s award-winning youth service in Tower Hamlets. He leads youth engagement and empowerment teams and the programmes they deliver.',
      ],
    },
    {
      title: 'Boards and roles',
      items: [
        'Community Advisory Board, The Young Foundation',
        'London Youth — [ROLE TO CONFIRM: listed as Trustee on existing draft site]',
        'Aziz Foundation Scholar [and Ambassador — to confirm]',
        'Guest lecturer, University of East London (Youth and Community Work)',
        '[Associate Fellow, Royal Commonwealth Society — to confirm]',
      ],
    },
    {
      title: 'Education',
      items: [
        'Honorary Doctorate (DSc h.c.), Youth and Community Work — [INSTITUTION AND YEAR TO CONFIRM]',
        'MSc Strategic Management of Projects, UCL Bartlett — Aziz Foundation scholarship',
        'PGDip Law and Community Leadership — [INSTITUTION TO CONFIRM]',
        'BA (Hons) Youth and Community Work, University of East London (JNC)',
      ],
    },
    {
      title: 'Recognition',
      items: [
        'MBE, Queen\u2019s Birthday Honours 2021 — services to disadvantaged young people in Tower Hamlets',
        'Honorary Doctorate in Youth and Community Work',
        'Lifetime Achievement Award — [AWARDING BODY TO CONFIRM]',
        'British Citizen Award — for voluntary service to the community',
      ],
    },
  ],
  portrait: { src: '/images/about-portrait.jpg', alt: '[NAHIM PORTRAIT] Dr Nahim Ahmed MBE' },
};

// ───────────────────────────────────────────────────────────── SPEAKING
export const speaking = {
  heading: 'Street corners and conference stages.',
  sub: 'He speaks the same way on both.',
  paragraphs: [
    'Most speakers on youth, leadership or resilience have either lived it or studied it. Nahim has done both, and he\u2019s still doing the work on a Tuesday night in Poplar.',
    'That\u2019s what changes a room. There\u2019s no gap between the story and the storyteller. Young people spot that instantly. So do senior leaders, once they\u2019ve stopped expecting a motivational speech.',
    'He\u2019s spoken alongside the Mayor of London, in lecture theatres, at national youth-sector events and in school halls. He adapts to the room, but he doesn\u2019t change the message.',
  ],
  topicsHeading: 'What he talks about',
  topics: [
    {
      title: 'Youth work',
      blurb:
        'What it actually is, why it\u2019s the most undervalued profession in the country, and what the rest of the world could learn from it.',
    },
    {
      title: 'Young people',
      blurb:
        'Why “hard to reach” is usually a description of the institution, not the young person. And what reaching them really takes.',
    },
    {
      title: 'Leadership',
      blurb:
        'Leadership isn\u2019t a title. It\u2019s how you show up when nobody\u2019s watching, and whether you reach back once you\u2019ve made it forward.',
    },
    {
      title: 'Resilience and wellbeing',
      blurb:
        'For the people who pour everything into others. How to keep going in high-pressure work without burning out, from someone who nearly did.',
    },
    {
      title: 'Purpose',
      blurb:
        'Nahim has seen what happens to people who live without it. This is about finding yours, and helping others find theirs.',
    },
    {
      title: 'Community and social change',
      blurb:
        'Building the village. What sustainable change looks like in places affected by poverty, violence and deprivation, from someone who grew up in one.',
    },
    {
      title: 'Opportunity and inclusion',
      blurb:
        'Who gets opportunities and who doesn\u2019t. What it took to get from no GCSEs to four universities, and why it shouldn\u2019t have been that hard.',
    },
  ],
  image: { src: '/images/speaking-stage.jpg', alt: '[SPEAKING PHOTO] Nahim speaking on stage' },
};

// ───────────────────────────────────────────────────────────── KEYNOTE
export const keynote = {
  kicker: 'Signature keynote',
  title: 'You\u2019re Just a Youth Worker',
  tagline: 'And that\u2019s exactly the point.',
  duration: '45–60 minutes',
  origin: [
    'Every youth worker has heard some version of it. From a parent, a partner, a professional in a suit, sometimes from a colleague. Just a youth worker.',
    '[KEYNOTE ORIGIN STORY — a short paragraph from Nahim on the specific moment or conversation that sparked this talk.]',
  ],
  about: [
    'This keynote takes that line apart. Nahim shows how the “just a youth worker” he was told he was became a catalyst for systemic change in one of the country\u2019s most deprived boroughs, and makes the case that youth work is one of the most important leadership roles in society.',
    'It\u2019s personal, it\u2019s direct, and it\u2019s not just for youth workers. Anyone who has been underestimated, or who leads people who are, will recognise themselves in it.',
  ],
  takeaways: [
    'A different way of seeing the people at the bottom of your organisation chart',
    'What trust actually looks like, and why it\u2019s built in ordinary moments',
    'How to lead from lived experience without being defined by it',
    'Why “hard to reach” is a mirror, not a label',
    'Practical ways to look after the people who look after everyone else',
  ],
  idealFor: ['Youth and community organisations', 'Conferences', 'Education and school leaders', 'Local authorities and housing associations', 'Leadership teams'],
  cta: { label: 'Book this keynote', href: '#book' },
  media: {
    poster: '/images/keynote-still.jpg', // [KEYNOTE PHOTO / VIDEO STILL]
    alt: '[KEYNOTE PHOTO] Nahim delivering “You\u2019re Just a Youth Worker”',
    youtubeId: '', // [KEYNOTE CLIP YOUTUBE ID] — leave empty to show the photo only
  },
  otherKeynotes: [
    {
      title: 'Leading With Purpose',
      sub: 'Turning lived experience into leadership',
      blurb:
        'From the estates of East London to an MBE. Why lived experience is an advantage, not a limitation, and how to lead in a way that lifts others as you climb.',
      idealFor: 'Leaders, managers, aspiring professionals, young people',
    },
    {
      title: 'Wellness & Resilience in Youth Professions',
      sub: 'Who looks after the people who look after everyone else?',
      blurb:
        'The emotional reality of high-pressure, people-facing work, and practical ways to protect your wellbeing and keep your passion without burning out.',
      idealFor: 'Youth workers, social workers, educators, community leaders',
    },
  ],
};

// ───────────────────────────────────────────────────────────── SERVICES
export const services = {
  heading: 'Other ways to work with Nahim',
  items: [
    {
      title: 'Keynote speaking',
      blurb: 'For conferences, award evenings, staff days and large audiences. 20 to 60 minutes, built around your event.',
    },
    {
      title: 'Panels and conversations',
      blurb: 'In-conversation formats, panels and Q&A. Good for events that want something less polished and more honest.',
    },
    {
      title: 'Workshops',
      blurb: 'Half-day and full-day sessions for youth workers, frontline teams and leaders. Practical, not theoretical.',
    },
    {
      title: 'Schools, colleges and universities',
      blurb: 'Assemblies, guest lectures and student sessions. Nahim has lectured at UEL and spoken in Tower Hamlets schools.',
    },
    {
      title: 'Advisory',
      blurb: 'For organisations working with young people, communities or place-based change. Strategy, engagement and what actually works on the ground.',
    },
  ],
};

// ───────────────────────────────────────────────────────────── CREDIBILITY
export const credibility = {
  heading: 'For the record.',
  intro: 'Not to show off. Just so you know he knows what he\u2019s talking about.',
  stats: [
    { value: '15+', label: 'years as a youth worker in Tower Hamlets' },
    { value: '4', label: 'universities graduated from, after leaving school with no GCSEs to speak of' },
    { value: '2', label: 'of the country\u2019s highest honours: an MBE and an honorary doctorate' },
    { value: '[NUMBER]', label: 'talks, keynotes and workshops delivered' },
  ],
  honours: [
    { title: 'MBE', detail: 'Queen\u2019s Birthday Honours, 2021' },
    { title: 'Honorary Doctorate', detail: 'Youth and Community Work' },
    { title: 'Lifetime Achievement Award', detail: '[Awarding body to confirm]' },
    { title: 'British Citizen Award', detail: 'Presented at the Houses of Parliament' },
    { title: 'Aziz Foundation Scholar', detail: 'Full scholarship, MSc at UCL' },
  ],
  organisationsHeading: 'Organisations he\u2019s worked with or been part of',
  organisations: [
    'Poplar HARCA',
    'Spotlight Youth Service',
    'London Youth',
    'The Young Foundation',
    'University College London',
    'University of East London',
    'The Aziz Foundation',
    'London Violence Reduction Unit / MyEnds',
    '[ORGANISATION]',
    '[ORGANISATION]',
  ],
};

// ───────────────────────────────────────────────────────────── IMPACT
export type CaseStudy = {
  title: string;
  context: string;
  challenge: string;
  what: string;
  happened: string;
  learned: string;
  image?: { src: string; alt: string };
  placeholder?: boolean;
};

export const impact = {
  heading: 'The work, not the numbers.',
  intro:
    'Awards are what other people notice. This is what Nahim actually does, and who it\u2019s for.',
  areas: [
    {
      title: 'Detached youth work',
      blurb:
        'Going to the corners and estates where young people actually are, at the hours they\u2019re there. Often in his own time. This is where most of the trust gets built.',
    },
    {
      title: 'Employment and training',
      blurb:
        'A big part of Nahim\u2019s frontline work has been getting under-25s onto courses and into jobs — sometimes by walking them through the door himself.',
    },
    {
      title: 'Spotlight',
      blurb:
        'Poplar HARCA\u2019s award-winning youth service for 11 to 19 year olds in Tower Hamlets. Nahim went from engagement manager to leading strategic engagement across youth and community.',
    },
    {
      title: 'Violence reduction',
      blurb:
        'Spotlight is part of the MyEnds consortium supported by London\u2019s Violence Reduction Unit. Nahim has spoken alongside the Mayor of London on the funding frontline youth work needs.',
    },
    {
      title: 'Prevention and awareness',
      blurb:
        'Workshops with young people on the risks in front of them, from nitrous oxide to anti-social behaviour, delivered where they are rather than where it\u2019s convenient.',
    },
    {
      title: 'Speaking up for the sector',
      blurb:
        'On panels, in the press and in webinars with policymakers, making the case that youth work has been underfunded and undervalued for a decade, and what to do about it.',
    },
  ],
  caseStudiesHeading: 'A few examples',
  caseStudies: [
    {
      title: 'One course, one job',
      context: 'Employment and training, Poplar',
      challenge:
        'A young man in Poplar with no clear route into work, and a four-day security industry course he was unlikely to finish on his own.',
      what:
        'Nahim went out of his way to get him through it — the practical stuff, the encouragement, the showing up.',
      happened: 'He completed the course and got a job. He\u2019s now looking ahead rather than back.',
      learned:
        'It\u2019s rarely the course that\u2019s the barrier. It\u2019s having one adult who will see it through with you.',
      image: { src: '/images/case-1.jpg', alt: '[CASE STUDY PHOTO]' },
    },
    {
      title: '[CASE STUDY TITLE]',
      context: '[Programme or place]',
      challenge: '[The challenge]',
      what: '[What Nahim did]',
      happened: '[What happened]',
      learned: '[What was learned]',
      placeholder: true,
    },
    {
      title: '[CASE STUDY TITLE]',
      context: '[Programme or place]',
      challenge: '[The challenge]',
      what: '[What Nahim did]',
      happened: '[What happened]',
      learned: '[What was learned]',
      placeholder: true,
    },
  ] as CaseStudy[],
};

// ───────────────────────────────────────────────────────────── MEDIA
export type MediaItem = {
  type: 'video' | 'article' | 'podcast' | 'talk';
  title: string;
  source: string;
  date?: string;
  href?: string;
  youtubeId?: string; // if set, renders an embeddable player
  image?: { src: string; alt: string };
  featured?: boolean;
  placeholder?: boolean;
};

export const media = {
  heading: 'Watch, listen, read.',
  intro: 'Clips, interviews and articles. More added as they happen.',
  items: [
    {
      type: 'video',
      title: 'Nahim on Youth and Community Work',
      source: 'University of East London',
      date: '2022',
      youtubeId: 'z__Y7oAM6Y0',
      featured: true,
    },
    {
      type: 'video',
      title: '[SPEAKING CLIP TITLE]',
      source: '[Event]',
      youtubeId: '',
      image: { src: '/images/media-clip.jpg', alt: '[SPEAKING CLIP STILL]' },
      placeholder: true,
    },
    {
      type: 'talk',
      title: 'Building the villages to enable systemic resilience for our children and their communities',
      source: 'CareKnowledge — Violence Free Futures',
      date: 'November 2024',
      href: 'https://www.careknowledge.com/resources/special-reports/2024/nov/violence-free-futures-replay',
    },
    {
      type: 'article',
      title: 'Tower Hamlets youth worker on lack of funding for vital services',
      source: 'East London Advertiser',
      date: '2021',
      href: 'https://www.eastlondonadvertiser.co.uk/news/tower-hamlets-nahim-ahmed-mbe-8085406',
    },
    {
      type: 'article',
      title: 'Nahim Ahmed on positive, sustainable change',
      source: 'UCL Bartlett — student Q&A',
      href: 'https://www.ucl.ac.uk/bartlett/study/student-and-alumni-profiles/nahim-ahmed',
    },
    {
      type: 'article',
      title: 'Spotlight youth worker awarded an MBE',
      source: 'Poplar HARCA',
      date: 'June 2021',
      href: 'https://www.poplarharca.co.uk/about-us/news/article/the-queens-birthday-honours-local-spotlight-youth-worker-with-an-mbe/',
    },
    {
      type: 'podcast',
      title: '[PODCAST EPISODE TITLE]',
      source: '[Podcast name]',
      href: '',
      placeholder: true,
    },
  ] as MediaItem[],
};

// ───────────────────────────────────────────────────────────── TESTIMONIALS
export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  organisation?: string;
  photo?: { src: string; alt: string };
  featured?: boolean;
  placeholder?: boolean;
};

export const testimonials = {
  heading: 'What people say afterwards.',
  // NOTE: No verified testimonials were available at build time.
  // The testimonial on the previous draft site was a word-swapped copy of a testimonial
  // about another speaker and has NOT been used. Replace the placeholders below with real ones.
  items: [
    {
      quote:
        '[FEATURED TESTIMONIAL — a real quote from an event organiser or attendee. Two or three sentences is ideal.]',
      name: '[Name]',
      role: '[Job title]',
      organisation: '[Organisation]',
      photo: { src: '/images/testimonial-1.jpg', alt: '[Photo of person]' },
      featured: true,
      placeholder: true,
    },
    {
      quote: '[TESTIMONIAL]',
      name: '[Name]',
      role: '[Job title]',
      organisation: '[Organisation]',
      placeholder: true,
    },
    {
      quote: '[TESTIMONIAL]',
      name: '[Name]',
      role: '[Job title]',
      organisation: '[Organisation]',
      placeholder: true,
    },
    {
      quote: '[TESTIMONIAL]',
      name: '[Name]',
      role: '[Job title]',
      organisation: '[Organisation]',
      placeholder: true,
    },
  ] as Testimonial[],
};

// ───────────────────────────────────────────────────────────── THOUGHTS
export type Thought = {
  title: string;
  excerpt: string;
  source: string; // e.g. LinkedIn
  href: string;
  date?: string;
  size?: 'large' | 'small';
};

export const thoughts = {
  heading: 'What he thinks about.',
  intro: 'Nahim writes most weeks on LinkedIn, mostly about youth work, leadership and looking after yourself. A few recurring themes:',
  items: [
    {
      title: 'Presence, not perfection',
      excerpt:
        'In his first week as a youth worker he thought he needed all the answers. He didn\u2019t. Trust is built in ordinary moments: showing up, remembering names, keeping promises. Young people won\u2019t remember every activity. They\u2019ll remember how you made them feel.',
      source: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nahimahmedmbe', // [POST URL]
      size: 'large',
    },
    {
      title: 'Nobody is hard to reach',
      excerpt:
        'The phrase gets pinned on young people. In Nahim\u2019s experience it usually describes the institution: hard to reach, and almost impossible to trust.',
      source: 'Talk at BLOC, Queen Mary University of London',
      href: 'https://www.linkedin.com/in/nahimahmedmbe', // [POST URL]
    },
    {
      title: 'Words as fuel',
      excerpt:
        'On the teacher who told him he\u2019d never amount to anything, and the choice every person has about what to do with the words other people give them.',
      source: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nahimahmedmbe', // [POST URL]
    },
    {
      title: 'Don\u2019t neglect yourself while pouring into others',
      excerpt:
        'Looking after yourself isn\u2019t selfish. For a youth worker it\u2019s part of the job. Nahim on the weight he lost, and the stress and habits that went with it.',
      source: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nahimahmedmbe', // [POST URL]
    },
  ] as Thought[],
  cta: { label: 'Follow Nahim on LinkedIn', href: 'https://www.linkedin.com/in/nahimahmedmbe' },
};

// ───────────────────────────────────────────────────────────── FAQ
export const faq = {
  heading: 'Questions people usually ask',
  items: [
    {
      q: 'What kind of events does Nahim speak at?',
      a: 'Conferences, staff and leadership days, award evenings, school and university sessions, community events and panels. He\u2019s spoken to rooms of twenty and rooms of several hundred.',
    },
    {
      q: 'Does he tailor the talk?',
      a: 'Yes. He\u2019ll want a conversation with you first about who\u2019s in the room and what you\u2019re hoping they leave with. The core story stays the same; the emphasis changes.',
    },
    {
      q: 'Can he do virtual events?',
      a: 'Yes, keynotes and panels can be delivered online. In-person is his preference where possible, for obvious reasons.',
    },
    {
      q: 'What does it cost?',
      a: 'It depends on the format, length, location and the type of organisation. Charities, schools and youth organisations are treated differently to corporates. Use the form and he\u2019ll come back with a straight answer.',
    },
    {
      q: 'Where is he based?',
      a: 'London. He travels across the UK and is happy to discuss events further afield.',
    },
  ],
};

// ───────────────────────────────────────────────────────────── BOOK
export const book = {
  heading: 'Tell me about your event.',
  intro:
    'Fill this in and I\u2019ll get back to you personally. If you\u2019re not sure about some of the details yet, that\u2019s fine — leave them blank.',
  emailLine: 'Prefer email?',
  successTitle: 'Got it. Thank you.',
  successBody:
    'I\u2019ll be in touch within a few days. If it\u2019s urgent, email me directly.',
  submitLabel: 'Send enquiry',
  sendingLabel: 'Sending…',
  errorBanner: 'Something went wrong sending that. Please try again, or email me directly.',
  eventTypes: [
    'Conference keynote',
    'Staff or leadership day',
    'Panel or in-conversation',
    'Workshop',
    'School, college or university',
    'Community event',
    'Podcast or media',
    'Advisory',
    'Something else',
  ],
};

// ───────────────────────────────────────────────────────────── FINAL CTA
export const finalCta = {
  line1: 'Nobody remembers the slides.',
  line2: 'They remember how the room felt.',
  cta: { label: 'Book Nahim', href: '#book' },
};

// ───────────────────────────────────────────────────────────── FOOTER
export const footer = {
  blurb: 'Keynote speaker and youth work leader. Born, raised and still working in Tower Hamlets.',
  links: [
    { label: 'Story', href: '#story' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Impact', href: '#impact' },
    { label: 'Media', href: '#media' },
    { label: 'Book Nahim', href: '#book' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};
