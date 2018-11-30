import React from 'react'

export default function Image(props) {
	return (
		<div className = 'p-2 Stroked' style = {{backgroundImage: `url(${props.value[0]})`, backgroundSize: 'cover', height: 200, width: '100%' }}>
			{props.children}
		</div>
	)
}