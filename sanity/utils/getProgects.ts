import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "gfrimnxu",
    dataset: "production",
    useCdn: true,
  });

  const projects = await client.fetch<Project[]>(groq`*[_type == "project"]{
       _id,
       _createdAt,
       name,
       "slug": slug.current,
       "image": image.asset->url,
       url,
       content
    }`);
  
  return projects;
};

export default getProjects;
