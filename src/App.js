import React, { Component } from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import rootReducer from './reducers'

import DetailsPage from './components/DetailsPage'
import MainPageContent from './components/MainPageContent'

import './App.css'

//configuration++
const templatesUrl = 'http://demo4452328.mockable.io/templates'
const dataUrl = 'http://demo4452328.mockable.io/properties'
//configuration--

//actions++
function setTemplatesAreLoading(isLoading) {
  return {type: 'TEMPLATES_ARE_LOADING', payload: isLoading}
}

function setHousesAreLoading(isLoading) {
  return {type: 'HOUSES_ARE_LOADING', payload: isLoading}
}

function getTemplates(data){
  return {type: 'GET_TEMPLATES', payload: data}
}

function getHouses(data){
  return {type: 'GET_HOUSES', payload: data}
}

function queryData() {
  return (dispatch) => {
    dispatch(setTemplatesAreLoading(true))
    axios.get(templatesUrl)
    .then((response) =>{
      dispatch(getTemplates(response.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(setTemplatesAreLoading(false))
    })

    dispatch(setHousesAreLoading(true))
    axios.get(dataUrl)
    .then((response) =>{
      dispatch(getHouses(response.data.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(setHousesAreLoading(false))
    })
  }
}
//actions--

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {

  componentDidMount() {
    this.props.queryData()
  }

  render() {
    let content = (
      <Router>
        <div>
          <Route path="/" exact component={MainPageContent} />
          <Route path="/:id" component={DetailsPage} />
        </div>
      </Router>
    )

    if (this.props.isLoading) {
      content = (
        <div>LOADING...</div>
      )
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.houses.housesAreLoading || state.templates.templatesAreLoading
})

const mapDispatchToProps = (dispatch) => ({
  queryData: () => {dispatch(queryData())}
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default () => {
  return (
    <Provider store = {store}>
      <ConnectedApp />
    </Provider>
  )
}