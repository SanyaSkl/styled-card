import React from 'react';
import styled from "styled-components";
import images from "./assets/images/Rectangle 1.svg"
import {StyledHeader} from "./components/text/Header.styled";
import {StyledImg} from "./components/img/Images.styled";
import {StyledText} from "./components/text/Text.styled";
import {StyledBtn} from "./components/button/Button.styled";
import {StyledCard} from "./components/card/Card.styled";

function App() {
    return (
        <StyledBox>
            <StyledCard>
                <StyledImg src={images}/>
                <StyledHeader fontSize={"20px"} color={"grey"}>Headline</StyledHeader>
                <StyledText>Faucibus. Faucibus. Sit sit sapiens sit temporiser ut.
                    Sit molestie ornare in venen.</StyledText>
                <StyledBtn primary> See more </StyledBtn>
                <StyledBtn secondary> Save </StyledBtn>
            </StyledCard>
        </StyledBox>
    );
}

export default App;


const StyledBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`