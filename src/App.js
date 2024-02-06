import Recipes from "./components/Recipes";
import SearchBar from "./components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { load } from "./store/slices/recipesSlice";
import Footer from "./components/Footer";

function App() {
  const search = useSelector((state) => state.search.value)
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
      <Recipes search={search}/>
      <Footer />
    </>
  );
}

export default App;
