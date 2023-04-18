import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}
