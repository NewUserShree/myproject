
import './App.css';
import {useState, useEffect } from "react";


function App() {



let [movieinfo,setMovieinfo] = useState(null);

let [title,setTitle] = useState("Avengers: Infinity War");

useEffect(()=>{
 
  getMovieData();
}, [])
function readTitle(value){
  setTitle(value);
  
}
function getMovieData(){
  let url=`https://omdbapi.com/?t=${title}&apikey=d79a101e`;
//  let url ="https://omdbapi.com/?t=the avengers&apikey=d79a101e";
//  let url=`http://www.omdbapi.com/?t=${title}&apikey=[d79a101e]`;

 
  fetch(url)
  
  .then((response)=>response.json())
  .then((movie)=>{

    console.log(movie);
    setMovieinfo(movie);
   
  })
  .catch((err)=>{
    console.log(err);
  })


}

  return (

    
   
    <div className="App">
      <div className='container'>

        <div  className='padd'>
          <h1>Movie search</h1>
          <div className='input-group'>
         
            <input type="text" placeholder='Enter Movie name' onChange={(event)=>{readTitle(event.target.value)}} className='search-field'></input>
         <button className='btn' onClick={getMovieData}> Get Movie</button>
          </div>
          
          
          <div className='movie'>
            <div className='poster'>
             
              <img src={movieinfo?.Poster} className='poster' alt='poster'></img>

            </div>
            <div className='details'>
              <div className='padd'>
               
                <h1>{movieinfo?.Title}</h1>
                <p><strong>Genre : </strong>{movieinfo?.Genre}</p>
                <p><strong>Directed by : </strong>{movieinfo?.Director}</p>
                <p><strong>Plot : </strong>{movieinfo?.Plot}</p>
                <p><strong>Cast : </strong>{movieinfo?.Actors}</p>
                <p><strong>Box Office : </strong>{movieinfo?.Boxoffice}</p>
                <p><strong>Language : </strong>{movieinfo?.Language}</p>
                <p><strong>Released Date : </strong>{movieinfo?.Released}</p>
                <p><strong>Runtime : </strong>{movieinfo?.Runtime}</p>
                {/* <div className='ratings'>
                <div>
                <strong>{movieinfo?.Ratings[0].Source}</strong>
                <h3>{movieinfo?.Ratings[0].Value}</h3>
                </div>
               
                <div>
                <strong>{movieinfo?.Ratings[1].Source}</strong>
                <h3>{movieinfo?.Ratings[1].Value}</h3>
                </div>
               
                <div>
                <strong>{movieinfo?.Ratings[2].Source}</strong>
                <h3>{movieinfo?.Ratings[2].Value}</h3>
                </div>
               </div> */}
              </div>
            </div>
         
          </div>
        
        </div>
      </div>
    
    </div>
  );
}

export default App;
