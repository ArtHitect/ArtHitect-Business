import { MessageCircle, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery Call',
      description: 'We discuss your goals, target audience, and project requirements in detail.',
      time: 'Day 1'
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'I create wireframes and design mockups based on your brand and preferences.',
      time: 'Days 2-3'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Your website comes to life with clean code, optimized performance, and responsive design.',
      time: 'Days 4-6'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Review',
      description: 'Thorough testing across devices and browsers, plus your feedback and revisions.',
      time: 'Day 7'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Your site goes live with full documentation and ongoing support.',
      time: 'Day 8+'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven process that delivers results. From concept to launch in just one week.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-indigo-600 font-medium">{step.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10 w-6 h-6 bg-indigo-600 rounded-full hidden lg:block">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-20"></div>
                </div>
                
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-indigo-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Most projects are completed within 7 days. Let's discuss your timeline.
            </p>
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              onClick={() => {
                window.location.href =
                  "mailto:arthitect.alt@gmail.com?subject=Schedule%20Free%20Consultation&body=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20my%20project.%20Please%20let%20me%20know%20your%20availability.";
              }}
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;