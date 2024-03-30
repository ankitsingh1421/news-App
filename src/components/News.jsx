import React, { Component } from 'react';
import Navitem from './Navitem';

export class News extends Component {
 
    constructor() {
        super();
        console.log("this is a constructor ");
        this.state={
         articles:[],
         loaing:false,
         page:1
        }
    }

    async componentDidMount() {
        this.fetchNewsData(this.state.page); // Fetch news data for the initial page
    }
    
    async fetchNewsData(page) {
        let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=3ab505fcb64740f99b1a3d3d0d7a1694&page=${page}&pagesize=8`;
        
        let data = await fetch(url);
        let parsedData = await data.json(); 
        this.setState({ articles: parsedData.articles, loading: false, page: page });
    }

    handelPrevclick = async () => {
        console.log("prev is clicked ");
        let prevPage = this.state.page - 1;
        this.fetchNewsData(prevPage); // Fetch news data for the previous page
    }

    handelNextclick = async () => {
        console.log("next is clicked ");
        let nextPage = this.state.page + 1;
        this.fetchNewsData(nextPage); // Fetch news data for the next page
    }
    
    render() {

  // Function to toggle dark mode



  
        return (
            <div >
               
                <div className="container my-3">

                    <h2>Top Headlines </h2>
                    <div className="row">
                      {this.state.articles.map((Element)=>{
                      return  <div className="col md-3" key={Element.url}>
                      <Navitem title={Element.title.slice(0,40)} desc={Element.description? Element.description.slice(0, 54) : ''} imgUrl={!Element.urlToImage ? "https://images.wsj.net/im-929131/social":Element.urlToImage} newsUrl={Element.url}/>
                  </div>
                      })}
                      </div>
                    <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.handelPrevclick} class="btn btn-dark">Previous</button>
                <button type="button" class="btn btn-dark  " onClick={this.handelNextclick}>Next</button>
             
                </div>
                </div>
                

            </div>
        );
    }
}

export default News;
