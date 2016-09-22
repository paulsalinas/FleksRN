/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import FleksTabs from './components/FleksTabs'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ui from './reducers/ui'
import muscles from './reducers/muscles'
import exercises from './reducers/exercises'
import createLogger from 'redux-logger'

let reducers = combineReducers({ muscles, exercises, ui })
let store = createStore(
  reducers,
  applyMiddleware(createLogger())
)

export default class FleksRN extends Component {
  render() {
    return (
      <Provider store={store}>
        <FleksTabs/>
      </Provider>
    )
  }
}
