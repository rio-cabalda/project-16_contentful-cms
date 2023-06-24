import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam numquam officiis voluptatum, perspiciatis dignissimos explicabo esse dicta doloribus commodi laboriosam qui. Quis possimus excepturi magnam quibusdam numquam reprehenderit labore.
                Et facere odio fugiat neque praesentium recusandae amet, commodi tenetur fuga! Consectetur suscipit, delectus quo veniam distinctio tempora dolor dolores sed. Nostrum laboriosam impedit non cum! Unde odio fugiat ut?
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