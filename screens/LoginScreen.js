import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { loadFonts } from "../assets/fonts/Fonts";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInUp,
  FadeOut,
  FadeInDown,
} from "react-native-reanimated";

export default function LoginScreen() {
  const [isReady, setIsReady] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loadApp = async () => {
      await loadFonts();
      setIsReady(true);
    };

    loadApp();
  }, []);

  if (!isReady) {
    return null;
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="auto" />
      <Animated.Image
        entering={FadeInUp.delay(200).duration(1000)}
        exiting={FadeOut}
        source={require("../assets/images/ataslogin.png")}
        className="h-full w-full absolute "
      />
      <Animated.Image
        entering={FadeInDown.delay(200).duration(1000)}
        exiting={FadeOut}
        source={require("../assets/images/bawahlogin.png")}
        className="h-full w-full absolute"
      />
      <View className="h-full w-full absolute text-black flex justify-center space-y-16">
        <Animated.View
          entering={FadeInUp.duration(1000)}
          exiting={FadeOut}
          className="flex justify-center items-center"
        >
          <Text className="text-6xl text-center font-bold text-violet-500">
            Login
          </Text>
          <Text className="text-lg text-center text-violet-500">
            Sign in to Continue
          </Text>
        </Animated.View>

        <View className="flex space-y-5">
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-slate-100 mx-10 p-4 rounded-2xl"
          >
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-slate-100 mx-10 p-4 rounded-2xl"
          >
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} className="absolute right-4 top-4">
              <Text>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="space-y-2"
          >
            <TouchableOpacity className="bg-violet-500 mx-10 p-4 rounded-2xl">
              <Text className="font-semibold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row justify-center items-center">
              <Text className="text-lg font-poppins">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.push("Register")}
                className=" border-violet-500"
              >
                <Text className="text-lg font-poppins text-violet-500">
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
