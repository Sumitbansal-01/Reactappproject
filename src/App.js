// import logo from './logo.svg';
import {useState} from "react";
import Header from './component/Header'
import Footer from './component/Footer';
import Add from './component/Add';
import Row from './component/Row';
import Count from "./component/Count";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [data,setdata]=useState([])
  const [idies,setidies]=useState([])

  const fetchfn =()=> {
    fetch("http://localhost:4000/get")
        .then(res=> res.json()).then(e=>{
            setdata(e)
        })
  }
  const idfn=()=>{
      let idData=data.map(n=>{
        return n.id
      })
      setidies(idData)
  }


  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            <Row fetchfn={fetchfn} data={data}/>
          </Route>
          <Route exact path="/add">
            <Add title={'Add a Row'} fn={'Add'} data={data} idfn={idfn} idies={idies}/>
          </Route>
          <Route exact path="/update">
            <Add title={'Update a Row'} fn={'Update'} data={data} idfn={idfn} idies={idies}/>
          </Route>
          <Route exact path="/count">
            <Count/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
