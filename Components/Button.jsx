import {Text, TouchableOpacity, View} from 'react-native';

export default function Button({
  styles = {},
  onPress = () => {},
  buttonText = '',
  textStyles = {},
  icon: Icon = <></>,
}) {
  return (
    <TouchableOpacity style={[styles, {flexDirection: "row", gap: 3}]} onPress={onPress}>
      {Icon}
      <Text style={textStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
