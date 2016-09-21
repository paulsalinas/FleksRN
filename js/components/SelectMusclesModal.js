import React, { Component } from 'react'
import MuscleList from './MuscleList'
import { NavigatorIOS, Modal } from 'react-native'
import { getSelectMuscleModalVisibility } from './../selectors/selectors'
import { setMuscleModalVisibility } from './../actions/ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SelectMusclesModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animationType: 'slide',
      transparent: false,
    }
  }

  _setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  };

  render() {
    const { visibility, onCancel } = this.props

    return (
      <Modal
        animationType={this.state.animationType}
        transparent={this.state.transparent}
        visible={visibility === true}
        onRequestClose={() => {this._setModalVisible(false)}}
      >
        <NavigatorIOS
          initialRoute={{
            component: MuscleList,
            title: 'Muscles',
            rightButtonTitle: 'Done',
            leftButtonTitle: 'Cancel',
            onLeftButtonPress: onCancel
          }}
          style={{flex: 1}}
        />
      </Modal>
    )
  }
}

SelectMusclesModal.propTypes = {
  visibility: React.PropTypes.bool.isRequired,
  onCancel: React.PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    visibility: getSelectMuscleModalVisibility(state),
  }),
  (dispatch) => ({
    onCancel: bindActionCreators(
      () => setMuscleModalVisibility(false),
      dispatch
    )
  })
)(SelectMusclesModal)
