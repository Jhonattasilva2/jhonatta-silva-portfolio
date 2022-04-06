import styled from "styled-components"

export default function Footer() {
  return (
    <FooterDiv>
        Jhonatta Silva - 2022
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
background-color: #001578;
min-width: 100%;
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
color: #FFF;
position: absolute;
bottom: 0;
`
