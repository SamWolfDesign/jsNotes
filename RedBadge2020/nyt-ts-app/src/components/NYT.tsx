import React from "react";
import NytResults from "./NytResults";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "JFIO1Pqr9pfpFQ6JMsDZ9ege5qiO849Z";

type NytState = {
    search: string;
    startDate: string | number;
    endDate: string | number;
    results: [];
    pageNumber: number;
}

export default class Nyt extends React.Component<{}, NytState> { 
    constructor(props: any) {
    super(props);
    this.state = {
        search: "",
        startDate: "",
        endDate: "",
        pageNumber: 0,
        results: [],
    };
    }
    fetchResults = () => {
    let URL = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`;
    
URL = this.state.startDate
    ? URL += `&begin_date=${this.state.startDate}`
    : URL;
    
    URL = this.state.endDate ? URL += `&end_date=${this.state.endDate}` : URL;
    
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
        this.setState({ results: data.response.docs });
        });
    };

    handleSubmit = (e : any) => {
    e.preventDefault();
    this.setState({
            results: [],
            })
            this.fetchResults();
        };   

    nextPageNumber = (e: any) => {
        e.preventDefault();
        this.setState({
        pageNumber: this.state.pageNumber+1
    }, () => {this.fetchResults()})
}

    previousPageNumber = (e: any) => {
        e.preventDefault();
        if (this.state.pageNumber > 0) {
        this.setState({
            pageNumber: this.state.pageNumber - 1
        }, () => { this.fetchResults() });
        } else {
        return;
        }
    };

    render() {
        return (
            <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                <span>Enter a single search term (required) : </span>
                <input
                    type="text" name="search" onChange={(e) => this.setState({ search: e.target.value })} required
                />
                <br />
                <span>Enter a start date: </span>
                <input
                    type="date"
                    name="startDate"
                pattern="[0-9]{8}"
                onChange={(e) => this.setState({ startDate: e.target.value })}
                />
                <br />
                <span>Enter an end date: </span>
                <input
                    type="date"
                    name="endDate"
                pattern="[0-9]{8}"
                onChange={(e) => this.setState({ endDate: e.target.value })}
                />
            <br />
            <button className="submit">Submit Search</button>
            </form>
            <button onClick={(e) => this.previousPageNumber(e)}>Previous Page</button>
            <button onClick={(e) => this.nextPageNumber(e)}>Next Page</button>
            <br/>
            <br/>
            <NytResults results={this.state.results} />
            </div>
            </div>
            );
            }
        }