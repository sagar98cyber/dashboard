import React,{ Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"  
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProduct from './components/create-products'
import EditProduct from './components/edit-product'
import ProductsList from './components/products-list'

class App extends Component{
  render()
  {
    return(
      <Router>
      <div className="container">
          <nav className = "navbar navbar-expand-lg navbar-dark navup">
            <Link to="/" className="navbar-brand">CAKESHOP</Link>
            <div className="container  navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to ="/products" className="nav-link">ProductsList</Link>
                </li>
                <li className="navbar-item">
                    <Link to ="/create" className="nav-link">CreateProduct</Link>
                </li>
             {/*   <li className="navbar-item" >
                    <Link to ="/edit" className="nav-link">EditProduct</Link>
                   </li>*/}
              </ul>
            </div>
          </nav>   
        <Route path = "/products" exact component={ProductsList}/>
        <Route path = "/create" exact component={CreateProduct}/>
        <Route path = "/edit/:id" exact component={EditProduct}/>
      </div>
      </Router>
    );
  }
}

export default App;
