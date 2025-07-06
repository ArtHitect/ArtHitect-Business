// src/data/projectDetails.ts

export interface ProjectSection {
  image: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  sections: ProjectSection[];
}

const projectDetails: ProjectDetail[] = [
  {
    slug: 'babyheaven',
    title: 'BABYHEAVEN',
    description: 'A modern e-commerce site for sustainable fashion...',
    tech: ['React', 'Stripe', 'Tailwind'],
    sections: [
      {
        image: '/Reference/Babyheaven/hero.jpg',
        title: 'Homepage Design',
        description: 'Hero section with product highlights and call-to-action.'
      },
      {
        image: '/Reference/Babyheaven/about.jpg',
        title: 'About Page',
        description: 'Information about the brand and its mission.'
      },
      {
        image: '/Reference/Babyheaven/shop.jpg',
        title: 'Product Page',
        description: 'Each product page features dynamic pricing and Stripe checkout.'
      },
      {
          image: '/Reference/Babyheaven/contact.jpg',
          title: 'Contact Page',
          description: 'Get in touch with us through our contact form.'
      },
        {
            image: '/Reference/Babyheaven/footer.jpg',
            title: 'Footer Design',
            description: 'Footer with links to social media and contact information.'
        }

    ]
  },
  // Add other projects here...
    
    {
        slug: 'done-deal',
        title: 'Done Deal',
        description: 'An elegant portfolio showcasing carpentry designs...',
        tech: ['React', 'Lightbox', 'CSS Grid'],
        sections: [
        {
            image: '/Reference/Done Deal/hero.jpg',
            title: 'Homepage Design',
            description: 'Hero section featuring the companies description and logo.'
        },
        {
            image: '/Reference/Done Deal/service.jpg',
            title: 'Service Page',
            description: 'Showcasing the various carpentry services offered.'
        },
        {
            image: '/Reference/Done Deal/blog.jpg',
            title: 'Blog',
            description: 'Insights and articles on carpentry trends.'
        },
        {
            image: '/Reference/Done Deal/reviews.jpg',
            title: 'Customer Reviews',
            description: 'Testimonials from satisfied clients.'
        },
        {
            image: '/Reference/Done Deal/contact.jpg',
            title: 'Contact Page',
            description: 'Get in touch with us through our contact form.'
        },
        {
            image: '/Reference/Done Deal/map.jpg',
            title: 'Map',
            description: 'Location map for the business.'
        }
        ]
    },
    {
        slug: 'shoptech-and-services',
        title: 'ShopTech and Services',
        description: 'Corporate website for software consulting company with team showcase.',
        tech: ['TypeScript', 'Tailwind', 'Vercel'],
        sections: [
        {
            image: '/Reference/ShopTech and Services/hero.jpg',
            title: 'Homepage Design',
            description: 'Professional layout highlighting services and team members.'
        },
        {
            image: '/Reference/ShopTech and Services/featured products.jpg',
            title: 'Featured Products',
            description: 'Showcasing top products with images and descriptions.'
        },
        {
            image: '/Reference/ShopTech and Services/know tech.jpg',
            title: 'Know Your Tech',
            description: 'Educational resources and articles on technology trends.'
        },
        {
            image: '/Reference/ShopTech and Services/services.jpg',
            title: 'Our Services',
            description: 'Overview of the consulting services offered by the company.'
        },
        {
            image: '/Reference/ShopTech and Services/reviews.jpg',
            title: 'Customer Testimonials',
            description: 'Feedback from satisfied clients highlighting successful projects.'
        },
        {
            image: '/Reference/ShopTech and Services/payment.jpg',
            title: 'Payment Options',
            description: 'Information on various payment methods accepted.'
        },
        
        {
            image: '/Reference/ShopTech and Services/main page.jpg',
            title: 'Main Page',
            description: 'Overview of the company and its services.'
        },
        {
            image: '/Reference/ShopTech and Services/main page services.jpg',
            title: 'Main Page Services',
            description: 'Overview of the services offered on the main page.'
        },
        {
            image: '/Reference/ShopTech and Services/main page know tech.jpg',
            title: 'Know Your Tech',
            description: 'Educational resources and articles on technology trends.'
        },
        {
            image: '/Reference/ShopTech and Services/blog.jpg',
            title: 'Blog',
            description: 'Insights and articles on industry trends and best practices.'
        },
        {
            image: '/Reference/ShopTech and Services/footer.jpg',
            title: 'Footer Design',
            description: 'Footer with links to social media and additional resources.'
        },
        ]
    },
    {
        slug: 'home-service',
        title: 'Home Service',
        description: 'Home service website with booking system and service listings.',
        tech: ['React', 'Calendar API', 'Stripe'],
        sections: [
        {
            image: '/Reference/Home Service/hero.jpg',
            title: 'Homepage Design',
            description: 'Inviting hero section with service highlights and booking CTA.'
        },
        {
            image: '/Reference/Home Service/featured services.jpg',
            title: 'Featured Services',
            description: 'Highlighting our top home services with images and descriptions.'
        },
        {
            image: '/Reference/Home Service/about.jpg',
            title: 'About Us',
            description: 'Learn more about our company and values.'
        },
        {
            image: '/Reference/Home Service/reviews.jpg',
            title: 'Customer Reviews',
            description: 'Feedback from satisfied clients highlighting successful projects.'
        },
        {
            image: '/Reference/Home Service/main page.jpg',
            title: 'Main Page',
            description: 'Overview of the company and its services.'
        },
        {
            image: '/Reference/Home Service/services.jpg',
            title: 'Our Services',
            description: 'Overview of the services offered by the company.'
        },
        
        ]
    },
    
];

export default projectDetails;
// Make sure your images are in: public/Reference/ArtisanBakery/hero.jpg, etc.
// The leading slash means "from the public folder root" in React apps.
