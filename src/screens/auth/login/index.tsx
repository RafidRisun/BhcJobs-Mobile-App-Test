import FullButton from "@/components/FullButton";
import TextField from "@/components/TextField";
import { useLoginJobSeeker } from "@/hooks/useLoginJobSeeker";
import tw from "@/lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login, isPending, isError } = useLoginJobSeeker();

  const handleLogin = () => {
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("password", password);
    login(formData);
  };

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
          Job Seeker Login
        </Text>
        <TextField title="Mobile Number">
          <Ionicons name="call" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Enter your mobile number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </TextField>
        <TextField title="Password">
          <Ionicons name="lock-closed" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Enter your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={tw`shrink-0`}
          >
            {showPassword ? (
              <Ionicons name="eye" size={20} color="#2563EB" />
            ) : (
              <Ionicons name="eye-off" size={20} color="#2563EB" />
            )}
          </TouchableOpacity>
        </TextField>
        <FullButton text="Log In" action={handleLogin} />
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
    </ScrollView>
  );
}
