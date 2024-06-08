import { Card } from 'react-bootstrap';

interface Props {
  img_src: string;
  name: string;
  category: string;
  description: string;
  references: {
    source: string,
    link: string,
  }[]
  tools: string[]
}

const ProjectCard = ({img_src, name, category, description, references, tools}: Props) => {
  return (
    <Card style={{width: '18rem', height: '430px'}}>
      <Card.Img src={img_src} variant='top' alt="invoicesync logo" style={{height: '160px'}} />
      <Card.Body>
        <Card.Title className='mb-0'>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <div className="reference">
          {
            references.map((reference) => (
              <a href={reference.link} target="_blank" rel="noopener noreferrer" className="card-logo-link">
                <img src={reference.source} alt="GitHub Logo" className="card-logo"/>
              </a>
            ))
          }
        </div>
      </Card.Body>
      <Card.Footer style={{height: '50px', textAlign: 'left'}}>
        {
            tools.map((tool) => (
              <img src={tool} alt="Logo" className="card-logo" style={{height: '25px'}} />
            ))
          }
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard;