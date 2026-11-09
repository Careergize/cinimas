// src/data/content.js
// Centralized Data File for Grace Cinemas International (GCI)
import projectorImg from "../assets/projector_loader.jpg";

export const CONTACT_INFO = {
  companyName: "Grace Cinemas International",
  shortName: "GCI",
  tagline: "Stories That Resonate. Cinema That Endures.",
  subTagline: "Crafting Stories. Building Brands.",
  slogan: "Let's Build Your Brand Visually",
  signature: "Gracefully Your's",
  address: {
    line1: "Rajiv Gandhi Nagar",
    area: "Nalanchira",
    city: "Thiruvananthapuram",
    state: "Kerala",
    pincode: "695015",
    country: "India",
    full: "Rajiv Gandhi Nagar, Nalanchira, Thiruvananthapuram (Trivandrum), Kerala 695015, India",
    mapsUrl: "https://maps.app.goo.gl/QkT7nFKwDp8AJQAn6"
  },
  phone: "+91 88919 61116",
  phoneRaw: "8891961116",
  phoneTel: "tel:+918891961116",
  email: "gracecinemasinternational@gmail.com",
  castingEmail: "casting@gracecinemas.in",
  instagram: {
    handle: "@gracecinemasinternational",
    url: "https://www.instagram.com/gracecinemasinternational?dlrf=MW9mM2lhdGV3NTA4YQ%3D%3D"
  },
  workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM IST"
};

export const NAV_LINKS = [
  { name: "Home", id: "home", href: "#home" },
  { name: "Productions", id: "productions", href: "#productions" },
  { name: "Services", id: "services", href: "#services" },
  { name: "Casting", id: "casting", href: "#casting" },
  { name: "Our Story", id: "story", href: "#story" },
  { name: "Contact", id: "contact", href: "#contact" }
];

export const HERO_CONTENT = {
  headline: "Stories That Resonate. Cinema That Endures.",
  tagline: "A premier independent film production house & creative studio in Kerala, dedicated to bringing compelling visual narratives to life.",
  stats: [
    {
      value: "12+",
      label: "Film Projects",
      subtext: "Features, Indies & Shorts"
    },
    {
      value: "25+",
      label: "Commercials",
      subtext: "Brand Ads & Digital Campaigns"
    },
    {
      value: "Statewide",
      label: "Casting Network",
      subtext: "Across 14 Districts of Kerala"
    },
    {
      value: "Trivandrum",
      label: "Studio Facility",
      subtext: "Acoustic Lounge & Tech Hub"
    }
  ],
  pipelinePillars: [
    {
      title: "Feature Film Production",
      desc: "Full-scale theatrical and OTT narrative features from script to 4K master",
      tag: "Feature Cinema"
    },
    {
      title: "Commercials & Brand Ads",
      desc: "Cinematic commercial films engineered for brand recall and digital impact",
      tag: "Advertising"
    },
    {
      title: "Statewide Casting & Talent",
      desc: "Character breakdowns, scouting, screen tests, and talent grooming in Kerala",
      tag: "Casting Desk"
    },
    {
      title: "Line Production & Logistics",
      desc: "Turnkey location permits, equipment hire, and local production support across Kerala",
      tag: "Line Production"
    }
  ]
};

