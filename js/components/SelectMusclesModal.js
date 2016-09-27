// @flow

import React, { Component } from 'react'
import MuscleList from './MuscleList'
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  AlertIOS
 } from 'react-native'
import {
  getSelectMuscleModalVisibility,
  getSelectedMuscles,
  getExerciseNameInputText,
} from './../reducers/selectors'
import {
  setMuscleModalVisibility,
  clearExerciseForm
} from './../actions/ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addExercise } from './../actions/exercise'

type Props = {
  visibility: boolean,
  onCancel: () => void,
  onDone: () => void
}

class SelectMusclesModal extends Component {
  props: Props

  state: {
    animationType: string,
    transparent: boolean
  }

  constructor(props) {
    super(props)

    this.state = {
      animationType: 'slide',
      transparent: false,
    }
  }

  render() {
    const { visibility, onCancel, onDone } = this.props

    return (
      <Modal
        animationType={this.state.animationType}
        transparent={this.state.transparent}
        visible={visibility}
      >
        { this._renderFakeNavBar(onCancel, onDone) }
        <MuscleList/>
      </Modal>
    )
  }

  _renderFakeNavBar(onCancel: () => void, onDone: () => void) {
    return (
      <View style={{
        height:60,
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
      }}>
        <TouchableOpacity onPress={onCancel}>
          <Text style={{ fontSize: 17 }}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>Add Exercise</Text>
        <TouchableOpacity onPress={onDone}>
          <Text style={{ fontSize: 17 }}>Done</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  (state) => ({
    visibility: getSelectMuscleModalVisibility(state),
    selectedMuscles: getSelectedMuscles(state),
    exerciseName: getExerciseNameInputText(state)
  }),

  (dispatch) => ({
    ...
    bindActionCreators({
      setMuscleModalVisibility,
      addExercise,
      clearExerciseForm
    },
    dispatch)
  }),

  (stateProps, dispatchProps, ownProps) => Object.assign(
    {},
    ownProps,
    {
      visibility: stateProps.visibility,
      onCancel: () => dispatchProps.setMuscleModalVisibility(false),
      onDone: () => {
        if (stateProps.exerciseName === '' || stateProps.selectedMuscles.length === 0) {
          AlertIOS.alert(
            'Error',
            'The exercise name must not be empty and you must have at least ' +
            'one muscle selected')
          return
        }

        dispatchProps.addExercise(
          stateProps.exerciseName,
          stateProps.selectedMuscles
        )
        dispatchProps.setMuscleModalVisibility(false)
        dispatchProps.clearExerciseForm()
      }
    }
  )
)(SelectMusclesModal)
