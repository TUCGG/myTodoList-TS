import styled from "styled-components";

export const StyleTodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

export const StyleInputbox = styled.div`
  margin-bottom: 3em;
  & form {
    display: flex;
  }
  & input {
    width: 80%;
  }
  & button {
    width: 20%;
    height: 30px;
    border: unset;
  }
`;

export const StyleTodoListItem = styled.div`
  display: flex;
  align-items: center;
  & h1 {
    margin-right: 5%;
  }
  & p {
    width: 80%;
    padding-right: 5%;
    box-sizing: border-box;
    line-height: 1.5;
  }
  & button {
    word-break: keep-all;
  }
  & button:nth-of-type(1) {
    margin-left: auto;
    margin-right: 1%;
  }
  &.isCheck {
    opacity: 0.5;
  }
`;

export const StyleCheckBox = styled.button`
  width: 50px;
  height: 30px;
`;

export const StyleDeleteBox = styled.button`
  width: 50px;
  height: 30px;
`;
