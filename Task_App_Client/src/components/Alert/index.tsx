import React from 'react';
import * as Actions from '../../redux/actions/alert.action';
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const Alert = (props: any) => {

        const [visible, setVisible] = React.useState(props.isShow);
        const toggleAlert = React.useCallback(() => {
            props._showAlert('Title', 'Message', 'success', true, () => console.log('callback'));
    setVisible(!visible);
  }, [visible]);

      return (
    <View>
      <TouchableOpacity onPress={toggleAlert}>
        <Text>Tap me</Text>
      </TouchableOpacity>

      <FancyAlert
              visible={props.isShow}
              icon={
              <View style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 50,
                    width: '100%',
                }}>
                    <Text>{props.title}</Text>
                </View>
            }
              style={{ backgroundColor: 'white' }} 
              onRequestClose={() => props._hideAlert()}
              >
            <TouchableOpacity  onPress={() => props._hideAlert()}>
        <Text >OK</Text>
      </TouchableOpacity>

        <Text style={{ marginTop: -16, marginBottom: 32 }}>{props.message}</Text>
      </FancyAlert>
    </View>
  )
}

const mapStateToProps = (state: any) => ({
    isShow: state.alert.isShow,
    message: state.alert.message,
    type: state.alert.type,
    callback: state.alert.callback,
    title: state.alert.title
})

const mapDispatchToProps = (dispatch: any) => ({
    _hideAlert: () => dispatch(Actions.hideAlert()),
    _showAlert: (title: string, message: string, type:string, isShow: boolean) => dispatch(Actions.showAlert(title, message, type, isShow))
})

export default connect(mapStateToProps, mapDispatchToProps) (Alert);