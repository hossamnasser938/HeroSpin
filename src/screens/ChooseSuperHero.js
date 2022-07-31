import { useNavigation } from '@react-navigation/native';
import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import SuperHeros from '../data/SuperHeros.json';

const ChooseSuperHeroScreen = props => {
  const {push} = useNavigation();
  
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setData(SuperHeros);
  }, []);

  const onSelected = (val) => {
    setSelected(val);
    push('RandomMovieScreen', {hero: val});
  };

  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(query.toLocaleLowerCase('en'))
      );
    }
  }, [data, query]);

  const onSearch = (text) => {
    setQuery(text);
  };

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/SuperHero.jpg')} style={styles.image}/>

        <Text style={styles.title}>
            Prefer a Super Hero?
        </Text>

        <Text style={styles.hint}>
            Hit "Select Super Hero" and let us pick you the best movie for your super hero
        </Text>

      <Button
        onPress={() => {
          onOpen('SuperHero');
        }}
        title="Choose your Super Hero"
      />
      <Picker
        id="SuperHero"
        data={filteredData}
        inputValue={query}
        searchable={true}
        label="Select Super Hero"
        setSelected={onSelected}
        onSearch={onSearch}
      />
    </View>
  );
}

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

export default ChooseSuperHeroScreen;
