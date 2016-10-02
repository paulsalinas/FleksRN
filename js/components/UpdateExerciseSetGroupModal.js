import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StyleSheet
 } from 'react-native'

 type Props = {
   visibility: boolean
 }

export default class UpdateExerciseSetGroupModal extends Component {
  props: Props

  state: {
    animationType: string,
    transparent: boolean,
  }

  constructor(props) {
    super(props)

    this.state = {
      animationType: 'slide',
      transparent: false,
    }
  }

  render() {
    const { onCancel, onDone } = this.props

    // hardcode visibility for now
    const visibility = true

    return (
          <View style={styles.container}>
            { this._renderFakeNavBar(onCancel, onDone) }
            <TouchableHighlight
              underlayColor={'#F5FCFF'}
              onPress={() => { return }}>
              <View style={styles.row}>
                <Text style={{ fontSize: 20 }}>
                  Add Exercise
                </Text>
                <Text style={{ fontSize: 20 }}>></Text>
              </View>
            </TouchableHighlight>
            <View style={styles.row}>
              <Text style={{fontSize: 20}}>Number of Sets</Text>
              { this._renderStepper() }
            </View>
            <TextInput
              style={ StyleSheet.flatten([styles.row, {textAlign: 'center'}]) }
              value={ '' }
              placeholder='Enter notes here'
            />
          </View>
    )
  }

  _renderStepper() {
    return (
      <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5 }}>
        <TouchableHighlight underlayColor={'#F5FCFF'} onPress={() => {return}} >
          <View style={{ width: 35, height: 35, borderRightWidth: 1,  alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 30}}>+</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#F5FCFF'} onPress={() => {return}}>
          <View style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 30}}>-</Text>
          </View>
        </TouchableHighlight>
      </View>
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
        <TouchableOpacity >
          <Text style={{ fontSize: 17 }}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Update</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 17 }}>Done</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 45,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  inputCell: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderColor: 'grey'
  }
})
