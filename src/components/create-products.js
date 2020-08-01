import React,{ Component} from 'react';
import Dropdown from 'react-dropdown';
import { Form } from 'react-bootstrap';
import 'react-dropdown/style.css';
const options = [
    'eggless', 'egg,eggless', 'egg'
  ];
  const defaultOption = options[0];

export default class CreateProduct extends Component{
    
    constructor(props){
        super(props);

        this.onchangeproductname = this.onchangeproductname.bind(this);
        this.onchangeproductamount = this.onchangeproductamount.bind(this);
       /* weight
        flavor*/
        this.onchangeproducteggless = this.onchangeproducteggless.bind(this);
        this.onchangeproductcategory = this.onchangeproductcategory.bind(this);
        this.onchangeproductprodDetails = this.onchangeproductprodDetails.bind(this);
        this.onchangeproductprdRank = this.onchangeproductprdRank.bind(this);
        this.onchangeproductprofitRatio =  this.onchangeproductprofitRatio.bind(this);
        this.onchangeproductdeliveryCharges = this.onchangeproductdeliveryCharges.bind(this);
        this.onchangeproducttax = this.onchangeproducttax.bind(this);
        this.onchangeproductfilename = this.onchangeproductfilename.bind(this);
        this.onchangeproductfileloc = this.onchangeproductfileloc.bind(this);
        this.onSubmit =this.onSubmit.bind(this);

        this.state={
            pname:'',
            amount:'',
           /* weight:'',
            flavor:'',*/
            eggless:'',
            category:'',
            prodDetails:'',
            prdRank:'',
            profitRatio:'',
            deliveryCharges:'',
            tax:'',
            filename:'',
            fileloc:'',
        }
    }

    onchangeproductname(e){
        this.setState({
            pname: e.target.value
        });
    }
    onchangeproductamount(e){
        this.setState({
            amount: e.target.value
        });
    }
    onchangeproductfileloc(e){
        this.setState({
            fileloc: e.target.value
        });
    } onchangeproductfilename(e){
        this.setState({
            filename: e.target.value
        });
    } onchangeproducttax(e){
        this.setState({
            tax: e.target.value
        });
    } onchangeproductdeliveryCharges(e){
        this.setState({
            deliveryCharges: e.target.value
        });
    } onchangeproductprofitRatio(e){
        this.setState({
            profitRatio: e.target.value
        });
    } onchangeproductprdRank(e){
        this.setState({
            prdRank: e.target.value
        });
    } onchangeproductprodDetails(e){
        this.setState({
            prodDetails: e.target.value
        });
    } onchangeproductcategory(e){
        this.setState({
            category: e.target.value
        });
    } onchangeproducteggless(e){
        this.setState({
            eggless: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({
            pname:'',
            amount:'',
           /* weight:'',
            flavor:'',*/
            eggless:'',
            category:'',
            prodDetails:'',
            prdRank:'',
            profitRatio:'',
            deliveryCharges:'',
            tax:'',
            filename:'',
            fileloc:'',
        });
    }

    render(){
        return(
            
            <div style={{marginTop:20,marginBottom:5}}>
                <h3 style={{color: " #CB202D"}}>
                    Create a new PRODUCT HERE!    
                </h3>  
                <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                   <label>NAME OF PRODUCT</label>
                    <input type="text" className="form-control" value={this.state.pname} onChange={this.onchangeproductname}
                    />
                   </div>
                   <div className="form-group">
                   <label>AMOUNT OF PRODUCT</label>
                    <input type="number" className="form-control" value={this.state.amount} onChange={this.onchangeproductamount}
                    />
                   </div>
                   <div className="form-group">
                   <label>CATEGORY</label>
                   <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                    
                   </div>

                </form>
            </div>
        );
    }
}