const Title = (props) => {
  const { main, sub } = props;
  return (
    <>
      <div class="section-title">
        <h2>
          {main} <span>{sub}</span>
        </h2>
      </div>
    </>
  );
};
export default Title;
