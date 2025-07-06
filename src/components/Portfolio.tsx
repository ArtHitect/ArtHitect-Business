import { Code, Palette, ShoppingCart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import babyStoreImg from '../images/baby store.jpeg';
import doneDealImg from '../images/done deal.jpg';
import shopTechImg from '../images/shop tech.jpeg';
import cleaningImg from '../images/cleaning.jpeg';


const Portfolio = () => {
  const projects = [
    {
      title: 'BABYHEAVEN',
      slug: 'babyheaven',
      category: 'E-commerce',
      description: 'Sustainable fashion store with modern design and seamless checkout experience.',
      image: babyStoreImg,
      tech: ['React', 'Stripe', 'Tailwind'],
      icon: ShoppingCart,
      link: '#'
    },
    
    {
      title: 'Done Deal',
      slug: 'done-deal',
      category: 'Portfolio',
      description: 'Elegant portfolio showcasing kitchen and wardrobe carpentry designs.',
      image: doneDealImg,
      tech: ['React', 'Lightbox', 'CSS Grid'],
      icon: Palette,
      link: '#'
    },
    {
      title: 'ShopTech and Services',
      slug: 'shoptech-and-services',
      category: 'Business',
      description: 'Corporate website for software consulting company with team showcase.',
      image: shopTechImg,
      tech: ['TypeScript', 'Tailwind', 'Vercel'],
      icon: Code,
      link: '#'
    },
    {
      title: 'Home service',
      slug: 'home-service',
      category: 'Home Service',
      description: 'Home service website with booking system and service listings.',
      image: cleaningImg,
      tech: ['React', 'Calendar API', 'Stripe'],
      icon: Globe,
      link: '#'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how I've helped businesses and individuals create stunning online presences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              id={
                project.category === 'Portfolio' ? 'portfolio'
                : project.category === 'Business' ? 'business'
                : project.category === 'E-commerce' ? 'ecommerce'
                : project.category === 'Food & Beverage' ? 'redesign'
                : undefined
              }
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <project.icon className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-indigo-600">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link to={`/portfolio/${project.slug}`} className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center">
                  View Project
                 
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;

// The most common reasons images are not displayed:
// 1. The image files must be in the `public/images/` folder (not inside `src/`).
// 2. The path is case-sensitive and must match exactly (e.g., `/images/baby store.jpeg`).
// 3. Spaces in filenames can cause issues in some environments. It's best to use dashes or underscores (e.g., `baby-store.jpeg`).
// 4. Check that the file extension matches (e.g., `.jpeg` vs `.jpg`).

// To fix:
// - Move your images to `public/images/`.
// - Rename files to avoid spaces, e.g., `baby-store.jpeg`, `done-deal.jpg`, `shop-tech.jpeg`, `cleaning.jpeg`.
// - Update the `image` property in your code to match the new filenames, e.g., `/images/baby-store.jpeg`.

// Example:
// image: '/images/baby-store.jpeg'