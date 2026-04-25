export interface City {
  name: string;
  slug: string;
  province: 'ontario' | 'nova-scotia' | 'new-brunswick';
  provinceLabel: string;
  provinceAbbr: string;
  region: string;
  populationTier: 'metro' | 'mid' | 'small';
  lat: number;
  lng: number;
  nearbyStation: string;
  heroHeadline: string;
  introParagraph: string;
  serviceHighlights: [string, string, string];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface Province {
  slug: 'ontario' | 'nova-scotia' | 'new-brunswick';
  label: string;
  abbr: string;
  heroHeadline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

// PROVINCES

export const provinces: Province[] = [
  {
    slug: 'ontario',
    label: 'Ontario',
    abbr: 'ON',
    heroHeadline: 'Dragonfly Delivery Across Ontario',
    description:
      "Jaatram Logistics is Ontario's trusted Dragonfly Delivery Service Provider, serving cities and towns across the province from our base in Stoney Creek.",
    metaTitle: 'Dragonfly Delivery in Ontario | Jaatram Logistics',
    metaDescription:
      'Jaatram Logistics provides reliable Dragonfly last-mile delivery across Ontario. Serving cities with 140 professionals and a modern 106-vehicle fleet. Get a quote today.',
  },
  {
    slug: 'nova-scotia',
    label: 'Nova Scotia',
    abbr: 'NS',
    heroHeadline: 'Dragonfly Delivery Across Nova Scotia',
    description:
      'Jaatram Logistics delivers packages reliably across Nova Scotia from Halifax and surrounding communities, as a certified Dragonfly Delivery Service Provider.',
    metaTitle: 'Dragonfly Delivery in Nova Scotia | Jaatram Logistics',
    metaDescription:
      'Fast, reliable Dragonfly delivery across Nova Scotia. Jaatram Logistics serves Halifax and surrounding communities. Contact us for a free shipping quote.',
  },
  {
    slug: 'new-brunswick',
    label: 'New Brunswick',
    abbr: 'NB',
    heroHeadline: 'Dragonfly Delivery Across New Brunswick',
    description:
      'Jaatram Logistics provides dependable Dragonfly last-mile delivery throughout New Brunswick, serving Saint John and surrounding communities with speed and care.',
    metaTitle: 'Dragonfly Delivery in New Brunswick | Jaatram Logistics',
    metaDescription:
      'Trusted Dragonfly delivery in New Brunswick. Jaatram Logistics serves Saint John and beyond. 6k+ completed deliveries. Get a free quote.',
  },
];

// CITIES

export const cities: City[] = [
  // ONTARIO

  {
    name: 'Windsor',
    slug: 'windsor',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Windsor-Essex',
    populationTier: 'metro',
    lat: 42.3149,
    lng: -83.0364,
    nearbyStation: 'YQG Windsor',
    heroHeadline: 'Dragonfly Delivery in Windsor, Ontario',
    introParagraph:
      "Jaatram Logistics is Windsor's trusted Dragonfly Delivery Service Provider, serving residential and commercial addresses across the city and surrounding Windsor-Essex County. With a dedicated team of 140 professionals and a modern fleet of 106 vehicles including 6 electric vans, we deliver thousands of packages every month with industry-leading reliability and a 4.9-star Google rating. From downtown Windsor to Tecumseh and LaSalle, we ensure every package arrives safely and on time.",
    serviceHighlights: [
      'Same-day and next-day Dragonfly delivery across all Windsor neighbourhoods',
      'Real-time GPS tracking on every shipment for full transparency',
      'Eco-friendly EV deliveries in Windsor city core',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver packages in Windsor?',
        answer:
          'Yes. Jaatram Logistics is a certified Dragonfly Delivery Service Provider serving all Windsor neighbourhoods including downtown, Walkerville, Riverside, South Windsor, and surrounding Windsor-Essex communities.',
      },
      {
        question: 'What areas of Windsor do you cover?',
        answer:
          'We cover all major Windsor postal codes and extend service to Tecumseh, LaSalle, Amherstburg, Kingsville, and Essex County communities.',
      },
      {
        question: 'How can I track my delivery in Windsor?',
        answer:
          'All Dragonfly deliveries include real-time tracking. You will receive notifications when your driver is nearby.',
      },
      {
        question: 'What is a Dragonfly Delivery Service Provider?',
        answer:
          'A Dragonfly Delivery Service Provider (DSP) is a company vetted and contracted by Dragonfly to handle last-mile delivery. Jaatram Logistics is a certified Dragonfly DSP operating across Ontario, Nova Scotia, and New Brunswick.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Windsor?',
        answer:
          'Call us at +1 (437) 727 0000 (Mon-Sun 8AM-8PM), email jaatramlogistics@gmail.com, or fill out our quote form and we will get back to you within 24 hours.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Windsor, ON | Jaatram Logistics',
    metaDescription:
      'Reliable Dragonfly last-mile delivery in Windsor by Jaatram Logistics, certified DSP with 140 professionals, 4.9-star rating, and real-time tracking. Get a quote.',
  },

  {
    name: 'Sarnia',
    slug: 'sarnia',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Lambton County',
    populationTier: 'mid',
    lat: 42.9994,
    lng: -82.3089,
    nearbyStation: 'YZR Sarnia',
    heroHeadline: 'Dragonfly Delivery in Sarnia, Ontario',
    introParagraph:
      "Jaatram Logistics provides fast, reliable Dragonfly last-mile delivery across Sarnia and Lambton County. As a certified Dragonfly Delivery Service Provider operating since 2022, we serve Sarnia's growing residential communities, Lambton College areas, and business districts with a professional fleet and dedicated delivery team. Our drivers know Sarnia's neighbourhoods inside out, ensuring every package arrives on time.",
    serviceHighlights: [
      'Coverage across all Sarnia neighbourhoods including Lakeview, Brights Grove, and Clearwater',
      'Service extends to Point Edward, Corunna, and Lambton County communities',
      '24/7 customer support with same-day response',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Sarnia?',
        answer:
          'Yes, we serve all of Sarnia and surrounding Lambton County communities including Point Edward, Corunna, and Petrolia.',
      },
      {
        question: 'Do you deliver to Lambton College in Sarnia?',
        answer:
          'Yes. We cover Lambton College and surrounding student areas in Sarnia.',
      },
      {
        question: 'How long does delivery take in Sarnia?',
        answer:
          'Delivery times depend on your order and service level. Jaatram Logistics handles delivery on the day it is scheduled, typically same-day or next-day.',
      },
      {
        question: 'What is the phone number for Jaatram Logistics Sarnia?',
        answer:
          'Call us at +1 (437) 727 0000 available Monday to Sunday, 8AM to 8PM.',
      },
      {
        question: 'Is Jaatram Logistics an official Dragonfly delivery partner?',
        answer:
          'Yes. Jaatram Logistics is a certified Dragonfly Delivery Service Provider. We operate under Dragonfly\'s direct program and meet all their quality, safety, and reliability standards.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Sarnia, ON | Jaatram Logistics',
    metaDescription:
      'Fast Dragonfly delivery in Sarnia by Jaatram Logistics, certified DSP covering all Sarnia and Lambton County. 4.9 stars, real-time tracking. Contact us.',
  },

  {
    name: 'Kitchener',
    slug: 'kitchener',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Waterloo Region',
    populationTier: 'metro',
    lat: 43.4516,
    lng: -80.4925,
    nearbyStation: 'YKF Waterloo',
    heroHeadline: 'Dragonfly Delivery in Kitchener, Ontario',
    introParagraph:
      "Kitchener is one of Canada's fastest-growing tech hubs, and Jaatram Logistics keeps pace with the city's booming delivery demand. As a certified Dragonfly Delivery Service Provider, we deliver packages across Kitchener, Waterloo, and Cambridge with precision and speed, supporting residents, students, and businesses throughout the Waterloo Region.",
    serviceHighlights: [
      'Coverage across Kitchener, Waterloo, Cambridge, and surrounding Waterloo Region',
      'Tech-forward tracking and delivery notifications',
      '24/7 customer support for Waterloo Region clients',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Kitchener and Waterloo?',
        answer:
          'Yes. We serve all of Kitchener (N2A-N2R), Waterloo (N2J-N2V), and Cambridge (N1P-N3H) as part of our Waterloo Region coverage.',
      },
      {
        question: 'Do you deliver to University of Waterloo and Wilfrid Laurier areas?',
        answer:
          'Yes. We cover the N2L postal code area around both universities and serve student residences and apartments.',
      },
      {
        question: 'How reliable is Dragonfly delivery in Kitchener?',
        answer:
          'Jaatram Logistics maintains a 4.9-star Google rating and has completed 6,000+ successful deliveries. We pride ourselves on on-time, damage-free delivery.',
      },
      {
        question: 'How can I get a delivery quote for Kitchener?',
        answer:
          'Use our online quote form, call +1 (437) 727 0000, or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Do you deliver on holidays in Kitchener?',
        answer:
          'We operate 7 days a week including most holidays. For specific holiday schedules, contact us directly.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Kitchener, ON | Jaatram Logistics',
    metaDescription:
      'Fast Dragonfly delivery in Kitchener-Waterloo by Jaatram Logistics certified DSP, 4.9-star rating, serving N2A-N2R and surrounding areas. Get a quote now.',
  },

  {
    name: 'Brantford',
    slug: 'brantford',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Southwestern Ontario',
    populationTier: 'mid',
    lat: 43.1394,
    lng: -80.2644,
    nearbyStation: 'YYZ7 Brantford Our First Station',
    heroHeadline: 'Dragonfly Delivery in Brantford, Ontario',
    introParagraph:
      "Brantford holds a special place in Jaatram Logistics' story. It's where we secured our very first Dragonfly station contract in 2022, launching our journey to becoming one of Ontario's most respected Delivery Service Providers. Today we continue to serve Brantford and the surrounding region with the same dedication and care that earned us our first contract, backed by a 140-person team, a modern fleet, and a 4.9-star Google rating.",
    serviceHighlights: [
      'Brantford is our founding station, deepest local knowledge and longest track record',
      'Coverage extends to Paris, Brant County, and Six Nations communities',
      "Our original home base, you can't beat local expertise",
    ],
    faqs: [
      {
        question: 'Why is Brantford special for Jaatram Logistics?',
        answer:
          "Brantford is where Jaatram Logistics earned its very first Dragonfly station contract in 2022. It's our founding market and holds a special place in our company's story.",
      },
      {
        question: 'What areas near Brantford do you serve?',
        answer:
          'We serve all of Brantford (N3P-N3V) and extend to Paris, Burford, Scotland, Oakland, and parts of Brant County.',
      },
      {
        question: 'Do you deliver to Six Nations of the Grand River near Brantford?',
        answer:
          'We deliver to addressable locations within our standard service zones. Please contact us to confirm coverage for specific rural or reserve addresses.',
      },
      {
        question: 'How do I get in touch with Jaatram Logistics for Brantford deliveries?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com. We are available Monday through Sunday, 8AM to 8PM.',
      },
      {
        question: 'How many deliveries has Jaatram Logistics completed in Brantford?',
        answer:
          'Since our founding in 2022, our team has completed over 6,000 deliveries province-wide, with Brantford being our longest-running and most established delivery market.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Brantford, ON | Jaatram Logistics',
    metaDescription:
      "Jaatram Logistics' founding Dragonfly station is in Brantford, ON. Expert local delivery service, 4.9-star rating, serving N3P-N3V and Brant County. Get a quote.",
  },

  {
    name: 'Vaughan',
    slug: 'vaughan',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'York Region',
    populationTier: 'metro',
    lat: 43.8361,
    lng: -79.4983,
    nearbyStation: 'YYZ3 York Region',
    heroHeadline: 'Dragonfly Delivery in Vaughan, Ontario',
    introParagraph:
      "Vaughan is one of the fastest-growing cities in Canada and a key market for Jaatram Logistics. As a certified Dragonfly Delivery Service Provider, we serve all of Vaughan's diverse communities from Woodbridge and Maple to Thornhill and Concord. With our professional fleet of 106 vehicles and a team of 140 delivery professionals, we make sure every package reaches its destination on time and in perfect condition.",
    serviceHighlights: [
      'Full Vaughan coverage including Woodbridge, Maple, Concord, and Thornhill',
      'Experienced drivers familiar with York Region road network and new developments',
      'Commercial delivery to Vaughan Metropolitan Centre and business parks',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Vaughan?',
        answer:
          'Yes. We serve all of Vaughan including Woodbridge (L4L, L4H), Maple (L6A), Concord (L4K), Thornhill (L4J), and all other Vaughan communities.',
      },
      {
        question: 'Do you deliver to the Vaughan Metropolitan Centre?',
        answer:
          'Yes. We cover the VMC area and all commercial addresses throughout Vaughan.',
      },
      {
        question: 'How reliable is package delivery in Vaughan?',
        answer:
          'Jaatram Logistics maintains a 4.9-star Google rating and has completed 6,000+ successful deliveries. We guarantee on-time, damage-free delivery.',
      },
      {
        question: 'What is the fastest delivery option available in Vaughan?',
        answer:
          'Delivery speed depends on your service level and order. Jaatram Logistics ensures same-day execution of all scheduled deliveries.',
      },
      {
        question: 'How do I contact Jaatram Logistics for Vaughan deliveries?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com. We are available 7 days a week, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Vaughan, ON | Jaatram Logistics',
    metaDescription:
      'Reliable Dragonfly delivery in Vaughan, Ontario by Jaatram Logistics. Certified DSP covering Woodbridge, Maple, Concord, and all Vaughan communities. Get a quote.',
  },

  {
    name: 'Scarborough',
    slug: 'scarborough',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'East Toronto',
    populationTier: 'metro',
    lat: 43.7764,
    lng: -79.2318,
    nearbyStation: 'YYZ3 East Toronto',
    heroHeadline: 'Dragonfly Delivery in Scarborough, Ontario',
    introParagraph:
      "Scarborough is one of Toronto's most vibrant and diverse communities, and Jaatram Logistics is proud to serve it as a certified Dragonfly Delivery Service Provider. From Agincourt and Malvern to the Bluffs and Kingston Road corridor, our professional delivery team navigates every neighbourhood with local expertise and care. With 140 team members and a fleet of 106 vehicles including electric vans, we deliver packages across Scarborough reliably every day.",
    serviceHighlights: [
      'Full Scarborough coverage across all M1 postal codes',
      'Local delivery expertise in high-density residential areas including condos and townhomes',
      'Same-day execution on all scheduled deliveries',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Scarborough?',
        answer:
          'Yes. We serve all Scarborough postal codes (M1B through M1X) including Agincourt, Malvern, Woburn, Guildwood, Cliffside, and all other Scarborough communities.',
      },
      {
        question: 'Do you deliver to apartment buildings and condos in Scarborough?',
        answer:
          'Yes. We are experienced with high-density residential buildings throughout Scarborough and follow secure delivery protocols for all units.',
      },
      {
        question: 'How can I track my delivery in Scarborough?',
        answer:
          'All deliveries include real-time tracking. You will receive notifications with your driver\'s location when they are nearby.',
      },
      {
        question: 'Do you deliver to Scarborough businesses?',
        answer:
          'Absolutely. We deliver to both residential and commercial addresses in Scarborough including Scarborough Town Centre area, industrial zones, and retail locations.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Scarborough?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com, available Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Scarborough, ON | Jaatram Logistics',
    metaDescription:
      'Trusted Dragonfly delivery in Scarborough, Toronto by Jaatram Logistics. Certified DSP covering all M1 postal codes. 4.9-star rated. Get a free quote today.',
  },

  {
    name: 'Pembroke',
    slug: 'pembroke',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Renfrew County',
    populationTier: 'small',
    lat: 45.8167,
    lng: -77.1,
    nearbyStation: 'YSH Smiths Falls',
    heroHeadline: 'Dragonfly Delivery in Pembroke, Ontario',
    introParagraph:
      "Pembroke is the gateway to the Ottawa Valley and the largest city in Renfrew County, and Jaatram Logistics ensures this community receives the same reliable, professional delivery service as any major Ontario city. As a certified Dragonfly Delivery Service Provider, we deliver packages to Pembroke and surrounding Renfrew County communities with care, punctuality, and local expertise.",
    serviceHighlights: [
      'Pembroke and Renfrew County coverage including Petawawa and Deep River',
      'Professional delivery to Ottawa Valley communities often underserved by larger carriers',
      '7-day delivery service with no rural surcharges for covered areas',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Pembroke, Ontario?',
        answer:
          'Yes. We serve Pembroke (K8A) and surrounding Renfrew County communities.',
      },
      {
        question: 'Do you deliver to Petawawa and CFB Petawawa near Pembroke?',
        answer:
          'Yes. Petawawa and the surrounding area are within our Renfrew County service zone. For military base delivery, we follow facility-specific protocols.',
      },
      {
        question: 'How do I get a shipping quote for Pembroke?',
        answer:
          'Fill in our online quote form, call +1 (437) 727 0000, or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Is reliable package delivery available in Pembroke?',
        answer:
          'Jaatram Logistics has a 4.9-star Google rating and 6,000+ completed deliveries. We apply the same high standards to every community regardless of size.',
      },
      {
        question: 'What delivery days are available in Pembroke?',
        answer:
          'Monday through Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Pembroke, ON | Jaatram Logistics',
    metaDescription:
      'Dragonfly delivery in Pembroke, Ontario by Jaatram Logistics. Serving K8A and Renfrew County. 4.9-star rated, 7-day service. Request a free quote.',
  },

  // NOVA SCOTIA

  {
    name: 'Halifax',
    slug: 'halifax',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Halifax Regional Municipality',
    populationTier: 'metro',
    lat: 44.6488,
    lng: -63.5752,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Dragonfly Delivery in Halifax, Nova Scotia',
    introParagraph:
      "Halifax is Nova Scotia's largest city and our primary service hub in Atlantic Canada. Jaatram Logistics delivers packages across HRM from the Halifax Peninsula to Dartmouth, Bedford, and Sackville with a professional team and reliable fleet. Whether you're near Dalhousie University, in the Hydrostone neighbourhood, or in a Clayton Park subdivision, we bring your deliveries to your door with care and speed.",
    serviceHighlights: [
      'Full Halifax Regional Municipality coverage including Dartmouth and Bedford',
      "Service to Dalhousie, Saint Mary's, and NSCC campus areas",
      "Professional uniformed delivery team representing Dragonfly's brand standards",
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver packages in Halifax?',
        answer:
          'Yes. We serve the entire Halifax Regional Municipality including postal codes B2R, B2S, B2T, B2V, B2W, B2X, B2Y, B2Z, B3A through B3Z, and B4A-B4G.',
      },
      {
        question: 'Do you deliver in Dartmouth and Bedford as well?',
        answer:
          'Yes. Our Halifax service area covers Dartmouth, Bedford, Sackville, Cole Harbour, Fall River, and all other communities within the HRM.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Halifax?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com. We operate 7 days a week, 8AM to 8PM.',
      },
      {
        question: 'Do you deliver to Halifax universities?',
        answer:
          "Yes. We serve Dalhousie University, Saint Mary's University, NSCC campuses, and all student housing areas around these institutions.",
      },
      {
        question: 'What is the latest delivery time in Halifax?',
        answer:
          'Our delivery window is 8AM to 8PM, seven days a week. Most deliveries are completed between 10AM and 7PM.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Halifax, NS | Jaatram Logistics',
    metaDescription:
      'Jaatram Logistics delivers packages across Halifax, NS HRM, Dartmouth, Bedford, and more. Certified Dragonfly DSP, 4.9-star rating. Get a free quote today.',
  },

  // NEW BRUNSWICK

  {
    name: 'Saint John',
    slug: 'saint-john',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Saint John County',
    populationTier: 'mid',
    lat: 45.2733,
    lng: -66.0633,
    nearbyStation: 'YSJ Saint John',
    heroHeadline: 'Dragonfly Delivery in Saint John, New Brunswick',
    introParagraph:
      "Saint John, New Brunswick's oldest incorporated city and an industrial powerhouse, is fully served by Jaatram Logistics. We deliver packages across Saint John and the Greater Saint John region including Quispamsis, Rothesay, and Grand Bay-Westfield, keeping pace with the city's strong e-commerce growth. As a certified Dragonfly Delivery Service Provider, our team brings local knowledge and professional service to every delivery.",
    serviceHighlights: [
      'Greater Saint John coverage including Quispamsis, Rothesay, and Grand Bay-Westfield',
      'Industrial and commercial deliveries to harbour-area businesses',
      "Experienced drivers familiar with Saint John's unique geography",
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Saint John, NB?',
        answer:
          'Yes. We serve Saint John (E2J-E2P) and Greater Saint John communities including Quispamsis and Rothesay.',
      },
      {
        question: 'Do you deliver uptown and in the South End of Saint John?',
        answer:
          'Yes. We cover all Saint John neighbourhoods including the uptown core, South End, North End, and the West Side.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Saint John?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Do you deliver to Quispamsis and Rothesay?',
        answer:
          'Yes. Quispamsis and Rothesay are part of our Greater Saint John service area.',
      },
      {
        question: 'What postal codes in Saint John do you serve?',
        answer:
          'E2J, E2K, E2L, E2M, E2N, E2P and surrounding areas.',
      },
    ],
    metaTitle: 'Dragonfly Delivery in Saint John, NB | Jaatram Logistics',
    metaDescription:
      'Dragonfly delivery in Saint John, New Brunswick by Jaatram Logistics. Covering E2J-E2P, Quispamsis, Rothesay. 4.9-star rated. Get a free quote today.',
  },
];

// HELPERS

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByProvince(province: City['province']): City[] {
  return cities.filter((c) => c.province === province);
}

export function getProvinceBySlug(slug: Province['slug']): Province | undefined {
  return provinces.find((p) => p.slug === slug);
}

export function getNearbyCities(city: City, count = 3): City[] {
  return cities
    .filter((c) => c.province === city.province && c.slug !== city.slug)
    .slice(0, count);
}
