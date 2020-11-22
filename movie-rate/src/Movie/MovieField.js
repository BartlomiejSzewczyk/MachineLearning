import styled from "styled-components";
import { device } from "../Styles/resolutions";
import { useState, useEffect } from "react";
import Select from "react-select";
import Checkbox from "rc-checkbox";
import "../Styles/checkboxes-styles.css";
import firebase from "../Firebase/firebase";
import { toast } from "react-toastify";

const SelectMovieField = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  width: 30%;
  height: 80%;
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 46px;
  }
`;

const SelectField = styled.div`
  position: relative;
  margin-top: 20px;
  width: 80%;
  left: 10%;
`;

const RatingField = styled.div`
  position: relative;
  margin-top: 20px;
  text-align: center;
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
  position: relative;
  margin-top: 10px;
  background: ${(props) => {
    if (props.disabled) {
      return "##4848716e";
    } else {
      return "#484871";
    }
  }};
  pointer-events: ${(props) => {
    if (props.disabled) {
      return "none";
    }
  }};
  width: 150px;
  max-width: 30%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid black;
  color: white;
  outline: none;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
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

const MovieInfo = styled.div`
  position: absolute;
  top: 15%;
  max-width: 30%;
  left: 3%;
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

const Counter = styled.div`
  position: relative;
  text-align: center;
  margin-top: 20px;
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

const SkipButton = styled.button`
  position: relative;
  margin-top: 10px;
  pointer-events: ${(props) => {
    if (props.disabled) {
      return "none";
    }
  }};
  border-radius: 20px;
  border: 1px solid black;
  outline: none;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  padding 5px 10px 5px 10px;
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

const CustomSelect = styled.select`
  font-size: 18px;
  max-width: 450px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

`;

const CustomOption = styled.option`
  font-size: 18px;
  max-width: 450px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: ${(props) => {
    if (props.skipped) {
      return "#c3c30b";
    }
  }};
