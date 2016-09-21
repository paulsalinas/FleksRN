import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMuscles } from './../selectors/selectors'
import { textInputExerciseName } from './../actions/ui'
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

class AddButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      added: false
    }
  }

  render() {
    return(
      <TouchableOpacity
        onPress={ () => {this.setState({ added: !this.state.added })}}
        activeOpacity={0.8}>
        { this._renderImage() }
      </TouchableOpacity>
    )
  }

  _renderImage () {
    return this.state.added ?
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

class MuscleList extends Component {
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
    const { muscles, exerciseName } = this.props
    const { textInputExerciseName } = this.props.actions
    const { ds } = this.state

    return (
        <ListView
          dataSource={ ds.cloneWithRowsAndSections([muscles]) }
          renderSectionHeader={
            () =>(
              <View style={{backgroundColor:'white'}}>
                <TextInput
                  style={{height: 70, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => textInputExerciseName(text)}
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
                  <AddButton />
                </View>
              </TouchableHighlight>
          }
        />
    )
  }
}

MuscleList.propTypes = {
  muscles: React.PropTypes.array.isRequired,
  exerciseName: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired
}

export default connect(
  (state) => ({
    muscles : getMuscles(state),
    exerciseName: state.ui.textInputExerciseName
  })
  ,(dispatch) => ({
    actions: bindActionCreators({ textInputExerciseName }, dispatch)
  })
) (MuscleList)

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
