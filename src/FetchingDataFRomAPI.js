import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FetchingDataFromApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filters: []
    };
  }

  componentDidMount() {
    /* Fetching the api and getting data and displaying it */
    fetch("http://demo1853299.mockable.io/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products
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


/* The below code was trying to fetch api by passing the tokens in the header */
     //    const tokenKey = "";
     //
     //    fetch('http://10.171.200.247:9090/patient-attendance-impl-war/service/patient-attendances/48001', {
     //   method: 'get',
     //   headers: new Headers({
     //     'Authorization': tokenKey,
     //     'Content-Type': 'application/json'
     //   }),
     // })
     // .then(res => res.json())
     // .then(
     //   (result) =>{
     //     this.setState ({
     //        isLoaded: true,
     //        items: result.products
     //     });
     //   },
     //  (error) => {
     //    this.setState({
     //            isLoaded: true,
     //            error
     //          });
     //      }
     //   )
  }

  render() {
    const { error, isLoaded, items, filters } = this.state;
    console.log(filters);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.brand} {item.title}
              </li>
            ))}
          </ul>
        <div>
          {filters.map(filter => (
            <p> {filter.type} </p>
          ))}
        </div>
        </div>

      );
    }
  }
}

export default FetchingDataFromApi;
