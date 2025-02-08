import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Akshay Jegaonkar
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Software Developer | MCA Student at SPPU
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Enthusiastic software developer with expertise in Python, Django, and SQL, and a strong foundation in front-end
          frameworks like React.js. Passionate about learning new technologies, system integration, and automation.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Button asChild>
            <a href="#projects">
              View My Work
              <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/Akshay_Jegaonkar_Resume.pdf" download>
              Download Resume
              <FileText className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/jegaonkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub Profile</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/akshay-jegaonkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn Profile</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}