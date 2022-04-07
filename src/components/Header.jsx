import styled from "styled-components";
import LogoImg from "../img/logo.svg";

export default function Header() {
  return (
    <Navbar>
      <Link href="#">
        <Logo src={LogoImg} />
      </Link>
      <Lista>
        <Item>
          <Link href="#">About</Link>
        </Item>
        <Item>
          <Link href="#">Skills</Link>
        </Item>
        <Item>
          <Link href="#">Projects</Link>
        </Item>
        <Item>
          <Link href="#">Contact</Link>
        </Item>
      </Lista>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: #001578;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
`;

const Logo = styled.img`
  min-width: 52px;
`;

const Lista = styled.ul`
  display: flex;
  min-width: 40%;
  justify-content: space-around;
`;

const Item = styled.li`
  list-style-type: none;
  display: block;
  height: 100%;
  
`;

const Link = styled.a`
  margin: auto 0;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: 0.4s ease;
  

  &:hover {
    color: #000;
  }
`;
