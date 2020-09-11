import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TraTe from '../../../components/TraTe';
import ItemRow from './ItemRow';
class ModalHelping extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 5,
      initData: [
        {title: 'Làm thế nào để huỷ lịch đặt?'},
        {title: 'Khi nào tôi có thể thay đổi dịch vụ phòng?'},
        {title: 'Xem hướng dẫn sử dụng app'},
        {title: 'Làm sao để sửa phương thức thanh toán'},
        {title: 'Làm thế nào để huỷ lịch đặt?'},
        {title: 'Khi nào tôi có thể thay đổi dịch vụ phòng?'},
        {title: 'Xem hướng dẫn sử dụng app'},
        {title: 'Làm sao để sửa phương thức thanh toán'},
      ],
    };
  }
  renderItem = ({item}) => {
    return (
      <ItemRow
        titleStyle={styles.textStyleItemRow}
        style={styles.itemRow}
        title={item.title}
      />
    );
  };
  onPressReadMore = () => {
    this.setState({itemCount: undefined});
  };
  onPressShowLess = () => {
    this.setState({itemCount: 5});
  }
  render() {
    const {initData, itemCount} = this.state;
    return (
      <View style={styles.MainContainer}>
        <Image
          style={styles.imageHeader}
          source={require('../../../assets/images/angiang.jpg')}
          resizeMode={'cover'}
        />
        <View style={styles.viewBlackColor} />
        <View style={styles.viewHeader}>
          <TouchableOpacity
            onPress={this.props.onPressBackSpace}
            style={styles.keyBoardSpace}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#ffffff'}
            />
          </TouchableOpacity>
          <TraTe i18nKey={'description_helping'} style={styles.title} />
        </View>
        <View style={styles.viewContent}>
          <TraTe style={styles.questionFre} i18nKey={'frequent_question'} />
          <FlatList
            data={initData.slice(0, itemCount)}
            renderItem={this.renderItem}
            style={styles.flatList}
          />
          {itemCount ? (
            <TouchableOpacity onPress={this.onPressReadMore}>
              <TraTe style={styles.moreAndLess} i18nKey={'read_more'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onPressShowLess}>
              <TraTe style={styles.moreAndLess} i18nKey={'show_less'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  imageHeader: {
    width: '100%',
    height: hp('30'),
  },
  viewBlackColor: {
    position: 'absolute',
    width: '100%',
    height: hp('30'),
    backgroundColor: '#000',
    opacity: 0.3,
  },
  viewHeader: {
    position: 'absolute',
    width: '100%',
    height: hp('30'),
    justifyContent: 'space-between',
    paddingLeft: wp('4'),
    paddingTop: hp('3'),
    paddingBottom: hp('5'),
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('4.4'),
    color: '#ffffff',
    width: '60%',
  },
  keyBoardSpace: {
    width: '10%',
  },
  viewContent: {
    paddingVertical: hp('2'),
    paddingHorizontal: wp('3.8'),
  },
  questionFre: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('4.4'),
    color: '#01244C',
  },
  itemRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(168, 182, 200, 0.301961)',
    paddingVertical: wp('2.5'),
  },
  flatList: {
    marginTop: hp('2'),
  },
  textStyleItemRow: {
    color: '#5C6979',
  },
  moreAndLess: {
    fontFamily: 'roboto-slab.regular',
    color: '#FA2A00',
    fontSize: wp('3.6'),
    marginTop: hp('2'),
  },
});
export default ModalHelping;
