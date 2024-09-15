import Image from "next/image";
import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Skills = () => {
  const technologies = [
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "Node.js", icon: "node.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Next", icon: "next.svg" },
    { name: "Express", icon: "express.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "Mongo", icon: "mongo.svg" },
    //{ name: "Postgresql", icon: "postgres.svg" },
  ];

  return (
    <TooltipProvider>
      <div className="pt-12 grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 lg:gap-x-12">
        {technologies.map((tech) => {
          return (
            <>
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild key={tech.name}>
                  <Card className="flex justify-center p-2 items-center bg-gradient-to-tl from-blue-600 via-purple-600 to-indigo-300 transition-all duration-300 hover:scale-125 animate-slide-up">
                    <Image
                      src={tech.icon}
                      width={100}
                      height={100}
                      alt="Tech"
                    />
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Card>
                </TooltipTrigger>
              </Tooltip>
            </>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default Skills;
