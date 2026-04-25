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

// ─── PROVINCES ──────────────────────────────────────────────────────────────

export const provinces: Province[] = [
  {
    slug: 'ontario',
    label: 'Ontario',
    abbr: 'ON',
    heroHeadline: 'Amazon Delivery Across Ontario',
    description:
      'Jaatram Logistics is Ontario\'s trusted Amazon Independent Delivery Contractor, serving over 150 cities and towns across the province from our base in Stoney Creek.',
    metaTitle: 'Amazon Delivery in Ontario | Jaatram Logistics',
    metaDescription:
      'Jaatram Logistics provides reliable Amazon last-mile delivery across Ontario. Serving 150+ cities with 140 professionals and a 106-vehicle fleet. Get a quote today.',
  },
  {
    slug: 'nova-scotia',
    label: 'Nova Scotia',
    abbr: 'NS',
    heroHeadline: 'Amazon Delivery Across Nova Scotia',
    description:
      'Jaatram Logistics delivers packages reliably across Nova Scotia from Halifax to Amherst, as a certified Amazon Independent Delivery Contractor.',
    metaTitle: 'Amazon Delivery in Nova Scotia | Jaatram Logistics',
    metaDescription:
      'Fast, reliable Amazon delivery across Nova Scotia. Jaatram Logistics serves Halifax, Dartmouth, Sydney, Truro and more. Contact us for a free shipping quote.',
  },
  {
    slug: 'new-brunswick',
    label: 'New Brunswick',
    abbr: 'NB',
    heroHeadline: 'Amazon Delivery Across New Brunswick',
    description:
      'Jaatram Logistics provides dependable Amazon last-mile delivery throughout New Brunswick, serving major cities and surrounding communities with speed and care.',
    metaTitle: 'Amazon Delivery in New Brunswick | Jaatram Logistics',
    metaDescription:
      'Trusted Amazon delivery in New Brunswick. Jaatram Logistics serves Moncton, Fredericton, Saint John and beyond. 6k+ completed deliveries. Get a free quote.',
  },
];

// ─── CITIES ─────────────────────────────────────────────────────────────────

