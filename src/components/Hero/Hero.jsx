import Button from "../Button/Button";
import Container from "../Container/Container";
import expoloreArrow from "../../assets/dark-arrow.png"
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="heroSection">
        <div className="overlayDiv">
        <Container>
          <div className="contantArea">
            <div className="heading">
              <h2>We Ensure better education for a better world</h2>
            </div>
            <div className="subHeading">
              <p>
                Our cutting-edge curriculum is designed to empower students with
                the knowledge, skills, and experiences needed to excel in the
                dynamic field of education
              </p>
            </div>
            <div className="exploreBtn">
              <Button >
                <p>Explore more</p>
               <img  src={expoloreArrow} alt="" />
              </Button>
            </div>
          </div>
        </Container>
        </div>

       
      </div>
    </>
  );
};

export default Hero;
