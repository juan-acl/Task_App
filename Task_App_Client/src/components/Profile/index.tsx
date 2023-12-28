import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { LogOut } from '../../redux/actions/user.acctions';
import { LogOutProps } from '../../interfaces/user.type';
import Loader from '../Loader';

const ProfileComponent: React.FC<LogOutProps> = (props: LogOutProps) => {

console.log('Validando las props del perfil', JSON.stringify(props, null, 2))

  return (
    <Container>
      {props.isLoading ? (
        <Loader />
      ) : (
        <ProfileCard>
          <ProfileImage source={ require('../../../assets/profile.png') } />
          <ProfileLabel>Nombre:</ProfileLabel>
          <ProfileValue>{props.profile[0].name}</ProfileValue>
          <ProfileLabel>Correo Electrónico:</ProfileLabel>
          <ProfileValue>{props.profile[0].email}</ProfileValue>
          {/* Agrega más campos según sea necesario */}
          <ButtonContainer>
            <LogoutButton onPress={() => props._logout()}>
              <ButtonText>Cerrar sesión</ButtonText>
            </LogoutButton>
            <UpdateButton onPress={() => console.log('Actualizar perfil')}>
              <ButtonText>Actualizar perfil</ButtonText>
            </UpdateButton>
          </ButtonContainer>
        </ProfileCard>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const ProfileCard = styled.View`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 15px;
`;

const ProfileLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 5px;
`;

const ProfileValue = styled.Text`
  font-size: 20px;
  color: #555555;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const LogoutButton = styled(TouchableOpacity)`
  background-color: #e74c3c;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  width: 45%;
`;

const UpdateButton = styled(TouchableOpacity)`
  background-color: #3498db;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  width: 45%;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const mapStateToProps = (state: any) => ({
  profile: state.user.profile,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  _logout: () => dispatch(LogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
