import "./ProgramCard.css";
import graduationDegree from "../../assets/program-1.png";
import MastersDegree from "../../assets/program-2.png";
import PostGraduation from "../../assets/program-3.png";
import programicon1 from "../../assets/program-icon-1.png";
import programicon2 from "../../assets/program-icon-2.png";
import programicon3 from "../../assets/program-icon-3.png";

const programList = [
  {
    id: "1",
    programImg:  graduationDegree,
    programIcon:  programicon1 ,
    programTitle: "Graduation Degree",
  },
  {
    id: "2",
    programImg:  MastersDegree ,
    programIcon:  programicon2 ,
    programTitle: "Masters Degree",
  },
  {
    id: "3",
    programImg:  PostGraduation,
    programIcon:  programicon3 ,
    programTitle: "Post Graduation",
  }
];

const ProgramCard = () => {
  return (
    <>
      {programList?.length > 0
        ? programList.map((program) => {
          
            
            return (
              <div key={program.id} className="programCard">
                <div className="mainImg">
                  <img src={program.programImg} alt="" />
                  <div className="imgOverlay">
                    <div className="icon">
                      <img src={program.programIcon} alt="" />
                    </div>
                    <div className="title">
                      <h3>{program.programTitle}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "no program found"}
    </>
  );
};

export default ProgramCard;
