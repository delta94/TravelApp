import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>index</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default index;
