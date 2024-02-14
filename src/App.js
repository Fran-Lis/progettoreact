import Recipes from "./components/Recipes";
import SearchBar from "./components/SearchBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { load } from "./store/slices/recipesSlice";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&addRecipeInformation=true', {
      method: 'GET',
      headers:{
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch(load(data.results))
  })
  .catch((err) => {
    alert(`${err.name}: ${err.message}`)
  });
  }, [])
  return (
    <>
      <SearchBar />
      <Recipes />
      <Footer />
    </>
  );
}

export default App;
