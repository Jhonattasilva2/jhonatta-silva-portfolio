import styled from "styled-components";

export default function Header() {
  return (
    <Navbar>
      <Logo />
      <Lista>
        <Item>About</Item>
        <Item>Skill</Item>
        <Item>Projects</Item>
        <Item>Contatc</Item>
      </Lista>
    </Navbar>
  );
}

const Navbar = styled.nav`
background-color: blue;
display: flex;
min-width: 100%;
`;

const Logo = styled.img``;

const Lista = styled.ul``;
const Item = styled.li``;
