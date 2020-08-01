import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class WeatherDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Weather Informations',
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }
    componentDidMount() {
        const {
            route: {
                params: { city },
            },
        } = this.props;

        console.log('route =', city);
        const API_WEATHERDETAIL = 'http://172.30.1.33:8888/weather-service/weathers?cityName=' + city;

        fetch(API_WEATHERDETAIL)
            .then(response => response.json())
            .then(info => {
                console.log(info);
                this.setState({
                    ...info,
                    isLoading: false,
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>데이테를 불러오는 중입니다</Text>
                </View>
            )
        }
        let celsius = this.state.main.temp - 273.15;
        return (
            <View style={styles.container}>
                <Text>온도: {celsius.toFixed(1)}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});