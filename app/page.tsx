import getProjects from '@/sanity/utils/getProgects';

const Home = async () => {
  const projects = await getProjects();

  return (
    <div className="bg-white text-red-700">
      {projects.map(project => (
        <p key={project._id}>{project.name}</p>
      ))}
    </div>
  );
};

export default Home;
