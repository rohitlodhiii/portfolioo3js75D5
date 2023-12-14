import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        
        <span className='font-semibold mx-2 text-white'>Rohit Lodhi</span>
        👋
        <br />
        Begineer Web Developer !
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Practising Web dev from 3years <br /> and good in many languages
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          About Me !
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Made many projects in these years. <br /> Some of them posted below !
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Want to Work Together ? <br/> Just Text me hi !
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
