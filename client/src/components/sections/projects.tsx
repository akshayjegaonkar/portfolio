import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    "title": "Django URL Shortener",
    "description": "A lightweight URL shortening service built with Django and leveraging the django-url-shortener package. Implements core features including custom short code generation, URL expiration controls, and click tracking analytics. Designed with Django's built-in security features and admin interface.",
    "tech": [
      "Django",
      "Python",
      "django-url-shortener package",
      "SQLite/PostgreSQL",
      "HTML/CSS",
      "JavaScript (basic frontend)"
    ],
    "github": "https://github.com/akshayjegaonkar/URL-Shortener-Application",
    "demo": null
  },
  {
    title: "EmpTrack — Employee Management System",
    description: "Built a system for adding, removing, and managing employees with secure authentication, role-based access, and real-time updates. Features include department assignments, salary management, and a user-friendly dashboard.",
    tech: ["Django", "HTML", "CSS", "Bootstrap", "JavaScript", "SQLite"],
    github: "https://github.com/jegaonkar/emptrack",
    demo: "https://emptrack-demo.herokuapp.com",
  },
  {
    title: "Tweeeet — Microblogging Platform",
    description: "Developed a Twitter-like social media platform, enhancing real-time interactions, user engagement, and responsive design. Implemented authentication, post creation, and follow system features.",
    tech: ["Django", "HTML", "CSS", "Bootstrap", "JavaScript", "SQLite"],
    github: "https://github.com/akshayjegaonkar/Tweet-project",
  },
  {
    title: "TNP Event Planners Website",
    description: "Developed websites using React.js, focusing on creating dynamic and responsive user interfaces, while collaborating in an Agile environment and managing tasks through Atlassian Jira.",
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Jira"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}