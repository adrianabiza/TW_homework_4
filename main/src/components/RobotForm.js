import React, { Component } from 'react'

class RobotForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            mass: ''
        }
    }

    onAdd = () => {
        const {name, type, mass} = this.state;
        this.props.onAdd({
            name: name,
            type: type,
            mass: mass
        })
    }

    onChange = (id, e) => {
        this.setState({
            [id]: e.target.value
        })
    }
    
render() {
    const {name, type, mass} = this.state;

    return (
        <form>
            <input id="name" name="name" type="text" placeholder="Name ..." value={name}
                onChange={e => this.onChange('name', e)}/>
            <input id="type" name="type" type="text" placeholder="Type ..." value={type}
                onChange={e => this.onChange('type', e)}/> 
            <input id="mass" name="mass" type="text" placeholder="Weight ..." value={mass}
                onChange={e => this.onChange('mass', e)}/> 
            <button id="add" name="add" value="add" onClick={this.onAdd}/>
        </form>
    )
}


}

export default RobotForm;