/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  TabBarIOS,
} from 'react-native'
import ExerciseList from './ExerciseList'
import WorkoutList from './WorkoutList'

export default class FleksTabs extends Component {
  state = {
    selectedTab: 'workoutsTab',
    notifCount: 0,
    presses: 0,
  }

  render () {
    return (
        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="Workouts Tab"
            selected={this.state.selectedTab === 'workoutsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'workoutsTab',
              })
            }}>
            <WorkoutList />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Exercises Tab"
            selected={this.state.selectedTab === 'exercisesTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'exercisesTab',
              })
            }}>
            <ExerciseList />
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}
