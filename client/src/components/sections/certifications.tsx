import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Projects from "./projects";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    "title": "Atlassian Agile Project Management Professional Certificate",
    "issuer": "Atlassian",
    "issueDate": "Jan 2025",
    "skills": ["Jira", "Agile Methodologies", "Agile Project Management"],
    "credentialUrl": null
  },
  {
    "title": "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
    "issuer": "Oracle",
    "issueDate": "Sep 2024",
    "skills": ["Oracle Cloud", "DevOps"],
    "credentialUrl": null
  },
  {
    "title": "AI Productivity Hacks to Reimagine Your Workday and Career",
    "issuer": "LinkedIn",
    "issueDate": "Sep 2024",
    "skills": ["AI Productivity"],
    "credentialUrl": null
  },
  {
    "title": "Career Essentials in Generative AI",
    "issuer": "Microsoft and LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Artificial Intelligence (AI)", "Computer Ethics", "Generative AI"],
    "credentialUrl": null
  },
  {
    "title": "Ethics in the Age of Generative AI",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Computer Ethics", "Responsible AI"],
    "credentialUrl": null
  },
  {
    "title": "Generative AI: The Evolution of Thoughtful Online Search",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Artificial Intelligence for Business", "Search Engine Technology"],
    "credentialUrl": null
  },
  {
    "title": "Introduction to Artificial Intelligence",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Artificial Intelligence for Business", "Artificial Intelligence (AI)"],
    "credentialUrl": null
  },
  {
    "title": "Streamlining Your Work with Microsoft Copilot",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Artificial Intelligence for Business", "Productivity Improvement", "Microsoft Copilot"],
    "credentialUrl": null
  },
  {
    "title": "The Cybersecurity Threat Landscape",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Cybersecurity", "Threat & Vulnerability Management"],
    "credentialUrl": null
  },
  {
    "title": "What Is Generative AI?",
    "issuer": "LinkedIn",
    "issueDate": "Jun 2024",
    "skills": ["Artificial Intelligence (AI)", "Generative AI", "Generative AI Tools"],
    "credentialUrl": null
  },
  {
    "title": "CISCO Certified Python Essentials 1",
    "issuer": "Cisco Networking Academy",
    "issueDate": "Jul 2024",
    "skills": ["Python (Programming Language)"],
    "credentialUrl": null
  },
  {
    "title": "CISCO Certified Python Essentials 2",
    "issuer": "Cisco Networking Academy",
    "issueDate": "Jul 2024",
    "skills": ["Python (Programming Language)"],
    "credentialUrl": null
  },
  {
    "title": "Introduction to SQL",
    "issuer": "Sololearn",
    "issueDate": "Oct 2024",
    "skills": ["SQL"],
    "credentialId": "86FXMVM9",
    "credentialUrl": null
  },
  {
    "title": "Fundamentals of Full Stack Development",
    "issuer": "ExcelR",
    "issueDate": "Oct 2023",
    "skills": ["Full Stack Development"],
    "credentialId": "60683",
    "credentialUrl": null
  },
  {
    "title": "CSS3",
    "issuer": "Udemy",
    "issueDate": "May 2023",
    "skills": ["Cascading Style Sheets (CSS)"],
    "credentialId": "UC-3a1c20e5-c366-4c23-972f-40b733370bfc",
    "credentialUrl": null
  },
  {
    "title": "Introduction to JavaScript",
    "issuer": "Sololearn",
    "issueDate": "May 2023",
    "skills": ["JavaScript"],
    "credentialId": "CC-UV7ZHUEF",
    "credentialUrl": null
  },
  {
    "title": "Introduction to Python",
    "issuer": "Sololearn",
    "issueDate": "May 2023",
    "skills": ["Python (Programming Language)"],
    "credentialId": "CC-PABMO5PV",
    "credentialUrl": null
  },
  {
    "title": "HTML",
    "issuer": "Sololearn",
    "issueDate": "Apr 2019",
    "skills": ["HTML"],
    "credentialId": "CT-P8FFBZO9",
    "credentialUrl": null
  }
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