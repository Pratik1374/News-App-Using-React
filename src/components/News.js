import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,                    
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  document.title= `News-For-You : ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4df04e234bb048438b0c3d2901854239&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(10);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
    }


  // handlePrevClick = async ()=>{
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }   

  // handleNextClick = async ()=>{
  //   this.setState({page: this.state.page + 1});
  //   this.updateNews();
  // }
  
  fetchMoreData = async () =>{
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4df04e234bb048438b0c3d2901854239&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center " style={{margin: "30px", color: "#000b5c"}}>News-For-You : Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              {/* <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}           
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between"> 
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default News;