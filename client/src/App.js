import React, {Component} from 'react';

class App extends Component {

  // Initialize state
  state = {
    data: {}
  }

  // Fetch data after first mount
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/test')
    .then(res => res.json())
    .then(data => this.setState({data}));
  }

  render() {
    const {data} = this.state;

    return (
      <div>
      view: {data.name} {data.surname}
    </div>);
  }
}

export default App;
