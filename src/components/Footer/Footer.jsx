import "./Footer.css";

import Container from "../../components/Container/Container";
const Footer = () => {
  return (
    <>
      <footer className="FooterArea">
        <Container>
          <div className="footerContent">
            <div className="footerLeft">
              <p>
                © 2024 devMontaj inspired by GreatStack.dev. All rights
                reserved.
              </p>
            </div>
            <div className="footerRight">
              <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
