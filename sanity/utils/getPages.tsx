import {Page} from '@/types/page';
import {createClient, groq} from 'next-sanity';
import clientConfig from '../configs/client';

const getPages = async (): Promise<Page[]> => {
  return createClient(clientConfig).fetch(groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
  }`);
};

export default getPages;
