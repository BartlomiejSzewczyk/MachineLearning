import MovieField from "./Movie/MovieField";
import styled from "styled-components";
import OscarIcon from "./Icons/oscarIcon";
import StarIcon from "./Icons/starIcon";
import { useEffect, useState } from "react";

const Background = styled.div`
  position: absolute;
  background: linear-gradient(45deg, #653131b8, #35070747);
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function App() {
  return (
    <Background>
      <OscarIcon />
      <StarIcon />
      <MovieField />
    </Background>
  );
}

export default App;
