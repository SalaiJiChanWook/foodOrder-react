import containerStyle from "./container.module.css";

export default function Container({ children }) {
  return <div className={containerStyle.parentContainer}>{children}</div>;
}
