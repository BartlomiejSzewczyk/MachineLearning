import styled from "styled-components";
import { device } from "../Styles/resolutions";
import { useState, useEffect } from "react";
import Select from "react-select";
import Checkbox from "rc-checkbox";
import "../Styles/checkboxes-styles.css";

const Header = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 46px;
  }
`;

const SelectField = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  @media ${device.laptop} {
    width: 350px;
  }
  @media ${device.desktop} {
    width: 400px;
  }
`;

const RatingField = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const RatingLabel = styled.label`
  padding: 5px;
  @media ${device.laptop} {
    font-size: 22px;
  }
  @media ${device.desktop} {
    font-size: 26px;
  }
`;

const ConfirmButton = styled.button`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  background: #484871;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid black;
  color: white;
  outline: none;
  cursor: pointer;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`;

const MovieField = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedRate, setSelectedRate] = useState("");
  const [ratingMap, setRatingMap] = useState(new Map());

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        var movies = [];
        data.forEach((movie) => {
          movies.push({ value: movie.name, label: movie.name });
        });
        setMovies(movies);
      });
  }, []);

  const renderCheckboxes = () => {
    var rating = [];
    for (var i = 0; i < 6; ++i) {
      rating.push(
        <RatingLabel for={i}>
          {i}
          <Checkbox
            disabled={ratingMap.get(selectedMovie.value)}
            className="checkboxStyle"
            name={i}
            checked={
              ratingMap.get(selectedMovie.value)
                ? ratingMap.get(selectedMovie.value) === `${i}`
                : selectedRate === `${i}`
            }
            onClick={(event) => {
              setSelectedRate(event.target.name);
              handleNextMovie(event.target.name);
            }}
          />
        </RatingLabel>
      );
    }
    rating.push(<br />);
    rating.push(<br />);
    rating.push(
      <RatingLabel for={-1}>
        Nie znam tego filmu
        <Checkbox
          disabled={ratingMap.get(selectedMovie.value)}
          className="checkboxStyle"
          name={-1}
          checked={
            ratingMap.get(selectedMovie.value)
              ? ratingMap.get(selectedMovie.value) === `-1`
              : selectedRate === `-1`
          }
          onClick={(event) => {
            setSelectedRate(event.target.name);
            handleNextMovie(event.target.name);
          }}
        />
      </RatingLabel>
    );
    return rating;
  };

  const handleNextMovie = (rate) => {
    var mapCopy = new Map(ratingMap);
    mapCopy.set(selectedMovie.value, rate);
    setRatingMap(mapCopy);
    var newMovieIndex = 0;
    movies.forEach((movie, index) => {
      if (movie.value === selectedMovie.value) {
        newMovieIndex = index + 1;
      }
    });
    if (
      movies.length > newMovieIndex &&
      !ratingMap.get(movies[newMovieIndex].value)
    ) {
      setSelectedMovie(movies[newMovieIndex]);
      setSelectedRate("");
    } else {
      newMovieIndex = findFreeIndex();
      if (movies.length > newMovieIndex) {
        setSelectedMovie(movies[newMovieIndex]);
        setSelectedRate("");
      }
    }
  };

  const findFreeIndex = () => {
    var freeIndex = movies.length;
    movies.forEach((movie, index) => {
      if (
        !ratingMap.get(movie.value) &&
        !(movie.value === selectedMovie.value)
      ) {
        freeIndex = index;
      }
    });
    return freeIndex;
  };

  return (
    <>
      <Header>Wybierz film do oceny:</Header>
      <SelectField>
        <Select
          value={selectedMovie}
          onChange={setSelectedMovie}
          options={movies}
          placeholder={`Wybierz z listy ...`}
          noResultsText={`Nie znaleziono wyników`}
        />
      </SelectField>
      {selectedMovie ? <RatingField>{renderCheckboxes()}</RatingField> : null}
      {ratingMap.size === movies.length && movies.length ? (
        <ConfirmButton>Wyślij</ConfirmButton>
      ) : null}
    </>
  );
};

export default MovieField;
