import "./attribution.styles.scss";

const Attribution = () => {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://charlie-alonso.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Charlie Alonso
      </a>
      .
    </div>
  );
};

export default Attribution;
