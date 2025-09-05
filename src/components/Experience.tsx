import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Crucial Bits",
      location: "Agra, Uttar Pradesh",
      period: "July 2025 - August 2025",
      type: "Internship",
      description: [
        "Worked on real-time web scraping projects",
        "Built scalable Node.js scripts for Yahoo Finance",
        "Deployed solutions to Google Cloud with cron jobs",
        "Implemented smart data pipelines & legacy system"
      ],
      technologies: ["Node.js", "Google Cloud", "Web Scraping", "Cron Jobs"]
    },
    {
      title: "Contributor",
      company: "Hacktoberfest 2024",
      location: "Remote",
      period: "October 2024 - November 2024",
      type: "Open Source",
      description: [
        "Open Source program",
        "Made 2 merge pull request successfully",
        "Improved frontend of various applications",
        "Fixed various digital badges for every PR"
      ],
      technologies: ["Frontend Development", "Pull Requests", "Open Source"]
    },
    {
      title: "Contributor",
      company: "GirlScript Summer of Code",
      location: "Remote", 
      period: "May 2024 - August 2024",
      type: "Open Source Program",
      description: [
        "Open Source program",
        "Contributed as a Frontend Developer",
        "Got 500 free public on doodlelearn.ai",
        "Merge 2 Pull Requests"
      ],
      technologies: ["Frontend Development", "React", "JavaScript", "Git"]
    }
  ];

  const certifications = [
    "Introduction to Generative AI - Coursera",
    "Programming in JavaScript - Kharagpur - NPTEL", 
    "Postman API Fundamentals Student Expert - Postman",
    "Certificate of Participation in Level 1:1 E-Commerce - Flipkart",
    "Essentials of HTML and CSS - LetsUpgrade"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through internships, open source contributions, and continuous learning
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Building size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 mt-2 md:mt-0">
                    <Badge variant="outline" className="border-primary text-primary">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/20">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;