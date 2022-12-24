import styled from "styled-components";
import React from "react";

export default function admin() {
  const count = "99";
  return (
    <div>
      <h1>어드민페이지</h1>
      <li>사용자 수 {count}</li>
      <li>승인대기{count}</li>
      <StyledDiv>submit</StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  color: red;
`;
