import { motion } from "framer-motion";
import { useState } from "react";
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
    "credentialUrl": "https://www.linkedin.com/learning/certificates/77dbc1d06533d9d277f9dea27e2bbcf699cff8053f834a20e0364d90d5eba3ca"
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
    "credentialUrl": "https://www.linkedin.com/learning/certificates/a32595ad666b15e5c15ff9599f8d2472f938cdf37a4a884f201545f5bf52a3f9"
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
    "credentialUrl": "https://www.credly.com/badges/a3aa5ed8-62b4-47e5-bd28-71e355589bf1",
  },
  {
    "title": "CISCO Certified Python Essentials 2",
    "issuer": "Cisco Networking Academy",
    "issueDate": "Jul 2024",
    "skills": ["Python (Programming Language)"],
    "credentialUrl": "https://www.credly.com/badges/d6728d38-514e-4db4-96b8-b07fca44846c",
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
    "credentialUrl": "https://drive.google.com/file/u/1/d/1-ZcAyz3X7D4yBARySGDGh_aNtQ_AfL7l/view?usp=drivesdk",
  },
  {
    "title": "CSS3",
    "issuer": "Udemy",
    "issueDate": "May 2023",
    "skills": ["Cascading Style Sheets (CSS)"],
    "credentialId": "UC-3a1c20e5-c366-4c23-972f-40b733370bfc",
    "credentialUrl": "https://www.udemy.com/certificate/UC-3a1c20e5-c366-4c23-972f-40b733370bfc/",
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
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certifications : certifications.slice(0, 5);

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
          {visibleCertifications.map((cert, index) => (
            <Card key={index} className="p-4">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground">{cert.issueDate}</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-2">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        Show Credential <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Show All / Show Less Button */}
        {certifications.length > 5 && (
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show All"}
            </Button>
          </div>
        )}
      </motion.div>
    </section>
  );
}