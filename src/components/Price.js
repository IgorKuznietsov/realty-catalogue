import React from 'react'

export default function Price(props) {
	return (
		<div >
			<h5>{props.value.toLocaleString('ru-RU')} UAH</h5>
		</div>
	)
}