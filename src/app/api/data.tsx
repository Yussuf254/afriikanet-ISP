export const TruestedCompanies: { imgSrc: string }[] = [
  {
    imgSrc: "/images/companies/airbnb.svg"
  },
  {
    imgSrc: "/images/companies/fedex.svg"
  },
  {
    imgSrc: "/images/companies/google.svg"
  },
  {
    imgSrc: "/images/companies/hubspot.svg"
  },
  {
    imgSrc: "/images/companies/microsoft.svg"
  },
  {
    imgSrc: "/images/companies/walmart.svg"
  },
]

export const pricingData: {
  heading: string;
  subheading: string;
  features: string[];
  price: string;
  pricePeriod: string;
  isPopular: boolean;
}[] = [
    {
      heading: 'Starter',
      subheading: 'Perfect for small ISPs',
      price: 'KSh 1,000',
      pricePeriod: '/month',
      isPopular: false,
      features: [
        'Up to 100 users',
        'Basic billing reports',
        'Email support',
        'Bandwidth monitoring',
        'User management'
      ],
    },
    {
      heading: 'Professional',
      subheading: 'Best for growing businesses',
      price: 'KSh 2,500',
      pricePeriod: '/month',
      isPopular: true,
      features: [
        'Up to 500 users',
        'Advanced analytics',
        'Priority support',
        'Auto-invoicing',
        'Multi-location support',
        'API access'
      ],
    },
    {
      heading: 'Enterprise',
      subheading: 'For large scale operations',
      price: 'Custom',
      pricePeriod: '',
      isPopular: false,
      features: [
        'Unlimited users',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
    },
  ]

export const MentorData: { profession: string; name: string; imgSrc: string; message: string }[] = [
  {
    profession: 'Director/CEO',
    name: 'Hamisi Yusuf Suleiman',
    imgSrc: '/images/mentor/user1.jpg',
    message: 'Our journey began with a simple yet powerful vision: to transform how Internet Service Providers across Africa manage their businesses. We understood the unique challenges faced by ISPs on the continent, and we built Afriikanet from the ground up to address these needs.',
  },
  {
    profession: 'CTO',
    name: 'Abdi Mohammed',
    imgSrc: '/images/mentor/user2.jpg',
    message: 'Technical excellence is at the core of everything we do. Our team continuously works to ensure Afriikanet remains robust, secure, and scalable for ISPs of all sizes.',
  },
  {
    profession: 'Operations Manager',
    name: 'Fatma Ali',
    imgSrc: '/images/mentor/user3.jpg',
    message: 'Efficient operations are the backbone of any successful ISP. We strive to streamline processes and provide tools that help our clients focus on what matters most - serving their customers.',
  },
  {
    profession: 'Sales Director',
    name: 'Khalfan Mohamed',
    imgSrc: '/images/mentor/user4.jpg',
    message: 'Building lasting relationships with our clients is my passion. We are committed to understanding their needs and delivering solutions that exceed expectations.',
  },
]

export const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number; }[] = [
  {
    name: "James Mwangi",
    profession: 'CEO, NetConnect Kenya',
    comment: 'Afriikanet transformed our billing operations. We now process payments 3x faster with automated invoicing.',
    imgSrc: '/images/testimonial/user.svg',
    rating: 5
  },
  {
    name: "Grace Akinyi",
    profession: 'Manager, RapidNet ISP',
    comment: 'The best investment we made for our ISP business. Customer management has never been easier.',
    imgSrc: '/images/mentor/user2.jpg',
    rating: 5
  },
  {
    name: "David Odhiambo",
    profession: 'Director, SwiftLink Africa',
    comment: 'Outstanding support and powerful features. Our revenue increased by 40% in just 3 months.',
    imgSrc: '/images/mentor/user3.jpg',
    rating: 5
  },
  {
    name: "Sarah Wanjiku",
    profession: 'CEO, ConnectPlus Ltd',
    comment: 'Afriikanet has simplified our entire billing process. Highly recommended for ISPs in Africa.',
    imgSrc: '/images/testimonial/user.svg',
    rating: 5
  },
]
