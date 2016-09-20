/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import ExerciseList from './components/ExerciseList'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ui from './reducers/ui'
import muscles from './reducers/muscles'
import exercises from './reducers/exercises'

let reducers = combineReducers({ muscles, exercises, ui })
let store = createStore(reducers)

export default class FleksRN extends Component {
  render() {
    return (
      <Provider store={store}>
        <ExerciseList/>
      </Provider>
    )
  }
}
