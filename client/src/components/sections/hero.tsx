import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Github, Linkedin, Instagram, Link } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Akshay Jegaonkar
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Software Developer | MCA Student at SPPU
        </motion.p>

        {/* Animated Description */}
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Enthusiastic software developer with expertise in Python, Django, and SQL, and a strong foundation in front-end
          frameworks like React.js. Passionate about learning new technologies, system integration, and automation.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
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
        </motion.div>

        {/* Animated Social Icons */}
        <motion.div
          className="flex justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[ 
            { href: "https://github.com/jegaonkar", icon: <Github className="h-5 w-5" />, label: "GitHub Profile" },
            { href: "https://linkedin.com/in/akshay-jegaonkar", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn Profile" },
            { href: "https://www.instagram.com/akshayjegaonkar/?hl=en", icon: <Instagram className="h-5 w-5" />, label: "Instagram Profile" },
            { href: "https://www.credly.com/users/akshay-jegaonkar", icon: <Link className="h-5 w-5" />, label: "Credly Profile" },
          ].map((social, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
              <Button variant="ghost" size="icon" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
