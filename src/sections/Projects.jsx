import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';
import { Github } from '../components/Icons';
import Button from '../components/Button';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="04 // Projects"
            title="Featured Projects &amp; Concepts"
            subtitle="Hands-on experiments, interactive web applications, and architectural concepts developed as part of my engineering coursework and self-directed learning."
            className="mb-0 md:mb-0"
          />

          <Button
            variant="secondary"
            size="sm"
            href={personalInfo.github}
            external
            icon={Github}
            className="self-start md:self-auto"
          >
            Explore GitHub
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                More Projects Under Active Development
              </h4>
              <p className="text-xs text-slate-400">
                Repositories are being prepared and pushed as each module completes code reviews and tests.
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            href={personalInfo.github}
            external
            className="text-xs font-mono text-sky-400 hover:text-sky-300"
          >
            Follow on GitHub →
          </Button>
        </div>

      </div>
    </section>
  );
}
