import getProjects from '@/sanity/utils/getProgects';
import Image from 'next/image';
import Link from 'next/link';

const Home = async () => {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I'am{' '}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Ivan!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects</p>
      <h2 className="mt-24 text-3xl font-bold text-gray-700">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="rounded-lg border-2 border-gray-500 p-1 transition hover:scale-105 hover:border-blue-500"
          >
            {project.image && (
              <div className="relative h-44">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="rounded-lg border border-gray-500 object-cover"
                />
              </div>
            )}
            <div className="mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
