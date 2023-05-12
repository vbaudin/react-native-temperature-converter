import { TextInput, Text, View } from "react-native";
import { s } from "./InputTemperature.style";

export const InputTemperature = ({ defaultValue, onChangeText, unit }) => {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};
