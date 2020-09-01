import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Itemdestination from './src/home/module/itemdestination';
import Itemhotel1 from './src/home/module/itemhotel1';
import Itemassess from './src/home/module/itemassess';
import Kindofroom from './src/home/module/kindofroom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

class index extends Component<any, any> {
  render() {
    return (
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          {/* <Itemdestination
          title={'Nhà Hát Nón Lá'}
          source={require('./src/assets/images/images.jpg')}
          number={'18'}
          name={'Bạc Liêu Province'}
          place={'địa điểm ưa thích nhất'}
          starCount={4.5}
        /> */}
          {/* <Itemhotel1
          source={require('./src/assets/images/hotel.jpg')}
          title={'Cen Hotel'}
          price={'đ379.00'}
          address={'74A Võ Thị Sáu, Vũng Tàu, Việt Nam'}
          votes={'230 đánh giá'}
          starCount={'4'}
        /> */}
          {/* <Itemassess review={'review'} starCount={4.5} title={'rate'} /> */}
          <Kindofroom
            source={require('./src/assets/images/room.png')}
            size={'27m2'}
            bed={'1 giường đôi'}
            amount={'2 người'}
            title={'Phòng tiêu chuẩn'}
            policy={'Chính sách hủy phòng'}
            quantum={'Còn 4 phòng trống'}
            internet={'Miễn Phí Internet'}
            iconinternet={require('./src/assets/images/shape.png')}
          />
        </View>
      </Provider>
    );
  }
}

export default index;