// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMusclesWithSelected, getExerciseNameInputText } from './../selectors/selectors'
import {
  textInputExerciseName,
  selectMuscle,
  deselectMuscle
} from './../actions/ui'

import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from 'react-native'

type AddButtonProps = {
  checked: boolean,
  onChange: (checked: boolean) => void
}

class AddButton extends Component {
  props: AddButtonProps

  render() {
    const { checked, onChange } = this.props

    return(
      <TouchableOpacity
        onPress={ () => onChange(!checked) }
        activeOpacity={0.8}>
        { this._renderImage(checked) }
      </TouchableOpacity>
    )
  }

  _renderImage (checked) {
    return checked ?
      <Image
        source={require('./../../img/ic_check.png')}
        style={{ tintColor: '#0092d7' }}
      />
      :
      <Image
        source={require('./../../img/ic_add_circle.png')}
        style={{ tintColor: '#e04050' }}
      />
  }
}

type MuscleListProps = {
  muscles: {id: string, name: string, selected: boolean },
  exerciseName: string,
  onExerciseNameChange: (value: string) => void,
  onMuscleSelectChange: (id: string) => (checked: boolean) => void
}

class MuscleList extends Component {
  props: MuscleListProps
  state: {
    ds: ListView.DataSource
  }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
    this.state = {
      ds
    }
  }

  render() {
    const {
      muscles,
      exerciseName,
      onExerciseNameChange,
      onMuscleSelectChange,
    } = this.props
    const { ds } = this.state

    return (
        <ListView
          dataSource={ ds.cloneWithRowsAndSections([muscles]) }
          renderSectionHeader={
            () =>(
              <View style={{backgroundColor:'white'}}>
                <TextInput
                  style={{
                    height: 70,
                    borderColor: 'gray',
                    borderWidth: 1,
                    textAlign: 'center',
                    fontSize: 25
                  }}
                  onChangeText={ onExerciseNameChange }
                  value={ exerciseName ? exerciseName : '' }
                  placeholder='Enter name here'
                />
              </View>
            )
          }
          renderRow={
            (rowData, sectionID, rowID, highlightRow) =>
              <TouchableHighlight style={styles.container}
                onPress={() => highlightRow(sectionID, rowID) }>
                <View style={styles.row}>
                  <Text style={{fontSize: 17}}>{rowData.name}</Text>
                  <AddButton
                    checked={ rowData.selected }
                    onChange={ onMuscleSelectChange(rowData.id) }
                  />
                </View>
              </TouchableHighlight>
          }
        />
    )
  }
}

export default connect(
  (state) => ({
    muscles : getMusclesWithSelected(state),
    exerciseName: getExerciseNameInputText(state)
  }),

  (dispatch) => ({
    actions: bindActionCreators({
      textInputExerciseName,
      selectMuscle,
      deselectMuscle
    },
    dispatch
    )
  }),

  (stateProps, dispatchProps, ownProps) => Object.assign(
    {},
    ownProps,
    stateProps,
    {
      onExerciseNameChange: dispatchProps.actions.textInputExerciseName,
      onMuscleSelectChange: (id) => (checked) =>
        checked ?
        dispatchProps.actions.selectMuscle(id)
        :
        dispatchProps.actions.deselectMuscle(id)

    }
  )
)(MuscleList)

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
