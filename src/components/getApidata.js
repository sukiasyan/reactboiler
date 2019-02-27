// import React, { Component } from 'react'

// export default class getApidata extends Component {
//   render() {
//     return (
//       <div>
//         {console.log( getMoviesFromApi())}
//       </div>
//     )
//   }
// }
// async function getMoviesFromApi() {
//     try {
//       let response = await fetch('https://facebook.github.io/react-native/movies.json');
//       let responseJson = await response.json();
//       return responseJson.movies;
//      } catch(error) {
//       console.error(error);
//     }
//   }

import React, { Component } from "react";
class getApidata extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=redux`);
    const json = await response.json();
    this.setState({ data: json });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.hits && this.state.data.hits.map((el,i) => (
            <li key={i}>
              {el.created_at}
            </li>
          ))}
          {/* {console.log(this.state.data.hits)} */}
        </ul>
      </div>
    );
  }
}
export default getApidata;