export const PRODUCTIONS = [
  {
    id: "aaravam-feature",
    title: "Aaravam (The Resonating Echo)",
    genre: "Psychological Drama / Mystery",
    year: "2025",
    category: "Feature Film",
    status: "Released",
    synopsis: "Set against the misty, rain-soaked cardamom estates of Idukki, an estranged investigative writer returns to his ancestral homestead to untangle the mysterious disappearance of a folklore ballad singer.",
    posterUrl: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1200&q=80",
    trailerUrl: "https://www.youtube.com",
    director: "GCI Studio Direction",
    runtime: "134 mins",
    aspectRatio: "2.39:1 DCI CinemaScope",
    language: "Malayalam (with English Subtitles)",
    castHighlights: "Ensemble Cast from Kerala Indie Circuit"
  },
  {
    id: "kayal-the-backwaters",
    title: "Kayal (Silent Waters)",
    genre: "Romantic Drama / Social Realism",
    year: "2025",
    category: "Feature Film",
    status: "Post-Production",
    synopsis: "Two young boat-racing enthusiasts from Kumarakom forge an unconventional bond while restoring a vintage snake boat, challenging traditional community hierarchies.",
    posterUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    trailerUrl: "https://www.youtube.com",
    director: "Creative Desk GCI",
    runtime: "128 mins",
    aspectRatio: "2.39:1 Anamorphic",
    language: "Malayalam",
    castHighlights: "Authentic Coastal Kerala Talent"
  },
  {
    id: "apex-odyssey-commercial",
    title: "Apex Odyssey (Electric Grand Tour)",
    genre: "Automotive Commercial / Theatrical Ad",
    year: "2024",
    category: "Commercial",
    status: "Released",
    synopsis: "A high-octane commercial film captured across the winding mist-laden hairpin turns of Munnar at sunrise, blending high-speed precision tracking with dramatic Kerala mountain vistas.",
    posterUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    trailerUrl: "https://www.youtube.com",
    director: "GCI Commercial Wing",
    runtime: "60s Theatrical TVC + Digital Cutdowns",
    aspectRatio: "2.39:1 CinemaScope",
    language: "Malayalam / English / Pan-India",
    castHighlights: "Professional Precision Drivers & Stunt Unit"
  },
  {
    id: "velicham-short-film",
    title: "Velicham (The Beam)",
    genre: "Period Drama / Tribute to Cinema",
    year: "2024",
    category: "Short Film",
    status: "Released",
    synopsis: "A poetic narrative chronicling a 1970s traveling cinema projectionist in rural Malabar who risks everything to screen an unseen print for his village during a torrential monsoon night.",
    posterUrl: projectorImg,
    trailerUrl: "https://www.youtube.com",
    director: "Indie Division",
    runtime: "22 mins",
    aspectRatio: "1.85:1 Academy Flat",
    language: "Malayalam",
    castHighlights: "Kerala State Award Winner Nominations"
  },
  {
    id: "monsoon-melodies-music",
    title: "Mizhikalil (Through Her Eyes)",
    genre: "Indie Folk / Contemporary Fusion",
    year: "2025",
    category: "Music Video",
    status: "Released",
    synopsis: "A visually hypnotic musical journey through the cascading waterfalls of Athirappilly and silent rubber plantations, capturing the quiet longing of migratory hearts.",
    posterUrl: "https://images.unsplash.com/photo-1633037499870-d105eb8b1daf?auto=format&fit=crop&w=1200&q=80",
    trailerUrl: "https://www.youtube.com",
    director: "Music & Art Department",
    runtime: "4 mins 45 secs",
    aspectRatio: "2.35:1 Cinematic Widescreen",
    language: "Malayalam",
    castHighlights: "Acclaimed Indie Musicians & Vocalists"
  },
  {
    id: "thiruvananthapuram-noir",
    title: "Shadows of the Fort (Kotta)",
    genre: "Neo-Noir Crime Thriller",
    year: "2026",
    category: "Feature Film",
    status: "In Production",
    synopsis: "An enigmatic antiquities appraiser in Trivandrum's East Fort stumbles into an underground network trading in ancient temple relics, setting off a high-stakes cat-and-mouse pursuit.",
    posterUrl: "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?auto=format&fit=crop&w=1200&q=80",
    trailerUrl: "https://www.youtube.com",
    director: "GCI Flagship Production",
    runtime: "In Production",
    aspectRatio: "2.39:1 DCI 4K Scope",
    language: "Malayalam",
    castHighlights: "Leading Malayalam Screen Actors"
  }
];

