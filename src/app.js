import React, { useState } from 'react';
import { Plus, Edit3, Save, X, Github, Mail, Linkedin, BarChart3, Database, Code } from 'lucide-react';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Análise de Vendas - Dashboard Python",
      description: "Dashboard interativo para análise de vendas usando Python, Pandas e Plotly. Inclui filtros dinâmicos e exportação para Excel.",
      image: "https://via.placeholder.com/400x250/1f2937/cyan?text=Dashboard+Python",
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

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f2937 0%, #000000 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      padding: '2rem 1.5rem',
      borderBottom: '1px solid rgba(6, 182, 212, 0.2)'
    },
    headerContent: {
      maxWidth: '72rem',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #22d3ee, #4ade80)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginTop: '0.5rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem'
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      borderRadius: '0.5rem',
      transition: 'background-color 0.3s',
      cursor: 'pointer',
      border: 'none',
      color: 'white'
    },
    hero: {
      padding: '4rem 1.5rem',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '72rem',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    heroText: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      maxWidth: '48rem',
      margin: '0 auto 4rem'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '4rem'
    },
    skillCard: {
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(6, 182, 212, 0.2)',
      textAlign: 'center'
    },
    projectsSection: {
      padding: '4rem 1.5rem',
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#06b6d4',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '1rem'
    },
    modalContent: {
      backgroundColor: '#1f2937',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      maxWidth: '32rem',
      width: '100%',
      border: '1px solid rgba(6, 182, 212, 0.2)'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#374151',
      border: '1px solid #4b5563',
      borderRadius: '0.5rem',
      color: 'white',
      marginBottom: '1rem'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#374151',
      border: '1px solid #4b5563',
      borderRadius: '0.5rem',
      color: 'white',
      height: '6rem',
      resize: 'vertical',
      marginBottom: '1rem'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    projectCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      border: '1px solid #374151',
      transition: 'border-color 0.3s',
      position: 'relative'
    },
    projectImage: {
      width: '100%',
      height: '12rem',
      objectFit: 'cover'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '1rem'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    tag: {
      padding: '0.25rem 0.5rem',
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      color: '#22d3ee',
      borderRadius: '0.25rem',
      fontSize: '0.875rem'
    },
    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#22d3ee',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    footer: {
      padding: '2rem 1.5rem',
      borderTop: '1px solid rgba(6, 182, 212, 0.2)',
      textAlign: 'center'
    },
    footerText: {
      color: '#9ca3af'
    },
    editButtons: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      display: 'flex',
      gap: '0.5rem',
      opacity: 0,
      transition: 'opacity 0.3s'
    },
    editButton: {
      padding: '0.5rem',
      backgroundColor: '#3b82f6',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer'
    },
    deleteButton: {
      padding: '0.5rem',
      backgroundColor: '#ef4444',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer'
    }
  };

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
        tags: newProject.tags.split(',').map(tag => tag.trim()),
        image: newProject.image || 'https://via.placeholder.com/400x250/1f2937/cyan?text=' + encodeURIComponent(newProject.title)
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
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>Pedro Sauthier</h1>
            <p style={styles.subtitle}>Analista de Dados & Desenvolvedor</p>
          </div>
          <div style={styles.socialLinks}>
            <a href="mailto:phsathier123@gmail.com" style={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/PedroHSauthier" style={styles.socialLink}>
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>
            Transformando <span style={{color: '#22d3ee'}}>Dados</span> em{' '}
            <span style={{color: '#4ade80'}}>Insights</span>
          </h2>
          <p style={styles.heroText}>
            Especialista em análise de dados, Python e Google Sheets. Combino habilidades técnicas com 
            forte comunicação, adquirida na experiência em suporte técnico na CERTA SISTEMA.
          </p>
          
          <div style={styles.skillsGrid}>
            <div style={styles.skillCard}>
              <BarChart3 style={{width: '3rem', height: '3rem', color: '#22d3ee', margin: '0 auto 1rem'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Análise de Dados</h3>
              <p style={{color: '#d1d5db'}}>Python, Pandas, visualizações e dashboards interativos</p>
            </div>
            <div style={{...styles.skillCard, background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)', borderColor: 'rgba(34, 197, 94, 0.2)'}}>
              <Database style={{width: '3rem', height: '3rem', color: '#4ade80', margin: '0 auto 1rem'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Planilhas Avançadas</h3>
              <p style={{color: '#d1d5db'}}>Google Sheets, automações e relatórios dinâmicos</p>
            </div>
            <div style={{...styles.skillCard, background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)', borderColor: 'rgba(59, 130, 246, 0.2)'}}>
              <Code style={{width: '3rem', height: '3rem', color: '#3b82f6', margin: '0 auto 1rem'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem'}}>Desenvolvimento</h3>
              <p style={{color: '#d1d5db'}}>JavaScript, React, Node.js e soluções web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.projectsSection}>
        <div style={{maxWidth: '72rem', margin: '0 auto'}}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Projetos</h2>
            <button
              onClick={() => setIsEditing(true)}
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#06b6d4'}
            >
              <Plus size={20} />
              Adicionar Projeto
            </button>
          </div>

          {/* Add Project Modal */}
          {isEditing && (
            <div style={styles.modal}>
              <div style={styles.modalContent}>
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Adicionar Projeto</h3>
                <input
                  type="text"
                  placeholder="Título do projeto"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  style={styles.input}
                />
                <textarea
                  placeholder="Descrição do projeto"
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  style={styles.textarea}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, true)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Tags (separadas por vírgula)"
                  value={newProject.tags}
                  onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                  style={styles.input}
                />
                <input
                  type="url"
                  placeholder="Link do projeto (opcional)"
                  value={newProject.link}
                  onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                  style={styles.input}
                />
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button
                    onClick={addProject}
                    style={{...styles.button, backgroundColor: '#10b981'}}
                  >
                    <Save size={20} />
                    Salvar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    style={{...styles.button, backgroundColor: '#4b5563'}}
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
            <div style={styles.modal}>
              <div style={styles.modalContent}>
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Editar Projeto</h3>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                  style={styles.input}
                />
                <textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                  style={styles.textarea}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, false)}
                  style={styles.input}
                />
                <input
                  type="text"
                  value={Array.isArray(editingProject.tags) ? editingProject.tags.join(', ') : editingProject.tags}
                  onChange={(e) => setEditingProject({...editingProject, tags: e.target.value})}
                  style={styles.input}
                />
                <input
                  type="url"
                  value={editingProject.link}
                  onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                  style={styles.input}
                />
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button
                    onClick={updateProject}
                    style={{...styles.button, backgroundColor: '#10b981'}}
                  >
                    <Save size={20} />
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditingProject(null)}
                    style={{...styles.button, backgroundColor: '#4b5563'}}
                  >
                    <X size={20} />
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div style={styles.projectsGrid}>
            {projects.map(project => (
              <div 
                key={project.id} 
                style={styles.projectCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)';
                  const buttons = e.currentTarget.querySelector('.edit-buttons');
                  if (buttons) buttons.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#374151';
                  const buttons = e.currentTarget.querySelector('.edit-buttons');
                  if (buttons) buttons.style.opacity = '0';
                }}
              >
                <div style={{position: 'relative'}}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={styles.projectImage}
                  />
                  <div className="edit-buttons" style={styles.editButtons}>
                    <button
                      onClick={() => setEditingProject(project)}
                      style={styles.editButton}
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      style={styles.deleteButton}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.tagsContainer}>
                    {project.tags.map(tag => (
                      <span key={tag} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link}
                      style={styles.projectLink}
                      onMouseOver={(e) => e.target.style.color = '#06b6d4'}
                      onMouseOut={(e) => e.target.style.color = '#22d3ee'}
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
      <footer style={styles.footer}>
        <div style={{maxWidth: '72rem', margin: '0 auto'}}>
          <p style={styles.footerText}>
            © 2025 Pedro Sauthier. Transformando dados em insights através de comunicação eficaz e soluções técnicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;