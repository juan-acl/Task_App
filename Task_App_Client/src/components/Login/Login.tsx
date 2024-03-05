import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components/native';
import { Button } from 'native-base';
import Loader from '../Loader';
import { Login } from '../../redux/actions/user.acctions';
import { showLoader } from '../../redux/actions/loader.action';
import { useFormik } from 'formik';
import { UserLoginProps } from '../../interfaces/user.type';
import { showAlert } from '../../redux/actions/alert.action';
import * as Yup from 'yup';
import AlertLogin from '../Alert/Alert';

const LoginComponent: React.FC<UserLoginProps> = (props: UserLoginProps) => {
    const [showAlert, setShowAlert] = useState({
        isShow: false,
        message: '',
        title: ''
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El correo es requerido!'),
            password: Yup.string().required('La contraseña es requerida!')
        }),
        onSubmit: async (values) => {
            const { email, password } = values
            let response = await props._login(password, email)
            if (response) return setShowAlert({ isShow: true, message: '¡Bienvenido!', title: 'Sesion Iniciada' })
            setShowAlert({ isShow: true, message: 'Usuario o contraseña incorrectos', title: 'Error' })
        }
    })

    const handleChangeEmail = (value: string) => {
        formik.setFieldValue('email', value)
    }

    const handleChangePassword = (value: string) => {
        formik.setFieldValue('password', value)
    }

    return (
        <>
            {props.isLoading ?
                <Loader /> :
                <Container>
                    <Title>Iniciar Sesi&oacute;n</Title>
                    <StyledText>{formik.errors.email}</StyledText>
                    <StyledTextInput
                        placeholder="Correo electronico"
                        value={formik.values.email}
                        keyboardType="email-address"
                        onChangeText={handleChangeEmail}
                    />
                    <StyledText>{formik.errors.password}</StyledText>
                    <StyledTextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        value={formik.values.password}
                        onChangeText={handleChangePassword}
                    />
                    <AlertLogin
                        isShow={showAlert.isShow}
                        title={showAlert.title}
                        message={showAlert.message}
                        onClick={formik.handleSubmit}
                        disabled={formik.errors.email || formik.errors.password ? true : false}
                    />
                </Container>}
        </>
    )
}

const StyledText = styled.Text`
  font-size: 13px;
  color: red;
  `

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 20px;
  margin-top: 50%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align:center
`;

const StyledTextInput = styled.TextInput`
  height: 50px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 15px;
  padding-horizontal: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #3498db;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const mapStateToProps = (state: any) => ({
    isLoading: state.loader.isLoading,
    isShow: state.alert.isShow,
})

const mapDispatchToProps = (dispatch: any) => ({
    _login: (password: string, email: string) => dispatch(Login(password, email)),
    _showLoader: (show: boolean) => dispatch(showLoader(show)),
    _showAlert: (title: string, message: string, isShow: boolean) => dispatch(showAlert(title, message, isShow))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)