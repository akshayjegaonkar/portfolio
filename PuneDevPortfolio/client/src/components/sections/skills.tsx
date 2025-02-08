import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 75, category: "Programming Languages" },
  { name: "Django", level: 90, category: "Frameworks & Libraries" },
  { name: "React.js", level: 75, category: "Frameworks & Libraries" },
  { name: "Angular", level: 75, category: "Frameworks & Libraries" },
  { name: "HTML/CSS", level: 90, category: "Web Development" },
  { name: "MySQL", level: 90, category: "Databases" },
  { name: "MongoDB", level: 75, category: "Databases" },
  { name: "Git", level: 90, category: "Version Control" },
  { name: "Agile & Project Management", level: 75, category: "Other Skills" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(skills.reduce((acc, skill) => {
            if (!acc[skill.category]) {
              acc[skill.category] = {
                category: skill.category,
                skills: [],
              };
            }
            acc[skill.category].skills.push(skill);
            return acc;
          }, {} as Record<string, { category: string; skills: typeof skills }>)).map((group, index) => (
            <Card key={index}>
              <CardContent className="py-6">
                <h3 className="font-semibold mb-4">{group.category}</h3>
                <div className="space-y-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}