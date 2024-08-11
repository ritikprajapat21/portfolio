import { Github, LaptopMinimal } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

const Projects = async () => {
  const data = await fetch(
    "https://api.github.com/users/ritikprajapat21/starred",
    { cache: "no-cache" },
  );
  const projects = await data.json();

  return (
    <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects ? (
        projects.map(
          (project: {
            id: number;
            name: string;
            description: string;
            html_url: string;
            homepage: string;
            topics: string[];
          }) => (
            <Card
              key={project.id}
              className="grid hover:scale-110 hover:transition-all hover:duration-700"
            >
              <CardHeader>
                <CardTitle className="capitalize">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1">
                {project.topics.map((topic: string) => (
                  <Badge className="capitalize" key={topic}>
                    {topic}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="flex justify-evenly items-center w-full place-self-end">
                <Link href={project.html_url}>
                  <Button className="flex gap-2">
                    <Github /> Github
                  </Button>
                </Link>
                {project.homepage && (
                  <Link href={project.homepage}>
                    <Button className="flex gap-2">
                      <LaptopMinimal /> Demo
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ),
        )
      ) : (
        <Image src="pre.svg" alt="Loading..." height={100} width={100} />
      )}
    </div>
  );
};

export default Projects;
