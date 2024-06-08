import { Link } from "react-router-dom";

interface Props {
    item: string;
    link: string;
}

export const HomeCard = ({item, link}: Props) => {

  return (
    <Link to={link} className='card home-card'>
        <h3>
            {item}
        </h3>
    </Link>
  )
}
