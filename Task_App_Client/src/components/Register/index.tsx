import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import { RegisterUser } from '../../redux/actions/user.acctions'
import { UserProps, State } from '../../interfaces/user.type';
import { showLoader } from '../../redux/actions/loader.action'
import { connect } from "react-redux";
import styled from 'styled-components/native';

const Register: React.FC<UserProps> = (props: UserProps) => {
    const initialState ={
        user_id: 0,
        name: 'Juan',
        lastname: '',
        phone_number: '',
        email: ''
    }
    const [data, setData] = useState(initialState);
    console.log('Validando las props de el usuario', props)

return (
    <Container>
      <Title>Registro</Title>
      <StyledTextInput
        placeholder="Nombre"
        // onChangeText={(text) => setName(text)}
      />
      <StyledTextInput
        placeholder="Correo electrónico"
        keyboardType="email-address"
        // onChangeText={(text) => setEmail(text)}
      />
      <StyledTextInput
        placeholder="Contraseña"
        secureTextEntry
        // onChangeText={(text) => setPassword(text)}
      />
      <StyledButton 
    //   onPress={handleRegistration}
      >
        <ButtonText>Registrar</ButtonText>
      </StyledButton>
      <StyledLink onPress={() => console.log('Ir a Términos y Condiciones')}>
        <LinkText>Leer Términos y Condiciones</LinkText>
      </StyledLink>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 20px;
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

const StyledButton = styled(TouchableOpacity)`
  background-color: #3498db;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
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
})

const mapDispatchToProps = (dispatch: any) => ({
    _register: (name: string, email: string, password: string, lastname: string, phone_number: string) => dispatch(RegisterUser(name, email, password, lastname, phone_number)),
    _showLoader: (show: boolean) => dispatch(showLoader(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);