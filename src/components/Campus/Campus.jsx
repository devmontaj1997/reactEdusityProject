import SectionTitle from "../sectionTitle/SectionTitle";
import "./Campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import rightArrow from "../../assets/white-arrow.png";
import Container from "../Container/Container";
import Button from "../Button/Button";

const galleryImg = [
  {
    id: "1",
    name: gallery1,
  },
  {
    id: "2",
    name: gallery2,
  },
  {
    id: "3",
    name: gallery3,
  },
  {
    id: "4",
    name: gallery4,
  },
];
const Campus = () => {
  return (
    <>
    <div className="campus">
    <Container >
        <SectionTitle subHeading="Gallery" heading="Campus Photos" />

        <div className="galleryImgSection">
          {galleryImg?.length > 0
            ? galleryImg.map((item) => {
                return (
                  <div key={item.id} className="imgItem">
                    <img src={item.name} alt="" />
                  </div>
                );
              })
            : "no gallery found"}
        </div>
        <div className="buttoArea">
            <Button>
                <div className="buttonContent">
                <p>See more here </p>
                <img src={rightArrow} alt="" />

                </div>
               
            </Button>
        </div>
      </Container>

    </div>
     
    </>
  );
};

export default Campus;
