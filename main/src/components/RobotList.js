import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
		this.store = new RobotStore()
	}
	componentDidMount(){
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}

	onAdd = (robot) => {
		this.store.addRobot(robot);
	}

	render() {
		return (
			<div is="robots">
				<RobotForm onAdd={this.onAdd}></RobotForm>
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
