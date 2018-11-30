import React, { Component } from 'react';
import { connect } from 'react-redux'
import HouseMap from './HouseMap'

class Houses extends Component {

	render() {
		let houses = null
		if (this.props.houses) {
      houses = this.props.houses.map( (house) => {
        return (<HouseMap key = {house.id} houseData = {house} template = {this.props.template}/>)
      })
    }

		return (
			<div className = 'container-fluid w-100'>
				<div className = 'row'>
					{houses}	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	houses: state.houses.houses,
	template: state.templates.selectedTemplate
})

export default connect(mapStateToProps)(Houses)