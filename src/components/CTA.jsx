import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Want to work Together? <br className='sm:block hidden' />
        or want to talk!
      </p>
      <Link to='/contact' className='btn'>
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
