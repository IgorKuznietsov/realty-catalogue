import React from 'react'

export default function Area(props) {
	if (!props.value) {
		return null
	}
	return (
		<div>
			{props.value} м. кв.
		</div>
	)
}