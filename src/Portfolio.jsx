import React, { useState, useEffect } from 'react';
import {
  Github,
  Mail,
  Linkedin,
  BarChart3,
  Database,
  Code,
  ExternalLink,
  Lock,
} from 'lucide-react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));

    fetch('https://api.github.com/users/PedroHSauthier')
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url))
      .catch(() => setAvatarUrl(''));
  }, []);

  const allTags = ['Todos', ...new Set(projects.flatMap((p) => p.tags))];
  const filteredProjects =
    selectedTag === 'Todos'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="px-6 py-8 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="GitHub avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-500 shadow-md"
                />
              )}
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Pedro Sauthier
                </h1>
                <p className="text-xl text-gray-300 mt-2">Analista de Dados & Desenvolvedor</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="mailto:phsathier123@gmail.com" className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pedrosauthier/" className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/PedroHSauthier" className="p-3 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">
            Transformando <span className="text-cyan-400">Dados</span> em{' '}
            <span className="text-green-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especialista em análise de dados, Python e Google Sheets. Combino habilidades técnicas com 
            forte comunicação, adquirida na experiência em suporte técnico na CERTA SISTEMA.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 transition-transform hover:-translate-y-1 hover:shadow-lg hover:from-cyan-500/20 hover:to-blue-500/20">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
              <p className="text-gray-300">Python, Pandas, visualizações e dashboards interativos</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl border border-green-500/20 transition-transform hover:-translate-y-1 hover:shadow-lg hover:from-green-500/20 hover:to-cyan-500/20">
              <Database className="w-12 h-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Planilhas Avançadas</h3>
              <p className="text-gray-300">Google Sheets, automações e relatórios dinâmicos</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20 transition-transform hover:-translate-y-1 hover:shadow-lg hover:from-blue-500/20 hover:to-green-500/20">
              <Code className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-gray-300">JavaScript, React, Node.js e soluções web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
        <section className="px-6 py-16 bg-black/30">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-blue-600 text-xl font-semibold">Área tech</h3>
            <h2 className="text-4xl font-bold mb-6">Projetos</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full border transition-colors ${selectedTag === tag ? 'bg-cyan-500 text-white border-cyan-500' : 'text-cyan-400 border-cyan-400 hover:bg-cyan-500/20'}`}
                >
                  {tag}
                </button>
              ))}
            </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col min-h-[20rem] md:min-h-[24rem] bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(() => {
                    const isRepoPrivate = project.repo === '#';
                    const hasDemo = project.demo && project.demo !== '#';
                    return (
                      <div
                        className={`flex items-center mt-auto ${hasDemo ? 'justify-between' : 'justify-center'}`}
                      >
                        {project.repo && (
                          <a
                            href={project.repo}
                            className={`inline-flex items-center gap-2 transition-colors ${
                              isRepoPrivate
                                ? 'text-gray-400 pointer-events-none'
                                : 'text-cyan-400 hover:text-cyan-300'
                            }`}
                            onClick={(e) => isRepoPrivate && e.preventDefault()}
                          >
                            Código <Github size={16} />{isRepoPrivate && <Lock size={16} />}
                          </a>
                        )}
                        {hasDemo && (
                          <a
                            href={project.demo}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Demo <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Pedro Sauthier. Transformando dados em insights através de comunicação eficaz e soluções técnicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
