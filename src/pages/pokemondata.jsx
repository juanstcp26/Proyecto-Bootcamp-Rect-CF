import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPokemonDetail,
  isLoadingPokedata,
  pokedataData,
  pokedataError,
} from "../redux/slices/details";
import PokeName from "../elements/PokeName";
import TinyText from "../elements/TinyText";
import Row from "../elements/Row";
import Container from "../elements/Container";
import Stat from "../elements/Stat";
import Data from "../elements/Data";

const Number = styled.span`
  font-size: 20px;
`;

const PokemonData = ({ className }) => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(pokedataData);
  const isLoading = useSelector(isLoadingPokedata);
  const error = useSelector(pokedataError);

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
  }, [name]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (Object.keys(error)?.length) {
    return <h6>Ha ocurrido un error</h6>;
  }

  return (
    <div className={className}>
      <Container>
        <br />
        <h2>
          Información sobre <PokeName>{pokemon.name}</PokeName>
        </h2>
        {Object.keys(pokemon)?.length ? (
          <div>
            <Row>
              <div>
                <img
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                  alt="Imagen del Pokemon"
                />
                <TinyText>Orden en la Pokedex: n°{pokemon.id}</TinyText>
              </div>
              <Data>
                <Row>
                  <Stat>
                    <p>Altura: </p>
                    <Number>{pokemon?.height}0 cm</Number>
                  </Stat>
                  <Stat>
                    <p>Peso: </p>
                    <Number>{pokemon?.weight}00 g</Number>
                  </Stat>
                </Row>
                <div>
                  <br />
                  <TinyText style={{ "text-align": "left", color: "#bb0000" }}>
                    ESTADISTICAS
                  </TinyText>
                  <Row>
                    <Stat>
                      <p>Puntos de vida: </p>
                      <Number>{pokemon?.stats?.[0].base_stat}</Number>
                    </Stat>
                    <Stat>
                      <p>Ataque: </p>
                      <Number>{pokemon?.stats?.[1].base_stat}</Number>
                    </Stat>
                    <Stat>
                      <p>Defensa: </p>
                      <Number>{pokemon?.stats?.[2].base_stat}</Number>
                    </Stat>
                    <Stat>
                      <p>Ataque Especial: </p>
                      <Number>{pokemon?.stats?.[3].base_stat}</Number>
                    </Stat>
                    <Stat>
                      <p>Defensa Especial: </p>
                      <Number>{pokemon?.stats?.[4].base_stat}</Number>
                    </Stat>
                    <Stat>
                      <p>Velocidad: </p>
                      <Number>{pokemon?.stats?.[5].base_stat}</Number>
                    </Stat>
                  </Row>
                </div>
              </Data>
            </Row>
          </div>
        ) : undefined}
        <br />
      </Container>
    </div>
  );
};

export default styled(PokemonData)`
  background-color: #bcd5d3;
  height: auto;
`;
