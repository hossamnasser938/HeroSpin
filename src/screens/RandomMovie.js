import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MovieInfoPeice from '../components/MovieInfoPiece';

const {height} = Dimensions.get('screen');

const RandomMovieScreen = props => {
    const {goBack} = useNavigation();

    return (
        <View style={styles.container}>
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

const movie = {
    "Title":"Spider Man: Lost Cause",
    "Year":"2014",
    "Rated":"N/A",
    "Released":"26 Sep 2014",
    "Runtime":"140 min",
    "Genre":"Action, Adventure, Comedy",
    "Director":"Joey Lever",
    "Writer":"Steve Ditko, Stan Lee, Joey Lever",
    "Actors":"Joey Lever, Craig Ellis, Teravis Ward",
    "Plot":"Peter Parker a lone child discovers that his parents were in a horrifying plot to make mankind change. getting bitten by his fathers invention he develops super powers to tries to find answers to his whole life, try and juggle a r...",
    "Language":"English",
    "Country":"United Kingdom",
    "Awards":"N/A",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYmZkYWRlNWQtOGY0Zi00MWZkLWJiZTktNjRjMDY4MTU2YzAyXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg",
    "Ratings":[{"Source":"Internet Movie Database","Value":"4.3/10"}],
    "Metascore":"N/A",
    "imdbRating":"4.3",
    "imdbVotes":"433",
    "imdbID":"tt2803854",
    "Type":"movie",
    "DVD":"N/A",
    "BoxOffice":"N/A",
    "Production":"N/A",
    "Website":"N/A",
    "Response":"True"
};