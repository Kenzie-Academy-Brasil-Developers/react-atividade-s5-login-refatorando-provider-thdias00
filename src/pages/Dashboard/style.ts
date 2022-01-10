import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3NILP8VCsfHyjHmVBOUMzjxbiuLA8F-8fQ&usqp=CAU");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  >button{
      width: 200px;
      height: 70px;
      margin: 50px;
  }
}`;
