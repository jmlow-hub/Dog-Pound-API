import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styles from "./App.module.scss";
import Main from "./containers/Main";
import NavBar from "./containers/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp"

const App = () => {
  //set state variable for data from API
  const [ beerList, setBeerList ] =  useState([])
  //set state varable for web address:
  const [ webAddress, setWebAddress ] = useState("https://api.punkapi.com/v2/beers");
  //set state variable for search term
  const [ searchTerm, setSearchTerm ] = useState("");
  //set state variable to hold beers for phList
  const [ pHList, setPHList ] = useState([])
   

  //call data from API for beer list
  useEffect(() => {
            
     fetch(webAddress)
    .then(res => res.json())
    .then((data) => {
      setBeerList(data)
            
     })
    .catch(err => alert("There's been an error" + err))
  }, [webAddress])

 
  //function to update web address
  const webHandler = (e) => {
    setWebAddress("https://api.punkapi.com/v2/beers?beer_name="+searchTerm)
    setSearchTerm("")
  }

  //second use effect, intent is to run once to fill the phList variable
useEffect(() => {
  fetch("https://api.punkapi.com/v2/beers")
  .then(res => res.json())
  .then((data) => {
    const newpHList = (data.filter(data => data.ph < 4.0));
    setPHList(newpHList)
    
  }) 
}, [])

 //----- SEARCH ------//
  //function to capture search input
  const searchHandler = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

//----- FILTERS ------//
//IF statements to set either webAddress or contents of BeerList on selection of filter - changing the web address will change beerlist
const filterHandler = (e) => {
    if(e.target.id === "abv") {
    setWebAddress("https://api.punkapi.com/v2/beers?abv_gt=6.0")
  } else if(e.target.id === "classic") {
    setWebAddress("https://api.punkapi.com/v2/beers?brewed_before=11-2012")
  } else if(e.target.id === "ph") {
    setBeerList(pHList)
  }
}


  return (
   
  <Router>

    <div className={styles.app}>
      <div className={styles.appTitle}>
        <div>
          <h1>Dog Pound</h1>
          <p>find your forever beer</p>
        </div>
        <div>
          <button><Link to="/login">Sign-in</Link></button>
        </div>
        
      </div>
      
        
   
      <div className={styles.appMain}>
      <Switch>
        <Route exact path="/">
          <NavBar 
          inputValue={searchTerm} 
          changed={searchHandler}
          clicked={webHandler}
          filtered={filterHandler}
               
          />
          <Main 
          beerList={beerList}
          />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>



      </Switch>


      </div>

     
   
   </div>

  </Router>





    


    
  )
}

export default App
