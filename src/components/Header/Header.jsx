import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { AiOutlineAlignRight } from "react-icons/ai";
import "./Header.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const menuLink = [
  {
    name: "Home",
    path: "heroSection",
  },
  {
    name: "Program",
    path: "program",
  },
  {
    name: "About us",
    path: "aboutSection",
  },
  {
    name: "Campus",
    path: "campus",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(true);
  const handleHideMenu = () => setShowMenu(false);
  return (
    <>
      {/* mobile menu start */}

      {showMenu ? (
        <Modal handleHideMenu={handleHideMenu} handleShowMenu={handleShowMenu}>
          <div className="mobileMenu">
            <ul>
              {menuLink?.length > 0
                ? menuLink.map((menuItem) => {
                    return (
                      <li key={menuItem.name}>
                        <Link onClick={handleHideMenu}
                          to={menuItem.path}
                          activeClass="active"
                          smooth={true}
                          offset={-80}
                          duration={500}
                        >
                          {menuItem.name}
                        </Link>
                      </li>
                    );
                  })
                : " menu no found"}
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}

      {/* mobile menu end */}
      <header className={`fullHeader ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="headerArea ">
            <div className="left">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="right">
              <div className="Menu">
                <div className="mobileMenuIcon">
                  <AiOutlineAlignRight onClick={handleShowMenu} />
                </div>
                <div className="destopMenu">
                  <ul>
                    {menuLink?.length > 0
                      ? menuLink.map((menuItem) => {
                          return <li key={menuItem.name}> <Link
                          to={menuItem.path}
                          activeClass="active"
                          smooth={true}
                          offset={-80}
                          duration={500}
                        >
                          {" "}
                          {menuItem.name}{" "}
                        </Link></li>;
                        })
                      : " menu no found"}
                  </ul>
                </div>
              </div>
              <div className="buttonArea">
                <Button>
                  <p className="contactBtn">  <Link to="contact"  activeClass="active"
                          smooth={true}
                          offset={-80}
                          duration={500}> Contact Us </Link></p>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
