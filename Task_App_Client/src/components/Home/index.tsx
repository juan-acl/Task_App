import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Home: React.FC = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('LogIn_Screen' as never)
    }

    const handleRegister = () => {
        navigation.navigate('Register_Screen' as never)
    }

return (
    <Container>
      <Title>Bienvenido!</Title>
       <Subtitle>Transforma tu vida organizando tus tareas de manera eficiente y sencilla.</Subtitle>
      <LoginButton
       onPress={handleLogin}
      >
        <LoginButtonText>Iniciar sesión</LoginButtonText>
      </LoginButton>
      <RegisterButton
       onPress={handleRegister}
      >
        <RegisterButtonText>Crear cuenta</RegisterButtonText>
      </RegisterButton>
    </Container>
  );

}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
`;

const Title = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #ecf0f1;
  margin-bottom: 20px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: #bdc3c7;
  text-align: center;
  margin-horizontal: 40px;
  margin-bottom: 40px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #27ae60;
  padding: 15px 40px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const LoginButtonText = styled.Text`
  color: #ecf0f1;
  font-size: 15px;
  width: 100%;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 15px 40px;
  border-radius: 8px;
`;

const RegisterButtonText = styled.Text`
  color: #ecf0f1;
  font-size: 15px;
  width: 80%;
`;

export default Home