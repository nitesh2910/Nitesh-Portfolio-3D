import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 75 },
    { name: 'Frappe', level: 70 },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary uppercase tracking-widest text-sm font-medium"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl font-bold mt-4"
            >
              Crafting Digital <span className="text-gradient">Experiences</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8 hover-glow">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a <span className="text-foreground font-medium">Software Engineer at Meril</span>, holding a Master of Computer Applications (MCA) from Parul University. I specialize in full-stack development with a focus on Python and Django.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Previously, I've worked as a <span className="text-primary">MERN Stack Developer</span> and <span className="text-secondary">Website Designer</span>, building dynamic web applications and user-friendly interfaces.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am passionate about using technology to drive innovation and am committed to continuous learning and growth in the tech industry.
                </p>

                <div className="flex gap-4 mt-8">
                  <div className="glass rounded-xl px-6 py-4 text-center flex-1">
                    <div className="text-3xl font-heading font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="glass rounded-xl px-6 py-4 text-center flex-1">
                    <div className="text-3xl font-heading font-bold text-secondary">4</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div className="glass rounded-xl px-6 py-4 text-center flex-1">
                    <div className="text-3xl font-heading font-bold text-accent">MCA</div>
                    <div className="text-sm text-muted-foreground">Degree</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-semibold mb-8">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
