import "./Modal.css";

import { GiTireIronCross } from "react-icons/gi";
import logo from "../../assets/logo.png";
// eslint-disable-next-line react/prop-types
const Modal = ({ children, handleHideMenu }) => {
  const handlestopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div onClick={handleHideMenu} className="modalFullArea">
        <div onClick={handlestopPropagation} className="modalContentArea">
          <div className="modalHeader">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="CrossIcon">
              <GiTireIronCross onClick={handleHideMenu} />
            </div>
          </div>
          <div className="modalBody">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
