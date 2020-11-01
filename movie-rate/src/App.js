import MovieField from "./Movie/MovieField";
import "./Styles/app-styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MovieField />
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={false}
      />
    </>
  );
}

export default App;
