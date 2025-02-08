import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "Atlassian",
    issueDate: "Jan 2025",
    skills: ["Jira", "Agile Methodologies", "Agile Project Management"],
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
    issuer: "Oracle",
    issueDate: "Sep 2024",
    skills: ["Oracle Cloud", "DevOps"],
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    issueDate: "Jun 2024",
    skills: ["Artificial Intelligence (AI)", "Computer Ethics", "Generative AI"],
  },
  {
    title: "CISCO Certified Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    issueDate: "Jul 2024",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Introduction to SQL",
    issuer: "Sololearn",
    issueDate: "Oct 2024",
    skills: ["SQL"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </div>
                  <span className="text-muted-foreground">{cert.issueDate}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
