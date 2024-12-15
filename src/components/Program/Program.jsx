import ProgramCard from "../ProgramCard/ProgramCard";
import Container from "../../components/Container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Program.css";

const Program = () => {
  return (
    <>
      <div className="program">
        <Container>
          <SectionTitle subHeading="Our PROGRAM" heading="What We Offer" />

          <div className="programCardArea">
            <ProgramCard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Program;
