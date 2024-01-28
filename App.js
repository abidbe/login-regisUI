import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { View, Button ,Text} from "react-native";

export default function AnimatedStyleUpdateExample() {
  

  return (
    <View className="flex-1 flex justify-center items-center">
      <Text className="bg-slate-400">AnimatedStyleUpdateExample</Text>
    </View>
  );
}
