import React from 'react';
import spin from "../../../assets/images/tail-spin.svg";

const Preloader = () => {
   return (
     <div>
        <img src={spin} alt={"preloader"}/>
     </div>
   );
};

export default Preloader;