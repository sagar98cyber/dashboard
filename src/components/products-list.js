import React,{ Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const  Product = props =>(
    <tr>
        <td>{props.products.pname}</td>
        <td>{props.products.amount}</td>
        <td>{props.products.weight}</td>
        <td>
            <Link to = {"/edit/"+props.products._id}>
                EDIT
            </Link>
        </td>
    </tr>
)
export default class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state = {products: []};
    }
   
    componentDidMount(){
        axios.get('https://localhost:3000/products/all/')
        .then(response =>{
            this.setState({products: response.data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    productsList(){
            return this.state.products.map((currentProduct,i)=>{
                return <Product products = {currentProduct} key={i}/>;
            })
    }

    render(){
        return(
            <div >
              <table className="table table-striped" style={{marginTop:20}}>
              <thead>
                   <tr>
                       <th>pname</th>
                       <th>amount</th>
                       <th>weight</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   {this.productsList()}
               </tbody>
              </table>
            </div>
        );
    }
}