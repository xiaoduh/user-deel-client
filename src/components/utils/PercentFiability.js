import React, { useEffect, useState } from "react";
import colors from "../../style/_settings.scss";

const PercentFiability = ({ int }) => {
  console.log(int);
  const [color, setColor] = useState();
  useEffect(() => {
    if (int <= 2.5) {
      setColor(colors.red);
    } else if (int <= 3.5) {
      setColor(colors.yellow);
    } else {
      setColor(colors.green);
    }
  }, [int]);
  return (
    <p className="percent-change-container" style={{ color }}>
      {int ? int.toFixed(1) + " /5" : " - "}
    </p>
  );
};

export default PercentFiability;
