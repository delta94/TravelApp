import React, {Component} from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class ModalImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {source, style, onPressItem} = this.props;
    return (
      <Pressable onPress={onPressItem} style={styles.MainContainer}>
        <Image style={[styles.Images, style]} source={source} />
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Images: {
    width: wp('90'),
    height: hp('60'),
  },
});
export default ModalImage;
