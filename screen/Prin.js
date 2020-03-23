import React, { Component } from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Header,CardItem} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    } //end constructor

    async componentWillMount(){
        try{
            const response =
                await fetch ('https://reactnative.dev/movies.json')
            const responseJson = await response.json()

            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function(){

            });
    }
    catch(error){
        console.log(error);
    };
}

    render(){
        if (this.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View>
              <Header>
                <Text style={style}>
               STAR WARS
                </Text>
              </Header>
              <CardItem>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>Titulo: {item.name}, Año de publicacion: {item.gender},</Text>}
                    keyExtractor={({id},index)=>id}
                />
              </CardItem>
            </View>
        )
    }
}

const style = {
  color: 'white',
  fontSize: 30,
};


export default Principal;