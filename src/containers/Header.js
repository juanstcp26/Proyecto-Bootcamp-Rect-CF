import styled from "styled-components";
import TinyImage from "../elements/TinyImage";
import Container from "../elements/Container";
import { useNavigate } from "react-router-dom";

const H1Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 4em;
  color: #e1f0ef;
  cursor: pointer;
`;

const Header = ({ className }) => {

  const navigate = useNavigate();

    return (
      <Container>
        <header className={className}>
          <div>
            <H1Title onClick={() => navigate(`/`)}>POKEDEX</H1Title>
          </div>
          <TinyImage src="/imgs/pokeball.png" />
        </header>
      </Container>
    );
};

export default styled(Header)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
`;
