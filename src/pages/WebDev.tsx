import { Stack } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const WebDev = () => {
  const projects = [
    {
      img_src: 'src/assets/project-page/invoicesync-page.jpg',
      name: 'Portfolio',
      category: 'personal project',
      description: 'Website to showcase my prior and current project/works',
      references: [
        {
          source: 'src/assets/logo/github.svg',
          link: 'https://github.com/griseldans/portfolio'
        }
      ],
      tools: [
        'src/assets/logo/react.png',
        'src/assets/logo/react-bootstrap.svg'
      ]
    },
    {
      img_src: 'src/assets/project-page/invoicesync-page.jpg',
      name: 'InvoiceSync',
      category: 'course team project',
      description: 'Web-based invoice management system for PT Krida Indotama Teknologi',
      references: [
        {
          source: 'src/assets/logo/github.svg',
          link: 'https://github.com/griseldans/megapro-invoicesync'
        },
        {
          source: 'src/assets/logo/youtube.svg',
          link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DPZocejNhcnk&ved=2ahUKEwiFpOPI9smGAxWCzzgGHZJiOHsQtwJ6BAgOEAI&usg=AOvVaw1m_-q2obY364bSOQ51CA_Q'
        }
      ],
      tools: [
        'src/assets/logo/springboot.svg',
        'src/assets/logo/bootstrap.svg'
      ]
    },
    {
      img_src: 'src/assets/project-page/jejakarbon-main-page.jpg',
      name: 'APAPEDIA',
      category: 'course team project',
      description: 'E-commerce system build using microservices architecture',
      references: [
        {
          source: 'src/assets/logo/github.svg',
          link: 'https://github.com/griseldans/tk_a_riz_3'
        }
      ],
      tools: [
        'src/assets/logo/springboot.svg',
        'src/assets/logo/bootstrap.svg'
      ]
    },
    {
      img_src: 'src/assets/project-page/jejakarbon-main-page.jpg',
      name: 'Jejakarbon',
      category: 'course team project',
      description: 'Track carbon foot print and provide a platform to donate to Go Green movements',
      references: [
        {
          source: 'src/assets/logo/github.svg',
          link: 'https://github.com/B06-PBP-2022/jejakarbon'
        }
      ],
      tools: [
        'src/assets/logo/django.svg',
        'src/assets/logo/django-rest.svg',
        'src/assets/logo/bootstrap.svg'
      ]
    },
  ]

  return (
    <div className='specialty-container mt-4'>
      <div className='page-title'>        
        <h1>Web Development</h1>
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

export default WebDev;