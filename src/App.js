import './App.css';
import MainPage from './MainPage';
import Button from './components/Button';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const[catfact, setCatFact] = useState("");

  //State is created here which will represent the name we want to search
  //so that we can write name of person in the input html component created and not on the url 
  const[name, setName] = useState("");
  const[preAge, setPreAge] = useState(null);

  //function here is going to be called when user clicks on the predict age button
  //Data is fetched directly from this function created
  const fetchData = () => {
    //inside the function the url of the api is place inside the brackets as a string
    //api predicts age based on name of user
    //'name= (here goes name of person)'
    //since a request is being made a response needs to be made
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPreAge(res.data);
    });
 };

  const fetchCatFact = () => { Axios.get("https://catfact.ninja/fact").then ((res) => {
    setCatFact(res.data.fact);
  });
};

useEffect(() => {
      fetchCatFact();
}, []);

  return (
    <div className='content'>
    <div className="App">
    <MainPage/>
    <button onClick={fetchCatFact}>Generate Cat Facts</button>
    <p>{catfact}</p>

    {/* function is created on the onChange which sets the state name to be equal to what is typed in the input html file component*/}
    <input placeholder='name....' onChange={(event) => {setName(event.target.value)}}></input> <br/>
    {/* function fetchData is being called below */}
    <button onClick={fetchData}>Predict Age</button>
    
    {/* question mark is used so that software can access the name, age and count field inside the object only if object is not null */}
    <h3><span style={{color: 'gold'}}>Name: </span> {preAge?.name}</h3>
    <h3><span style={{color: 'gold'}}>Predicted Age: </span> {preAge?.age}</h3>
    <h3><span style={{color: 'gold'}}>Total: </span> {preAge?.count}</h3>
    </div>
    </div>
  );
}

export default App;
