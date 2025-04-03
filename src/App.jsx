import { useEffect, useState } from 'react'
import MyRecipe from './MyComponents/MyRecipe';
import './App.css'

function App() {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const USER= import.meta.env.VITE_AD;

  let [search, setSearch] = useState("");
  let [query,setQuery]=useState('momo');
  let [dishes,setDishes]=useState([])

  console.log("Start UI");
  
  useEffect(()=>{
    async function getRecipe() {
     let response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          headers: {
            "Edamam-Account-User": USER,
          },
        }
      );
      let data=await response.json()
      // console.log(data.hits)
      setDishes(data.hits)
      
    }
    getRecipe()
  },[query,APP_ID,APP_KEY,USER])

  function handleOnSubmit(e){
    e.preventDefault()
    setQuery(search)
    setSearch("")

  }

  return (
    <>
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h1>Edamam Recipe App</h1>
        <input type="text" value={search} placeholder='Search Recipes....' onChange={e=>setSearch(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
      <div className="recipes-grid">
        {dishes.map((item, idx) => (
          <MyRecipe recipeList={item} key={idx} />
        ))}
      </div>
    </>
)
   
}

export default App
