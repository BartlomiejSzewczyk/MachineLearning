import MovieField from "./Movie/MovieField";
import styled from "styled-components";
import OscarIcon from "./Icons/oscarIcon";
import StarIcon from "./Icons/starIcon";

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



import React from 'react';

function App() {
  const [toDoItems, updateToDoItems] = React.useState([]);  
  React.useEffect(() => {
    const getToDoItems = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API}/movies`
      );

      const items = await response.json();

      if (items && Array.isArray(items) && items.length) {
        // @ts-ignore
        updateToDoItems(items);
      }
    };
    getToDoItems();
  }, []);
  
  return (
    <div>
      {toDoItems && toDoItems.length
        ? toDoItems.map((item, i) => {
            return (
              <div key={i}>
                {`${item.name}`}
                <br />
              </div>
            );
          })
        : 'No items to be done'}
    </div>
  );
}

export default App;