import React from "react";
import TareaForm from "./TareaForm";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <TareaForm />
    </div>
  );
};

export default Home;