export const SERVICES = [
  {
    id: "brand-content-advertising",
    number: "01",
    title: "Brand Content & Advertising",
    category: "Advertising",
    tagline: "High-impact visual narratives engineered to build memorable brands",
    desc: "From concept ideation to commercial film production, we craft high-converting campaigns that establish authoritative brand presence and emotional recall.",
    items: [
      { name: "Video Production", desc: "Commercial ad films, digital promos & brand television spots" },
      { name: "Content Creation", desc: "High-impact social video content & visual brand narratives" },
      { name: "Copywriting", desc: "Persuasive scriptwriting, campaign slogans & narrative storytelling" },
      { name: "Creative Direction", desc: "Comprehensive visual styling, cinematography & campaign aesthetics" }
    ],
    features: [
      "Commercial Ad Films",
      "Digital Video Content",
      "Brand Copywriting & Scripts",
      "Full Creative Direction"
    ],
    badge: "Campaigns & Ads",
    colSpan: "lg:col-span-4"
  },
  {
    id: "production-execution",
    number: "02",
    title: "Production & Execution",
    category: "Filming & Studio",
    tagline: "Comprehensive on-ground filming, studio sets & cinema equipment",
    desc: "Equipped with state-of-the-art camera systems, an acoustic studio suite, and turnkey production logistics across all 14 districts of Kerala.",
    items: [
      { name: "Studio / Podcast", desc: "Acoustically treated studio suite for multi-cam podcasts & interviews" },
      { name: "Photography", desc: "Commercial fashion, editorial portraits, product & set stills" },
      { name: "Short Films", desc: "Independent narrative cinema, festival entries & docu-dramas" },
      { name: "Equipment Rentals", desc: "Cinema cameras, prime lenses, lighting rigs & sound packages" }
    ],
    features: [
      "Acoustic Podcast Studio",
      "Commercial Photography",
      "Independent Short Films",
      "Cinema Equipment Rentals"
    ],
    badge: "Studio & Logistics",
    colSpan: "lg:col-span-4"
  },
  {
    id: "post-design",
    number: "03",
    title: "Post & Design",
    category: "Finishing & Branding",
    tagline: "Precision color grading, creative visual design & key art finishing",
    desc: "Transforming raw footage into polished, cinema-grade masters with DaVinci Resolve color suites, sound design, and full graphic branding.",
    items: [
      { name: "Post Production", desc: "Offline/online editing, DaVinci Resolve color grading & sound mix" },
      { name: "Graphic Design", desc: "Theatrical posters, key art, branding identity & marketing assets" },
      { name: "Creative Design", desc: "Motion graphics, title sequences & comprehensive brand systems" }
    ],
    features: [
      "DaVinci Color Grading",
      "Theatrical Poster Design",
      "Motion Graphics & Titles",
      "Brand Identity Systems"
    ],
    badge: "Post Suite & Art",
    colSpan: "lg:col-span-4"
  }
];

export const CASTING_CALLS = [
  {
    id: "casting-01",
    projectTitle: "Shadows of the Fort (Kotta)",
    role: "Lead Male Antagonist (Vikram)",
    ageGroup: "32 – 42 Years",
    gender: "Male",
    deadline: "November 28, 2026",
    location: "Thiruvananthapuram Auditions",
    requirements: "Intense screen presence, fluent in colloquial Trivandrum/Southern Malayalam dialect. Prior theater or camera experience preferred. Martial arts or stage combat training is a bonus.",
    submissionEmail: "casting@gracecinemas.in"
  },
  {
    id: "casting-02",
    projectTitle: "Aaravam - Chapter 2",
    role: "Supporting Female (Dr. Anjali)",
    ageGroup: "26 – 34 Years",
    gender: "Female",
    deadline: "December 05, 2026",
    location: "Kochi & Trivandrum Screen Tests",
    requirements: "Natural, grounded acting style with subtle emotional expression. Must speak clear Malayalam. Send recent headshots, intro video (under 60s), and showreel link.",
    submissionEmail: "casting@gracecinemas.in"
  },
  {
    id: "casting-03",
    projectTitle: "Kerala Tourism & Heritage Commercial",
    role: "Child Artists (Siblings: Boy & Girl)",
    ageGroup: "7 – 11 Years",
    gender: "Any",
    deadline: "December 12, 2026",
    location: "Statewide Online Submissions",
    requirements: "Spontaneous, expressive, comfortable in front of cinematic cameras. Swimming ability in inland waters is preferred. Guardians must accompany candidates.",
    submissionEmail: "casting@gracecinemas.in"
  },
  {
    id: "casting-04",
    projectTitle: "Independent Drama Short",
    role: "Senior Character Artist (Master Asan)",
    ageGroup: "55 – 68 Years",
    gender: "Male",
    deadline: "December 18, 2026",
    location: "Trivandrum Studio Walk-in",
    requirements: "Commanding voice, traditional demeanor, experienced in expressive emotional monologue delivery. Classical art background preferred.",
    submissionEmail: "casting@gracecinemas.in"
  }
];

