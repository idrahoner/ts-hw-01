import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Searchbar from "components/Searchbar";
import ImageSearcher from "components/ImageSearcher";

class App extends Component {
  state = {
    query: "",
  };

  handleSearch = (data) => {
    this.setState({ query: data });
  };

  render() {
    // console.log('App this.state: ', this.state.query);
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "16px",
          paddingBottom: "24px",
        }}
      >
        <Searchbar onSubmit={this.handleSearch} />
        <ImageSearcher query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
