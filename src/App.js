import React, { Component } from 'react';
import {Navbar} from "react-bootstrap";
import {NavItem} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import  {Nav} from "react-bootstrap";
//import { Router, Route, browserHistory } from 'react-router'
import {Link} from "react-router-dom";
import  {EditData} from "./EditData"
import  {AddData} from "./AddData"
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from "react-router-dom";
import {Chart} from "./chart";

import { connect } from "react-redux";
import { changeChartData } from "./actions";

class App extends Component {
  constructor(state){
    super();
    //this.props.changeChartData(props)
    /*
    this.state = {
      data:[
        {name:'sample1',x:0,y:0,v:1},
        {name:'sample2',x:1,y:0,v:1},
        {name:'sample3',x:0,y:1,v:1}

      ]
    }
    */
  }
/*
  createNewToDoItem = () => {
    this.setState( ({ list, todo }) => ({
          list: [
            ...list,
            {
              todo
            }
          ],
          todo: ''
        })
    );
  };

  deleteItem = indexToDelete => {
    this.setState(({ list }) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };
*/
  render() {
    return (
        <Router>
      <div className="AppContainer">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Pokaż wykres</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Plik" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Zapisz plik</MenuItem>
              <MenuItem eventKey={1.2}>Wczytaj plik</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Dane wykresu" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}><Link to="/add_data">Dodaj dane</Link></MenuItem>
              <MenuItem eventKey={2.2}> <Link to="/edit_data">Edytuj dane</Link></MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Todo1</MenuItem>
              <MenuItem eventKey={3.2}>todo2</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>;

        <Route path="/edit_data" component={EditData} />
        <Route path="/add_data" component={AddData} />
        <Route exact path="/" component={Chart} />


      </div>
        </Router>
    );
  }
}

export default App;

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts // (1)
  }
};
const mapDispatchToProps = { changeChartData }; // (2)


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)
