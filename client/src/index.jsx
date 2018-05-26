import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      displayedRepos:[],
    }
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: '/repos',
      success: (data)=> {
      let top25= data.slice(0,25);
      this.setState({repos:data, displayedRepos:top25})
      },
      dataType: 'json',
    });

    
    //update state with repos from database.
  }

  search (term) {
    // TODO
    //Send a AJAX POST request to your express server
    console.log('search click')
    $.ajax({
      type: "POST",
      url: '/repos',
      data: term,
      success: console.log(`${term} was searched`),
      dataType: 'json',
    });
    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} displayedRepos={this.state.displayedRepos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));