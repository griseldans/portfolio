import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const WebDev = () => {
  const projects = [
    {
      img_src: './project-page/portfolio.jpg',
      name: 'Portfolio',
      category: 'personal project',
      description: 'Website to showcase my prior and current project/works',
      references: [
        {
          source: './logo/github.svg',
          link: 'https://github.com/griseldans/portfolio'
        }
      ],
      tools: [
        './logo/react.png',
        './logo/react-bootstrap.svg'
      ]
    },
    {
      img_src: './project-page/invoicesync.jpg',
      name: 'InvoiceSync',
      category: 'course team project',
      description: 'Web-based invoice management system for PT Krida Indotama Teknologi',
      references: [
        {
          source: './logo/github.svg',
          link: 'https://github.com/griseldans/megapro-invoicesync'
        },
        {
          source: './logo/youtube.svg',
          link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DPZocejNhcnk&ved=2ahUKEwiFpOPI9smGAxWCzzgGHZJiOHsQtwJ6BAgOEAI&usg=AOvVaw1m_-q2obY364bSOQ51CA_Q'
        }
      ],
      tools: [
        './logo/springboot.svg',
        './logo/bootstrap.svg'
      ]
    },
    {
      img_src: './project-page/apapedia.jpg',
      name: 'APAPEDIA',
      category: 'course team project',
      description: 'E-commerce system build using microservices architecture',
      references: [
        {
          source: './logo/github.svg',
          link: 'https://github.com/griseldans/tk_a_riz_3'
        }
      ],
      tools: [
        './logo/springboot.svg',
        './logo/bootstrap.svg'
      ]
    },
    {
      img_src: './project-page/jejakarbon.jpg',
      name: 'Jejakarbon',
      category: 'course team project',
      description: 'Track carbon foot print and provide a platform to donate to Go Green movements',
      references: [
        {
          source: './logo/github.svg',
          link: 'https://github.com/B06-PBP-2022/jejakarbon'
        }
      ],
      tools: [
        './logo/django.svg',
        './logo/django-rest.svg',
        './logo/bootstrap.svg'
      ]
    },
  ]

  return (
    <div className='specialty-container mt-4'>
      <div className='page-title'>        
        <h1>Web Development</h1>
      </div> 
      <Row className='gx-5 gy-5 d-flex justify-content-center'>
        {
          projects.map((project) => (
            <Col sm={12} md={6} lg={4} xxl={3} className='d-flex justify-content-center'>
              <ProjectCard 
                img_src={project.img_src} 
                name={project.name} 
                category={project.category} 
                description={project.description} 
                references={project.references} 
                tools={project.tools} />
            </Col>
          ))
        }
      </Row>    
    </div>
  )
}

export default WebDev;