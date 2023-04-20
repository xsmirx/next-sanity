import {Project} from '@/types/Project';
import {createClient, groq} from 'next-sanity';
import clientConfig from '../configs/client';

const getProject = async (slug: string): Promise<Project> => {
  return await createClient(clientConfig).fetch<Project>(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    {slug}
  );
};

export default getProject;
