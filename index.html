import React, { useState } from 'react';
import { Plus, Edit3, Save, X, Github, Mail, Linkedin, BarChart3, Database, Code } from 'lucide-react';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Análise de Vendas - Dashboard Python",
      description: "Dashboard interativo para análise de vendas usando Python, Pandas e Plotly. Inclui filtros dinâmicos e exportação para Excel.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "Pandas", "Plotly", "Excel"],
      link: "#"
    }
  ]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    link: ''
  });

  const handleImageUpload = (e, isNew = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isNew) {
          setNewProject(prev => ({ ...prev, image: e.target.result }));
        } else {
          setEditingProject(prev => ({ ...prev, image: e.target.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        tags: newProject.tags.split(',').map(tag => tag.trim())
      };
      setProjects([...projects, project]);
      setNewProject({ title: '', description: '', image: '', tags: '', link: '' });
      setIsEditing(false);
    }
  };

  const updateProject = () => {
    setProjects(projects.map(p => 
      p.id === editingProject.id 
        ? { ...editingProject, tags: Array.isArray(editingProject.tags) ? editingProject.tags : editingProject.tags.split(',').map(tag => tag.trim()) }
        : p
    ));
    setEditingProject(null);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="px-6 py-8 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Pedro Sauthier
              </h1>
              <p className="text-xl text-gray-300 mt-2">Analista de Dados & Desenvolvedor</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:phsathier123@gmail.com" className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors">
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
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
              <p className="text-gray-300">Python, Pandas, visualizações e dashboards interativos</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl border border-green-500/20">
              <Database className="w-12 h-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Planilhas Avançadas</h3>
              <p className="text-gray-300">Google Sheets, automações e relatórios dinâmicos</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20">
              <Code className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-gray-300">JavaScript, React, Node.js e soluções web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Projetos</h2>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              <Plus size={20} />
              Adicionar Projeto
            </button>
          </div>

          {/* Add/Edit Project Modal */}
          {isEditing && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4">Adicionar Projeto</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Título do projeto"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <textarea
                    placeholder="Descrição do projeto"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white h-24"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, true)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <input
                    type="text"
                    placeholder="Tags (separadas por vírgula)"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <input
                    type="url"
                    placeholder="Link do projeto (opcional)"
                    value={newProject.link}
                    onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={addProject}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                  >
                    <Save size={20} />
                    Salvar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={20} />
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Project Modal */}
          {editingProject && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4">Editar Projeto</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <textarea
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white h-24"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, false)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <input
                    type="text"
                    value={Array.isArray(editingProject.tags) ? editingProject.tags.join(', ') : editingProject.tags}
                    onChange={(e) => setEditingProject({...editingProject, tags: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                  <input
                    type="url"
                    value={editingProject.link}
                    onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={updateProject}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                  >
                    <Save size={20} />
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditingProject(null)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={20} />
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="p-2 bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Ver projeto <Github size={16} />
                    </a>
                  )}
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
