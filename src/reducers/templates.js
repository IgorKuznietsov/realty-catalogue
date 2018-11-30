const initState = {
  templatesAreLoading: false,
  templates: [],
  selectedTemplate: {},
  selectedTemplateId: null
}

export default (prevState = initState, action) => {
	switch (action.type) {
    case 'TEMPLATES_ARE_LOADING':
      return {...prevState, templatesAreLoading: action.payload}
    case 'GET_TEMPLATES':
      let newState = {...prevState, templates: action.payload, templatesAreLoading: false}
      if (prevState.selectedTemplateId == null && action.payload.length) {
        newState.selectedTemplateId = action.payload[0].id 
        newState.selectedTemplate = action.payload[0].template
      }  
      return newState
    case 'CHANGE_TEMPLATE_ID':
      let newTemplate = prevState.templates.find( (item) => {
        return item.id === +action.payload
      } ) 
      if (!newTemplate) {
        newTemplate = {}
      }
      return {...prevState, selectedTemplateId: action.payload, selectedTemplate: newTemplate.template}
    default: 
			return prevState
	}   
}