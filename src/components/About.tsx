import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-8">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Mohammed Shibin T, a passionate B.Tech Information Technology 
                student with a keen interest in building intelligent software solutions. 
                My journey in tech started with curiosity about how things work, and has 
                evolved into a deep passion for <span className="text-primary">Artificial Intelligence</span> and{' '}
                <span className="text-primary">Machine Learning</span>.
              </p>
              <p>
                I enjoy tackling complex problems and transforming ideas into functional, 
                user-friendly applications. Whether it's developing crime prediction systems 
                or building inventory management platforms, I strive to create solutions that 
                have a real-world impact.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, participating 
                in tech events, or collaborating with peers on innovative projects. I'm always 
                eager to learn and grow as a developer.
              </p>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-primary" size={20} />
                  <span>B.Tech IT, MES College of Engineering, Kuttippuram (2022–2026)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Kerala, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <a href="mailto:shibint11im@gmail.com" className="hover:text-primary transition-colors">
                    shibint11im@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative rounded overflow-hidden w-full h-full">
                  <img 
                    src={profilePhoto} 
                    alt="Mohammed Shibin T"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
