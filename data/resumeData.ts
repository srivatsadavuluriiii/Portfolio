import { ResumeType } from '@/contexts/ResumeContext';

export interface Project {
  title: string;
  description: string;
  role: string;
  year: string;
  slug: string;
  image?: string;
  outcome?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeData {
  hero: {
    tagline: string;
    mainText: string[];
    description: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  about: {
    title: string;
    bio: string[];
  };
  principles: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

// Wireless/FSO Resume Data (Current)
const wirelessResume: ResumeData = {
  hero: {
    tagline: 'Research Engineer & Developer',
    mainText: ['Interests in optical', 'communications and', 'beyond 5G networks.'],
    description: 'Exploring Free Space Optical communications and 5G-beyond networks through AI-assisted signal processing and simulation frameworks.',
  },
  projects: [
    {
      title: 'BeamLabs: Optical Light Beam Modeling Suite',
      description: 'Designed an Object-Oriented MATLAB library to model 14 optical beam types for ongoing and future research in Quantum Optics and RF communication systems.',
      role: 'Research Developer',
      year: 'Dec 2024 — Mar 2025',
      slug: 'beamlabs',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
      outcome: 'Improved eigen-mode analysis speeds by 30%',
    },
    {
      title: 'OAM-Multiplexed Beam Recovery via Turbulent Channel using Deep Learning',
      description: 'Developed a ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images, aiming to eliminate the need for wavefront sensors, lowering link complexity by 40%.',
      role: 'Research Engineer',
      year: 'Jan 2025 — Aug 2025',
      slug: 'oam-beam-recovery',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      outcome: 'Reduced Bit Error Rate (BER) by 20%',
    },
    {
      title: 'Python-informed Mode Switching RL Framework for 5G-beyond Network Targets',
      description: 'Developed a physics-aware RL framework complying with 5G-beyond KPI targets, optimally switching OAM modes to current environment and signal conditions, achieving sub-0.1 ms latency.',
      role: 'Research Engineer',
      year: 'Oct 2025 — Present',
      slug: 'rl-5g-framework',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      outcome: '80+% prediction accuracy across scenarios',
    },
    {
      title: '6G OAM-THz Channel Dataset: ITU-R IMT-2030 Compliant',
      description: 'Published the first physics-based dataset with 250k+ realistic samples for OAM beam communications at sub-Terahertz/mmWave frequencies (300-600 GHz).',
      role: 'Research Contributor',
      year: 'Aug 2025',
      slug: '6g-dataset',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      outcome: 'Published on IEEE Dataport',
    },
  ],
  experience: [
    {
      role: 'Senior Software Engineering Intern - iOS Development',
      company: 'Chamberly AB',
      period: 'Dec 2023 — Sep 2024',
      description: 'Optimized app performance and navigation flow, reducing user steps by 27% and latency by 12%. Structured backend systems for reliable Apple Push Notifications, increasing user retention by 22%. Integrated feature updates in an Agile environment, contributing to a 19% increase in Monthly Active Users (MAU).',
    },
    {
      role: 'Summer Research Assistant',
      company: 'VIT Wireless and Communication Lab',
      period: 'May 2025 — July 2025',
      description: 'Validated fundamental Wireless and Mobile Communication (WMC) concepts through lab experiments, focusing on signal propagation models and modulation techniques. Spearheaded research synthesis for optical communication studies with international research teams to align simulation frameworks and validate results.',
    },
  ],
  skills: [
    { category: 'RF & Simulation Tools', items: ['Cadence Virtuoso', 'Cadence AWR', 'LTSpice', 'ModelSim', 'NI Multisim', 'NetSim', 'Optiwave', 'MATLAB'] },
    { category: 'Languages', items: ['Python', 'Java', 'R', 'MATLAB', 'Embedded C', 'C++', 'Verilog HDL', 'Swift', 'UIKit', 'Assembly'] },
    { category: 'Core Domains', items: ['Free Space Optical Communications (FSO)', '5G-beyond Networks', 'Signal Processing', 'Machine Learning', 'AI', 'Deep Learning'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'Git', 'CI/CD', 'Jenkins', 'AWS', 'GCP'] },
  ],
  about: {
    title: 'Final-year Electronics and Communication Engineering student researching Free Space Optical communications and beyond 5G networks.',
    bio: [
      "I'm pursuing proficiency in Free Space Optical (FSO) communications and Telecommunication Networks, currently exploring opportunities in MATLAB/Python-based simulation frameworks using AI-assisted signal processing for OAM-enabled beyond 5G wireless development.",
      'My research focuses on physics-informed machine learning approaches that bridge simulation and reality. I develop deep learning models for signal recovery, reinforcement learning frameworks for network optimization, and comprehensive datasets that advance the field of optical and wireless communications.',
      'Currently studying at Vellore Institute of Technology, expected to graduate in August 2026. I\'m eager to learn from industry experts and contribute to solving real-world problems in telecommunications and optical communications.',
    ],
  },
  principles: [
    {
      number: '01',
      title: 'Physics-informed approaches',
      description: 'Every simulation and model respects the underlying principles of electromagnetic propagation. I prioritize accuracy and physical realism over computational convenience.',
    },
    {
      number: '02',
      title: 'Simulation-to-reality bridge',
      description: 'Research should translate to practical applications. I focus on reducing the gap between theoretical models and real-world deployment in wireless systems.',
    },
    {
      number: '03',
      title: 'AI-assisted signal processing',
      description: 'Combining deep learning with classical signal processing techniques to solve complex problems in optical and wireless communications.',
    },
  ],
};

// AI/ML SDE Resume Data
const aiMlResume: ResumeData = {
  hero: {
    tagline: 'Software Engineer & ML Researcher',
    mainText: ['Building intelligent', 'systems and scalable', 'solutions.'],
    description: 'Developing machine learning models and software systems that solve real-world problems through AI-driven innovation and enterprise-grade architecture.',
  },
  projects: [
    {
      title: 'Flux: AI-Powered Fintech Ecosystem',
      description: 'Pioneered Flux, a SwiftUI expense ecosystem integrating AI (Google Gemini 2.5 Flash), blockchain transparency, and IoT automation—architecting India\'s first comprehensive fintech platform.',
      role: 'Lead Developer',
      year: 'Fall 2024 — Ongoing',
      slug: 'flux-fintech',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      outcome: 'Sub-200ms response times, 100K+ concurrent user scalability',
    },
    {
      title: 'Stock Price Prediction with Geopolitical Risks',
      description: 'Built a stock prediction model using StockNet (88 stocks, 2014-16) and the GPR Index, integrating price trends, tweets, and GPR factors. Enhanced market modeling by incorporating EIA crude oil price data.',
      role: 'ML Engineer',
      year: 'Winter 2025 — Ongoing',
      slug: 'stock-prediction-gpr',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
      outcome: 'State-of-the-art accuracy in forecasting stock trends',
    },
    {
      title: 'Sentiment Analysis for Stock Market Trends Using VADER',
      description: 'Engineered VADER-based sentiment analysis, integrating NewsAPI and AlphaVantage to enable real-time market insights. Deployed scalable ML model on AWS SageMaker, enhancing system resilience by 25% and cutting cloud costs by 30%.',
      role: 'ML Engineer',
      year: 'Fall 2024',
      slug: 'sentiment-analysis-vader',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      outcome: 'Reduced data processing time by 40%, improved trend accuracy by 15%',
    },
  ],
  experience: [
    {
      role: 'Senior Core Committee - Machine Learning Core',
      company: 'IEEE CommSoc VIT',
      period: 'Jan 2025 — Present',
      description: 'Spearheaded VIT\'s largest CTF; increased IEEE CommSoc engagement by 40% via ML and cybersecurity challenges. Organized ConnecTRON, a 500+ participant AI/ML, Embedded C, and IoT event, driving 20+ UN SDG-aligned projects. Mentored ML teams, overseeing 5 projects and developing an IEEE-adopted ML curriculum, boosting proficiency by 30%.',
    },
    {
      role: 'Senior iOS Mentor',
      company: 'Advanced Developer Group (ADG) VIT',
      period: 'Jun 2024 — Present',
      description: 'Led iOS development workshops and mentoring sessions for over 50 students, resulting in a 40% increase in successful app submissions to the App Store and a 25% improvement in student performance in iOS-related coursework. Guided ADG teams to victory in 3 regional hackathons, focusing on innovative iOS app solutions for healthcare and education.',
    },
    {
      role: 'Senior iOS App Development Intern',
      company: 'Chamberly AB',
      period: 'Dec 2023 — May 2024',
      description: 'Optimized push notifications, boosting engagement by 30% and reducing app abandonment by 20%. Revamped UI with SwiftUI, improving satisfaction by 25% and cutting support tickets by 40%. Streamlined navigation, reducing user steps by 35% and enhancing performance by 15%. Led feature integration and bug fixes, contributing to a 4.5-star rating and 22% MAU growth.',
    },
  ],
  skills: [
    { category: 'Languages', items: ['Python', 'Embedded C', 'Java', 'MATLAB', 'R', 'Assembly (x51, x86)', 'SwiftUI', 'UIKit', 'C++'] },
    { category: 'ML/AI & Data Science', items: ['VADER Sentiment Analysis', 'LSTM Networks', 'Neural Variational Inference', 'StockNet', 'AWS SageMaker', 'Deep Generative Models'] },
    { category: 'DevOps & Tools', items: ['Git', 'CI/CD', 'Docker', 'PostgreSQL', 'Redis', 'Microservices Architecture'] },
    { category: 'Software & Platforms', items: ['Cadence Virtuoso', 'ModelSim', 'NetSim', 'MultiSim', 'Keil uVision', 'Cadence AWR', 'CST Studio', 'Adobe Photoshop CC'] },
  ],
  about: {
    title: 'Final-year Electronics and Communications Engineering student specializing in Machine Learning, AI, and iOS development.',
    bio: [
      'I\'m passionate about building intelligent systems that solve real-world problems. My work spans machine learning research, iOS app development, and enterprise-grade software architecture.',
      'Currently leading ML initiatives at IEEE CommSoc VIT, where I\'ve organized large-scale events and developed curriculum that\'s been adopted by IEEE. I\'ve also mentored iOS developers, helping teams win hackathons and launch successful apps.',
      'My projects include Flux—a comprehensive fintech platform integrating AI, blockchain, and IoT—and advanced stock prediction models using LSTM networks and geopolitical risk factors. I\'m always exploring new ways to combine cutting-edge technology with practical applications.',
    ],
  },
  principles: [
    {
      number: '01',
      title: 'Data-driven innovation',
      description: 'Every solution starts with understanding the data. I leverage machine learning and analytics to uncover insights that drive meaningful impact.',
    },
    {
      number: '02',
      title: 'Scalable architecture',
      description: 'Building systems that can grow is essential. I design enterprise-grade architectures that handle scale while maintaining performance and reliability.',
    },
    {
      number: '03',
      title: 'Cross-disciplinary learning',
      description: 'The best solutions come from combining different domains. I integrate AI, mobile development, blockchain, and IoT to create innovative ecosystems.',
    },
  ],
};

export function getResumeData(type: ResumeType): ResumeData {
  return type === 'wireless' ? wirelessResume : aiMlResume;
}

export { wirelessResume, aiMlResume };

