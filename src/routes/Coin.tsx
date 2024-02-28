import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    setLoading(false);
  }, []);
  console.log("Coin params", coinId);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
        {loading ? <Loader>Loading...</Loader> : null}
      </Header>
    </Container>
  );
}

export default Coin;
