import React from "react";
import Mission from "./mission/Mission.js";
import Vision from "./vision/Vision.js";
import Values from "./values/Values.js";
import styles from "./missionPage.module.css";
import Navbar from "../general/navbar/Navbar.js";
// import Vision from "components/mission/vision/Vision.js";
// import Values from "components/mission/values/Values.js";

const MissionVV = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Mission />
      <Vision />
      <Values />
    </div>
  );
};

export default MissionVV;
