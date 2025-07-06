import { Code2, Palette, Smartphone, Globe, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, name: 'React & Next.js', level: 95 },
    { icon: Palette, name: 'UI/UX Design', level: 90 },
    { icon: Smartphone, name: 'Mobile First', level: 92 },
    { icon: Globe, name: 'Web Performance', level: 88 },
    { icon: Zap, name: 'Fast Development', level: 96 },
    { icon: Heart, name: 'Client Focus', level: 100 }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL',
    'Stripe', 'Vercel', 'Figma', 'Framer Motion', 'Supabase', 'Prisma'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ArtHitect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with 5+ years of experience creating digital experiences 
            that drive results and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I started my journey in web development with a simple belief: every business 
              deserves a website that not only looks amazing but also performs exceptionally. 
              Over the years, I've helped dozens of entrepreneurs and businesses establish 
              their online presence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What sets me apart is my focus on understanding your business goals first, 
              then crafting a solution that drives real results. I don't just build websites 
              – I create digital experiences that convert.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <skill.icon className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;