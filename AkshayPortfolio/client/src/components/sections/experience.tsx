import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "TNP Event Planners",
    period: "2023 - Present",
    responsibilities: [
      "Developed websites using React.js, focusing on creating dynamic and responsive user interfaces",
      "Collaborated in an Agile environment and managed tasks through Atlassian Jira",
      "Played the role of project manager by coordinating team activities and ensuring successful project delivery"
    ],
    skills: ["React.js", "Agile", "Jira", "Project Management"]
  },
  {
    title: "Junior Software Developer Intern",
    company: "InvictIQ",
    period: "2022 - 2023",
    responsibilities: [
      "Gained experience in front-end development and API integration",
      "Worked with Angular, enhancing technical skills in modern web development",
      "Used tools like Slack and Azure DevOps for project management"
    ],
    skills: ["Angular", "API Integration", "Azure DevOps", "Slack"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative border-l-4 border-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5 text-primary" />
                        <CardTitle>{exp.title}</CardTitle>
                      </div>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
