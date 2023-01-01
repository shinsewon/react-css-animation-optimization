import React, { useState } from "react";
import styled from "styled-components";
import Bar from "./Bar";

function SurveyChart() {
  const [percent, setPercent] = useState(0);
  const isSelected = percent !== 0;

  const handleClickBar = () => {
    setPercent((prev) => {
      if (prev === 0) return 100;
      else return 0;
    });
  };

  return (
    <SurveyChartWrapper>
      <Bar
        percent={percent}
        isSelected={isSelected}
        handleClickBar={handleClickBar}
      />
    </SurveyChartWrapper>
  );
}

export default SurveyChart;

const SurveyChartWrapper = styled.div`
  padding: 150px 20px 60px 20px;
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;
`;
