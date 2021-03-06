import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class GradientOpacity extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {start, end, color, styleGradient} = this.props;
    let startState = start || {x: 0, y: 1.5};
    let endState = end || {x: 0, y: 0};
    let colorState = color || ['#000', '#0007', '#0000', '#0000'];
    return (
      <LinearGradient
        style={[styleGradient, styles.styleGradient]}
        colors={colorState}
        start={startState}
        end={endState}
      />
    );
  }
}
const styles = StyleSheet.create({
  styleGradient: {
    position: 'absolute',
  },
});
export default GradientOpacity;
