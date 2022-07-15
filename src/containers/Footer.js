import styled from "styled-components";
import Container from "../elements/Container";
import Row from "../elements/Row";
import TinyImage from "../elements/TinyImage";
import TinyText from "../elements/TinyText";

const Footer = ({ className }) => {
    return (
      <Container>
        <footer className={className}>
            <TinyImage src="/imgs/pokeball.png" />
            <TinyText>Gracias por visitar esta Pokedex</TinyText>
            <TinyImage src="/imgs/pokeball.png" />
        </footer>
      </Container>
    );
}

export default styled(Footer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 60px;

  p {
    color: #e1f0ef;
  }
`;