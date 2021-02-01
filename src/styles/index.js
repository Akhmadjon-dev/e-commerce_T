import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  width: 100%;
  background-color: red;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc || "flex-start"};
  align-items: ${(props) => props.ai || "flex-start"};
  flex-direction: ${(props) => props.fd || "row"};
  color: ${(props) => (props.active ? "green" : "red")};
  flex-wrap: ${(props) => props.fw || "no-wrap"};
`;
