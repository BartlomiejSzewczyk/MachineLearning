import styled from "styled-components";
import { device } from "../Styles/resolutions";
import { useState, useEffect } from "react";
import Select from "react-select";
import Checkbox from "rc-checkbox";
import "../Styles/checkboxes-styles.css";
import firebase from "../Firebase/firebase";

const Header = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 46px;
  }
`;

const SelectField = styled.div`
  position: absolute;
  top: 20%;
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
  top: 30%;
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
  top: 45%;
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

const Poster = styled.img`
  position: absolute;
  width: 20%;
  top: 50%;
  transform: translateY(-50%);
  right: 50px;
`;

const MovieField = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedRate, setSelectedRate] = useState("");
  const [ratingMap, setRatingMap] = useState(new Map());
  const [posterUrl, setPosterUrl] = useState("");

  useEffect(() => {
    const dbRef = firebase.database().ref().child("movies");
    var moviesFromDb = [];
    dbRef.on("value", (snap) => {
      snap.forEach((movie) => {
        moviesFromDb.push({ value: movie.key, label: movie.key });
      });
      setMovies(moviesFromDb);
      setSelectedMovie(moviesFromDb[0]);
    });
  }, []);

  useEffect(() => {
    getMovieInfo(selectedMovie);
  }, [selectedMovie]);

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

  const getMovieInfo = (movie) => {
    const dbRef = firebase
      .database()
      .ref()
      .child("movies")
      .child(`${movie.value}`);
    dbRef.on("value", (snap) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${snap.val()}?api_key=72ed6ba834b7f05dc61a1e4fc27613dd&language=pl`
      )
        .then((response) => response.json())
        .then((data) => {
          setPosterUrl(data.poster_path);
        });
    });
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

  const handleConfirmButton = () => {
    const dbRef = firebase.database().ref().child("rating");
    var ratingObj = {};
    ratingMap.forEach((rate, name) => {
      ratingObj[name] = rate;
    });
    dbRef.push(ratingObj);
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
      {posterUrl ? (
        <Poster
          alt="poster"
          src={`https://image.tmdb.org/t/p/original${posterUrl}`}
        />
      ) : null}
      {selectedMovie ? <RatingField>{renderCheckboxes()}</RatingField> : null}
      {ratingMap.size === movies.length && movies.length ? (
        <ConfirmButton onClick={handleConfirmButton}>Wyślij</ConfirmButton>
      ) : null}
    </>
  );
};

export default MovieField;
