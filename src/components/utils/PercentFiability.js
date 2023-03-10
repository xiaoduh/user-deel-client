import React, { useEffect, useState } from "react";
import colors from "../../style/_settings.scss";

const PercentFiability = ({ percent }) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (percent <= 33) {
      setColor(colors.red);
    } else if (percent <= 66) {
      setColor(colors.yellow);
    } else {
      setColor(colors.green);
    }
  }, [percent]);
  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : " - "}
    </p>
  );
};

export default PercentFiability;
