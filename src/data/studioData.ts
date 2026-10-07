import { ServiceItem, StudioMetric, PhilosophyPillar, FeaturedProject } from '../types';

export const STUDIO_INFO = {
  name: 'Meridian Architecture & Design',
  shortName: 'Meridian Studio',
  tagline: 'Architecture designed for light, permanence, and human rhythm.',
  description:
    'We are an independent architectural and spatial design studio founded in 2014. We craft bespoke residential homes, conscious structural renovations, and tailor-made interiors across the Pacific Northwest.',
  establishedYear: '2014',
  phone: '+1 (503) 892-4110',
  formattedPhone: '(503) 892-4110',
  email: 'studio@meridianarchitecture.com',
  address: '742 Evergreen Millway, Suite 300, Portland, OR 97201',
  hours: 'Monday – Friday, 8:30 AM – 5:30 PM PST',
  license: 'Licensed Architecture Practice · NCARB & AIA Member Firm',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: '180+',
    label: 'Completed Projects',
    detail: 'Residential & spatial commissions delivered with meticulous craft',
  },
  {
    value: '12',
    label: 'Years of Practice',
    detail: 'Founded in 2014 with an enduring focus on site and materiality',
  },
  {
    value: '98%',
    label: 'On-Schedule Delivery',
    detail: 'Rigorous project management and transparent contractor coordination',
  },
  {
    value: '9',
    label: 'AIA & Design Awards',
    detail: 'Recognized for regional sustainable design and craft excellence',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-architecture',
    number: '01',
    title: 'Custom Residential Architecture',
    tagline: 'Tailored ground-up residences designed around your landscape and family life.',
    description:
      'From topographical site analysis to final construction administration, we design custom single-family homes that harmonize with their natural surroundings. We prioritize natural daylighting, passive solar orientation, and durable local building envelopes.',
    image: '/src/assets/images/service_residential_1791416961457.jpg',
    features: [
      'Comprehensive site evaluation & sun path studies',
      'Schematic architectural drafting and 3D visualization',
      'Planning commission approvals and building permit filing',
      'Contractor bidding assistance and on-site construction oversight',
    ],
    deliverables: [
      'Complete permit-ready construction document set',
      'High-resolution spatial renders & material schedule',
      'Structural engineering coordination drawings',
      'Bi-weekly jobsite observation reports',
    ],
    timeline: '6 to 14 months for full design & permitting',
    idealFor: 'Homeowners building their primary residence or retreat on new land.',
  },
  {
    id: 'interior-spatial-design',
    number: '02',
    title: 'Bespoke Interior & Millwork Design',
    tagline: 'Quiet, tactile interior spaces with custom integrated cabinetry and fixtures.',
    description:
      'We treat interiors as an organic continuation of the architecture. Our interior service encompasses spatial choreography, custom oak and walnut joinery, sculptural lighting layouts, and curated natural material palettes that age gracefully.',
    image: '/src/assets/images/service_interiors_1791416971894.jpg',
    features: [
      'Custom kitchen and built-in cabinetry fabrication details',
      'Architectural lighting plans and dimming automation schemes',
      'Natural stone, ceramic tile, and hardwood specification',
      'Hardware curation and bespoke plumbing fixture schedules',
    ],
    deliverables: [
      'Detailed millwork shop drawings and joinery elevations',
      'Comprehensive interior finishes specification binder',
      'Lighting and electrical placement schedules',
      'Procurement coordination and sample review boards',
    ],
    timeline: '3 to 6 months design phase',
    idealFor: 'Clients seeking cohesive, clutter-free living spaces with built-in artisan storage.',
  },
  {
    id: 'sustainable-renovations',
    number: '03',
    title: 'Sustainable Renovation & Adaptive Reuse',
    tagline: 'Breathing modern performance and thermal comfort into existing structures.',
    description:
      'Preserving the character of existing homes while upgrading their thermal envelope, spatial flow, and seismic integrity. We specialize in timber additions, opening dark cellular floorplans to sunlight, and integrating high-efficiency heat pump ventilation.',
    image: '/src/assets/images/service_renovation_1791416982406.jpg',
    features: [
      'Structural condition assessment & historic fabric analysis',
      'Continuous thermal insulation and air-barrier retrofitting',
      'Removal of load-bearing barriers for open sightlines',
      'Modern electrical, HVAC, and low-flow plumbing integration',
    ],
    deliverables: [
      'As-built documentation & renovation permit package',
      'Energy efficiency model and rebate documentation',
      'Material salvage plan and structural engineer stamps',
      'Construction phase change-order administration',
    ],
    timeline: '4 to 8 months for architecture & permits',
    idealFor: 'Owners of mid-century or vintage properties wanting modern light and efficiency.',
  },
  {
    id: 'environmental-masterplanning',
    number: '04',
    title: 'Landscape & Microclimate Integration',
    tagline: 'Connecting living quarters directly with native flora, stone, and courtyards.',
    description:
      'Architecture should never end at the exterior threshold. We design covered cedar verandas, protected courtyard gardens, rainwater bioswales, and outdoor culinary spaces that create continuous indoor-outdoor living through every season.',
    image: '/src/assets/images/hero_architecture_1791416936635.jpg',
    features: [
      'Outdoor room and covered loggia spatial planning',
      'Grading, retaining stone terraces, and drainage integration',
      'Native drought-resistant plant selection and hardscaping',
      'Outdoor hearths, plunge pools, and pergola structures',
    ],
    deliverables: [
      'Exterior masterplan drawings with material callouts',
      'Hardscape detail drawings and drainage elevations',
      'Lighting layout for evening garden illumination',
      'Collaboration with licensed landscape contractors',
    ],
    timeline: '2 to 4 months concurrent with building design',
    idealFor: 'Properties with acreage, views, or sloping terrain seeking harmonious site unity.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: 'Honesty of Materiality',
    description:
      'We prioritize unadorned materials that develop a rich patina over decades: Pacific cedar, local basalt stone, blackened steel, and lime wash plaster.',
    keyAspect: 'Sustainably sourced, non-toxic, and naturally durable',
  },
  {
    title: 'Passive Climate Stewardship',
    description:
      'We study microclimates before sketching a single wall. Deep eaves shield summer heat, large southern glazings capture winter warmth, and cross-ventilation cools naturally.',
    keyAspect: 'Lower operational energy and enhanced indoor air quality',
  },
  {
    title: 'Human-Centric Proportion',
    description:
      'Architecture is felt before it is seen. We tune ceiling heights, quiet acoustic buffers, and natural sightlines to foster calm, family connection, and restorative sanctuary.',
    keyAspect: 'Designed for daily rituals and lifelong comfort',
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'cedar-ridge',
    title: 'Cedar Ridge Pavilion',
    location: 'Hood River, Oregon',
    year: '2025',
    area: '3,850 sq ft',
    type: 'Custom Residence',
    testimonial: {
      quote:
        'Meridian designed a home that feels like it grew out of the hillside. The morning light fills the kitchen precisely as Elena promised during our first site walk.',
      client: 'Marcus & Sarah Chen',
      role: 'Homeowners',
    },
  },
  {
    id: 'mill-loft',
    title: 'Old Town Millwork Loft',
    location: 'Pearl District, Portland',
    year: '2024',
    area: '2,100 sq ft',
    type: 'Interior & Millwork',
    testimonial: {
      quote:
        'Their custom joinery solved every storage puzzle in our historic loft without sacrificing a single inch of the raw brick texture we fell in love with.',
      client: 'Claire Devereaux',
      role: 'Design Director & Client',
    },
  },
  {
    id: 'willamette-overlook',
    title: 'Willamette Overlook House',
    location: 'West Linn, Oregon',
    year: '2024',
    area: '4,200 sq ft',
    type: 'Sustainable Retrofit',
    testimonial: {
      quote:
        'The thermal retrofit slashed our heating costs by 60% while expanding our river views through triple-glazed timber frames. An incredible team.',
      client: 'David Lindqvist',
      role: 'Environmental Consultant',
    },
  },
];

