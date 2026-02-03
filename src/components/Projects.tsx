import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Shield, ShoppingCart } from 'lucide-react';

const projects = [
  {
    icon: Shield,
    title: 'SafeCity AI',
    subtitle: 'Smart City Crime Analysis Platform',
    description:
      'An intelligent platform leveraging NLP and Machine Learning to analyze and predict urban crime patterns. Features hate speech detection, complaint risk scoring, and crime forecasting using LSTM/GRU models.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'LSTM', 'GRU', 'Deep Learning'],
    highlights: [
      'Hate speech detection using NLP and ML',
      'Complaint risk scoring system',
      'Crime forecasting with LSTM/GRU models',
      'Focus on public safety and proactive city planning',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'STOCKIFY',
    subtitle: 'Low Stock Alert System & Online Cart Payment',
    description:
      'A comprehensive inventory management and e-commerce solution with automated stock alerts, QR-code based cart creation, and role-based access control for seamless business operations.',
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    highlights: [
      'Online shopping and inventory management',
      'QR-code based cart creation and automated billing',
      'Role-based access: Admin, Manager, Staff, Customer',
      'Built with Django and SQLite',
    ],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="text-primary font-mono text-xl">03.</span>
            Featured Projects
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="text-primary" size={32} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-primary font-mono text-sm mb-1">Featured Project</p>
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={20} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>

                    <p className="text-muted-foreground my-4 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-primary font-mono mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
