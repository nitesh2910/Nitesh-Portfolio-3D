import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code2, ShoppingCart, Users, Briefcase, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  icon: React.ReactNode;
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "MyVastra E-commerce",
    description: "A full-featured e-commerce shopping platform with product catalog, cart functionality, user authentication, and payment integration.",
    tech: ["React", "JavaScript", "CSS", "Node.js"],
    github: "https://github.com/nitesh2910/MyVastra-Ecommerce-Webiste",
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: "from-primary via-secondary to-accent",
    featured: true,
  },
  {
    title: "React MyVastra App",
    description: "Modern React-based frontend for the MyVastra e-commerce platform with responsive design and seamless user experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/nitesh2910/React-MyVastra-App",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-secondary via-accent to-primary",
    featured: true,
  },
  {
    title: "QKART",
    description: "E-commerce application with advanced cart features, product filtering, and checkout functionality.",
    tech: ["JavaScript", "React", "REST API"],
    github: "https://github.com/nitesh2910/QKART",
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: "from-accent via-primary to-secondary",
  },
  {
    title: "Personal Portfolio",
    description: "Creative portfolio website showcasing projects, skills, and professional experience with modern animations.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/nitesh2910/Personal-Portfolio",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-primary to-accent",
  },
  {
    title: "Mats Clone Frontend",
    description: "Frontend clone project demonstrating UI/UX skills and modern web development practices.",
    tech: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/nitesh2910/Mats-Clone-Frontend",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Student Management System",
    description: "Python-based application for managing student records, grades, and academic information efficiently.",
    tech: ["Python", "Database", "CLI"],
    github: "https://github.com/nitesh2910/Student-Management-System",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-accent to-secondary",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
      />
      
      <Card className="relative h-full glass border-border/50 overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`} />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.5 }}
        />
        
        <CardContent className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-primary-foreground`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.icon}
            </motion.div>
            
            {project.featured && (
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group/btn border-border/50 hover:border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Code
              </a>
            </Button>
            {project.demo && (
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>

        {/* 3D tilt effect border */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 40%, hsl(var(--primary) / 0.1) 50%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            backgroundPosition: isHovered ? '200% 200%' : '0% 0%',
          }}
          transition={{ duration: 1.5 }}
        />
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container relative px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A collection of projects showcasing my expertise in full-stack development, 
            from e-commerce platforms to management systems.
          </p>

          {/* Decorative line */}
          <motion.div
            className="line-gradient max-w-xs mx-auto mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/nitesh2910" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All on GitHub
              <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