export const STUDIO_TEAM = [
  {
    name: 'Elena Vance, AIA',
    role: 'Principal Architect & Co-Founder',
    bio: 'Over 16 years leading residential projects with an emphasis on mass timber, passive heating, and regional Northwest vernacular.',
  },
  {
    name: 'Julian Reed',
    role: 'Design Director & Master Joiner',
    bio: 'Trained in both fine cabinetmaking and architecture, directing our bespoke interior detailing and custom furniture commissions.',
  },
  {
    name: 'Amara Patel, LEED AP',
    role: 'Senior Project Architect',
    bio: 'Specialist in building envelope science, municipal permitting, and zero-carbon material sourcing.',
  },
];

export const FAQS = [
  {
    q: 'How does the design process work with Meridian?',
    a: 'We begin with an in-depth Discovery Consultation to discuss your land, lifestyle, and financial framework. We then move systematically through Concept Design, Permitting & Construction Documentation, and regular On-Site Construction Administration.',
  },
  {
    q: 'What scale of projects do you take on?',
    a: 'We specialize in custom single-family homes, full-scale interior spatial renovations, historic residential retrofits, and comprehensive additions. We take on a limited number of commissions each year to ensure principal-level attention.',
  },
  {
    q: 'Do you help with contractor selection and permits?',
    a: 'Yes. We prepare all permit-ready documentation, coordinate directly with city planning officials, and facilitate competitive bidding with our vetted network of craft builders.',
  },
  {
    q: 'Where are your projects located?',
    a: 'While our studio is based in Portland, Oregon, we take on projects throughout the Pacific Northwest, including the Columbia River Gorge, Puget Sound, and Central Oregon.',
  },
];
