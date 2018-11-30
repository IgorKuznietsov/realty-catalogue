import React from 'react'
import TemplatesSwitch from './TemplatesSwitch'
import Houses from './Houses'

export default function MainPageContent(props) {
	return ( 
		<div>
			<TemplatesSwitch/>
			<Houses/>
		</div>
	)
}