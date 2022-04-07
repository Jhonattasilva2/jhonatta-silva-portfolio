import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <NameDiv></NameDiv>
      <PhotoDiv></PhotoDiv>
    </Main>
  );
}

const Main = styled.main`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
`;

const NameDiv = styled.div`
background-color: red;
min-width: 50%;
`;

const PhotoDiv = styled.div`
background-color: green;
min-width: 50%;
`;
