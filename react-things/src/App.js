import React from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import ThingContainer from './Components/ThingContainer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      things : [
        {id:45, name: 'shark'},
        {id:54, name: 'mark'},

      ]
    }

    this.createThingHandler = this.createThingHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this)

  }

  createThingHandler(thing) {
    thing.id = Math.floor(Math.random() * 1000);

    this.setState({
      things: this.state.things.concat(thing),
    })
  }

  
  deleteHandler(thingToDelete) {
    const newThings = this.state.things.filter(thing => thing.id !== thingToDelete.id);

    this.setState({
        things: newThings
    })
}

  render() {
    return (
      <>
        <Header thing-count={this.state.things.length} />
        <ThingContainer things={this.state.things} onDelete={this.deleteHandler}  onCreated={this.createThingHandler}/>
        <Footer copyright='2020'/>
      </>
    )
  }

}

export default App;
