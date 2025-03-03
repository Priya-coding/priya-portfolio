"use client";

const projects = [
    {
      title: "Priya's Portfolio Website",
      description: "Developed a personal portfolio website showcasing skills, projects, and experience with Next.js and Tailwind CSS, hosted on Vercel.",
      link: "https://github.com/Priya-coding/priya-portfolio",
    },
    {
      title: "Cloud Mastery Blueprints",
      description: "A structured, cloud-native documentation site showcasing DevOps, and automation best practices using Terraform, Kubernetes, and AWS services.",
      link: "https://github.com/Priya-coding/CloudMasteryBlueprints",
    },
    {
      title: "Cloud-Native DevOps Hub",
      description: "A fully functional cloud-native DevOps project demonstrating best practices with AWS, Kubernetes, Terraform, CI/CD, monitoring, and load testing.",
      link: "https://github.com/Priya-coding/Cloud-Native-DevOps-Hub",
    }
];

export default function Projects() {
    return (
      <section className="text-white py-16 px-6 max-w-10xl mx-auto text-center">
        <h2 className="text-l font-bold mb-6 flex justify-center items-center">📂<span className="text-md font-light text-white">&nbsp;&nbsp;PROJECTS  &nbsp;&nbsp;</span></h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col bg-gray-800 p-4 border border-gray-700 rounded-lg hover:border-white transition shadow-xl">
              <h3 className="text-md font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="text-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
              <div className="mt-12 text-center">
          <a
            href="https://github.com/Priya-coding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mt-6 inline-flex items-center bg-white text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-300 transition shadow-md"
          >
            <img src='/images/projects/github.png' alt='GitHub' className='w-5 h-5 inline-block mr-2' />View More on GitHub
          </a>
        </div>
      </section>
    );
}
