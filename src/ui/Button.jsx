import Styles from "./button.module.css";
function Button({ children, type }) {
  return <button className={Styles[type]}>{children}</button>;
}

export default Button;
