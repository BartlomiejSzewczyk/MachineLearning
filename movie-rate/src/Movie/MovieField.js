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
  margin-top: 20px;
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
  border: 2px solid black;
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

  const notify = () => toast("Dziękujęmy za ocenienie filmów !");

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

  return (
    <>
      <SelectMovieField>
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
