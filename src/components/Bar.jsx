import React from "react";
import styled from "styled-components";

function Bar(props) {
  return (
    <BarWrapper onClick={props.handleClickBar} isSelected={props.isSelected}>
      <BarInfo>
        <Percent>{props.percent}%</Percent>
      </BarInfo>
      <BarGraph width={props.percent} isSelected={props.isSelected} />
    </BarWrapper>
  );
}

export default Bar;

const BarWrapper = styled.div`
  position: relative;
  margin-bottom: 3px;
  padding: 8px 0;
  background: ${({ isSelected }) => (isSelected ? "#dddddd" : "#f3f3f3")};
`;
const BarInfo = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
`;
const Percent = styled.span`
  text-align: right;
  min-width: 70px;
  flex: 0 0 auto;
`;

const BarGraph = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(${({ width }) => width / 100});
  transform-origin: center left;
  transition: transform 1.5s ease;
  height: 100%;
  background: ${({ isSelected }) =>
    isSelected ? "rgba(126, 198, 81, 0.7)" : "rgb(198, 198, 198)"};
  z-index: 1;
`;
