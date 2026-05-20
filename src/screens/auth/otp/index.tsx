import FullButton from "@/components/FullButton";
import TextField from "@/components/TextField";
import tw from "@/lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function OtpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <ScrollView
      style={tw`flex-1`}
      contentContainerStyle={tw`flex-grow items-center justify-center py-8`}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={["#2563EB", "#DBEAFE", "#FFFFFF"]}
        style={tw`absolute inset-0`}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View
        style={tw`flex flex-col gap-6 items-center justify-center p-6 rounded-2xl w-full max-w-96 bg-white border border-gray-300`}
      >
        <Text style={tw`font-segoe-bold text-2xl text-primary`}>
          OTP Verification
        </Text>
        <TextField title="Enter OTP">
          <Ionicons name="key" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Enter the 6-digit OTP"
            placeholderTextColor="#9CA3AF"
          />
        </TextField>
        <FullButton text="Verify OTP" action={() => router.push("/home")} />
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text>Already have an account?</Text>
          <Link href="/login" style={tw`text-primary font-segoe-bold`}>
            Login
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
