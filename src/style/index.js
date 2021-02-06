import styled from "styled-components";
import color from "./colors";

export const StyledApp = styled.div`
  width: 1440px;
  max-height:3504px;
  @media screen and (max-width:1024px){
    width:1024px;
  }
  @media screen and (max-width:768px){
    width:768px;
  }
  @media screen and (max-width:425px){
    width:425px;
  }

`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc || "flex-start"};
  align-items: ${(props) => props.ai || "flex-start"};
  flex-direction: ${(props) => props.fd || "row"};
  color: ${(props) => (props.active ? "green" : "red")};
  flex-wrap: ${(props) => props.fw || "no-wrap"};
`;
