import { ResumeType } from '@/contexts/ResumeContext';

export interface ProjectProcess {
  title: string;
  description: string;
}

export interface ProjectOverview {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  year: string;
  slug: string;
  image?: string;
  outcome?: string;
  client?: string;
  duration?: string;
  heroImage?: string;
  overview?: ProjectOverview;
  process?: ProjectProcess[];
  images?: string[];
  reflection?: string;
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
      client: 'Research Project',
      duration: 'Dec 2024 — Mar 2025',
      heroImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'Existing optical beam modeling tools lacked comprehensive coverage of beam types needed for Quantum Optics and RF communication systems research, with slow eigen-mode analysis.',
        solution: 'Designed an Object-Oriented MATLAB library to model 14 optical beam types. Implemented custom numerical solvers for Mathieu functions and Pearcey integrals, incorporating literature-accurate physical modeling for Gouy phase and M² beam quality factors.',
        impact: 'Improved eigen-mode analysis speeds by 30%, enabling faster research iterations. Accurate simulation of aperture-loss and timing-jitter for ongoing and future research projects.',
      },
      process: [
        {
          title: 'Literature Review & Requirements',
          description: 'Analyzed existing beam modeling approaches and identified 14 critical beam types needed for Quantum Optics and RF communication research.',
        },
        {
          title: 'Numerical Solver Development',
          description: 'Implemented custom numerical solvers for Mathieu functions and Pearcey integrals, optimizing computational efficiency.',
        },
        {
          title: 'Physical Modeling',
          description: 'Incorporated literature-accurate physical modeling for Gouy phase and M² beam quality factors to simulate aperture-loss and timing-jitter accurately.',
        },
        {
          title: 'Optimization & Validation',
          description: 'Benchmarked performance improvements and validated accuracy against published research results.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'This project reinforced the importance of building reusable research tools. The Object-Oriented approach not only improved performance but also made the library extensible for future beam types and research applications.',
    },
    {
      title: 'OAM-Multiplexed Beam Recovery via Turbulent Channel using Deep Learning',
      description: 'Developed a ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images, aiming to eliminate the need for wavefront sensors, lowering link complexity by 40%.',
      role: 'Research Engineer',
      year: 'Jan 2025 — Aug 2025',
      slug: 'oam-beam-recovery',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      outcome: 'Reduced Bit Error Rate (BER) by 20%',
      client: 'Research Project',
      duration: 'Jan 2025 — Aug 2025',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'Traditional OAM beam recovery systems require expensive wavefront sensors, increasing link complexity and cost. Strong atmospheric turbulence causes significant phase distortion, degrading Bit Error Rate (BER) performance.',
        solution: 'Developed a ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images. Simulated literature-accurate turbulence layers using Split-Step Fourier Method for Laguerre-Gaussian beam propagation through turbulence-strength parameter sweep.',
        impact: 'Eliminated need for wavefront sensors, lowering link complexity by 40%. Achieved 20% reduction in Bit Error Rate (BER) through phase distortion compensation in strong turbulence conditions.',
      },
      process: [
        {
          title: 'Turbulence Simulation',
          description: 'Simulated literature-accurate turbulence layers using Split-Step Fourier Method for Laguerre-Gaussian beam propagation, sweeping turbulence-strength parameter from Cn² ≈ 10⁻¹⁸ to 10⁻¹³.',
        },
        {
          title: 'Dataset Generation',
          description: 'Generated comprehensive training datasets with various turbulence conditions, SNR levels, and modal crosstalk scenarios.',
        },
        {
          title: 'Deep Learning Architecture',
          description: 'Designed and trained ResNet-18 CNN architecture optimized for intensity-only image input to recover QPSK symbols.',
        },
        {
          title: 'Benchmarking & Analysis',
          description: 'Benchmarked against classical MMSE equalizers in strong turbulence, analyzing BER performance and robustness against modal crosstalk and SNR variations.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'This project demonstrated the power of combining physics-informed simulation with deep learning. The key insight was that intensity-only detection could be sufficient when paired with the right neural architecture, opening new possibilities for simplified FSO link designs.',
    },
    {
      title: 'Python-informed Mode Switching RL Framework for 5G-beyond Network Targets',
      description: 'Developed a physics-aware RL framework complying with 5G-beyond KPI targets, optimally switching OAM modes to current environment and signal conditions, achieving sub-0.1 ms latency.',
      role: 'Research Engineer',
      year: 'Oct 2025 — Present',
      slug: 'rl-5g-framework',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      outcome: '80+% prediction accuracy across scenarios',
      client: 'Research Project',
      duration: 'Oct 2025 — Present',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: '5G-beyond networks require dynamic optimization of OAM modes based on environment and signal conditions, but traditional approaches struggle to meet KPI targets for latency and throughput efficiency.',
        solution: 'Developed a physics-aware RL framework complying with KPI targets, optimally switching OAM modes to current environment and signal conditions. Investigated Physics-Informed DQN agent with 52-dimensional action space, integrating ITU-R/IEEE standards for THz propagation (26.5-300 GHz) and channel capacity.',
        impact: 'Achieved sub-0.1 ms latency while maximizing throughput efficiency. Currently achieving 80+% prediction accuracy across indoor and outdoor propagation scenarios. Exploring transfer learning to reduce training complexity by 60% for lossless compliance.',
      },
      process: [
        {
          title: 'Environment Design',
          description: 'Designed a Gymnasium-compatible RL environment for real-time KPI target monitoring, incorporating ITU-R/IEEE standards for THz propagation and channel capacity modeling.',
        },
        {
          title: 'Physics-Informed DQN',
          description: 'Developed Physics-Informed DQN agent with 52-dimensional action space, integrating physical constraints and propagation models into the learning process.',
        },
        {
          title: 'Training & Optimization',
          description: 'Trained agent across diverse indoor and outdoor propagation scenarios, optimizing for sub-0.1 ms latency and maximum throughput efficiency.',
        },
        {
          title: 'Transfer Learning Exploration',
          description: 'Investigating transfer learning approaches to bridge simulation-to-reality gaps, reducing training complexity by 60% while maintaining lossless compliance.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'This ongoing project represents the intersection of reinforcement learning and wireless communications. The challenge isn\'t just achieving good performance—it\'s ensuring the learned policies respect physical constraints and can generalize from simulation to real-world deployment.',
    },
    {
      title: '6G OAM-THz Channel Dataset: ITU-R IMT-2030 Compliant',
      description: 'Published the first physics-based dataset with 250k+ realistic samples for OAM beam communications at sub-Terahertz/mmWave frequencies (300-600 GHz).',
      role: 'Research Contributor',
      year: 'Aug 2025',
      slug: '6g-dataset',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      outcome: 'Published on IEEE Dataport',
      client: 'IEEE Dataport Publication',
      duration: 'Aug 2025',
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'Lack of comprehensive, physics-based datasets for OAM beam communications at sub-Terahertz/mmWave frequencies (300-600 GHz) that meet beyond 5G specifications and support Deep Reinforcement Learning research.',
        solution: 'Published the first physics-based dataset with 250k+ realistic samples for OAM beam communications. Simulated 33 physics parameters including atmospheric turbulence and hardware impairments to meet specifications and ITU-R IMT-2030 compliance.',
        impact: 'Dataset published on IEEE Dataport (DOI: 10.21227/ej85-xp25) and TechRxiv. Validated on machine learning tasks achieving sub-80% prediction accuracy for throughput, latency, and energy efficiency. Established benchmark for Deep Reinforcement Learning algorithms in dynamic environments.',
      },
      process: [
        {
          title: 'Physics Simulation Framework',
          description: 'Developed comprehensive simulation framework incorporating 33 physics parameters including atmospheric turbulence, hardware impairments, and propagation characteristics.',
        },
        {
          title: 'Dataset Generation',
          description: 'Generated 250k+ realistic samples covering diverse scenarios at sub-Terahertz/mmWave frequencies (300-600 GHz), ensuring ITU-R IMT-2030 compliance.',
        },
        {
          title: 'Validation & Benchmarking',
          description: 'Validated dataset on machine learning tasks for predicting throughput, latency, and energy efficiency, achieving sub-80% prediction accuracy.',
        },
        {
          title: 'Publication & Documentation',
          description: 'Published dataset on IEEE Dataport and TechRxiv with comprehensive documentation, establishing benchmark for Deep Reinforcement Learning research in wireless networks.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'Creating this dataset required balancing physical accuracy with computational feasibility. The result is a resource that enables reproducible research in beyond 5G communications while respecting the underlying physics of electromagnetic propagation.',
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
      client: 'VIT',
      duration: 'Fall 2024 — Ongoing',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'India\'s fintech sector lacks comprehensive platforms that integrate AI, blockchain, and IoT for expense management, creating fragmented user experiences and limited automation capabilities.',
        solution: 'Pioneered Flux, a SwiftUI expense ecosystem integrating AI (Google Gemini 2.5 Flash), blockchain transparency, and IoT automation. Engineered enterprise-grade microservices infrastructure with dual PostgreSQL and Redis optimization, delivering sub-200ms response times and 100K+ concurrent user scalability.',
        impact: 'Architected India\'s first comprehensive fintech platform positioning Flux to capture significant market share in India\'s $2.8B fintech sector. Spearheaded breakthrough integrations across PhonePe payments, Hyperledger blockchain, and Blynk.io IoT, creating unprecedented multi-technology ecosystem.',
      },
      process: [
        {
          title: 'Architecture Design',
          description: 'Designed enterprise-grade microservices infrastructure with dual PostgreSQL and Redis optimization for high-performance expense tracking and real-time analytics.',
        },
        {
          title: 'AI Integration',
          description: 'Integrated Google Gemini 2.5 Flash for AI-powered OCR and predictive analytics engine, enabling intelligent expense categorization and forecasting.',
        },
        {
          title: 'Blockchain & IoT Integration',
          description: 'Spearheaded integrations across PhonePe payments, Hyperledger blockchain for transparency, and Blynk.io IoT for automated expense tracking.',
        },
        {
          title: 'Scalability & Performance',
          description: 'Optimized system architecture to deliver sub-200ms response times and support 100K+ concurrent users, ensuring enterprise-grade reliability.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'Flux represents the convergence of multiple cutting-edge technologies. The challenge wasn\'t just building individual features—it was creating a seamless ecosystem where AI, blockchain, and IoT work together to solve real-world financial management problems.',
    },
    {
      title: 'Stock Price Prediction with Geopolitical Risks',
      description: 'Built a stock prediction model using StockNet (88 stocks, 2014-16) and the GPR Index, integrating price trends, tweets, and GPR factors. Enhanced market modeling by incorporating EIA crude oil price data.',
      role: 'ML Engineer',
      year: 'Winter 2025 — Ongoing',
      slug: 'stock-prediction-gpr',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
      outcome: 'State-of-the-art accuracy in forecasting stock trends',
      client: 'VIT',
      duration: 'Winter 2025 — Ongoing',
      heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'Traditional stock prediction models fail to incorporate geopolitical risks and macroeconomic factors, limiting their accuracy in volatile market conditions.',
        solution: 'Built a stock prediction model using StockNet (88 stocks, 2014-16) and the GPR Index, integrating price trends, tweets, and GPR factors. Enhanced market modeling by incorporating EIA crude oil price data. Developed an LSTM-based deep generative model with neural variational inference.',
        impact: 'Achieved state-of-the-art accuracy in forecasting stock trends versus benchmark models. Improved robustness against market stochasticity and captured complex temporal dependencies through neural variational inference.',
      },
      process: [
        {
          title: 'Data Integration',
          description: 'Integrated StockNet dataset (88 stocks, 2014-16), GPR Index, Twitter sentiment data, and EIA crude oil price data to create comprehensive market feature set.',
        },
        {
          title: 'LSTM Architecture',
          description: 'Developed LSTM-based deep generative model optimized for capturing temporal dependencies and complex market patterns.',
        },
        {
          title: 'Neural Variational Inference',
          description: 'Implemented neural variational inference to improve robustness against market stochasticity and handle uncertainty in predictions.',
        },
        {
          title: 'Benchmarking & Validation',
          description: 'Benchmarked against traditional models, achieving state-of-the-art accuracy in forecasting stock trends across diverse market conditions.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'This project highlighted the importance of incorporating external factors beyond price data. The integration of geopolitical risks and macroeconomic indicators significantly improved model performance, demonstrating that context matters as much as technical patterns in financial markets.',
    },
    {
      title: 'Sentiment Analysis for Stock Market Trends Using VADER',
      description: 'Engineered VADER-based sentiment analysis, integrating NewsAPI and AlphaVantage to enable real-time market insights. Deployed scalable ML model on AWS SageMaker, enhancing system resilience by 25% and cutting cloud costs by 30%.',
      role: 'ML Engineer',
      year: 'Fall 2024',
      slug: 'sentiment-analysis-vader',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      outcome: 'Reduced data processing time by 40%, improved trend accuracy by 15%',
      client: 'VIT',
      duration: 'Fall 2024',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      overview: {
        problem: 'Real-time stock market analysis requires processing vast amounts of news and social media data, but existing systems struggle with speed, accuracy, and cost efficiency.',
        solution: 'Engineered VADER-based sentiment analysis, integrating NewsAPI and AlphaVantage to enable real-time market insights. Deployed scalable ML model on AWS SageMaker with automated scaling, enhancing system resilience by 25% and cutting cloud costs by 30%.',
        impact: 'Reduced data processing time by 40% through optimized sentiment analysis pipeline. Developed 7-day SMA overlays aligning sentiment scores with stock price movements, improving short-term trend accuracy by 15%. Optimized trading signal detection for enhanced market decision-making.',
      },
      process: [
        {
          title: 'Sentiment Analysis Pipeline',
          description: 'Engineered VADER-based sentiment analysis system integrating NewsAPI and AlphaVantage APIs for comprehensive market data collection and processing.',
        },
        {
          title: 'AWS SageMaker Deployment',
          description: 'Deployed scalable ML model on AWS SageMaker with automated scaling capabilities, optimizing for both performance and cost efficiency.',
        },
        {
          title: 'SMA Overlay Development',
          description: 'Developed 7-day Simple Moving Average overlays to align sentiment scores with stock price movements, improving trend prediction accuracy.',
        },
        {
          title: 'Trading Signal Optimization',
          description: 'Optimized trading signal detection algorithms, refining buy/sell strategies through sentiment-driven analytics for enhanced market decision-making.',
        },
      ],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
      ],
      reflection: 'This project demonstrated the power of combining sentiment analysis with technical indicators. The key insight was that news sentiment, when properly processed and aligned with price movements, can significantly improve short-term trading strategies.',
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

