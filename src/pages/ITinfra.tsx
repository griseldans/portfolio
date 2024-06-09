import { Stack } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const ITinfra = () => {
  const projects = [
    {
      img_src: './project-page/enterprise-1.jpg',
      name: 'Enterprise Infrastructure',
      category: 'personal project',
      description: 'Cloud-based infrastucture for small enterprise, adapting Manajemen Infrastruktur project',
      references: [
        {
          source: './logo/github.svg',
          link: 'https://github.com/griseldans/enterprise-IT-infra'
        }
      ],
      tools: [
        './logo/docker.svg'
      ]
    }
  ]

  return (
    <div className='specialty-container mt-4'>
      <div className='page-title'>        
        <h1>IT Infrastructure</h1>
      </div>
      <Stack direction="horizontal" gap={3} style={{justifyContent:'center', marginTop: '20px'}}>       
        {
          projects.map((project) => (
            <ProjectCard 
              img_src={project.img_src} 
              name={project.name} 
              category={project.category} 
              description={project.description} 
              references={project.references} 
              tools={project.tools} />
          ))
        }
      </Stack>
    </div>
  )
}

export default ITinfra;