export const BTS_ITEMS = [
  {
    id: "bts-01",
    title: "Golden Hour Directing on the Backwaters",
    caption: "Director & DOP aligning the 6K cinema camera rig on a traditional kettuvallam during sunset in Alappuzha.",
    category: "Directing",
    location: "Alappuzha, Kerala",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bts-02",
    title: "Night Interior Lighting & Anamorphic Rig",
    caption: "Sculpting moody, low-key lighting with diffused softboxes and negative fill for a tense dialogue sequence.",
    category: "Camera Rigs",
    location: "GCI Studio, Nalanchira",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bts-03",
    title: "Highland Misty Forest Tracking Shot",
    caption: "Heavy-duty gimbal rig chasing the lead protagonist through the dense tea plantations of Vagamon.",
    category: "Set Life",
    location: "Vagamon, Kerala",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bts-04",
    title: "Sound-Treated Acoustic Studio Session",
    caption: "Multitrack audio dubbing and voiceover capture in the GCI Trivandrum sound lounge.",
    category: "Sound & Dubbing",
    location: "Nalanchira Studio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bts-05",
    title: "DaVinci Resolve HDR Color Grading Suite",
    caption: "Balancing color science and shadow details on the calibrated reference monitor for theatrical DCP delivery.",
    category: "Post-Production",
    location: "Color Suite, Trivandrum",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bts-06",
    title: "Clapperboard Action on Commercial Set",
    caption: "Synchronizing dual cameras and timecode on a high-energy corporate television advertisement.",
    category: "Commercial Set",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
  }
];

export const FAQS = [
  {
    question: "How do writers and directors submit screenplays to Grace Cinemas International?",
    answer: "We welcome original script submissions, treatments, and completed screenplays. Please send a one-page synopsis, logline, character breakdown, and registered copyright details to scripts@gracecinemas.in. Our creative development team reviews submissions on a rolling monthly cycle and contacts selected screenwriters for formal story pitch sessions."
  },
  {
    question: "How can actors and aspiring talents participate in GCI audition casting calls?",
    answer: "Active casting calls are published on our website and official Instagram (@gracecinemasinternational). To apply, email your updated portfolio, clear headshots (no heavy filters), intro video (under 60 seconds with self-introduction and language fluency), and showreel link directly to casting@gracecinemas.in with the Role Name in the subject line."
  },
  {
    question: "Do you offer Line Production and Location Logistics services for outside film crews in Kerala?",
    answer: "Yes. Grace Cinemas International provides full-scale turnkey line production support for production houses from Mumbai, Chennai, Hyderabad, and abroad filming in Kerala. We manage location permits (Kerala State Film Development Corporation, Forest Dept, Tourism), local crew assembly, technical equipment rentals (cameras, cranes, lighting packages), accommodation, and location transport."
  },
  {
    question: "What is your typical budget range and turnaround timeline for Commercial Ad Films?",
    answer: "Commercial ad budgets vary based on scale, talent casting, location count, and post-production deliverables. Digital brand campaigns generally start from flexible growth tiers, while high-end theatrical TVCs with 4K color grading and custom music composition are scoped transparently. Turnarounds range from 7 to 18 working days from pre-pro lock to final master."
  },
  {
    question: "Can we rent your studio facilities, podcast lounge, or cinema camera equipment?",
    answer: "Yes, our studio in Nalanchira, Thiruvananthapuram features a sound-treated podcast/interview lounge and a comprehensive inventory of professional cinema cameras (Sony FX6, FX3, RED), cine prime lenses, studio softboxes, and wireless audio kits available for daily and weekly production rental with standard ID verification."
  },
  {
    question: "Where is Grace Cinemas International located, and how can we schedule an in-person meeting?",
    answer: "Our primary studio and creative headquarters is located at Rajiv Gandhi Nagar, Nalanchira, Thiruvananthapuram, Kerala 695015. You can schedule a pre-production meeting or studio tour by calling +91 88919 61116 or writing to gracecinemasinternational@gmail.com."
  }
];

