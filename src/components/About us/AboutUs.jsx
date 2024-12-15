/* eslint-disable react/prop-types */
import Container from "../Container/Container";
import "./AboutUs.css";
import aboutImg from "../../assets/about.png";
import aboutPlayBtn from "../../assets/play-icon.png";


/* eslint-disable react/no-unescaped-entities */
const AboutUs = ({handleshowvideo}) => {

  return (
    <>
     
      <Container>
        <div className="aboutSection">
          <div className="aboutLeft">
            <div className="imgSection">
              <img src={aboutImg} alt="" />
            </div>
            <div className="playIcon" onClick={handleshowvideo}>
              <img src={aboutPlayBtn} alt="" />
            </div>
          </div>
          <div className="aboutRight">
            <div className="aboutTitle">
              <h3>ABOUT UNIVERSITY</h3>
            </div>
            <div className="aboutHeading">
              <h2>Nurturing Tomorrow's Leaders Today</h2>
            </div>
            <div className="aboutDesc">
              <p>
                Embark on a transformative educational journey with our
                university's comprehensive education programs. Our cutting-edge
                curriculum is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of
                education.
              </p>
              <p>
                With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.
              </p>
              <p>
                Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goals and unlock your
                full potential in shaping the future of education.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
