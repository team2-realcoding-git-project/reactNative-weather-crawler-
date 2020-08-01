import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        };
    }
    componentDidMount() {
        fetch('http://172.30.1.33:8888/weather-service/available-cities')
            .then(response => response.json())
            .then(cities => {
                console.log('city this =', cities.length);
                this.setState({
                    cities
                });
            });
    }
    onPressCity(item) {
        console.log('onPressCity =', item);
        this.props.navigation.navigate('Detail', {
            city: item
        })
    }
    renderItem(city) {
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
                <Text style={styles.text}>{city}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <FlatList style={styles.container}
                keyExtractor={item => item}
                renderItem={({ item }) => this.renderItem(item)}
                data={this.state.cities}
            />

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
});