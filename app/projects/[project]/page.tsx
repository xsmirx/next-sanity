import getProject from '@/sanity/utils/getProject';
import {PortableText} from '@portabletext/react';
import Image from 'next/image';

interface Props {
  params: {project: string};
}

const ProjectPage = async ({params}: Props) => {
  const project = await getProject(params.project);

  return (
    <div className="mx-auto max-w-3xl py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow">
          {project.name}
        </h1>
        {project.url && (
          <a
            href={project.url}
            title="View project"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-gray-500 transition hover:bg-pink-500 hover:text-pink-100"
          >
            View Project
          </a>
        )}
      </header>

      <div className="mt-5 text-lg text-gray-700">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 rounded-xl border-gray-700 object-cover"
      />
    </div>
  );
};

export default ProjectPage;
