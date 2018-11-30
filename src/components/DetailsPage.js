import React, { Component } from 'react';
import { connect } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import NotFoundPage from './NotFoundPage'

class DetailsPage extends Component {

	render() {
		let id = this.props.match.params.id
		if (!this.props.houses || !id) {
			return <NotFoundPage/>
		}
		let houseData = this.props.houses.find( (item) => (item.id === +id) )
		if (!houseData) {
			return <NotFoundPage/>
		}

		let photos = houseData.images.map( (url) => (<div style = {{maxHeight: '60vw'}}><img src = {url} alt = '' style = {{height: '60vw', width: 'auto'}}/></div>) )
		return (
			<div className = 'container text-left'>
				<div className = 'm-3 text-center'><h4>{houseData.full_address}</h4></div>
					<Carousel showThumbs = {false}>
						{photos}
					</Carousel>
					<div className = 'text-left'>
						{houseData.description}
					</div>
					<div className = 'row'>
						<div className = 'col-3 pl-4'>
							Цена:
						</div>
						<div className = 'col-6'>
							<b>{houseData.price.toLocaleString('ru-RU')} UAH</b>
						</div>
					</div>
					<div className = 'row'>
						<div className = 'col-3 pl-4'>
							Площадь:
						</div>
						<div className = 'col-6'>
							<b>{houseData.area} м.кв.</b>
						</div>
					</div>
				</div>
		)
	}
}

const mapStateToProps = (state) => ({
	houses: state.houses.houses
})

export default connect(mapStateToProps)(DetailsPage)