import tw from "@/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { FaEye, FaLock, FaPhone } from "react-icons/fa";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <View style={tw`flex flex-col items-center justify-center h-full`}>
      <LinearGradient
        colors={["#2563EB", "#DBEAFE", "#FFFFFF"]}
        style={tw`absolute inset-0`}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View
        style={tw`flex flex-col gap-6 items-center justify-center mx-6 p-6 rounded-2xl w-full max-w-96 bg-white border border-gray-300`}
      >
        <Text style={tw`font-segoe-bold text-2xl text-primary`}>
          Job Seeker Login
        </Text>
        <View style={tw`flex flex-col gap-3 w-full max-w-80`}>
          <Text style={tw`font-segoe-bold`}>Mobile Number</Text>
          <View
            style={tw`border border-primary-light rounded-lg px-3 py-2 flex flex-row items-center justify-start gap-2`}
          >
            <FaPhone style={tw`text-primary`} />
            <TextInput
              style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
              placeholder="Enter your mobile number"
            />
          </View>
        </View>
        <View style={tw`flex flex-col gap-3 w-full max-w-80`}>
          <Text style={tw`font-segoe-bold`}>Password</Text>
          <View
            style={tw`border border-primary-light rounded-lg px-3 py-2 flex flex-row items-center justify-between gap-2`}
          >
            <FaLock style={tw`text-primary`} />
            <TextInput
              style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FaEye style={tw`text-primary`} />
              ) : (
                <FaEye style={tw`text-primary`} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={tw`bg-primary py-3 px-6 rounded-lg w-full max-w-80 items-center justify-center`}
          onPress={() => router.push("/home")}
        >
          <Text style={tw`text-white font-segoe-bold`}>Login</Text>
        </TouchableOpacity>
        {/* <View style={tw`flex flex-row items-center gap-2 w-full max-w-80`}>
          <HorizontalDivider />
          <Text style={tw`text-gray-500 font-segoe`}>or</Text>
          <HorizontalDivider />
        </View> */}
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text>New to BhcJobs?</Text>
          <Link href="/registration" style={tw`text-primary font-segoe-bold`}>
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
}
