import React from 'react';
import { connect } from "react-redux";
import { Button } from 'react-native';
import styled from 'styled-components/native';
import Loader from '../Loader';
import { useNavigation } from '@react-navigation/native';
import { Login } from '../../redux/actions/user.acctions';
import { showLoader } from '../../redux/actions/loader.action';
import { useFormik } from 'formik';
import { UserLoginProps } from '../../interfaces/user.type';
import * as Yup from 'yup';

const LoginComponent: React.FC<UserLoginProps> = (props: UserLoginProps) => {

    const navigate = useNavigation();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El correo es requerido!'),
            password: Yup.string().required('La contraseña es requerida!')
        }),
        onSubmit: async(values) => {
            const { email, password } = values
            let success = false
            let msg = ''
            try{
                const response = await props._login(password, email)
                success = response.success
                msg = response.message
            }catch(error) {
                console.log('Error en el login', error)
            }finally{
                setTimeout(() => {
                    if(success) {
                        formik.resetForm()
                        navigate.navigate('HomeScreen' as never)
                    }
                    alert(msg)
                }, 2000)
            }
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
            <StyledButton
                disabled={formik.errors.email || formik.errors.password ? true : false}
                title="Iniciar sesi&oacute;n"
                onPress={() => formik.handleSubmit()}
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
  margin-top:-80px
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
    isLoading: state.loader.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    _login: (password: string, email: string) => dispatch(Login(password, email)),
    _showLoader: (show: boolean) => dispatch(showLoader(show)),
})

export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent)