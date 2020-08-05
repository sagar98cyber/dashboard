import React,{ Component} from 'react';
import 'react-dropdown/style.css';
import Axios from 'axios';
/*const options = [
    'eggless', 'egg,eggless', 'egg'
  ];
  const category = [
    'cake', 'pastry', 'custom cake'
  ];
  const defaultOption = options[0];
  const categoryOption = category[0];
*/
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
            weight:['250 Grams','500 Grams'],
           /* flavor:'',*/
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

        console.log(
            `${this.state.pname} ${this.state.amount} ${this.state.eggless}`
        );
        
        const newProd = {
            pname:this.state.pname,
            amount:this.state.amount,
             weight:this.state.weight,
            /* flavor:'',*/
             eggless:this.state.eggless,
             category:this.state.category,
             prodDetails:this.state.prodDetails,
             prdRank:this.state.prdRank,
             profitRatio:this.state.profitRatio,
             deliveryCharges:this.state.deliveryCharges,
             tax:this.state.tax,
             filename:this.state.filename,
             fileloc:this.state.fileloc,
        }
        
        Axios.post('http://localhost:3000/products/addproduct',newProd)
        .then(res=>console.log(res.data));

        e.preventDefault();
        this.setState({
            pname:'',
            amount:'',
           /* weight:,
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
                   <label>EGG/LESS</label>
                   <div className="form-group">
                       <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="eggless"
                            id="egglesss"
                            value="eggless"
                            checked={this.state.eggless === 'eggless'}
                                onChange={this.onchangeproducteggless}  
                            />
                            <label>EGGLESS</label>
                    </div>
                    <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="egge"
                            id="egge"
                            value="egge"
                            checked={this.state.eggless === 'egge'}
                                onChange={this.onchangeproducteggless}  
                            />
                            <label>EGG/LESS</label>
                    </div>
                    <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="egg"
                            id="egg"
                            value="egg"
                            checked={this.state.eggless === 'egg'}
                                onChange={this.onchangeproducteggless}  
                            />
                            <label>EGG</label>
                    </div>
                   </div>
                    
                   </div>
                  
                   <div className="form-group">
                   <label>CATEGORY</label>
                   <div className="form-group">
                       <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="cake"
                            id="cake"
                            value="cake"
                            checked={this.state.category === 'cake'}
                                onChange={this.onchangeproductcategory}  
                            />
                            <label>CAKE</label>
                    </div>
                    <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="pastry"
                            id="pastry"
                            value="pastry"
                            checked={this.state.category === 'pastry'}
                                onChange={this.onchangeproductcategory}  
                            />
                            <label>PASTRY</label>
                    </div>
                    <div className="form-check form-check-inline">                        

                            <input 
                            className="form-check form-check-inline"
                            type="radio"
                            name="custom"
                            id="custom"
                            value="custom"
                            checked={this.state.category === 'custom'}
                                onChange={this.onchangeproductcategory}  
                            />
                            <label>CUSTOM</label>
                    </div>
                   </div>
                    
                   </div>
                   <div className="form-group">
                   <label>PRODUCT DETAILS</label>
                   <div>
                    <input type="text" className="form-control" value={this.state.prodDetails} onChange={this.onchangeproductprodDetails}
                    />
                    </div>
                   </div>
                   <div className="form-group">
                   <label>PRODUCT RANK</label>
                    <input type="number" className="form-control" value={this.state.prdRank} onChange={this.onchangeproductprdRank}
                    />
                   </div>
                   <div className="form-group">
                   <label>PROFIT RATIO</label>
                    <input type="number" className="form-control" value={this.state.profitRatio} onChange={this.onchangeproductprofitRatio}
                    />
                   </div>
                   <div className="form-group">
                   <label>DELIVERY CHANGES</label>
                    <input type="number" className="form-control" value={this.state.deliveryCharges} onChange={this.onchangeproductdeliveryCharges}
                    />
                   </div>
                   <div className="form-group">
                   <label>TAX</label>
                    <input type="number" className="form-control" value={this.state.tax} onChange={this.onchangeproducttax}
                    />
                   </div>
                   <div className="form-group">
                   <label>filename</label>
                    <input type="text" className="form-control" value={this.state.filename} onChange={this.onchangeproductfilename}
                    />
                   </div>
                   <div className="form-group">
                   <label>FILELOC</label>
                    <input type="text" className="form-control" value={this.state.fileloc} onChange={this.onchangeproductfileloc}
                    />
                   </div>
                   <div className="form-group">
                   
                    <input type="submit" className="btn btn-primary" value="create Product" onChange={this.onchangeproductfileloc}
                    />
                   </div>
                </form>
            </div>
        );
    }
}