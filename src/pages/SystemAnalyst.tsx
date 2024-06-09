import { Stack } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const SystemAnalyst = () => {
  const projects = [
    {
      img_src: './project-page/anacycle.jpg',
      name: 'Anacycle',
      category: 'course team project',
      description: 'Developed system proposal for a waste order management system',
      references: [
        {
          source: './logo/google-drive.svg',
          link: 'https://drive.google.com/drive/folders/1w3zBwVxg81C3ajHH2Zobts5y3fnNt57T?usp=drive_link'
        }
      ],
      tools: [
        './logo/drawio.svg'
      ]
    }
  ]

  return (
    <div className='specialty-container mt-4'>
      <div className='page-title'>        
        <h1>System Analysis</h1>
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

export default SystemAnalyst;