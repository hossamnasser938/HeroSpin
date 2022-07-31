import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const HomeScreen = props => {
    const {navigate} = useNavigation();

    const navigateToRandomMovieScreen = () => {
        navigate('RandomMovieScreen');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/RandomIcon.png')} style={styles.image}/>

            <Text style={styles.title}>
                Not Sure What to Watch?
            </Text>

            <Text style={styles.hint}>
                Hit "Play Something" and we will pick you the best movie to watch
            </Text>

            <Button title="Play Something" onPress={navigateToRandomMovieScreen} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    image: {
        marginVertical: 40,
        width: 225,
        height: 225,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    hint: {
        marginVertical: 20,
        textAlign: 'center'
    }
});

export default HomeScreen;