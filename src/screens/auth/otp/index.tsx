import FullButton from "@/components/FullButton";
import { useVerifyOTP } from "@/hooks/usePhoneVerify";
import tw from "@/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function OtpScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState("");

  const {
    mutate: verifyOtpMutation,
    isPending,
    isError,
    error,
  } = useVerifyOTP();

  const verifyOTP = () => {
    if (otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }
    const formData = new FormData();
    formData.append("phone", phone as string);
    formData.append("otp", otp);
    verifyOtpMutation(formData);
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
          OTP Verification
        </Text>
        <OtpInput numberOfDigits={4} onTextChange={(text) => setOtp(text)} />
        {isError && (
          <Text style={tw`text-red-500 text-sm mt-2`}>
            {error.response?.data?.message || "OTP verification failed"}
          </Text>
        )}
        <FullButton
          text="Verify OTP"
          action={verifyOTP}
          isPending={isPending}
        />
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
