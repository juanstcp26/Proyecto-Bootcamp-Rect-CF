import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemons,
  isLoadingPokemons,
  pokemonsData,
  pokemonsError,
} from "../redux/slices/list";
import TinyText from "../elements/TinyText";
import { PrimaryButton } from "../collections/Buttons";
import Container from "../elements/Container";
import Pokemon from "../blocks/Pokemon";
import Row from "../elements/Row";

const PokeList = ({ className }) => {
  const pokeList = useSelector(pokemonsData);
  const isLoading = useSelector(isLoadingPokemons);
  const error = useSelector(pokemonsError);

  const srctext = "100000&offset=0";
  const dispatch = useDispatch();

  const handleListClick = async () => {
    dispatch(fetchPokemons(srctext));
  };

  return (
    <div className={className}>
      <Container>
        <br/>
        <TinyText>
          En esta página se puede visualizar un listado de todos los pokemons
        </TinyText>
        {isLoading && <h6>Cargando...</h6>}
        <Row>
          {!isLoading &&
            pokeList?.map((pokemon) => (
              <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>
            ))}
        </Row>
        {!error && <h6>Ha ocurrido un error</h6>}
        <PrimaryButton onClick={handleListClick}>
          Mostrar Listado
        </PrimaryButton>
      </Container>
    </div>
  );
};

export default styled(PokeList)`
    background-color: #bcd5d3;
    height: auto;
  `;
