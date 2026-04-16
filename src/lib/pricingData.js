export const carCorePackages = [
  {
    name: 'Wash & Wax',
    id: 'tier-wash-wax',
    price: '$160+',
    description:
      'Ideal for routine exterior care with foam wash, clay treatment, and ceramic wax.',
    highlights: ['Foam cannon wash', 'Clay bar', 'Ceramic wax', 'Tire shine'],
  },
  {
    name: 'Full Interior',
    id: 'tier-full-interior',
    price: '$160+',
    description:
      'Deep interior cleaning and treatment for cabins that need full refresh and protection.',
    highlights: [
      'Thorough vacuum',
      'Interior wipe down',
      'Glass cleaning',
      'Leather and vinyl treatment',
    ],
  },
  {
    name: 'Full Detail',
    id: 'tier-full-detail',
    price: '$265+',
    description:
      'Complete inside and outside package with correction-focused cleaning and protection.',
    highlights: [
      'Exterior wash and clay',
      'Interior full clean',
      'Small stain removal',
      'Wax protection',
    ],
    mostPopular: true,
  },
]

export const carComparisonSections = [
  {
    name: 'Exterior',
    features: [
      {
        name: 'Foam cannon wash',
        tiers: { 'Wash & Wax': true, 'Full Interior': false, 'Full Detail': true },
      },
      {
        name: 'Clay bar treatment',
        tiers: { 'Wash & Wax': true, 'Full Interior': false, 'Full Detail': true },
      },
      {
        name: 'Ceramic wax',
        tiers: { 'Wash & Wax': true, 'Full Interior': false, 'Full Detail': true },
      },
      {
        name: 'Wheels and tire shine',
        tiers: { 'Wash & Wax': true, 'Full Interior': false, 'Full Detail': true },
      },
    ],
  },
  {
    name: 'Interior',
    features: [
      {
        name: 'Thorough vacuum and wipe down',
        tiers: { 'Wash & Wax': false, 'Full Interior': true, 'Full Detail': true },
      },
      {
        name: 'Interior and exterior glass',
        tiers: { 'Wash & Wax': false, 'Full Interior': true, 'Full Detail': true },
      },
      {
        name: 'Plastics, vinyl, and leather treatment',
        tiers: { 'Wash & Wax': false, 'Full Interior': true, 'Full Detail': true },
      },
      {
        name: 'Small stain removal',
        tiers: { 'Wash & Wax': false, 'Full Interior': 'Light', 'Full Detail': true },
      },
    ],
  },
  {
    name: 'Protection & Upgrades',
    features: [
      {
        name: 'Evaluation on arrival',
        tiers: { 'Wash & Wax': true, 'Full Interior': true, 'Full Detail': true },
      },
      {
        name: 'Shampoo treatment',
        tiers: {
          'Wash & Wax': 'Add-on',
          'Full Interior': 'Add-on',
          'Full Detail': 'Add-on',
        },
      },
      {
        name: 'Steam cleaning',
        tiers: {
          'Wash & Wax': 'Add-on',
          'Full Interior': 'Add-on',
          'Full Detail': 'Add-on',
        },
      },
      {
        name: 'System X ceramic coating',
        tiers: {
          'Wash & Wax': 'Available',
          'Full Interior': 'Available',
          'Full Detail': 'Available',
        },
      },
    ],
  },
]

export const carDetailPackages = [
  {
    name: 'Wash & Wax',
    pricing: [
      'Sedans: $160',
      'SUV/Pickup Truck: $180',
      'Large/Work Trucks: $220-260',
    ],
    features: [
      'Foam cannon',
      'Windows cleaned',
      'Rims and wheel wells cleaned',
      'Tire shine',
      'Door jambs cleaned',
      'Clay bar',
      'Ceramic wax',
    ],
    evaluationNote: true,
  },
  {
    name: 'Full Interior',
    pricing: [
      'Sedans: $160',
      'SUV/Pickup Truck: $180',
      'Large/Work Trucks: $220-260',
    ],
    features: [
      'Thorough vacuum and wipe down',
      'UVA and UVB pH-balanced protection spray',
      'Door jambs cleaned',
      'Interior and exterior glass cleaned',
      'Plastics, vinyls, and leathers treated',
    ],
    evaluationNote: true,
  },
  {
    name: 'Wax & Basic Clean',
    pricing: [
      'Sedans: $200',
      'SUV/Pickup Truck: $225',
      'Large/Work Trucks: $240-300',
    ],
    features: [
      'Foam cannon',
      'Windows cleaned',
      'Rims and wheel wells cleaned',
      'Tire shine',
      'Clay bar',
      'Ceramic wax',
      'Door jambs cleaned',
      'Interior vacuum',
      'Interior wipe down',
    ],
    evaluationNote: true,
  },
  {
    name: 'Full Interior & Basic Wash',
    pricing: [
      'Sedans: $200',
      'SUV/Pickup Truck: $225',
      'Large/Work Trucks: $240-300',
    ],
    features: [
      'Thorough vacuum and wipe down',
      'UVA and UVB pH-balanced protection spray',
      'Door jambs cleaned',
      'Interior and exterior glass cleaned',
      'Dash and seats treated',
      'Plastics, vinyls, and leathers treated',
      'Foam cannon',
      'Windows cleaned',
      'Rims and wheel wells cleaned',
      'Tire shine',
    ],
    evaluationNote: true,
  },
  {
    name: 'Full Detail',
    pricing: [
      'Sedans: $265',
      'SUV/Pickup Truck: $295',
      'Large/Work Trucks: $320-400',
    ],
    additionalPricing: [
      'Shampoo treatment prices:',
      'Sedan/Coupe: $50',
      'SUV/Truck: $75',
    ],
    features: [
      'Foam cannon',
      'Windows cleaned',
      'Interior vacuum and complete wipe down',
      'Plastics, vinyls, and leathers treated',
      'Rims and wheel wells cleaned',
      'Tire shine',
      'Small stain removal',
      'Door jambs cleaned',
      'Clay bar and wax',
    ],
    evaluationNote: true,
  },
  {
    name: 'Disaster Detail',
    pricing: ['Pricing varies by condition'],
    description:
      'This package includes everything in a Full Detail and adds deep restoration work for heavily used interiors. It targets stains, debris, odor treatment, and hard-to-reach buildup.',
    note: 'This service can include carpet shampoo, steam cleaning, and ozone treatment. Polishing is not included.',
  },
]

export const carAddOnServices = [
  {
    name: 'Shampoo Treatment',
    pricing: ['Sedan/Coupe: $45', 'SUV/Truck: $65'],
    description:
      'Shampoo treatment for cloth seats and carpet helps reduce odors, remove stains, and maintain interior longevity.',
  },
  {
    name: 'Steam Clean',
    pricing: ['Sedan/Coupe: $80', 'SUV/Truck: $100'],
    description:
      'Steam cleaning helps remove stubborn stains while sanitizing interior surfaces without harsh chemicals.',
  },
  {
    name: 'Odor Removal',
    pricing: ['$80 for all vehicle sizes'],
    description:
      'Ozone treatment removes cigarette, mold, musty, and foul smells. Doors should remain open for two hours after service.',
  },
  {
    name: 'Polish',
    pricing: ['Contact for pricing'],
    description:
      'Polish restores shine and helps remove spiderweb scratches. One-step and two-step options are available based on paint condition.',
    note: 'Evaluation and recommendation upon arrival.',
  },
]

export const boatPackages = [
  {
    name: 'Detailed Wash',
    pricing: '$14/Foot',
    features: [
      'Complete wash (waterline up if in water)',
      'Cleaning under hatches',
      'Cleaning gutter hatches when accessible',
      'Removal of salt, bird droppings, and dirt',
      'Clean and dry windows and brightwork',
      'Remove mildew from seats',
    ],
  },
  {
    name: 'Wash and Wax',
    pricing: '$20/Foot',
    features: [
      'Includes everything from detailed wash',
      'Ceramic wax on hull and topside (waterline up if in water)',
      'Wax lasts approximately 4 to 5 months in exposed conditions',
    ],
  },
  {
    name: 'Wash, Wax, and Polish',
    pricing: '$32-40/Foot',
    features: [
      'Includes everything in wash and wax',
      'Polish all gelcoat surfaces (waterline up if in water)',
    ],
  },
]
