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

import SelectMusclesModal from './SelectMusclesModal'
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
      <View style={{ flex: 1 }}>
        <SelectMusclesModal />
        <ListView
          dataSource={ ds.cloneWithRows(exercises) }
          renderRow={
            ( rowData, sectionID, rowID, highlightRow ) =>
              <TouchableHighlight
                style={styles.container}
                onPress={() => highlightRow(sectionID, rowID) }>
                <View style={styles.row}>
                  <Text style={{fontSize: 17}}>{rowData.name}</Text>
                  <Text style={{fontSize: 15}}>
                    { this._formatMuscleString(rowData.muscles) }
                  </Text>
                </View>
              </TouchableHighlight>
          }
        />
      </View>
    )
  }

  _formatMuscleString(muscles) {
    return 'muscles: ' + muscles.map((x) => x.name).join(', ')
  }
}

ExerciseList.propTypes = {
  exercises: React.PropTypes.object.isRequired
}

const ExerciseListContainer = connect(
  (state) => ({
    exercises: getExercises(state)
  })
)(ExerciseList)


const ExerciseNavigator = ({ showModal }) => {
  return (
    <NavigatorIOS
      initialRoute={{
        component: ExerciseListContainer,
        title: 'Exercises',
        rightButtonTitle: 'Add',
        onRightButtonPress: showModal
      }}
      style={{ flex: 1 }}
    />
  )
}

ExerciseNavigator.propTypes = {
  showModal: React.PropTypes.func.isRequired
}

export default connect (
  null,
  (dispatch) => ({
    showModal: bindActionCreators(
      () => setMuscleModalVisibility(true),
      dispatch
     )
  })
)(ExerciseNavigator)

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  row: {
    backgroundColor: '#F5FCFF',
    padding: 15,
    borderColor: '#c0c0c0',
    borderStyle: 'solid',
    borderWidth: 0.5,
    flex: 1,
    justifyContent: 'space-between',
  }
})
