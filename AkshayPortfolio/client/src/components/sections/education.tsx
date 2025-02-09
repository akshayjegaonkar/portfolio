import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Savitribai Phule Pune University (SPPU)",
    location: "Pune, Maharashtra",
    duration: "2022 - Present",
    details: "Currently pursuing MCA with CGPA: 7.98 (First Year)",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Maharashtra",
    duration: "2019 - 2022",
    details: "Completed BCA with 74.44%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                    <CardDescription>{edu.location}</CardDescription>
                  </div>
                  <span className="text-muted-foreground">{edu.duration}</span>
                </div>
                <p className="text-muted-foreground mt-2">{edu.details}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}