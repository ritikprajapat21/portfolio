import * as motion from "framer-motion/client";
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
    { name: "Postgresql", icon: "postgres.svg" },
  ];

  return (
    <TooltipProvider>
      <div className="pt-12 grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 lg:gap-x-12">
        {technologies.map((tech, index) => {
          return (
            <>
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild key={tech.name}>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <motion.div initial={{ opacity: 0, x: "-50%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index / 5, type: "spring", damping: 10, stiffness: 100 }} viewport={{ amount: 0.5 }} className="h-full">
                      <Card className="h-full cursor-pointer flex justify-center p-2 items-center bg-gradient-to-tl from-blue-600 via-purple-600 to-indigo-300 animate-slide-up">
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
                    </motion.div>
                  </motion.div>
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
