import InnerContainerStyle from "./innerContainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={InnerContainer.innerContainer}>{children}</div>;
}
