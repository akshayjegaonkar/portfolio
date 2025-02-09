import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <Card>
          <CardContent className="py-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:akshayjegaonkar@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/jegaonkar" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/akshay-jegaonkar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="tel:+917775938882">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}