export const cities: City[] = [
  // ── ONTARIO ────────────────────────────────────────────────────────────
  {
    name: 'Toronto',
    slug: 'toronto',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Greater Toronto Area',
    populationTier: 'metro',
    lat: 43.6532,
    lng: -79.3832,
    nearbyStation: 'YYZ3 / YYZ7',
    heroHeadline: 'Amazon Delivery in Toronto, Ontario',
    introParagraph:
      "Jaatram Logistics is Toronto's trusted Amazon Independent Delivery Contractor (IDC), serving residential and commercial addresses across the city and surrounding GTA. With a dedicated team of 140 professionals and a modern fleet of 106 vehicles including 6 electric vans. We deliver thousands of Amazon packages every month with industry-leading reliability and a 4.9-star Google rating. From downtown condos to Scarborough homes, we ensure every package arrives safely and on time.",
    serviceHighlights: [
      'Same-day and next-day Amazon delivery across all Toronto neighbourhoods',
      'Real-time GPS tracking on every shipment for full transparency',
      'Eco-friendly EV deliveries in downtown Toronto core',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Toronto?',
        answer:
          'Yes. Jaatram Logistics is a certified Amazon Independent Delivery Contractor (IDC) serving all Toronto neighbourhoods including downtown, North York, Scarborough, Etobicoke, and the surrounding GTA.',
      },
      {
        question: 'What areas of Toronto do you cover?',
        answer:
          'We cover all postal code districts in Toronto (M1–M9) including Scarborough, North York, Etobicoke, York, and the downtown core. We also serve neighbouring cities like Mississauga, Brampton, and Markham.',
      },
      {
        question: 'How can I track my delivery in Toronto?',
        answer:
          'All Amazon deliveries include real-time tracking through the Amazon app or website. You will receive notifications when your driver is nearby.',
      },
      {
        question: 'What is an Amazon IDC and why does it matter?',
        answer:
          'An Amazon Independent Delivery Contractor (IDC) is a company vetted and contracted by Amazon to handle last-mile delivery. Jaatram Logistics achieved IDC status in 2022 and now operates across nine Amazon stations in Ontario.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Toronto?',
        answer:
          'Call us at +1 (437) 727 0000 (Mon–Sun 8AM–8PM), email jaatramlogistics@gmail.com, or fill out our quote form and we will get back to you within 24 hours.',
      },
    ],
    metaTitle: 'Amazon Delivery in Toronto, ON | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon last-mile delivery in Toronto by Jaatram Logistics, certified IDC with 140 professionals, 4.9-star rating, and real-time tracking. Get a quote.',
  },
  {
    name: 'Brampton',
    slug: 'brampton',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Greater Toronto Area',
    populationTier: 'metro',
    lat: 43.7315,
    lng: -79.7624,
    nearbyStation: 'YYZ7 Brantford',
    heroHeadline: 'Amazon Delivery in Brampton, Ontario',
    introParagraph:
      "Jaatram Logistics provides fast, reliable Amazon last-mile delivery across Brampton, Ontario. As a certified Amazon IDC operating since 2022, we serve Brampton's growing residential communities and business districts with a professional fleet and dedicated delivery team. Our drivers know Brampton's neighbourhoods inside out from Bramalea to Heart Lake to Mount Pleasant, ensuring every package arrives on time.",
    serviceHighlights: [
      'Coverage across all Brampton wards including Heart Lake, Bramalea, and Mount Pleasant',
      'Dedicated Brampton delivery team with local route knowledge',
      '24/7 customer support with same-day response',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Brampton?',
        answer:
          'Yes, we serve all of Brampton including major postal districts L6P, L6R, L6S, L6T, L6V, L6W, L6X, L6Y, L6Z and surrounding areas.',
      },
      {
        question: 'Which parts of Brampton do you cover?',
        answer:
          'We cover all major communities: Heart Lake, Bramalea, Springdale, Mount Pleasant, Credit Valley, Bram West, Sandringham-Wellington, and more.',
      },
      {
        question: 'How long does Amazon delivery take in Brampton?',
        answer:
          'Delivery times are set by Amazon and depend on your Prime membership and the seller. Jaatram Logistics handles delivery on the day Amazon schedules it, typically same-day or next-day.',
      },
      {
        question: 'What is the phone number for Jaatram Logistics Brampton?',
        answer:
          'Call us at +1 (437) 727 0000 available Monday to Sunday, 8AM to 8PM.',
      },
      {
        question: 'Is Jaatram Logistics an official Amazon delivery partner?',
        answer:
          'Yes. Jaatram Logistics is a certified Amazon Independent Delivery Contractor (IDC). We operate under Amazon\'s direct program and meet all their quality, safety, and reliability standards.',
      },
    ],
    metaTitle: 'Amazon Delivery in Brampton, ON | Jaatram Logistics',
    metaDescription:
      'Fast Amazon delivery in Brampton by Jaatram Logistics, certified IDC covering all Brampton neighbourhoods. 4.9 stars, real-time tracking, 6k+ deliveries. Contact us.',
  },
  {
    name: 'Mississauga',
    slug: 'mississauga',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Greater Toronto Area',
    populationTier: 'metro',
    lat: 43.589,
    lng: -79.6441,
    nearbyStation: 'YYZ3',
    heroHeadline: 'Amazon Delivery in Mississauga, Ontario',
    introParagraph:
      "Serving Mississauga as a certified Amazon Independent Delivery Contractor, Jaatram Logistics handles last-mile delivery across the city's diverse communities from Port Credit to Meadowvale to Malton. Our professional fleet and experienced team ensure your Amazon orders arrive quickly and securely, whether you're in a downtown condo, a Streetsville home, or a Mississauga business park.",
    serviceHighlights: [
      'Full coverage across all Mississauga communities and postal codes',
      'Professional uniformed drivers with Amazon-certified training',
      'Secure delivery protocols for high-value packages',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Mississauga?',
        answer:
          'Yes, we serve all Mississauga postal districts including L4T, L4W, L4X, L4Y, L4Z, L5A through L5W, and all surrounding areas.',
      },
      {
        question: 'What neighbourhoods in Mississauga do you cover?',
        answer:
          'We cover Port Credit, Streetsville, Meadowvale, Malton, Clarkson, Erin Mills, City Centre, Cooksville, and all other Mississauga communities.',
      },
      {
        question: 'How do I request a shipping quote from Jaatram Logistics?',
        answer:
          'Fill out our online quote form on this website, email us at jaatramlogistics@gmail.com, or call +1 (437) 727 0000.',
      },
      {
        question: 'Do you deliver to Mississauga businesses?',
        answer:
          'Absolutely. We deliver to both residential and commercial addresses in Mississauga, including office parks, retail locations, and warehouses.',
      },
      {
        question: 'Are your Mississauga deliveries eco-friendly?',
        answer:
          'Yes. Jaatram Logistics operates 6 electric vehicles which we prioritize for urban and residential routes in Mississauga to reduce our environmental footprint.',
      },
    ],
    metaTitle: 'Amazon Delivery in Mississauga, ON | Jaatram Logistics',
    metaDescription:
      'Trusted Amazon last-mile delivery in Mississauga by Jaatram Logistics. Certified IDC, 4.9-star rated, covering all communities. Request a free quote today.',
  },
  {
    name: 'Hamilton',
    slug: 'hamilton',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Hamilton-Niagara',
    populationTier: 'metro',
    lat: 43.2557,
    lng: -79.8711,
    nearbyStation: 'YHM Brantford',
    heroHeadline: 'Amazon Delivery in Hamilton, Ontario',
    introParagraph:
      "Jaatram Logistics proudly serves Hamilton as a certified Amazon Independent Delivery Contractor. Our Stoney Creek headquarters puts us right at the heart of Hamilton's service area, making us one of the most local and reliable Amazon delivery partners in the region. From the Mountain to Ancaster to downtown Hamilton, our team delivers every package with care and professionalism.",
    serviceHighlights: [
      'Local expertise HQ is based in Stoney Creek, Hamilton\'s neighbouring city',
      'Coverage across Hamilton Mountain, Ancaster, Dundas, Stoney Creek, and Glanbrook',
      'Same delivery team, consistent service not outsourced or rotated',
    ],
    faqs: [
      {
        question: 'Is Jaatram Logistics based near Hamilton?',
        answer:
          'Yes! Our headquarters is at 332 Winona Road, Stoney Creek, ON right next to Hamilton. We know this area better than anyone.',
      },
      {
        question: 'What parts of Hamilton do you deliver to?',
        answer:
          'We cover all Hamilton areas including the downtown core, Hamilton Mountain, Ancaster, Dundas, Flamborough, Glanbrook, and Stoney Creek.',
      },
      {
        question: 'Do you deliver Amazon packages on weekends in Hamilton?',
        answer:
          'Yes. Jaatram Logistics operates 7 days a week, Monday through Sunday, 8AM to 8PM.',
      },
      {
        question: 'How do I report a delivery issue in Hamilton?',
        answer:
          'Contact us at +1 (437) 727 0000 or jaatramlogistics@gmail.com and we will resolve any issue within the same business day.',
      },
      {
        question: 'Does Jaatram Logistics deliver to Hamilton businesses?',
        answer:
          'Yes. We handle both residential and commercial deliveries across Hamilton, including industrial and business park addresses.',
      },
    ],
    metaTitle: 'Amazon Delivery in Hamilton, ON | Jaatram Logistics',
    metaDescription:
      'Jaatram Logistics: Amazon IDC based in Stoney Creek serving all of Hamilton. Local experts, 4.9-star rating, 7-day delivery. Get a free quote today.',
  },
  {
    name: 'London',
    slug: 'london',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Southwestern Ontario',
    populationTier: 'metro',
    lat: 42.9849,
    lng: -81.2453,
    nearbyStation: 'YXU London',
    heroHeadline: 'Amazon Delivery in London, Ontario',
    introParagraph:
      "London, Ontario's growing population and thriving e-commerce market makes it one of our key service areas. Jaatram Logistics delivers Amazon packages to every corner of the Forest City from Old North and Byron to White Oaks and Argyle with the same professionalism and care that has earned us a 4.9-star rating and 6,000+ completed deliveries.",
    serviceHighlights: [
      'Complete London, ON coverage including suburban areas and rural postal routes',
      'Experienced drivers familiar with London\'s road network',
      'Proactive delivery notifications so recipients always know when to expect us',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages to London, Ontario?',
        answer:
          'Yes. We serve London, ON and all surrounding postal areas including N5V, N5W, N5X, N5Y, N5Z, N6A through N6M, and more.',
      },
      {
        question: 'Do you deliver to Western University and Fanshawe College areas in London?',
        answer:
          'Yes, we cover student areas near Western University (N6A, N6G) and Fanshawe College as well as all residential areas in London.',
      },
      {
        question: 'What is the fastest Amazon delivery available in London, ON?',
        answer:
          'Delivery speed is determined by Amazon based on product availability and your Prime membership. Jaatram Logistics ensures same-day execution of all scheduled deliveries.',
      },
      {
        question: 'How do I contact Jaatram Logistics for a London delivery inquiry?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com. We operate Mon–Sun, 8AM–8PM.',
      },
      {
        question: 'Do you offer bulk or business deliveries in London, Ontario?',
        answer:
          'Yes. We handle commercial and bulk deliveries in London, ON. Contact us directly to discuss your volume needs and we can provide a custom quote.',
      },
    ],
    metaTitle: 'Amazon Delivery in London, ON | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon delivery across London, Ontario by Jaatram Logistics. Certified IDC, 4.9-star rated, covering N5–N6 postal codes. Get a free shipping quote.',
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
    heroHeadline: 'Amazon Delivery in Kitchener, Ontario',
    introParagraph:
      "Kitchener is one of Canada's fastest-growing tech hubs, and Jaatram Logistics keeps pace with the city's booming e-commerce demand. As a certified Amazon IDC, we deliver packages across Kitchener, Waterloo, and Cambridge with precision and speed supporting residents, students, and businesses throughout the Waterloo Region.",
    serviceHighlights: [
      'Coverage across Kitchener, Waterloo, Cambridge, and surrounding Waterloo Region',
      'Tech-forward tracking and delivery notifications',
      '24/7 customer support for Waterloo Region clients',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Kitchener and Waterloo?',
        answer:
          'Yes. We serve all of Kitchener (N2A–N2R), Waterloo (N2J–N2V), and Cambridge (N1P–N3H) as part of our Waterloo Region coverage.',
      },
      {
        question: 'Do you deliver to University of Waterloo and Wilfrid Laurier areas?',
        answer:
          'Yes. We cover the N2L postal code area around both universities and serve student residences and apartments.',
      },
      {
        question: 'How reliable is Amazon delivery in Kitchener?',
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
    metaTitle: 'Amazon Delivery in Kitchener, ON | Jaatram Logistics',
    metaDescription:
      'Fast Amazon delivery in Kitchener-Waterloo by Jaatram Logistics certified IDC, 4.9-star rating, serving N2A–N2R and surrounding areas. Get a quote now.',
  },
  {
    name: 'Barrie',
    slug: 'barrie',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Central Ontario',
    populationTier: 'mid',
    lat: 44.3894,
    lng: -79.6903,
    nearbyStation: 'YYB Barrie',
    heroHeadline: 'Amazon Delivery in Barrie, Ontario',
    introParagraph:
      "As Barrie continues to grow as one of Ontario's most popular destinations for families and remote workers, Jaatram Logistics ensures Amazon packages reach every doorstep quickly and reliably. Our certified delivery team covers all Barrie postal codes and extends into nearby communities like Innisfil, Oro-Medonte, and Springwater.",
    serviceHighlights: [
      'Full Barrie city coverage including new developments in South and East Barrie',
      'Service extends to Innisfil, Angus, Orillia, and surrounding areas',
      'Weekend and holiday delivery available',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Barrie, Ontario?',
        answer:
          'Yes. We cover all Barrie postal codes including L4M, L4N, and surrounding areas in Simcoe County.',
      },
      {
        question: 'Do you deliver to cottages and rural addresses near Barrie?',
        answer:
          'We primarily serve urban and suburban addresses in Barrie. For rural or cottage delivery, contact us to confirm coverage.',
      },
      {
        question: 'What are your delivery hours in Barrie?',
        answer:
          'We deliver Monday through Sunday, 8AM to 8PM. Most deliveries are completed between 9AM and 7PM.',
      },
      {
        question: 'Is Jaatram Logistics the main Amazon delivery partner in Barrie?',
        answer:
          'Jaatram Logistics is a certified Amazon IDC serving the Barrie region. Amazon may use multiple contractors for different routes, but we are one of the primary partners.',
      },
      {
        question: 'What should I do if my Amazon package was not delivered in Barrie?',
        answer:
          'Contact us immediately at +1 (437) 727 0000 or jaatramlogistics@gmail.com and we will investigate and resolve the issue.',
      },
    ],
    metaTitle: 'Amazon Delivery in Barrie, ON | Jaatram Logistics',
    metaDescription:
      'Dependable Amazon delivery in Barrie, Ontario by Jaatram Logistics. Serving L4M, L4N and surrounding areas. 4.9-star rated, 7-day delivery. Get a quote.',
  },
  {
    name: 'Ottawa',
    slug: 'ottawa',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Eastern Ontario',
    populationTier: 'metro',
    lat: 45.4215,
    lng: -75.6972,
    nearbyStation: 'YOW Ottawa',
    heroHeadline: 'Amazon Delivery in Ottawa, Ontario',
    introParagraph:
      "Ottawa Canada's capital demands the highest standards of delivery service, and Jaatram Logistics delivers exactly that. Operating as a certified Amazon IDC, we serve Ottawa's diverse neighbourhoods from Kanata to Orleans to Centretown with a professional team, modern fleet, and commitment to on-time delivery. Whether you're a government worker, a student at Carleton or uOttawa, or a business in Kanata Tech Park, we've got you covered.",
    serviceHighlights: [
      'Capital city service covering all Ottawa-Gatineau boundary areas',
      'Bilingual customer support (English and basic French)',
      'Commercial and government address deliveries welcome',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Ottawa?',
        answer:
          'Yes. We serve Ottawa postal codes K1A–K1Z, K2A–K2V, and surrounding Eastern Ontario communities.',
      },
      {
        question: 'Do you deliver to Kanata, Orleans, and Nepean?',
        answer:
          'Yes. We cover all major Ottawa communities including Kanata, Orleans, Nepean, Barrhaven, Gloucester, and the downtown Centretown area.',
      },
      {
        question: 'Do you deliver to government buildings and embassies in Ottawa?',
        answer:
          'We deliver to all commercial and government addresses in Ottawa. For secure facilities, delivery protocols follow building requirements.',
      },
      {
        question: 'What is the phone number for Jaatram Logistics Ottawa?',
        answer:
          'Our main line is +1 (437) 727 0000, available 7 days a week, 8AM–8PM.',
      },
      {
        question: 'Does Jaatram Logistics serve Gatineau, QC from Ottawa?',
        answer:
          'Our current service area covers Ontario. For Gatineau addresses, Amazon assigns a separate Quebec-based contractor.',
      },
    ],
    metaTitle: 'Amazon Delivery in Ottawa, ON | Jaatram Logistics',
    metaDescription:
      'Amazon last-mile delivery in Ottawa by Jaatram Logistics certified IDC covering Kanata, Orleans, Barrhaven and all Ottawa neighbourhoods. Call us today.',
  },
  {
    name: 'Oshawa',
    slug: 'oshawa',
    province: 'ontario',
    provinceLabel: 'Ontario',
    provinceAbbr: 'ON',
    region: 'Durham Region',
    populationTier: 'mid',
    lat: 43.8975,
    lng: -78.8658,
    nearbyStation: 'YOO Oshawa',
    heroHeadline: 'Amazon Delivery in Oshawa, Ontario',
    introParagraph:
      "Oshawa and the broader Durham Region are key markets for Jaatram Logistics. As a certified Amazon IDC, we serve Oshawa's residential communities, Ontario Tech University campus, and commercial zones in Whitby and Ajax. Our team's local knowledge and reliable fleet mean your Amazon packages arrive on schedule, every time.",
    serviceHighlights: [
      'Coverage across Oshawa, Whitby, Ajax, and all Durham Region communities',
      'Student delivery to Ontario Tech University and Durham College areas',
      'Fast dispatch with local drivers based in Durham Region',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Oshawa?',
        answer:
          'Yes. We serve Oshawa postal codes L1G through L1L and extend coverage to Whitby (L1M, L1N, L1P, L1R) and Ajax (L1S–L1Z).',
      },
      {
        question: 'Do you deliver to Ontario Tech University in Oshawa?',
        answer:
          'Yes. We cover the L1G area around Ontario Tech and Durham College, including campus residences and nearby student housing.',
      },
      {
        question: 'How do I track my Amazon delivery in Oshawa?',
        answer:
          'Use the Amazon app or website with your order number. You will receive real-time SMS/email notifications including a map of your driver\'s location.',
      },
      {
        question: 'Do you deliver to rural areas east of Oshawa?',
        answer:
          'We primarily cover Oshawa, Whitby, Ajax, and Pickering. For Clarington and Cobourg, coverage may vary contact us to confirm.',
      },
      {
        question: 'What days do you deliver Amazon packages in Oshawa?',
        answer:
          'Every day of the week, 8AM to 8PM, including weekends and most holidays.',
      },
    ],
    metaTitle: 'Amazon Delivery in Oshawa, ON | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon delivery in Oshawa & Durham Region by Jaatram Logistics. Serving L1G–L1L and surrounding areas, 7 days a week. Request a free quote.',
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
    heroHeadline: 'Amazon Delivery in Brantford, Ontario',
    introParagraph:
      "Brantford holds a special place in Jaatram Logistics' story it's where we secured our very first Amazon station contract in 2022, launching our journey to becoming one of Ontario's most respected Independent Delivery Contractors. Today we continue to serve Brantford and the surrounding region with the same dedication and care that earned us our first contract, backed by a 140-person team, a modern fleet, and a 4.9-star Google rating.",
    serviceHighlights: [
      'Brantford is our founding station deepest local knowledge and longest track record',
      'Coverage extends to Paris, Brant County, and Six Nations communities',
      'Our original home base you can\'t beat local expertise',
    ],
    faqs: [
      {
        question: 'Why is Brantford special for Jaatram Logistics?',
        answer:
          'Brantford is where Jaatram Logistics earned its very first Amazon station contract in 2022. It\'s our founding market and holds a special place in our company\'s story.',
      },
      {
        question: 'What areas near Brantford do you serve?',
        answer:
          'We serve all of Brantford (N3P–N3V) and extend to Paris, Burford, Scotland, Oakland, and parts of Brant County.',
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
    metaTitle: 'Amazon Delivery in Brantford, ON | Jaatram Logistics Our First Station',
    metaDescription:
      'Jaatram Logistics\' founding Amazon station is in Brantford, ON. Expert local delivery service, 4.9-star rating, serving N3P–N3V and Brant County. Get a quote.',
  },

  // ── NOVA SCOTIA ────────────────────────────────────────────────────────
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
    heroHeadline: 'Amazon Delivery in Halifax, Nova Scotia',
    introParagraph:
      "Halifax is Nova Scotia's largest city and our primary service hub in Atlantic Canada. Jaatram Logistics delivers Amazon packages across HRM from the Halifax Peninsula to Dartmouth, Bedford, and Sackville with a professional team and reliable fleet. Whether you're near Dalhousie University, in the Hydrostone neighbourhood, or in a Clayton Park subdivision, we bring your Amazon orders to your door.",
    serviceHighlights: [
      'Full Halifax Regional Municipality coverage including Dartmouth and Bedford',
      'Service to Dalhousie, Saint Mary\'s, and NSCC campus areas',
      'Professional uniformed delivery team representing Amazon\'s brand standards',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Halifax?',
        answer:
          'Yes. We serve the entire Halifax Regional Municipality including postal codes B2R, B2S, B2T, B2V, B2W, B2X, B2Y, B2Z, B3A through B3Z, and B4A–B4G.',
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
          'Yes. We serve Dalhousie University, Saint Mary\'s University, NSCC campuses, and all student housing areas around these institutions.',
      },
      {
        question: 'What is the latest Amazon can deliver in Halifax?',
        answer:
          'Our delivery window is 8AM to 8PM, seven days a week. Most deliveries are completed between 10AM and 7PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Halifax, NS | Jaatram Logistics',
    metaDescription:
      'Jaatram Logistics delivers Amazon packages across Halifax, NS HRM, Dartmouth, Bedford, and more. Certified IDC, 4.9-star rating. Get a free quote today.',
  },
  {
    name: 'Dartmouth',
    slug: 'dartmouth',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Halifax Regional Municipality',
    populationTier: 'mid',
    lat: 44.6717,
    lng: -63.5771,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in Dartmouth, Nova Scotia',
    introParagraph:
      "Dartmouth the City of Lakes is fully served by Jaatram Logistics as part of our Halifax Regional Municipality coverage. We deliver Amazon packages to every Dartmouth neighbourhood, from Portland Estates to Woodlawn to the Dartmouth Crossing commercial district, with the same reliability and professionalism that defines all our operations.",
    serviceHighlights: [
      'Full Dartmouth coverage including Portland Estates, Woodlawn, and Cole Harbour',
      'Commercial deliveries to Dartmouth Crossing business district',
      'Same-day execution of all Amazon-scheduled deliveries',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics serve Dartmouth, NS?',
        answer:
          'Yes. Dartmouth is part of our Halifax Regional Municipality service area. We cover all Dartmouth postal codes (B2W, B2X, B2Y, B3A–B3B) and adjacent communities.',
      },
      {
        question: 'Do you deliver to Cole Harbour near Dartmouth?',
        answer:
          'Yes, Cole Harbour (B2V) is within our service area as part of the broader HRM coverage.',
      },
      {
        question: 'How do I get a shipping quote for Dartmouth?',
        answer:
          'Use our online quote form, call +1 (437) 727 0000, or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'What is the difference between Dartmouth and Halifax delivery?',
        answer:
          'Both are served under our Halifax Regional Municipality operation. The delivery experience, timing, and service quality are identical.',
      },
      {
        question: 'Do you deliver Amazon business packages to Dartmouth Crossing?',
        answer:
          'Yes. We deliver to all commercial addresses in Dartmouth including the Dartmouth Crossing retail and business park.',
      },
    ],
    metaTitle: 'Amazon Delivery in Dartmouth, NS | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon delivery in Dartmouth, Nova Scotia by Jaatram Logistics. Covering B2W, B2X, B2Y and all Dartmouth communities. Call +1 (437) 727 0000.',
  },
  {
    name: 'Sydney',
    slug: 'sydney',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Cape Breton',
    populationTier: 'mid',
    lat: 46.1368,
    lng: -60.1942,
    nearbyStation: 'YQY Sydney',
    heroHeadline: 'Amazon Delivery in Sydney, Nova Scotia',
    introParagraph:
      "Sydney and Cape Breton Island represent our easternmost service area in Atlantic Canada. Jaatram Logistics delivers Amazon packages to Sydney, North Sydney, Glace Bay, and surrounding Cape Breton communities, ensuring that residents of this beautiful island receive the same quality of service as those in major urban centres.",
    serviceHighlights: [
      'Cape Breton Island coverage including Sydney, North Sydney, and Glace Bay',
      'Service to Cape Breton University and surrounding student areas',
      'Consistent 7-day delivery service to all covered areas',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Sydney, Cape Breton?',
        answer:
          'Yes. We serve Sydney and surrounding Cape Breton communities including North Sydney, Glace Bay, New Waterford, and parts of Victoria County.',
      },
      {
        question: 'Do you deliver to Cape Breton University?',
        answer:
          'Yes. We cover CBU and surrounding student areas in Sydney (B1P, B1R, B1S) postal code areas.',
      },
      {
        question: 'How long does Amazon delivery take to Sydney, NS?',
        answer:
          'Delivery times are determined by Amazon. Once dispatched to Jaatram Logistics, we deliver on the same day or next business day as scheduled.',
      },
      {
        question: 'Do you deliver to rural Cape Breton areas?',
        answer:
          'We primarily cover Sydney metro and adjacent communities. For rural Cape Breton, please contact us to verify specific addresses.',
      },
      {
        question: 'What is the contact number for Sydney, NS deliveries?',
        answer:
          'Call us at +1 (437) 727 0000, available 7 days, 8AM–8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Sydney, NS | Jaatram Logistics',
    metaDescription:
      'Amazon last-mile delivery in Sydney, Cape Breton by Jaatram Logistics. Serving B1P–B1S and surrounding Cape Breton communities. Get a free quote.',
  },
  {
    name: 'Truro',
    slug: 'truro',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Colchester County',
    populationTier: 'small',
    lat: 45.3647,
    lng: -63.2562,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in Truro, Nova Scotia',
    introParagraph:
      "Truro is Nova Scotia's hub city the geographic centre of the province and Jaatram Logistics ensures this pivotal community is fully served. We deliver Amazon packages across Truro and extending into Colchester County communities, providing the same reliable service that serves our major urban markets.",
    serviceHighlights: [
      'Truro and Colchester County coverage including Bible Hill and Millbrook',
      'Central Nova Scotia location supports reliable multi-community delivery',
      '7-day weekly service with no surcharges for Nova Scotia communities',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Truro, NS?',
        answer:
          'Yes. We serve Truro and Colchester County including postal codes B2N, B6L and surrounding areas.',
      },
      {
        question: 'Do you deliver to Bible Hill and Millbrook near Truro?',
        answer:
          'Yes. Bible Hill and Millbrook are within our Truro service area.',
      },
      {
        question: 'How do I get a shipping quote for Truro?',
        answer:
          'Fill in our online quote form or call +1 (437) 727 0000.',
      },
      {
        question: 'Is Amazon delivery reliable in Truro?',
        answer:
          'Jaatram Logistics has a 4.9-star Google rating and 6,000+ completed deliveries. We apply the same high standards to every delivery regardless of city size.',
      },
      {
        question: 'What delivery days are available in Truro?',
        answer:
          'Monday through Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Truro, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Truro, Nova Scotia by Jaatram Logistics. Serving B2N, B6L and Colchester County. 4.9-star rated, 7-day service. Request a free quote.',
  },
  {
    name: 'New Glasgow',
    slug: 'new-glasgow',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Pictou County',
    populationTier: 'small',
    lat: 45.5906,
    lng: -62.6461,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in New Glasgow, Nova Scotia',
    introParagraph:
      "New Glasgow and Pictou County receive the full Jaatram Logistics experience reliable, professional Amazon last-mile delivery without the limitations often faced by smaller Nova Scotia communities. We serve New Glasgow, Stellarton, Westville, Trenton, and the broader Pictou County area.",
    serviceHighlights: [
      'Pictou County coverage including New Glasgow, Stellarton, and Westville',
      'Consistent service schedule no service gaps for smaller communities',
      'Local delivery expertise with knowledge of Pictou County roads',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to New Glasgow, NS?',
        answer:
          'Yes. We serve New Glasgow (B2H) and surrounding Pictou County communities.',
      },
      {
        question: 'Do you deliver to Stellarton and Westville near New Glasgow?',
        answer:
          'Yes. Stellarton, Westville, and Trenton are all within our New Glasgow service area.',
      },
      {
        question: 'How do I request delivery service in New Glasgow?',
        answer:
          'Call +1 (437) 727 0000 or submit our online quote form.',
      },
      {
        question: 'Is Amazon Prime delivery available in New Glasgow?',
        answer:
          'Yes, Amazon Prime delivery is available in New Glasgow. Jaatram Logistics handles the last-mile execution.',
      },
      {
        question: 'What is the latest delivery time in New Glasgow?',
        answer:
          'Deliveries are made up to 8PM, seven days a week.',
      },
    ],
    metaTitle: 'Amazon Delivery in New Glasgow, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in New Glasgow and Pictou County by Jaatram Logistics. Serving B2H and surrounding NS communities. 7-day service. Get a quote today.',
  },
  {
    name: 'Kentville',
    slug: 'kentville',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Kings County',
    populationTier: 'small',
    lat: 45.0773,
    lng: -64.4935,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in Kentville, Nova Scotia',
    introParagraph:
      "Kentville the commercial heart of Nova Scotia's Annapolis Valley is served by Jaatram Logistics as part of our Kings County coverage. We deliver Amazon packages to Kentville and extend service to New Minas, Berwick, Wolfville, and the broader Valley region.",
    serviceHighlights: [
      'Annapolis Valley coverage including New Minas, Berwick, and Wolfville',
      'Service to Acadia University and surrounding student communities',
      'Rural-friendly delivery to Valley communities',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Kentville, NS?',
        answer:
          'Yes. We serve Kentville (B4N) and the surrounding Kings County area.',
      },
      {
        question: 'Do you deliver to Wolfville and Acadia University?',
        answer:
          'Yes. Wolfville and the Acadia University area are within our Kings County service zone.',
      },
      {
        question: 'How do I contact Jaatram Logistics for Kentville delivery?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Do you cover rural areas in Kings County?',
        answer:
          'We cover main urban areas in Kings County. For specific rural addresses, please contact us to confirm.',
      },
      {
        question: 'What days do you deliver in Kentville?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Kentville, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Kentville and Kings County, NS by Jaatram Logistics. Serving B4N and Annapolis Valley communities. Request a free quote today.',
  },
  {
    name: 'Bridgewater',
    slug: 'bridgewater',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'South Shore',
    populationTier: 'small',
    lat: 44.3784,
    lng: -64.5203,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in Bridgewater, Nova Scotia',
    introParagraph:
      "Bridgewater is the service centre for Nova Scotia's beautiful South Shore region, and Jaatram Logistics ensures Amazon packages reach this community and neighbouring towns like Liverpool, Lunenburg, and Mahone Bay with the same efficiency as any major city.",
    serviceHighlights: [
      'South Shore NS coverage including Lunenburg, Liverpool, and Mahone Bay',
      'Scenic South Shore routes covered by our professional delivery team',
      'Consistent service regardless of community size or location',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics serve Bridgewater, NS?',
        answer:
          'Yes. We cover Bridgewater (B4V) and surrounding South Shore communities.',
      },
      {
        question: 'Do you deliver to Lunenburg and Mahone Bay?',
        answer:
          'Yes. Lunenburg (B0J) and Mahone Bay are part of our South Shore service area.',
      },
      {
        question: 'What is the contact for Bridgewater delivery?',
        answer:
          'Call +1 (437) 727 0000, email jaatramlogistics@gmail.com, or fill in our online quote form.',
      },
      {
        question: 'How long does Amazon delivery take to Bridgewater?',
        answer:
          'We execute delivery on the day Amazon schedules it. Timing depends on your order\'s Prime eligibility.',
      },
      {
        question: 'Do you deliver on weekends in Bridgewater?',
        answer:
          'Yes we deliver 7 days a week, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Bridgewater, NS | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon delivery in Bridgewater and South Shore NS by Jaatram Logistics. Covering B4V, Lunenburg, and more. 7-day delivery. Get a quote.',
  },
  {
    name: 'Amherst',
    slug: 'amherst',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Cumberland County',
    populationTier: 'small',
    lat: 45.8291,
    lng: -64.2157,
    nearbyStation: 'YQM Moncton',
    heroHeadline: 'Amazon Delivery in Amherst, Nova Scotia',
    introParagraph:
      "Amherst sits at the gateway between Nova Scotia and New Brunswick, and our cross-provincial operations make us uniquely suited to serve this border community. Jaatram Logistics delivers Amazon packages to Amherst and Cumberland County with the same professionalism that serves our Atlantic Canada customers.",
    serviceHighlights: [
      'Gateway community served from both NS and NB operations',
      'Cumberland County coverage including Springhill and Oxford',
      'Cross-provincial expertise with operations on both sides of the border',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Amherst, NS?',
        answer:
          'Yes. We serve Amherst (B4H) and Cumberland County from our Atlantic operations.',
      },
      {
        question: 'Do you also serve Moncton, NB from Amherst?',
        answer:
          'Yes. Our operations span both Nova Scotia and New Brunswick, so we seamlessly serve both sides of the border.',
      },
      {
        question: 'What is the delivery schedule for Amherst?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
      {
        question: 'Do you deliver to Springhill and Oxford near Amherst?',
        answer:
          'Yes. Springhill and Oxford are within our Cumberland County service area.',
      },
      {
        question: 'How do I reach Jaatram Logistics?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
    ],
    metaTitle: 'Amazon Delivery in Amherst, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Amherst, Nova Scotia by Jaatram Logistics. Serving B4H and Cumberland County. Gateway between NS and NB. Get a free quote.',
  },
  {
    name: 'Antigonish',
    slug: 'antigonish',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Antigonish County',
    populationTier: 'small',
    lat: 45.6238,
    lng: -61.9968,
    nearbyStation: 'YHZ Halifax',
    heroHeadline: 'Amazon Delivery in Antigonish, Nova Scotia',
    introParagraph:
      "Antigonish home to St. Francis Xavier University and Nova Scotia's vibrant Gaelic culture receives reliable Amazon delivery service through Jaatram Logistics. We serve the town and surrounding county, ensuring university students, local residents, and businesses all receive their packages promptly.",
    serviceHighlights: [
      'University town delivery to StFX students and faculty',
      'Antigonish County coverage including Arisaig and Malignant Cove',
      'Reliable service for a community that matters',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Antigonish, NS?',
        answer:
          'Yes. We serve Antigonish (B2G) and surrounding Antigonish County communities.',
      },
      {
        question: 'Do you deliver to St. Francis Xavier University?',
        answer:
          'Yes. StFX and student residences in Antigonish are within our service area.',
      },
      {
        question: 'How do I get a delivery quote for Antigonish?',
        answer:
          'Call +1 (437) 727 0000 or fill in our online form.',
      },
      {
        question: 'Do you deliver on weekends in Antigonish?',
        answer:
          'Yes 7 days a week, 8AM to 8PM.',
      },
      {
        question: 'Is Amazon Prime available in Antigonish?',
        answer:
          'Yes. Amazon Prime delivery is available. Jaatram Logistics handles the last-mile portion.',
      },
    ],
    metaTitle: 'Amazon Delivery in Antigonish, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Antigonish, NS by Jaatram Logistics. Serving StFX University and B2G postal code. Professional, 7-day delivery service. Get a quote.',
  },
  {
    name: 'Yarmouth',
    slug: 'yarmouth',
    province: 'nova-scotia',
    provinceLabel: 'Nova Scotia',
    provinceAbbr: 'NS',
    region: 'Yarmouth County',
    populationTier: 'small',
    lat: 43.8369,
    lng: -66.1169,
    nearbyStation: 'YYG Halifax',
    heroHeadline: 'Amazon Delivery in Yarmouth, Nova Scotia',
    introParagraph:
      "At the southwestern tip of Nova Scotia, Yarmouth is one of the province's most distinctive communities and Jaatram Logistics makes sure its residents don't miss out on reliable Amazon delivery. We serve Yarmouth and surrounding communities in Yarmouth County, bringing packages to this coastal gateway.",
    serviceHighlights: [
      'Southwestern NS coverage no community too remote for Jaatram',
      'Yarmouth County and surrounding area service',
      'Same professional standards as our major market operations',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Yarmouth, NS?',
        answer:
          'Yes. We serve Yarmouth (B5A) and surrounding Yarmouth County communities.',
      },
      {
        question: 'Do you deliver to Digby from Yarmouth?',
        answer:
          'Please contact us to confirm coverage for Digby and Digby County.',
      },
      {
        question: 'What is the phone number for Yarmouth delivery inquiries?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Is Amazon Prime available in Yarmouth?',
        answer:
          'Yes, Amazon Prime service is available in Yarmouth, NS.',
      },
      {
        question: 'What days do you deliver in Yarmouth?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Yarmouth, NS | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Yarmouth, Nova Scotia by Jaatram Logistics. Serving B5A and Yarmouth County. Southwest NS\'s reliable delivery partner. Get a quote.',
  },

  // ── NEW BRUNSWICK ──────────────────────────────────────────────────────
  {
    name: 'Moncton',
    slug: 'moncton',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Greater Moncton',
    populationTier: 'metro',
    lat: 46.0878,
    lng: -64.7782,
    nearbyStation: 'YQM Moncton',
    heroHeadline: 'Amazon Delivery in Moncton, New Brunswick',
    introParagraph:
      "Moncton New Brunswick's largest city and economic hub is a key market for Jaatram Logistics in Atlantic Canada. We deliver Amazon packages across Greater Moncton including Dieppe and Riverview, serving both English and French-speaking communities with professional, on-time delivery service and a 4.9-star reputation.",
    serviceHighlights: [
      'Greater Moncton coverage including Dieppe and Riverview',
      'Bilingual community service (English and French)',
      'Commercial delivery to Moncton business parks and downtown',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver Amazon packages in Moncton?',
        answer:
          'Yes. We serve all of Greater Moncton including Moncton (E1A–E1H), Dieppe (E1A), and Riverview (E1B).',
      },
      {
        question: 'Do you deliver to Dieppe and Riverview?',
        answer:
          'Yes. Dieppe and Riverview are part of our Greater Moncton service area.',
      },
      {
        question: 'Do you provide service in both English and French in Moncton?',
        answer:
          'We welcome calls in both English and French. Moncton is a bilingual city and we respect that.',
      },
      {
        question: 'Do you deliver to Université de Moncton?',
        answer:
          'Yes. The Université de Moncton campus and student residences are within our service area.',
      },
      {
        question: 'How do I contact Jaatram Logistics for a Moncton delivery?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com available 7 days, 8AM–8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Moncton, NB | Jaatram Logistics',
    metaDescription:
      'Reliable Amazon delivery in Moncton, NB by Jaatram Logistics. Serving E1A–E1H, Dieppe, and Riverview. Bilingual service, 4.9-star rated. Get a quote.',
  },
  {
    name: 'Fredericton',
    slug: 'fredericton',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'York County',
    populationTier: 'mid',
    lat: 45.9636,
    lng: -66.6431,
    nearbyStation: 'YFC Fredericton',
    heroHeadline: 'Amazon Delivery in Fredericton, New Brunswick',
    introParagraph:
      "Fredericton, the capital of New Brunswick, is served by Jaatram Logistics with the professionalism befitting a provincial capital. We deliver Amazon packages to all Fredericton neighbourhoods from University Avenue to Silverwood to Hanwell as well as government and commercial addresses throughout the city.",
    serviceHighlights: [
      'Capital city coverage including government district and University of New Brunswick',
      'Service to Fredericton Junction and surrounding York County communities',
      '7-day professional delivery service',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Fredericton?',
        answer:
          'Yes. We serve Fredericton and surrounding York County, covering E3A through E3G postal codes.',
      },
      {
        question: 'Do you deliver to the University of New Brunswick and STU?',
        answer:
          'Yes. UNB, St. Thomas University campuses, and student housing areas are fully within our coverage.',
      },
      {
        question: 'Do you deliver to government addresses in Fredericton?',
        answer:
          'Yes. We deliver to all commercial and government addresses in Fredericton, including provincial government buildings.',
      },
      {
        question: 'How do I contact Jaatram for Fredericton delivery?',
        answer:
          'Call +1 (437) 727 0000 or fill out our online quote form.',
      },
      {
        question: 'Do you serve Oromocto and CFB Gagetown near Fredericton?',
        answer:
          'Please contact us to confirm specific coverage for military base addresses. We serve Oromocto (E2V) as a standard community.',
      },
    ],
    metaTitle: 'Amazon Delivery in Fredericton, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Fredericton, New Brunswick by Jaatram Logistics. Serving E3A–E3G, UNB area, and York County. Certified IDC. Request a free quote.',
  },
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
    heroHeadline: 'Amazon Delivery in Saint John, New Brunswick',
    introParagraph:
      "Saint John New Brunswick's oldest incorporated city and an industrial powerhouse is fully served by Jaatram Logistics. We deliver Amazon packages across Saint John and the Greater Saint John region including Quispamsis, Rothesay, and Grand Bay-Westfield, keeping pace with the city's strong e-commerce growth.",
    serviceHighlights: [
      'Greater Saint John coverage including Quispamsis, Rothesay, and Grand Bay-Westfield',
      'Industrial and commercial deliveries to harbour-area businesses',
      'Experienced drivers familiar with Saint John\'s unique geography',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Saint John, NB?',
        answer:
          'Yes. We serve Saint John (E2J–E2P) and Greater Saint John communities including Quispamsis and Rothesay.',
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
    metaTitle: 'Amazon Delivery in Saint John, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Saint John, New Brunswick by Jaatram Logistics. Covering E2J–E2P, Quispamsis, Rothesay. 4.9-star rated. Get a free quote today.',
  },
  {
    name: 'Bathurst',
    slug: 'bathurst',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Gloucester County',
    populationTier: 'small',
    lat: 47.6195,
    lng: -65.6506,
    nearbyStation: 'ZBF Bathurst',
    heroHeadline: 'Amazon Delivery in Bathurst, New Brunswick',
    introParagraph:
      "Bathurst is northern New Brunswick's commercial centre, and Jaatram Logistics ensures this community and surrounding Gloucester County receive dependable Amazon delivery. We serve Bathurst and extend coverage to Belledune, Caraquet, and Acadie-Bathurst communities.",
    serviceHighlights: [
      'Northern NB coverage from Bathurst including Belledune and Caraquet',
      'Bilingual service for Acadian communities',
      'Consistent delivery schedule regardless of northern NB location',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Bathurst, NB?',
        answer:
          'Yes. We serve Bathurst (E2A) and surrounding Gloucester County communities.',
      },
      {
        question: 'Do you deliver to Caraquet and Belledune?',
        answer:
          'Yes. Caraquet and Belledune are within our northern NB service area.',
      },
      {
        question: 'Do you provide French-language service in Bathurst?',
        answer:
          'Yes. Bathurst is in a predominantly Francophone region and we welcome inquiries in French.',
      },
      {
        question: 'How do I request delivery to Bathurst?',
        answer:
          'Call +1 (437) 727 0000 or submit our online form.',
      },
      {
        question: 'What days do you deliver in Bathurst?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Bathurst, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Bathurst, New Brunswick by Jaatram Logistics. Serving E2A and Gloucester County. Bilingual service. Get a free quote today.',
  },
  {
    name: 'Miramichi',
    slug: 'miramichi',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Northumberland County',
    populationTier: 'small',
    lat: 47.0196,
    lng: -65.5022,
    nearbyStation: 'YCH Miramichi',
    heroHeadline: 'Amazon Delivery in Miramichi, New Brunswick',
    introParagraph:
      "Miramichi the River City and surrounding Northumberland County are fully served by Jaatram Logistics. We deliver Amazon packages to Miramichi's combined communities (formerly Chatham and Newcastle) and extend service to Newcastle, Chatham Head, and neighbouring areas along the Miramichi River.",
    serviceHighlights: [
      'Miramichi River communities coverage including former Chatham and Newcastle areas',
      'Northumberland County delivery extending to surrounding municipalities',
      'Reliable delivery to this underserved NB region',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Miramichi, NB?',
        answer:
          'Yes. We serve Miramichi (E1N, E1V) and Northumberland County.',
      },
      {
        question: 'Do you cover both the Chatham and Newcastle sides of Miramichi?',
        answer:
          'Yes. Miramichi is a unified city and we serve all areas including former Chatham, Newcastle, and surrounding communities.',
      },
      {
        question: 'How do I reach Jaatram for a Miramichi delivery?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Is Amazon Prime available in Miramichi?',
        answer:
          'Yes. Amazon Prime is available in Miramichi.',
      },
      {
        question: 'What are your delivery hours in Miramichi?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Miramichi, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Miramichi, New Brunswick by Jaatram Logistics. Serving E1N, E1V and Northumberland County. 7-day service. Get a quote today.',
  },
  {
    name: 'Edmundston',
    slug: 'edmundston',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Madawaska County',
    populationTier: 'small',
    lat: 47.3668,
    lng: -68.3253,
    nearbyStation: 'YSL Edmundston',
    heroHeadline: 'Amazon Delivery in Edmundston, New Brunswick',
    introParagraph:
      "Edmundston sits at New Brunswick's northwestern edge on the Quebec border, and Jaatram Logistics ensures this Francophone community receives reliable Amazon delivery service. We serve Edmundston and surrounding Madawaska County, bridging this borderland community to the rest of our Atlantic operations.",
    serviceHighlights: [
      'Northwestern NB gateway community covered by Jaatram',
      'Madawaska County coverage including St-Basile and Grand Falls/Grand-Sault',
      'French-first service for Edmundston\'s Francophone community',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Edmundston, NB?',
        answer:
          'Yes. We serve Edmundston (E3V) and surrounding Madawaska County.',
      },
      {
        question: 'Do you provide French-language service in Edmundston?',
        answer:
          'Yes. Edmundston is a predominantly Francophone city and we welcome service requests in French.',
      },
      {
        question: 'Do you deliver to Grand Falls / Grand-Sault near Edmundston?',
        answer:
          'Yes, Grand Falls / Grand-Sault is within our service reach from Edmundston.',
      },
      {
        question: 'How do I contact Jaatram Logistics in Edmundston?',
        answer:
          'Call +1 (437) 727 0000 or fill in our online quote form.',
      },
      {
        question: 'What delivery days are available in Edmundston?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Edmundston, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Edmundston, New Brunswick by Jaatram Logistics. Serving E3V and Madawaska County. French-language service available. Get a quote.',
  },
  {
    name: 'Campbellton',
    slug: 'campbellton',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Restigouche County',
    populationTier: 'small',
    lat: 48.0049,
    lng: -66.6737,
    nearbyStation: 'YCL Campbellton',
    heroHeadline: 'Amazon Delivery in Campbellton, New Brunswick',
    introParagraph:
      "Campbellton, situated on the Restigouche River across from Pointe-à-la-Croix, QC, is served by Jaatram Logistics as part of our northern New Brunswick operations. We deliver Amazon packages to Campbellton and Restigouche County with reliable, professional service.",
    serviceHighlights: [
      'Restigouche County and Campbellton metro area delivery',
      'Border community expertise spanning NB and QC',
      'Dedicated delivery to northern NB communities',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Campbellton, NB?',
        answer:
          'Yes. We serve Campbellton (E3N) and Restigouche County.',
      },
      {
        question: 'Do you also serve Dalhousie near Campbellton?',
        answer:
          'Yes. Dalhousie is within our Restigouche County service area.',
      },
      {
        question: 'How do I request delivery in Campbellton?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Is French service available in Campbellton?',
        answer:
          'Yes. We welcome inquiries in French for this bilingual community.',
      },
      {
        question: 'What are your delivery hours in Campbellton?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Campbellton, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Campbellton, New Brunswick by Jaatram Logistics. Serving E3N and Restigouche County. Bilingual service. Request a free quote.',
  },
  {
    name: 'Dieppe',
    slug: 'dieppe',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Greater Moncton',
    populationTier: 'mid',
    lat: 46.0907,
    lng: -64.7234,
    nearbyStation: 'YQM Moncton',
    heroHeadline: 'Amazon Delivery in Dieppe, New Brunswick',
    introParagraph:
      "Dieppe is one of Atlantic Canada's fastest-growing cities and a proud Francophone hub adjacent to Moncton. Jaatram Logistics serves Dieppe as part of our Greater Moncton operations, delivering Amazon packages to Dieppe's booming residential developments, commercial strips, and community institutions.",
    serviceHighlights: [
      'Fastest-growing NB city fully covered by Jaatram Logistics',
      'French-first service for Dieppe\'s Acadian community',
      'Coverage includes all new Dieppe residential subdivisions',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver in Dieppe, NB?',
        answer:
          'Yes. Dieppe is part of our Greater Moncton service area.',
      },
      {
        question: 'Do you offer French-language service in Dieppe?',
        answer:
          'Yes. Dieppe is an Acadian francophone city and we welcome service requests in French.',
      },
      {
        question: 'Do you cover all the new subdivisions in Dieppe?',
        answer:
          'Yes. We keep our Dieppe coverage updated as the city grows. All new residential developments are included.',
      },
      {
        question: 'What is the contact for Dieppe deliveries?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'What days do you deliver in Dieppe?',
        answer:
          'Seven days a week, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Dieppe, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Dieppe, New Brunswick by Jaatram Logistics. Covering all Dieppe communities. French service available. 4.9-star rated. Get a quote.',
  },
  {
    name: 'Riverview',
    slug: 'riverview',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Greater Moncton',
    populationTier: 'mid',
    lat: 46.0631,
    lng: -64.7985,
    nearbyStation: 'YQM Moncton',
    heroHeadline: 'Amazon Delivery in Riverview, New Brunswick',
    introParagraph:
      "Riverview the suburb on the south side of the Petitcodiac River is a growing residential community and a key part of the Greater Moncton area that Jaatram Logistics serves. We deliver Amazon packages to all Riverview neighbourhoods with the reliability and care our customers have come to expect.",
    serviceHighlights: [
      'Full Riverview residential coverage as part of Greater Moncton operations',
      'Quick access from Moncton base for fast same-day execution',
      'Suburban delivery expertise for Riverview\'s growing communities',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Riverview, NB?',
        answer:
          'Yes. Riverview is fully served as part of our Greater Moncton operation.',
      },
      {
        question: 'What postal codes in Riverview do you cover?',
        answer:
          'We cover E1B postal codes throughout Riverview.',
      },
      {
        question: 'How quickly is Amazon delivered to Riverview?',
        answer:
          'We execute delivery on the same day Amazon schedules it, following their delivery window.',
      },
      {
        question: 'How do I contact Jaatram Logistics for Riverview?',
        answer:
          'Call +1 (437) 727 0000 or email jaatramlogistics@gmail.com.',
      },
      {
        question: 'Do you deliver to both new and older Riverview neighbourhoods?',
        answer:
          'Yes. We cover all areas of Riverview including both established and newer residential developments.',
      },
    ],
    metaTitle: 'Amazon Delivery in Riverview, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Riverview, New Brunswick by Jaatram Logistics. Serving E1B and all Riverview communities. Part of Greater Moncton ops. Get a quote.',
  },
  {
    name: 'Sussex',
    slug: 'sussex',
    province: 'new-brunswick',
    provinceLabel: 'New Brunswick',
    provinceAbbr: 'NB',
    region: 'Kings County NB',
    populationTier: 'small',
    lat: 45.7241,
    lng: -65.5135,
    nearbyStation: 'YSJ Saint John',
    heroHeadline: 'Amazon Delivery in Sussex, New Brunswick',
    introParagraph:
      "Sussex the dairy capital of Atlantic Canada and Kings County's largest town is served by Jaatram Logistics from our Saint John operations. We deliver Amazon packages to Sussex and extend service to Hampton, Norton, and neighbouring Kings County communities.",
    serviceHighlights: [
      'Kings County NB coverage from our Saint John base',
      'Service to Sussex, Hampton, and Norton',
      'Agricultural community delivery expertise',
    ],
    faqs: [
      {
        question: 'Does Jaatram Logistics deliver to Sussex, NB?',
        answer:
          'Yes. We serve Sussex (E4E) and Kings County from our Saint John operations.',
      },
      {
        question: 'Do you deliver to Hampton near Sussex?',
        answer:
          'Yes. Hampton is within our Kings County service reach.',
      },
      {
        question: 'How do I request delivery to Sussex?',
        answer:
          'Call +1 (437) 727 0000 or fill in our online quote form.',
      },
      {
        question: 'Is Amazon Prime available in Sussex, NB?',
        answer:
          'Yes. Amazon Prime delivery is available in Sussex.',
      },
      {
        question: 'What days do you deliver in Sussex?',
        answer:
          'Monday to Sunday, 8AM to 8PM.',
      },
    ],
    metaTitle: 'Amazon Delivery in Sussex, NB | Jaatram Logistics',
    metaDescription:
      'Amazon delivery in Sussex, New Brunswick by Jaatram Logistics. Serving E4E and Kings County NB. 7-day service. Request a free quote today.',
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

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
