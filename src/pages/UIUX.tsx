import { Stack } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const UIUX = () => {
  const projects = [
    {
      img_src: './project-page/healthpal.jpg',
      name: 'HealthPal',
      category: 'course team project',
      description: 'A prototype of COVID-19 Guidance Assistance mobile app',
      references: [
        {
          source: './logo/figma.svg',
          link: 'https://www.figma.com/proto/lnWpIWWk8ajRWjjuzwIIRF/Mokat?type=design&node-id=384-6806&scaling=min-zoom&page-id=307%3A5622&starting-point-node-id=386%3A7967&show-proto-sidebar=1'
        }
      ],
      tools: [
        './logo/figma.svg'
      ]
    }
  ]

  return (
    <div className='specialty-container mt-4'>
      <div className='page-title'>        
        <h1>UI/UX</h1>
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

export default UIUX;