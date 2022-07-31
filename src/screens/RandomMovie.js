import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MovieInfoPeice from '../components/MovieInfoPiece';
import { fetchRandomMovie } from '../services/moviesAPI';

const {height} = Dimensions.get('screen');

const RandomMovieScreen = props => {
    const {route} = props;
    const {params} = route;
    const {goBack} = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchRandomMovie(params?.hero?.name)
            .then(res => {
                setMovie(res);
            })
            .catch(err => {
                Alert.alert('Unexpected error occurred');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            {
                isLoading
                    ? (
                        <View style={styles.loadingWrapper}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) 
                    : movie && (
                        <>
                            <View style={styles.poster}>
                                <Image source={{uri: movie.Poster}} style={styles.poster}/>

                                <LinearGradient colors={['#ffffff80', '#00000080']} style={styles.titleWrapper}>
                                    <Pressable onPress={goBack}>
                                        <Image source={require('../../assets/images/Back.png')} style={styles.backIcon} />
                                    </Pressable>
                                    <Text style={styles.title}>{movie.Title}</Text>
                                </LinearGradient>
                            </View>

                            <ScrollView style={styles.infoBox}>
                                <MovieInfoPeice title="Year" info={movie.Year} />
                                <MovieInfoPeice title="Duration" info={movie.Runtime} />
                                <MovieInfoPeice title="Genre" info={movie.Genre} />
                                <MovieInfoPeice title="Director" info={movie.Director} />
                                <MovieInfoPeice title="Writer" info={movie.Writer} />
                                <MovieInfoPeice title="Actors" info={movie.Actors} />
                                <MovieInfoPeice title="Plot" info={movie.Plot} />
                                <MovieInfoPeice title="Language" info={movie.Language} />
                                <MovieInfoPeice title="Country" info={movie.Country} />
                                <MovieInfoPeice title="Rating" info={movie.imdbRating} />
                                <MovieInfoPeice title="Votes" info={movie.imdbVotes} />

                            </ScrollView>
                        </>
                    )
            }
        </View>
    );
};

export default RandomMovieScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        height: 32,
        width: 32
    },
    poster: {
        width: '100%',
        height: height / 2
    },
    infoBox: {
        padding: 10
    },
    titleWrapper: {
        position: 'absolute', 
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 40
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});