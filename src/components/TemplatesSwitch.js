import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

//actions++
function templateIdChanged(id) {
	return {type: 'CHANGE_TEMPLATE_ID', payload: id}
}

function changeTemplate(id) {
	return (dispatch) => {
		dispatch(templateIdChanged(id))
	}
}
//actions--

class TemplatesSwitch extends Component {

	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.changeTemplate(e.target.value)
	}

	render() {

		let templatesOptions = null
		if (this.props.templates) {
			templatesOptions = this.props.templates.map( (item) => {return (<option key = {item.id}>{item.id}</option>)} )
		}

		return (
			<Form className = 'form-inline'> 
				<FormGroup className = 'mb-2'>
					<Label for = 'templateSelect' className = 'p-3'>
						Шаблон: 
					</Label>
					<Input type = 'select' onChange = {this.handleChange} id = 'templateSelect'>
						{templatesOptions}
					</Input>
				</FormGroup>
			</Form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
  changeTemplate: (id) => {dispatch(changeTemplate(id))}
})

const mapStateToProps = (state) => ({
	templates: state.templates.templates,
})

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesSwitch)