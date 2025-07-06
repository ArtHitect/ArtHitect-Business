import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';

// Update the mapping so each project type has a unique service name for display
const projectValueToServiceName: Record<string, string> = {
  starter: 'Starter Pack',
  portfolio: 'Portfolio Website',
  business: 'Business Website',
  ecommerce: 'E-commerce Store',
  redesign: 'Website Redesign',
  custom: 'Custom Solutions',
};

const serviceToProjectValue: Record<string, string> = {
  'Starter Pack': 'starter',
  'Portfolio Website': 'portfolio',
  'Business Website': 'business',
  'E-commerce Store': 'ecommerce',
  'Website Redesign': 'redesign',
  'Custom Solutions': 'custom',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
    serviceName: '',
  });

  useEffect(() => {
    // Check for selectedService in localStorage
    const selectedService = localStorage.getItem('selectedService');
    if (selectedService && serviceToProjectValue[selectedService]) {
      setFormData((prev) => ({
        ...prev,
        project: serviceToProjectValue[selectedService],
        serviceName: selectedService
      }));
      localStorage.removeItem('selectedService');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // If the user changes the project type, update serviceName accordingly
      if (name === 'project') {
        return {
          ...prev,
          [name]: value,
          serviceName: projectValueToServiceName[value] || ''
        };
      }
      return {
        ...prev,
        [name]: value
      };
    });
  };

  // Remove handleSubmit for Netlify Forms

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send me a message and 
                I'll get back to you within 24 hours. Let's create something amazing together.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">arthitect.alt@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+27 68 522 1140</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Gauteng, South Africa</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ArtHitect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                {/* Removed LinkedIn and Twitter */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Netlify form integration: add data-netlify, hidden input, and thank you redirect */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                // Construct mailto link
                const subject = encodeURIComponent(
                  `New Inquiry: ${formData.serviceName || projectValueToServiceName[formData.project] || 'General'}`
                );
                const body = encodeURIComponent(
                  `Name: ${formData.name}\n` +
                  `Email: ${formData.email}\n` +
                  `Service: ${formData.serviceName || projectValueToServiceName[formData.project] || ''}\n` +
                  `Project Type: ${formData.project}\n` +
                  `Budget: ${formData.budget}\n` +
                  `Message:\n${formData.message}`
                );
                window.location.href = `mailto:arthitect.alt@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              {/* Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Optionally show which service was selected */}
              {formData.serviceName && (
                <div className="mb-4 p-3 bg-indigo-50 rounded text-indigo-700 font-semibold text-center">
                  Selected Service: {formData.serviceName}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name or Company Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Your name or company"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="starter">Starter Pack</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="3500-4500">R3,500 – R4,500</option>
                    <option value="6500-9000">R6,500 – R9,000</option>
                    <option value="12000-15000">R12,000 – R15,000</option>
                    <option value="20000-30000">R20,000 – R30,000</option>
                    <option value="7000-11000">R7,000 – R11,000</option>
                    <option value="custom">Custom / Not Sure</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    This helps us recommend the best solution for your needs.
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>
              {/* Pass serviceName as a hidden field for Netlify */}
              <input type="hidden" name="serviceName" value={formData.serviceName} />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Online Presence?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join 50+ satisfied clients who've seen remarkable results. Let's create something 
              extraordinary that drives real business growth.
            </p>
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              onClick={() => {
                window.location.href =
                  "mailto:arthitect.alt@gmail.com?subject=Free Consultation Request&body=Hi, I'm interested in scheduling a free consultation.";
              }}
              type="button"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;