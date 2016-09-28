// @flow

import React, { Component } from 'react'
import type Exercise from './../reducers/exercises'

import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

type workout = {
  id: string,
  name: string,

}

type ExerciseSet = {
  exercise: Exercise,
  reps: number
}

export class WorkoutList extends Component {
  state: {
    ds: ListView.DataSource,
    workouts: Array<workout>
  }

  constructor(props: any) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      workouts: [],
      ds
    }
  }

  render() {
    const { ds, workouts } = this.state

    return (
        <ListView
          dataSource={ ds.cloneWithRowsAndSections([workouts]) }
          renderRow={
            (rowData, sectionID, rowID, highlightRow) =>
              <TouchableHighlight style={styles.container}
                onPress={() => highlightRow(sectionID, rowID) }>
                <View style={styles.row}>
                  <Text style={{fontSize: 17}}>{rowData.name}</Text>
                </View>
              </TouchableHighlight>
          }
        />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    borderColor: '#c0c0c0',
    borderStyle: 'solid',
    borderWidth: 0.5,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  }
})
