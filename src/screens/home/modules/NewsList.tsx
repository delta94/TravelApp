import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemNews from './ItemNew';
import {translate} from '../../../util/translate';
const NewsList = (props: any) => {
  const {style, data, language} = props;
  const renderItem = ({item}) => {
    let isVi = language == 'vi';
    return (
      <ItemNews
        source={{uri: item.Images[0]}}
        title={isVi ? item.vi.Title : item.en.Title}
        content={isVi ? item.vi.Content : item.en.Content}
        style={styles.item}
      />
    );
  };
  return (
    <View style={[styles.MainContainer, style]}>
      <Text style={styles.title}>{translate('travel_news')}</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontWeight: '700',
    color: '#323B45',
    fontSize: wp('4.5'),
  },
  item: {
    marginTop: hp('2'),
  },
});
export default NewsList;
