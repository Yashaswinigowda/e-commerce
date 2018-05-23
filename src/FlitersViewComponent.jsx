
import React from 'react';
const FlitersViewComponent = ({ filterTypes, minMaxFilter }) =>{
    return(
      <div className='filter'>
        {filterTypes.type == 'BRAND' ? <BRAND /> :null }
        {filterTypes.type == 'PRICE' ? <PriceView prices={filterTypes.values} minMaxFilter={minMaxFilter}/> :null }
        {filterTypes.type == 'COLOUR' ? <ColorView colors={filterTypes.values} />: null}
      </div>
    );
}

export default FlitersViewComponent;


/* The filter view of search product based on Min and Max price */
class PriceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPrice: [],
      minVal: '0'
    }
    this.selectedPrice = this.selectedPrice.bind(this);
  }

  /* Function: selectedPrice
   * description: OnChange of minPrice dropDown setting the value for the maximum price dropdown.
  */
    selectedPrice(e){
      let maxPriceEle = this.props.prices.map((prices) => {
          if((Number(e.target.value) <= Number(prices.key)) || prices.key == "Max"){       // checking against the min.value selection
              return  <option key={prices.key} value={prices.key}>{prices.displayValue}</option>;
        }
      });
     this.setState ({ maxPrice: maxPriceEle, minVal: e.target.value });
    }

  render(){
    const minPrice = this.props.prices.map((prices) =>
                <option key={prices.key} value={prices.key}>{prices.displayValue} </option>
            );
    return(
      <div>
          <select onChange={this.selectedPrice}>
            {minPrice}
          </select>

          <select onChange={ (e) => {this.props.minMaxFilter(e, this.state.minVal)} }>
            {this.state.maxPrice}
          </select>
      </div>
    );
  }
}


/* The filter view of search product based on brands */
const BRAND = ({ }) =>{
  return(
    <p> BRAND </p>
  );
}

/* The filter view of search product based on Color */
const ColorView = () =>{
  return(
    <p> Hi </p>
  );
}
