import NavBar from "@/components/NavBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import tw from "@/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <NavBar />
      <View style={tw`flex flex-col items-center justify-start p-8 gap-4`}>
        <LinearGradient
          colors={["#3D75ED", "#70AEFA"]}
          style={tw`absolute inset-0`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <Text style={tw`text-2xl font-segoe-bold text-white`}>
          #1 Platform for Saudi Jobs
        </Text>
        <Text style={tw`text-white text-center font-segoe`}>
          Apply for jobs in Saudi Arabia with verified employers. We connect
          Bangladeshi workforce with high-demand Saudi Jobs.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
