import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getExercises } from './../selectors/selectors'
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  NavigatorIOS,
  StyleSheet
} from 'react-native'

import { setMuscleModalVisibility } from './../actions/ui'
import { bindActionCreators } from 'redux'

class ExerciseList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds
    }
  }

  render() {
    const { exercises } = this.props
    const { ds } = this.state

    return (
        <ListView
          dataSource={ ds.cloneWithRows(exercises) }
          renderRow={
            ( rowData, sectionID, rowID, highlightRow ) =>
              <TouchableHighlight style={styles.container}
                onPress={() => highlightRow(sectionID, rowID) }>
                <View style={styles.row}>
                  <Text style={{fontSize: 17}}>{rowData.name}</Text>
                  <Text style={{fontSize: 15}}>{'muscles: ' + rowData.muscles.map((x) => x.name).join(', ')}</Text>
                </View>
              </TouchableHighlight>
          }
        />
    )
  }
}

const ExerciseListContainer = connect(
  (state) => ({
    exercises: getExercises(state)
  }),
  (dispatch) => ({
    exerciseActions: bindActionCreators({ setMuscleModalVisibility }, dispatch)
  })
)(ExerciseList)

const ExerciseNavigator = ({ exerciseActions }) => {
  const { setMuscleModalVisibility } = exerciseActions
  return (
    <NavigatorIOS
      initialRoute={{
        component: ExerciseListContainer,
        title: 'Exercises',
        rightButtonTitle: 'Add',
        onRightButtonPress: () => { setMuscleModalVisibility(true) }
      }}
      style={{flex: 1}}
    />
  )
}

export default connect (
  null,
  (dispatch) => ({
    exerciseActions: bindActionCreators({ setMuscleModalVisibility }, dispatch)
  })
)(ExerciseNavigator)

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
