import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Rio Joy Cabalda</h1>
                <p>
                  <span>{'>'} React JS</span>
                  <span>{'>'} HTML</span>
                  <span>{'>'} CSS</span>
                  <span>{'>'} Javascript</span>
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="Woman and the browser" />
            </div>
        </div>
    </section>
  )
}

export default Hero;