import {Project} from '@/types/Project';
import {createClient, groq} from 'next-sanity';
import clientConfig from '../configs/client';

const getProjects = async (): Promise<Project[]> => {
  return await createClient(clientConfig).fetch<Project[]>(groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`);
};

export default getProjects;
