import styled from "styled-components";
import LogoImg from "../img/logo.svg";

export default function Header() {
  return (
    <Navbar>
      <Logo src={LogoImg} alt="react-image" />
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
  background-color: red;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

const Logo = styled.img`
  max-width: 52px;
`;

const Lista = styled.ul`
  display: flex;
  min-width: 50%;
  justify-content: space-around;
`;

const Item = styled.li`
list-style-type: none;
`;

const Link = styled.a``;
