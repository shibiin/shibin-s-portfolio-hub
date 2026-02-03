import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    type: 'Internship',
    title: 'Robotics with AI & Embedded Systems',
    organization: 'Genzee Technologies LLP',
    description:
      'Gained hands-on experience in robotics, artificial intelligence, and embedded systems. Worked on practical projects integrating hardware and software solutions.',
    highlights: [
      'Hands-on robotics programming',
      'AI integration in embedded systems',
      'Hardware-software coordination',
    ],
  },
  {
    icon: Award,
    type: 'Achievement',
    title: 'State-Level Technical Quiz',
    organization: 'Technical Competition',
    description:
      'Participated in a state-level technical quiz, demonstrating knowledge across various engineering and technology domains.',
    highlights: ['Technical knowledge assessment', 'Competitive problem solving'],
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'AI, Robotics & Engineering Careers Webinar',
    organization: 'Professional Development',
    description:
      'Attended a comprehensive webinar covering the latest trends in AI, robotics, and career opportunities in the engineering field.',
    highlights: ['Industry insights', 'Career guidance', 'Emerging technologies'],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-28 bg-card/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="text-primary font-mono text-xl">04.</span>
            Experience & Certifications
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 translate-y-6" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <exp.icon className="text-primary" size={20} />
                        </div>
                        <span className="text-primary font-mono text-sm">{exp.type}</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{exp.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-1">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-muted-foreground text-sm"
                          >
                            <span className="text-primary font-mono">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
