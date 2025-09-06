import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Password Manager",
      description: "Built a Password Manager using MERN stack || Responsive UI (Tailwind CSS) || Password CRUD with Show/Hide & Copy || Secure API (Express.js & MongoDB) || Notifications (React-Toastify) || Deployed on Vercel & Render",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
      liveUrl: "https://frontend-password-manager-lemon.vercel.app/",
      githubUrl: "https://github.com/DhruvJohri/Frontend-Password-Manager.git",
      features: [
       "Built a Password Manager using MERN stack",
"Responsive UI with Tailwind CSS",
"Password CRUD with Show/Hide & Copy",
"Secure API with Express.js & MongoDB",
"Notifications with React-Toastify",
"Deployed on Vercel & Render"

      ]
    },
    {
      title: "PDF Merger",
      description: "Enabled users to upload and merge multiple PDF files into a single document. Implemented file upload functionality using multer with smooth user experience with drag and drop.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
      liveUrl: "https://pdf-merger-tool-khda.onrender.com/",
      githubUrl: "https://github.com/DhruvJohri/PDF-MERGER",
      features: [
        "Multiple PDF file upload",
        "Drag and drop interface",
        "Merge functionality using multer",
        "Smooth user experience"
      ]
    },
    {
      title: "Society Management System",
      description: "Online Resident Portal / Complaint Management System to Create Notice, Management Dashboard, Payment Updates with real-time notifications and user management.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://dhruvjohri.github.io/Society-Management-System/",
      githubUrl: "https://github.com/DhruvJohri/Society-Management-System",
      features: [
        "Resident portal for complaints",
        "Management dashboard",
        "Real-time notifications",
        "Payment tracking system"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-nebula">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creativity through various web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
