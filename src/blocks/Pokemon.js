import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../collections/Buttons";
import PokeName from "../elements/PokeName";

const Article = ({ className, pokemon }) => {

  const navigate = useNavigate();
  
  return (
    <div className={className}>
      <PokeName>{pokemon.name}</PokeName>
      <br />
      <SecondaryButton onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
        Ver Detalles
      </SecondaryButton>
    </div>
  );
};

export default styled(Article)`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  width: min(150px, 100%);
  border-radius: 20px;
  background-color: grey;
`;