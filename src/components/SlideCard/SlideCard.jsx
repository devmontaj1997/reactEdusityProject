/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./SlideCard.css";

const SlideCard = ({ changeSlide, data }) => {
 
  
  return (
    <>
      <div
        key={data.id}
        className="slide"
        style={{ transform: ` translateX(-${changeSlide * 106}%)` }}
      >
        <div className="slideTop">
          <div className="left">
            <img src={data.user} alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h1>{data.name}</h1>
              <p>{data.position}</p>
            </div>
          </div>
        </div>
        <div className="slideBottom">
          <p>{data.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
