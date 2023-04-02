const Footer_Link = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href} className="footer-link" rel="noopener">
        {text}
      </a>
    </li>
  );
};
export default Footer_Link;
