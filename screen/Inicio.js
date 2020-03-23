import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,Button} from 'native-base';

class Inicio extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header>
          <Text style={style}>
            ENTRADA EXITOSA
          </Text>
        </Header>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
          <CardItem>
              <Text>Datos del usuario: </Text>
          </CardItem>
            <CardItem>
              <Text>Tu Nombre es : {this.props.route.params.username}</Text>
            </CardItem>
            <CardItem>
              <Text>Tu contraseña es : {this.props.route.params.password}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
  },
});

const style = {
    color: 'white',
    fontSize: 30,
};

export default Inicio;