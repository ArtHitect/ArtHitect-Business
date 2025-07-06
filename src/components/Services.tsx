import React from 'react';
import { Check, Star, Sparkles, Zap, Globe, ShoppingCart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

type Service = {
  icon: React.ElementType;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
};

const Services = () => {
  const services = [
    {
      icon: Rocket,
      name: 'Starter Pack',
      price: 'R3,500 – R4,500',
      description: 'Perfect for individuals or small businesses starting out',
      features: [
        '1-page modern, responsive website (or 2 sections max)',
        'Custom UI/UX layout with Tailwind CSS',
        'Built using React or Next.js',
        'Mobile responsive design',
        'About Me / About Brand section',
        'Basic SEO (title/meta/alt tags)',
        '1 Revision included',
      ],
      popular: false
    },
    {
      icon: Globe,
      name: 'Portfolio Website',
      price: 'R6,500 – R9,000',
      description: 'Perfect for freelancers and creatives',
      features: [
        'Responsive design',
        'Portfolio gallery',
        'Contact form',
        'SEO optimization',
        'Mobile optimized',
        '3 revisions included'
      ],
      popular: false
    },
    {
      icon: Sparkles,
      name: 'Business Website',
      price: 'R12,000 – R15,000',
      description: 'Complete solution for businesses',
      features: [
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'Analytics setup',
        'Speed optimization',
        'Unlimited revisions',
        'Blog functionality',
        '1 month support'
      ],
      popular: true
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce Store',
      price: 'R20,000 – R30,000',
      description: 'Full-featured online store',
      features: [
        'Product catalog',
        'Payment integration',
        'Inventory management',
        'Order tracking',
        'Customer accounts',
        'Admin dashboard',
        'Security features',
        '2 months support'
      ],
      popular: false
    },
    {
      icon: Zap,
      name: 'Website Redesign',
      price: 'R7,000 – R11,000',
      description: 'Transform your existing site',
      features: [
        'Modern design',
        'Performance boost',
        'Mobile optimization',
        'Content migration',
        'SEO improvement',
        'Speed optimization',
        'Training included'
      ],
      popular: false
    },
    {
      icon: Sparkles, // Reuse or replace with a suitable icon
      name: 'Custom Solutions',
      price: 'Contact for Quote',
      description: 'Tailored web solutions for unique business needs',
      features: [
        'Web app development',
        'API integrations',
        'Branding & design systems',
        'Landing pages & campaigns',
        'Consulting & strategy',
        'Ongoing support',
        'Anything you can imagine!'
      ],
      popular: false
    }
  ];

  const addons = [
    { name: 'Extra page/section', price: '+R800 each' },
    { name: 'Advanced gallery/media', price: '+R500' },
    { name: 'Additional revision', price: '+R300' },
    { name: 'Blog functionality', price: '+R1,000' },
    { name: 'Priority delivery (3 days)', price: '+R1,200' },
    { name: 'Integrated Contact Form (Starter Pack)', price: '+R400' },
    { name: 'Social media links/icons (Starter Pack)', price: '+R250' },
    { name: 'Services or Portfolio overview (Starter Pack)', price: '+R350' }
  ];

  // Handler to scroll to contact section and store selected service
  const handleGetStarted = (serviceName: string) => {
    // Store selected service in localStorage (or use context if you have one)
    localStorage.setItem('selectedService', serviceName);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing, exceptional value. Choose the perfect package for your needs.
          </p>
        </div>


        {/* Carousel/Slider for Services with Auto-Scroll */}
        <div className="relative">
          <AutoSlider services={services} onGetStarted={handleGetStarted} />
        </div>

        {/* Add-ons Section */}
        <div className="mt-12 max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Optional Add-ons</h3>
          <ul className="space-y-3">
            {addons.map((addon, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span className="text-gray-700">{addon.name}</span>
                <span className="text-indigo-600 font-semibold">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need something custom? Let's discuss your project requirements.
          </p>
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            onClick={() => {
              window.location.href = "mailto:arthitect.alt@email.com?subject=Request%20for%20Custom%20Quote&body=Hi,%20I%20would%20like%20to%20request%20a%20custom%20quote%20for%20my%20project.%20Please%20contact%20me%20with%20more%20details.";
            }}
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

// --- AutoSlider Component ---
function AutoSlider({
  services,
  onGetStarted,
}: {
  services: Service[];
  onGetStarted: (serviceName: string) => void;
}) {
  const sliderRef = React.useRef<HTMLDivElement | null>(null);
  const intervalRef = React.useRef<ReturnType<typeof setInterval>>();
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    const slider = sliderRef.current;
    if (!slider) return;
    let scrollAmount = slider.scrollLeft || 0;
    const cardWidth = 340; // min-w-[320px] + gap
    function autoScroll() {
      if (!slider) return;
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      } else {
        scrollAmount += cardWidth;
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
    intervalRef.current = setInterval(autoScroll, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Pause on card click, resume on mouse leave of the slider area
  const handleCardClick = () => setPaused(true);
  const handleSliderMouseLeave = () => setPaused(false);

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-auto no-scrollbar space-x-8 pb-4 snap-x snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
      onMouseLeave={handleSliderMouseLeave}
    >
      {services.map((service: Service, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className={`min-w-[320px] max-w-xs flex-shrink-0 snap-center relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
            service.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
          }`}
          onClick={handleCardClick}
        >
          {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
          <Star className="w-4 h-4 mr-1" />
          Most Popular
          </div>
        </div>
        )}
        <div className="p-6">
        <div className="flex items-center mb-4">
          <service.icon className="w-8 h-8 text-indigo-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{service.price}</span>
          {service.price !== 'Contact for Quote' && (
          <span className="text-gray-500 ml-2">starting from</span>
          )}
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            service.popular
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
          onClick={e => {
            e.stopPropagation();
            if (service.name === 'Custom Solutions') {
              // Optionally scroll to contact or handle differently
              onGetStarted(service.name);
            } else {
              onGetStarted(service.name);
            }
          }}
        >
          {service.name === 'Custom Solutions' ? 'Enquire Now' : 'Get Started'}
        </button>
        </div>
      </motion.div>
      ))}
    </div>
  );
}

export default Services;

