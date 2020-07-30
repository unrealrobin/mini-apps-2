import React from 'react';
import axios from 'axios';
import ListOfEvents from './ListOfEvents.jsx';
import ReactPaginate from 'react-paginate';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      events: [],
      value: '',
      currentPage: 1,

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit(event, page, increment){
    event.preventDefault();
    console.log('handling submit')

    //create a request with json server that uses the search term and returns a list of results
    const { value, currentPage } = this.state;
    const limit= 20;
    const endpoint = `/events?q=${value}&_page=${currentPage}&_limit=${limit}`;

    axios.get(endpoint)
    .then((listOfEvents) => {
      this.setState({
        events: listOfEvents.data,
      })
    })
  }

  handlePageClick() {



  };

  renderEvents(){
    const { events } = this.state;

    if(events.length > 0){
      return(
        <div className='eventsContainer'>
          <ListOfEvents allEvents={events} />
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(events.length / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        </div>
      )

    }
  }

  render(){
    return (
      <div>
        <form>
          <label> Please Enter a Search Term</label>
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
          <div onClick={this.handleSubmit}> Query DB </div>
        </form>
        {this.renderEvents()}
      </div>

    )
  }
}

export default App;