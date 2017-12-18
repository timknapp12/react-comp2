import React, { Component } from 'react';
import List from './List';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDo: '',
            list: ['update resume', 'host personal project']
        }
    this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
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

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <input value={this.state.toDo} type='' className='' placeholder='enter a to-do item' 
                onChange={this.handleChange}/>
            <button type='' className='' onClick={() => this.displayList()}>Submit</button>

            <List
            title='to Do'
            list={this.state.list}
            // handleClick={this.displayList}
            />
            </div> 
        )
    }

}