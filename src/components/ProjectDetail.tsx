// src/pages/ProjectDetail.tsx

import { useParams, Link } from 'react-router-dom';
import projectDetails, { ProjectDetail as ProjectType } from '../data/projectDetails';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project: ProjectType | undefined = projectDetails.find(p => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link
        to="/"
        className="inline-block mb-8 px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tech.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            {tech}
          </span>
        ))}
      </div>

      {project.sections.map((section, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <img
            src={section.image}
            alt={section.title}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
