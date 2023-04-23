import {Page} from '@/types/page';
import {createClient, groq} from 'next-sanity';
import clientConfig from '../configs/client';

const getPage = async (slug: string): Promise<Page> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
     _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
    {slug}
  );
};

export default getPage;
