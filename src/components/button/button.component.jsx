import "./button.styles.scss";

const Button = (props) => {
  return <button className="button-container">{props.text}</button>;
};

export default Button;
