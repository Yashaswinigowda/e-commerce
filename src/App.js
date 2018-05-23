import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductViewComponent from './ProductViewComponent';
import FlitersViewComponent from './FlitersViewComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      staticItem: [],
      filters: []
    };
    this.minMaxFilter = this.minMaxFilter.bind(this);
  }

  componentDidMount() {
    /* Fetching the api and getting data and displaying it */
    fetch("http://demo1853299.mockable.io/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products,
            staticItem: result.products,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

      /* Fetching another api and getting data and displaying it */
      fetch("http://demo1853299.mockable.io/filters")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              filters: result.filters
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }

  minMaxFilter(e, minPrice){
    let filterdItem = [];
    console.log("Min"+minPrice+"max"+e.target.value);
    const getItems = this.state.staticItem.map(
      (item) => {
        /* Comparsion with Max keyword is bcoz for 4000+ the key is MAX */
        if(e.target.value == "Max"){
          if(Number(item.price.final_price) >= Number(minPrice)){
              filterdItem.push(item);
          }
        }
        else if( Number(item.price.final_price) >= Number(minPrice) && Number(item.price.final_price) <= Number(e.target.value)){
                filterdItem.push(item);
        }
      });
      this.setState({ items: filterdItem });
  }

  render() {
    const { error, isLoaded, items, filters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          <tbody>
          <tr>

            <td valign="top" className="filter">
                {filters.map(filters => (
                  <FlitersViewComponent
                    key={filters.type}
                    filterTypes ={filters}
                    minMaxFilter={this.minMaxFilter} />
              ))}
            </td>

            <td className='productView'>
                {items.map(item => (
                  <ProductViewComponent key={item.id} product={item}/>
                ))}
            </td>

          </tr>
        </tbody>
        </table>
      );
    }
  }
}
export default App;
