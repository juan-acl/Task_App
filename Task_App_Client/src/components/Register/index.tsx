import React from 'react';
import { TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";
import { RegisterUser } from '../../redux/actions/user.acctions'
import { showLoader } from '../../redux/actions/loader.action'
import { UserProps } from '../../interfaces/user.type';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import _ from 'lodash'
import Loader from '../Loader';
import styled from 'styled-components/native';

const Register: React.FC<UserProps> = (props: UserProps) => {

    const navigate = useNavigation();

    const formik = useFormik({
      initialValues: {
        name: '',
        lastname: '',
        phone_number: '',
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        name: Yup.string().required('El nombre es requerido!'),
        lastname: Yup.string().required('El apellido es requerido!'),
        phone_number: Yup.string().required('El numero de telefono es requerido!'),
        email: Yup.string().required('El correo es requerido!'),
        password: Yup.string().required('El contraseña es requerido!'),

      }),
      validateOnChange: true,
      onSubmit: (values) => {
        const { name, lastname, email, password, phone_number } = values
        try{
          props._register(name, email, password, lastname, phone_number)
        }catch(error){
          console.log('Error en el formulario', error)
        }finally{
          setTimeout(() => {
            formik.resetForm()
            navigate.navigate('LogIn_Screen' as never)
          }, 2000)
          console.log('Se registro correctamente el usuario')
        }
      }
    });

    const handleChangeName = (value:string) => {
      formik.setFieldValue('name', value)
    };

    const handleChangeLastname = (value: string) => {
      formik.setFieldValue('lastname', value)
    };

    const handleChangePhone = (value: string) => {
      formik.setFieldValue('phone_number', value)
    };

    const handleChangeEmail = (value: string) => {
      formik.setFieldValue('email', value)
    };

    const handleChangePassword = (value: string) => {
      formik.setFieldValue('password', value)
    };

return (
  <>
  { props.isLoading ? <Loader /> : 
        <Container>
      <Title>Creemos una cuenta ahora!</Title>
      <StyledText>{formik.errors.name}</StyledText>
      <StyledTextInput
        placeholder="Nombre"
        value={formik.values.name}
        onChangeText={handleChangeName}
      />
      <StyledText>{formik.errors.lastname}</StyledText>
        <StyledTextInput
        placeholder="Apellido"
        value={formik.values.lastname}
        onChangeText={handleChangeLastname}
      />
      <StyledText>{formik.errors.phone_number}</StyledText>
      <StyledTextInput
        placeholder="Numero de telefono"
        value={formik.values.phone_number}
        onChangeText={handleChangePhone}
      />
      <StyledText>{formik.errors.email}</StyledText>
      <StyledTextInput
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={formik.values.email}
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
        title="Registrar"
        disabled={formik.errors.email || formik.errors.password || formik.errors.lastname || formik.errors.name || formik.errors.phone_number ? true : false}
        onPress={() => formik.handleSubmit()}
      />
      <StyledLink>
        <LinkText>Leer Términos y Condiciones</LinkText>
      </StyledLink>
    </Container>
   }
  </>
  );
};

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

const StyledLink = styled(TouchableOpacity)`
  margin-top: 20px;
`;

const LinkText = styled.Text`
  color: #3498db;
  font-size: 16px;
  text-align: center;
`;

const mapStateToProps = (state: any) => ({
    login: state.user.login,
    isLoading: state.loader.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    _register: (name: string, email: string, password: string, lastname: string, phone_number: string) => dispatch(RegisterUser(name, email, password, lastname, phone_number)),
    _showLoader: (show: boolean) => dispatch(showLoader(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);