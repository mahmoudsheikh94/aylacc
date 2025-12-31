export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'commercial-buildings',
    title: 'Commercial Buildings',
    description: 'From office complexes to retail spaces, we deliver commercial construction projects that meet the demands of modern business. Our team ensures quality finishes and timely completion.',
    icon: 'building',
    features: ['Office buildings', 'Retail spaces', 'Industrial units', 'Mixed-use developments'],
  },
  {
    id: 'residential-buildings',
    title: 'Residential Buildings',
    description: 'Whether you\'re building your dream home or developing a residential complex, we bring expertise and attention to detail to every residential project across the UK.',
    icon: 'home',
    features: ['New builds', 'Multi-unit developments', 'Luxury homes', 'Affordable housing'],
  },
  {
    id: 'fit-outs',
    title: 'Fit-outs',
    description: 'Transform your interior spaces with our professional fit-out services. We create functional, attractive environments for offices, retail, and hospitality venues.',
    icon: 'layout',
    features: ['Office fit-outs', 'Retail interiors', 'Restaurant fit-outs', 'Shop fronts'],
  },
  {
    id: 'refurbishments',
    title: 'Refurbishments',
    description: 'Breathe new life into existing properties with our comprehensive refurbishment services. We modernise spaces while respecting their original character.',
    icon: 'refresh',
    features: ['Full renovations', 'Period property restoration', 'Modernisation', 'Structural repairs'],
  },
  {
    id: 'loft-conversions',
    title: 'Loft Conversions',
    description: 'Maximise your living space with a professionally designed loft conversion. We handle everything from planning applications to the final finishes.',
    icon: 'stairs',
    features: ['Dormer conversions', 'Hip-to-gable', 'Velux conversions', 'L-shaped conversions'],
  },
  {
    id: 'extensions',
    title: 'Extensions',
    description: 'Expand your property with seamless extensions that blend perfectly with your existing structure. From single-storey to wraparound extensions, we deliver results.',
    icon: 'expand',
    features: ['Single storey', 'Double storey', 'Side returns', 'Wraparound extensions'],
  },
];

// Service schema for SEO
export const getServiceSchema = (service: Service, siteUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Ayla Construction LTD',
    url: siteUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: service.title,
});
