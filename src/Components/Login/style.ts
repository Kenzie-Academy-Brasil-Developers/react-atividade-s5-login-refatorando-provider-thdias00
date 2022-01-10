import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3NILP8VCsfHyjHmVBOUMzjxbiuLA8F-8fQ&usqp=CAU");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #a1bfc5;
    width: 50%;
    height: 70%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    > input,
    button {
      height: 10%;
      width: 80%;
      margin: 20px;
    }
  }
`;
