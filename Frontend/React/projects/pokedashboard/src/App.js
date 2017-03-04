import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import SelectItemsPerPageButtons from './components/SelectItemsPerPageButtons';
import { Col, Pagination } from 'react-bootstrap/lib/';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        let pages = Math.ceil(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });
      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(selectedPage) {
    let offset = this.state.limit * (selectedPage - 1);
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
    this.setState({
      activePage: selectedPage
    });
  }

  handleLimitChange(event) {
    this.setState({
      limit: +event.target.innerHTML || this.state.count,
      activePage: 1
    }, () => {
      this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=0`);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SelectItemsPerPageButtons options={[10,50,100,200]} selectedValue={this.state.limit} onOptionSelected={this.handleLimitChange} allValue={this.state.count} />
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

        <Col sm={12}>
          <Pagination
            bsSize="small"
            items={this.state.totalPages}
            activePage={this.state.activePage}
            onSelect={this.handlePaginationSelect}
          />
        </Col>

      </div>
    );
  }
}

export default App;
