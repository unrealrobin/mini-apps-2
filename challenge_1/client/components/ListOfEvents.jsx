import React from 'react';

class ListOfEvents extends React.Component {
  constructor(props){
    super(props);

    this.renderEvent = this.renderEvent.bind(this);
  }

  renderEvent(){
    const { allEvents } = this.props;

    return allEvents.map(event => {
      return (
        <div>
          <p> {event.description} </p>
        </div>
      )
    });
  }

  render(){
    return (
      <div>
        {this.renderEvent()}
      </div>

    )
  }

}

export default ListOfEvents;