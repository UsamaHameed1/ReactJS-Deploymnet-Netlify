import Title from "./Title";
import { tour } from "../data.js";
import Tile from "./tile";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title main="feature" sub="tours"></Title>

      <div className="section-center featured-center">
        {tour.map(function (tour) {
          const { img, title, paragraph, location, days, date } = tour;
          return (
            <>
              <Tile
                img={img}
                title={title}
                paragraph={paragraph}
                location={location}
                date={date}
                days={days}
              ></Tile>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
