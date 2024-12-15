import "./SectionTitle.css";
// eslint-disable-next-line react/prop-types
const SectionTitle = ({subHeading,heading}) => {
  return (
    <>
      <div className="sectionTitleArea">
        <div className="subHeading">
            <h4>{subHeading}</h4>
        </div>
        <div className="sectionTitleHeading">
            <h2>
            {heading}
            </h2>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
