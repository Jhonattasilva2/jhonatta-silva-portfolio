import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Main>
      <NameDiv>
        <MiddleDiv>
          <MyName>Jhonatta Silva</MyName>
          <DivButtons>
            <a rel="noreferrer"
              href="https://www.linkedin.com/in/jhonatta-silva-dev/"
              target="_blank"
            >
              <Button>
                <FaLinkedin /> Linkedin
              </Button>
            </a>
            <Button>Download CV</Button>
          </DivButtons>
        </MiddleDiv>
      </NameDiv>
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
  background-color: #001578;
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoDiv = styled.div`
  background-color: green;
  min-width: 50%;
`;

const MiddleDiv = styled.div`
  min-height: 60%;
  min-width: 70%;
`;

const MyName = styled.h1`
  width: 92%;
  animation: digitando 3s steps(15), blink 0.4s infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  color: #fff;
  font-size: 4.2rem;

  @keyframes digitando {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    40% {
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  min-width: 200px;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
