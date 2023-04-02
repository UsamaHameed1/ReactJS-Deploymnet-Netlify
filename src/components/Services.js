import { services } from "../data";
import Title from "./Title";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title main="Our" sub="Services"></Title>
      <div className="section-center services-center">
        {services.map(function (service) {
          return (
            <>
              <article className="service">
                <span className="service-icon">
                  <i className={service.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.service}</h4>
                  <p className="service-text">{service.title}</p>
                </div>
              </article>
            </>
          );
        })}

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
