import "./ProductCarosual.css";
import Container from "../../components/Container/Container";
import prevbtn from "../../assets/back-icon.png";
import nextbtn from "../../assets/next-icon.png";
import { useRef } from "react";
import SlideCard from "../SlideCard/SlideCard";
import { sliderData } from "../SlideCard/slideData";
const ProductCarosual = () => {
  // Create a ref for the ul element
  const boxRef = useRef(null);

  // Handlers for navigation
  const handlePrevBtn = () => {
    const box = boxRef.current; // Access the ul element
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handleNextBtn = () => {
    const box = boxRef.current; // Access the ul element
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft += width;
    }
  };
  return (
    <>
      <div className="productCarosul">
        <Container>
          <div className="productSlider">
            <img
              onClick={handlePrevBtn}
              className="prevBtn"
              src={prevbtn}
              alt=""
            />
            <img
              onClick={handleNextBtn}
              className="nextBtn"
              src={nextbtn}
              alt=""
            />
            <div className="productSlide">
           
              <ul ref={boxRef}>
              {sliderData?.length > 0
                ? sliderData.map((data) => {
                    return (
                      <li key={data.id} className="slideAnimation">
                        <SlideCard
                          data={data}
                         
                        />
                      </li>
                    );
                  })
                : "no data found"}
            </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductCarosual;
