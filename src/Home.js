import React from 'react';
import './App.css';
import logo from './images/globe.jpg';
import CookieService from './cookieService';
import Articles from './Articles';
import Footer from './Footer';

const API_KEY   = 'e3250e05ddb74da1a085f95cc17c94e9';
const BASE_URL  = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey='
                + API_KEY + "&q=";
const LAST_QUERY = "lastQuery";
const cookieService = new CookieService();

class App extends React.Component { 
    constructor() {
        super();
        this.state  = {
          apiKey : API_KEY,
          articles : [],
          newsTopic: 'vancouver',
          loading:false,
        };

        this.getNews = this.getNews.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Called when constructor is finished building component.
    componentDidMount() {
        // Set main category from cookie if it does not exist.
        let lastQuery = cookieService.getCookie(LAST_QUERY);
        if(lastQuery === null) {
            cookieService.setCookie(LAST_QUERY, this.state.newsTopic);
            lastQuery = this.state.newsTopic;
        }
        this.getNews(lastQuery);
    }

    handleQuery(e) {
        this.setState({newsTopic: e.target.value});
    }
    handleSubmit(e) {
      if (this.state.newsTopic !== '') {
        this.getNews(this.state.newsTopic);
        cookieService.setCookie(LAST_QUERY, this.state.newsTopic);
      }
    }

    getNews(newsTopic) {    
        const URL = BASE_URL + this.state.newsTopic;

        this.setState({loading: true});
        // Request and wait for data from remote server.
        fetch(URL).then(response => response.json())
            // Data retrieved so parse it.
            .then((data) => {
                // console.log(JSON.stringify(data));
                this.setState({
                  articles:data.articles,
                   loading:false
                  });
            })
            // Data is not retieved.
            .catch((error) => {
                console.log(error);
            });         
    }

    render() {
        return ( 
        <div>      
            <div className="header" >
				<hr width="30%"></hr>
				<img src={logo} alt="logo"/>
				<h1>News database</h1>
				<h3>What are you looking for?</h3>
				<form className="example">
				<input type="text" 
						className="searchInput"
						name="search"
						placeholder="search..."
						value={this.state.newsTopic}
						onChange={this.handleQuery}/>
				<button type="button" onClick={this.handleSubmit}><i className="fa fa-search"></i></button>
				</form>
            </div> 

            <div className="wrapper">
              {!this.state.loading &&
                <Articles articles={this.state.articles}/>
              }
              {this.state.loading &&
                <div className="loading wrapper">
                 <p>Loading...</p>
                 <p>Please wait!</p>
                </div>
              }
            </div>
              <Footer/>
        </div>     
        )
    }
}
export default App;
