import React from 'react';
import { View } from 'react-native';
import { showAlert } from '../../redux/actions/alert.action';
import { connect } from "react-redux";
import { AlertProps, AlertStateToProps } from '../../interfaces/alert.type';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertComponent: React.FC<AlertProps> = (props:AlertProps) => {
  return (
    <View
    >
  {props.isShow && (
            <AwesomeAlert
          show={props.isShow}
          showProgress={false}
          title={props.title}
          message={props.message}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            props._showAlert('', '', false)
          }}
          contentContainerStyle={{ width: '80%', height: 'auto' }}  // Ajusta el ancho y alto según tus necesidades
          titleStyle={{ fontSize: 25 }}  // Puedes ajustar el tamaño del título
          messageStyle={{ fontSize: 20 }}  // Puedes ajustar el tamaño del mensaje
          confirmButtonTextStyle={{ fontSize: 20 }}  // Puedes ajustar el tamaño del texto del botón de confirmación
        />
  )}
    </View>
  )
}

const mapStateToProps = (state: AlertStateToProps) => ({
    isShow: state.alert.isShow,
    message: state.alert.message,
    title: state.alert.title
})

const mapDispatchToProps = (dispatch: any) => ({
    _showAlert: (title: string, message: string ,isShow: boolean) => dispatch(showAlert(title, message, isShow))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent as React.FC);