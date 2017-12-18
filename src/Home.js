import React, { Component } from 'react';
import List from './List';
import axios from 'axios';

export default class Home extends Component {
    // constructor 36I
    constructor(props) {
        super(props);

        // state 36C
        this.state = {
            toDo: '',
            list: ['update resume', 'host personal project'],
            character: {}
        }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // setState 36D
        this.setState({
            toDo: event.target.value
        })
    }

    displayList() {
        this.setState({
            list: [...this.state.list, this.state.toDo]
        })
        console.log(`show '${this.state.toDo}' list item`);
    }

    // componentDidMount 44E
    componentDidMount = () => {
        // axios 44C
        // promise 44D
      axios.get('https://swapi.co/api/people/2').then(res => {
        this.setState({
            character: res.data
        })
      }) 
    }

    // render 36F
    render() {
        console.log(this.state.character);
        return(
            // 36G JSX
            <div>
                <h1>{this.props.title}</h1>
                <input value={this.state.toDo} type='' className='' placeholder='enter a to-do item'
                // event 36J 
                onChange={this.handleChange}/>
            <button type='' className='' onClick={() => this.displayList()}>Submit</button>
            {/* nested component 36H */}
            <List
            title='to Do'
            list={this.state.list}
            // handleClick={this.displayList}
            />
            <h1>Character</h1>
            <h1>name: {this.state.character.name}</h1>
            <h1>gender: {this.state.character.gender}</h1>
            </div> 
        )
    }

}