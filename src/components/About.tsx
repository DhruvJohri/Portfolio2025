import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML5", "CSS3", "MongoDB", "MySQL", "Git", "GitHub",
    "Express.js", "REST APIs", "Responsive Design"
  ];

  const education = [
    {
      institution: "Shri Ram Murti Smarak College of Engineering and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      period: "September 2022 - September 2026",
      location: "Bareilly, UP",
      cgpa: "7.5"
    },
    {
      institution: "Madhavrao Scindia Public School",
      degree: "PCM (Class 12th)",
      period: "September 2021 - September 2022",
      location: "Bareilly, UP",
      percentage: "86%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-nebula">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and exploring new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold text-lg">{edu.institution}</h4>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      {edu.cgpa && (
                        <p className="text-sm font-medium">CGPA: {edu.cgpa}</p>
                      )}
                      {edu.percentage && (
                        <p className="text-sm font-medium">Percentage: {edu.percentage}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>5 Star Coder at HackerRank</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Second Prize in Code Starter at State Level Tech Fest</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Second Prize in CHESS at AAMOD Annual Sports Fest</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;