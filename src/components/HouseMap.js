import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Address from './Address'
import Image from './Image'
import Price from './Price'
import Area from './Area'

function assembleComponent(template, data) {
	if (!template) {
		return null
	}
	return template.map( (el, index) => {
		switch (el.component) {
			case 'ADDRESS': 
				return (<Address key = {index} value = {data[el.field]}> {assembleComponent(el.children, data)} </Address>)
			case 'IMAGE': 
				return (<Image key = {index} value = {data[el.field]}> {assembleComponent(el.children, data)} </Image>)
			case 'PRICE': 
				return (<Price key = {index} value = {data[el.field]}> {assembleComponent(el.children, data)} </Price>)
			case 'AREA': 
				return (<Area key = {index} value = {data[el.field]}> {assembleComponent(el.children, data)} </Area>)
			default:
				return null	
		}
	})
}

export default class HouseMap extends Component {
	render() {
		return (
			<div className = 'border-top border-info mt-2 m-1 p-2 col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2 text-left'>
				<Link to = {`/${this.props.houseData.id}`}>
					{assembleComponent(this.props.template, this.props.houseData)}
				</Link>
			</div>
		)
	}
}