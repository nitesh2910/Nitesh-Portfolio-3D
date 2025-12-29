import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer',
    company: 'Meril',
    location: 'Vapi, Gujarat, India',
    period: 'December 2024 - Present',
    description: 'Working as a full-stack software developer, building innovative healthcare solutions using Python, Django, and modern web technologies.',
    type: 'work',
  },
  {
    title: 'MERN Stack Developer',
    company: 'RnD Technosoft',
    location: 'Vapi, Gujarat, India',
    period: 'September 2024 - December 2024',
    description: 'Developed dynamic web applications using MongoDB, Express.js, React.js, and Node.js for various client projects.',
    type: 'work',
  },
  {
    title: 'Website Developer & Designer',
    company: 'Xira Infotech',
    location: 'Vapi, Gujarat, India',
    period: 'March 2024 - July 2024',
    description: 'Designed and developed user-friendly websites, enhancing user engagement and creating responsive web experiences.',
    type: 'work',
  },
  {
    title: 'Website Designing',
    company: 'Cloud9 Softech',
    location: 'Vapi, Gujarat, India',
    period: 'December 2023 - February 2024',
    description: 'Created visually appealing website designs and implemented front-end solutions for client projects.',
    type: 'work',
  },
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Parul University',
    specialization: 'Cloud Computing',
    period: 'August 2022 - June 2024',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    institution: 'KBS Vapi',
    specialization: 'Computer Science',
    period: 'June 2019 - April 2022',
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary uppercase tracking-widest text-sm font-medium"
            >
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl font-bold mt-4"
            >
              Work <span className="text-gradient">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary animate-glow-pulse z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 hover-glow group transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-24"
          >
            <h3 className="font-heading text-3xl font-bold text-center mb-12">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass rounded-2xl p-6 hover-glow group"
                >
                  <div className="text-primary font-medium text-sm mb-2">{edu.period}</div>
                  <h4 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    {edu.specialization}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
