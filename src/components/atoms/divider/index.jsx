import divider from "../../../assets/images/divider.svg";

const Divider = ({ className = "" }) => {
  return <hr className={`${className} divider`} />;
  // return <img src={divider} className={`${className} divider`} alt="divider" />;
};

export default Divider;
