import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MovieInfoPeice = props => {
    const {title, info} = props;

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>
            <View style={styles.horizontalLine}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },  
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        width: '30%'
    },
    info: {
        fontSize: 12,
        width: '70%'
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#bbb'
    }
});

export default MovieInfoPeice;