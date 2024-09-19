import * as motion from "framer-motion/client";
import { Button } from "./ui/button";
import { Github, LaptopMinimal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Projects = async () => {
  const data = await fetch(
    "https://api.github.com/users/ritikprajapat21/starred",
    { cache: "default" },
  );
  const projects = await data.json();

  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects ? (
          projects.map(
            (
              project: {
                id: number;
                name: string;
                description: string;
                html_url: string;
                homepage: string;
                topics: string[];
              },
              index: number,
            ) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: "50%" }} animate={{ opacity: [0, 1], y: 0 }} transition={{ delay: index / 5, type: "spring", damping: 10, stiffness: 100 }}>
                <Card
                  className="z-[-1] h-full grid hover:cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="capitalize">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1">
                    {project.topics.map((topic: string) => (
                      <Badge className="capitalize h-5" key={topic}>
                        {topic}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="flex justify-evenly items-center w-full place-self-end">
                    <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Link href={project.html_url} target="_blank">
                        <Button className="flex gap-2">
                          <Github /> Github
                        </Button>
                      </Link>
                    </motion.span>
                    {project.homepage && (
                      <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link href={project.homepage} target="_blank">
                          <Button className="flex gap-2">
                            <LaptopMinimal /> Demo
                          </Button>
                        </Link>
                      </motion.span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ),
          )
        ) : (
          <Image src="pre.svg" alt="Loading..." height={100} width={100} />
        )}
      </div>
    </div>
  );
};

export default Projects;
