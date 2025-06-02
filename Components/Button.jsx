import {Text, TouchableOpacity} from 'react-native';

export default function Button({
  styles = {},
  onPress = () => {},
  buttonText = '',
  textStyles = {},
}) {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text style={textStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
