// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // سنضيف الأسلوب لاحقًا

// البيانات التجريبية للمشاريع
const projects = [
  {
    title: 'Project One',
    description: 'This is a description of project one.',
    image: 'path/to/image1.jpg', // ضع مسار الصورة هنا
    link: 'https://example.com/project1'
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    image: 'path/to/image2.jpg', // ضع مسار الصورة هنا
    link: 'https://example.com/project2'
  }
  // أضف المزيد من المشاريع حسب الحاجة
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