`;

const MovieField = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedRate, setSelectedRate] = useState("");
  const [ratingMap, setRatingMap] = useState(new Map());
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieGenres, setMovieGenres] = useState("");
  const [isRated, setRatedState] = useState(false);
  const [skippedMovies, setSkippedMovies] = useState({});

  const notify = () => toast("Dziękujęmy za ocenienie filmów !");

  useEffect(() => {
    var mapCopy = new Map();
    if (window.sessionStorage.getItem("skippedMovies")) {
      var skippedMoviesCopy = JSON.parse(
        window.sessionStorage.getItem("skippedMovies")
      );
      setSkippedMovies(skippedMoviesCopy);
    }
    if (window.sessionStorage.getItem("ratingMap")) {
      for (const [key, value] of Object.entries(
        JSON.parse(window.sessionStorage.ratingMap)
      )) {
        mapCopy.set(key, value);
      }
      setRatingMap(mapCopy);
    }
    if (
      window.sessionStorage.getItem("movies") &&
      window.sessionStorage.getItem("ratingMap")
    ) {
      var moviesFromStorage = JSON.parse(
        window.sessionStorage.getItem("movies")
      );
      var moviesArray = [];
      Object.keys(moviesFromStorage).forEach(function (key, index) {
        moviesArray.push({
          value: moviesFromStorage[key],
          label: moviesFromStorage[key],
        });
      });
      setMovies(moviesArray);
      var isSelectedMovie = false;
      moviesArray.forEach((movie) => {
        if (!mapCopy.get(movie.value) && !isSelectedMovie) {
          setSelectedMovie(movie);
          isSelectedMovie = true;
        }
      });
    } else {
      const dbRef = firebase.database().ref().child("movies");
      var moviesFromDb = [];
      dbRef.on("value", (snap) => {
        snap.forEach((movie) => {
          moviesFromDb.push({ value: movie.key, label: movie.key });
        });
        moviesFromDb = shuffle(moviesFromDb);
        setMovies(moviesFromDb);
        setSelectedMovie(moviesFromDb[0]);
        var moviesObj = {};
        moviesFromDb.forEach((movie, index) => {
          moviesObj[index] = movie.value;
        });
        window.sessionStorage.setItem("movies", JSON.stringify(moviesObj));
      });
    }
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
          >
            test
          </Checkbox>
        </RatingLabel>
      );
    }
    rating.push(<br />);
    rating.push(<br />);
    rating.push(
      <RatingLabel for={-1}>
        Nie znam tego filmu
        <Checkbox
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
    if (skippedMovies[selectedMovie.value]) {
      var skippedMoviesCopy = JSON.parse(JSON.stringify(skippedMovies));
      skippedMoviesCopy[selectedMovie.value] = false;
      setSkippedMovies(skippedMoviesCopy);
      window.sessionStorage.setItem(
        "skippedMovies",
        JSON.stringify(skippedMoviesCopy)
      );
    }
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
    const ratingObj = Object.fromEntries(mapCopy);
    window.sessionStorage.setItem("ratingMap", JSON.stringify(ratingObj));
  };

  const getMovieInfo = (movie) => {
    if (!movie) {
      return;
    }

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
          setDescription(data.overview);
          setMovieYear(data.release_date);
          if (data.genres) {
            setMovieGenres(data.genres[0].name);
          }
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
    notify();
    setRatedState(true);
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const skipMovie = () => {
    var newMovieIndex = 0;
    var skippedMoviesCopy = JSON.parse(JSON.stringify(skippedMovies));
    skippedMoviesCopy[selectedMovie.value] = true;
    setSkippedMovies(skippedMoviesCopy);
    window.sessionStorage.setItem(
      "skippedMovies",
      JSON.stringify(skippedMoviesCopy)
    );
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

  const renderOptions = () => {
    var optionsArray = [];
    movies.forEach((movie) => {
      optionsArray.push(
        <CustomOption skipped={skippedMovies[movie.value]} value={movie.value}>
          {movie.value}
        </CustomOption>
      );
    });
    return optionsArray;
  };

  const handleSelect = (event) => {
    setSelectedMovie({
      value: event.target.value,
      label: event.target.value,
    });
  };

  return (
    <>
      <SelectMovieField>
        <Header>Wybierz film do oceny:</Header>
        <SelectField>
          {/* <Select
            value={selectedMovie}
            onChange={setSelectedMovie}
            options={movies}
            placeholder={`Wybierz z listy ...`}
            noResultsText={`Nie znaleziono wyników`}
          /> */}
          <CustomSelect
            value={selectedMovie.value}
            onChange={(event) => {
              handleSelect(event);
            }}
          >
            {renderOptions()}
          </CustomSelect>
        </SelectField>
        {selectedMovie ? <RatingField>{renderCheckboxes()}</RatingField> : null}
        {movies.length ? (
          <Counter>
            {ratingMap.size} / {movies.length}
          </Counter>
        ) : null}
        <SkipButton onClick={skipMovie}>Pomiń</SkipButton>
        {ratingMap.size === movies.length && movies.length ? (
          <ConfirmButton onClick={handleConfirmButton} disabled={isRated}>
            Wyślij
          </ConfirmButton>
        ) : null}
      </SelectMovieField>
      <MovieInfo>
        {movieGenres ? `Gatunek: ${movieGenres}` : null}
        {movieGenres ? (
          <>
            <br />
            <br />
          </>
        ) : null}
        {movieYear ? `Data premiery: ${movieYear}` : null}
        {movieYear ? (
          <>
            <br />
            <br />
          </>
        ) : null}
        {description}
      </MovieInfo>
      {posterUrl ? (
        <Poster
          alt="poster"
          src={`https://image.tmdb.org/t/p/original${posterUrl}`}
        />
      ) : null}
    </>
  );
};

export default MovieField;
