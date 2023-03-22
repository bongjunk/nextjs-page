"use client";

import React from "react";
import styled from "styled-components";

const SubBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #000;
`;

const sub = () => {
  return (
    <>
      <div>
        <p>sub page</p>
        <SubBox />
      </div>
    </>
  );
};

export default sub;
