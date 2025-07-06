// Import all images
import babyheavenHero from '../Reference/babyheaven/hero.jpg';
import babyheavenAbout from '../Reference/babyheaven/about.jpg';
import babyheavenShop from '../Reference/babyheaven/shop.jpg';
import babyheavenContact from '../Reference/babyheaven/contact.jpg';
import babyheavenFooter from '../Reference/babyheaven/footer.jpg';

import doneDealHero from '../Reference/done-deal/hero.jpg';
import doneDealService from '../Reference/done-deal/service.jpg';
import doneDealBlog from '../Reference/done-deal/blog.jpg';
import doneDealReviews from '../Reference/done-deal/reviews.jpg';
import doneDealContact from '../Reference/done-deal/contact.jpg';
import doneDealMap from '../Reference/done-deal/map.jpg';

import shoptechHero from '../Reference/shoptech-and-services/hero.jpg';
import shoptechFeaturedProducts from '../Reference/shoptech-and-services/featured-products.jpg';
import shoptechKnowTech from '../Reference/shoptech-and-services/know-tech.jpg';
import shoptechServices from '../Reference/shoptech-and-services/services.jpg';
import shoptechReviews from '../Reference/shoptech-and-services/reviews.jpg';
import shoptechPayment from '../Reference/shoptech-and-services/payment.jpg';
import shoptechMainPage from '../Reference/shoptech-and-services/main-page.jpg';
import shoptechMainPageServices from '../Reference/shoptech-and-services/main-page-services.jpg';
import shoptechMainPageKnowTech from '../Reference/shoptech-and-services/main-page-know-tech.jpg';
import shoptechBlog from '../Reference/shoptech-and-services/blog.jpg';
import shoptechFooter from '../Reference/shoptech-and-services/footer.jpg';

import homeServiceHero from '../Reference/home-service/hero.jpg';
import homeServiceFeatured from '../Reference/home-service/featured-services.jpg';
import homeServiceAbout from '../Reference/home-service/about.jpg';
import homeServiceReviews from '../Reference/home-service/reviews.jpg';
import homeServiceMainPage from '../Reference/home-service/main-page.jpg';
import homeServiceServices from '../Reference/home-service/services.jpg';

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
      { image: babyheavenHero, title: 'Homepage Design', description: 'Hero section with product highlights and call-to-action.' },
      { image: babyheavenAbout, title: 'About Page', description: 'Information about the brand and its mission.' },
      { image: babyheavenShop, title: 'Product Page', description: 'Each product page features dynamic pricing and Stripe checkout.' },
      { image: babyheavenContact, title: 'Contact Page', description: 'Get in touch with us through our contact form.' },
      { image: babyheavenFooter, title: 'Footer Design', description: 'Footer with links to social media and contact information.' }
    ]
  },
  {
    slug: 'done-deal',
    title: 'Done Deal',
    description: 'An elegant portfolio showcasing carpentry designs...',
    tech: ['React', 'Lightbox', 'CSS Grid'],
    sections: [
      { image: doneDealHero, title: 'Homepage Design', description: 'Hero section featuring the companies description and logo.' },
      { image: doneDealService, title: 'Service Page', description: 'Showcasing the various carpentry services offered.' },
      { image: doneDealBlog, title: 'Blog', description: 'Insights and articles on carpentry trends.' },
      { image: doneDealReviews, title: 'Customer Reviews', description: 'Testimonials from satisfied clients.' },
      { image: doneDealContact, title: 'Contact Page', description: 'Get in touch with us through our contact form.' },
      { image: doneDealMap, title: 'Map', description: 'Location map for the business.' }
    ]
  },
  {
    slug: 'shoptech-and-services',
    title: 'ShopTech and Services',
    description: 'Corporate website for software consulting company with team showcase.',
    tech: ['TypeScript', 'Tailwind', 'Vercel'],
    sections: [
      { image: shoptechHero, title: 'Homepage Design', description: 'Professional layout highlighting services and team members.' },
      { image: shoptechFeaturedProducts, title: 'Featured Products', description: 'Showcasing top products with images and descriptions.' },
      { image: shoptechKnowTech, title: 'Know Your Tech', description: 'Educational resources and articles on technology trends.' },
      { image: shoptechServices, title: 'Our Services', description: 'Overview of the consulting services offered by the company.' },
      { image: shoptechReviews, title: 'Customer Testimonials', description: 'Feedback from satisfied clients highlighting successful projects.' },
      { image: shoptechPayment, title: 'Payment Options', description: 'Information on various payment methods accepted.' },
      { image: shoptechMainPage, title: 'Main Page', description: 'Overview of the company and its services.' },
      { image: shoptechMainPageServices, title: 'Main Page Services', description: 'Overview of the services offered on the main page.' },
      { image: shoptechMainPageKnowTech, title: 'Know Your Tech', description: 'Educational resources and articles on technology trends.' },
      { image: shoptechBlog, title: 'Blog', description: 'Insights and articles on industry trends and best practices.' },
      { image: shoptechFooter, title: 'Footer Design', description: 'Footer with links to social media and additional resources.' }
    ]
  },
  {
    slug: 'home-service',
    title: 'Home Service',
    description: 'Home service website with booking system and service listings.',
    tech: ['React', 'Calendar API', 'Stripe'],
    sections: [
      { image: homeServiceHero, title: 'Homepage Design', description: 'Inviting hero section with service highlights and booking CTA.' },
      { image: homeServiceFeatured, title: 'Featured Services', description: 'Highlighting our top home services with images and descriptions.' },
      { image: homeServiceAbout, title: 'About Us', description: 'Learn more about our company and values.' },
      { image: homeServiceReviews, title: 'Customer Reviews', description: 'Feedback from satisfied clients highlighting successful projects.' },
      { image: homeServiceMainPage, title: 'Main Page', description: 'Overview of the company and its services.' },
      { image: homeServiceServices, title: 'Our Services', description: 'Overview of the services offered by the company.' }
    ]
  }
];

export default projectDetails;

