import { HomeCard } from "../components/HomeCard";

const Home = () => {
  const specialties = [
    'Web Development',
    'System Analysis',
    'UI/UX',
    'IT Infrastructure'
  ]

  const specialtiesPage = [
    'web-dev',
    'system-analyst',
    'ui-ux',
    'it-infra',
  ]
  return (
    <div className='introduction-container'>
      <div className='introduction-head mt-4'>
        <h1>
          Hello!
        </h1>
      </div>
      <div className='introduction-body' style={{marginTop: '30px'}}>
        <h3>
          <span>
            I'm Griselda Neysa Sadiya and my expertise lies in the development of complex systems.
          </span>
          <br />
        </h3>
        <h4>
        <span>
          [1] Currenly enrolled as an Information System student in Universitas Indonesia. 
        </span>
        <br />
        <span>
            [2] Seeking a challenging role in a dynamic organization where my competency in system development can be utilized to drive growth and innovation.
        </span>
        </h4>
      </div>
      <div className="introduction-body-2" style={{marginTop: '15px', marginBottom: '30px'}}>
        <h3>
          <span>
            Visit my prior works here:
          </span>
        </h3>
        <div className="introduction-body-specialties">
          {
            specialties.map((item, index) => (
              <div className="g-col-3">
                <HomeCard item={item} link={specialtiesPage[index]}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;