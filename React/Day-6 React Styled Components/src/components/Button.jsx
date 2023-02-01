import React from "react";
import styled from "styled-components";

const Button = styled.button`
    
    margin: 10px;
    padding: 8px 10px 8px 10px;
    background-color: ${({bgColor})=>bgColor};
    color: ${({color})=>color};
    border-style: ${({borderStyle})=>borderStyle};
    font-weight: 550;

`;

export default Button;
