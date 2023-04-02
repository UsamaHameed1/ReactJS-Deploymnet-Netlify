const tile = (prop) => {
  const { title, paragraph, location, days, price, date, img } = prop;
  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{paragraph}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              {location}
            </p>
            <p>{days} days</p>
            <p>from {price}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default tile;
