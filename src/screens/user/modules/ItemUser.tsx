import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CircleImage from '../../../components/CircleImage';
import {translate} from '../../../util/translate';
class ItemUser extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLine: 1,
    };
  }
  onPressName = () => {
    if (this.state.numberOfLine == 3) {
      this.setState({numberOfLine: 1});
      return;
    }
    this.setState({numberOfLine: 3});
  };
  render() {
    const {numberOfLine} = this.state;
    const {style, stylecore, source, stylename, core, name} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <Pressable style={{width: wp('30')}} onPress={this.onPressName}>
          <Text style={[styles.name, stylename]} numberOfLines={numberOfLine}>
            {name}
          </Text>
          <View style={styles.viewStraCore}>
            <Text style={[styles.core, stylecore]}>{`${translate(
              'stra_core',
            )}: ${core}`}</Text>
            <Image
              source={require('../../../assets/images/s_coin.png')}
              style={styles.imageCoin}
            />
          </View>
        </Pressable>
        <CircleImage
          source={source}
          size={wp('12')}
          style={styles.containerCirCleImage}
          styleImage={styles.circleImage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '1%',
    justifyContent: 'center',
  },
  name: {
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
  },
  viewStraCore: {
    backgroundColor: '#0003',
    paddingLeft: wp('1'),
    flexDirection: 'row',
    borderRadius: wp('4'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: wp('0.7'),
  },
  core: {
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
  },
  containerCirCleImage: {
    marginTop: wp('-1'),
  },
  circleImage: {
    borderWidth: 1,
    borderColor: '#323B45',
  },
  imageCoin: {
    width: wp('5.5'),
    height: wp('5.5'),
  },
});
export default ItemUser;
