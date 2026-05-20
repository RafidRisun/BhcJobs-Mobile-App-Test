import TextField from "@/components/TextField";
import tw from "@/lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
// Using a simple touch-to-open dropdown instead of native Picker
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

export default function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const genderOptions = ["Male", "Female", "Other"];
  const [agreeTerms, setAgreeTerms] = useState(false);

  const router = useRouter();

  return (
    <ScrollView
      style={tw`flex-1`}
      contentContainerStyle={tw`flex-grow items-center justify-center py-26`}
      keyboardShouldPersistTaps="handled"
    >
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
          Create an Account
        </Text>
        <TextField title="Full Name">
          <Ionicons name="person" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
          />
        </TextField>
        <TextField title="Mobile Number">
          <Ionicons name="call" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your mobile number"
            placeholderTextColor="#9CA3AF"
          />
        </TextField>
        <TextField title="Date of Birth">
          <Ionicons name="calendar" size={20} color="#2563EB" />
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={tw`h-10`}
          >
            <Text style={tw`font-segoe w-full focus:border-0 focus:ring-0`}>
              {date.toDateString()}
            </Text>
          </TouchableOpacity>
        </TextField>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowPicker(false);
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}
        <TextField title="Passport">
          <Ionicons name="document-text" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your passport number"
            placeholderTextColor="#9CA3AF"
          />
        </TextField>
        <View style={tw`flex flex-col gap-3 w-full max-w-80`}>
          <Text style={tw`font-segoe-bold`}>Gender</Text>
          <View style={tw`relative w-full`}>
            <TouchableOpacity
              onPress={() => setIsExpanded((s) => !s)}
              style={tw`border border-primary-light rounded-lg px-3 py-2 flex flex-row items-center justify-start gap-2 bg-white`}
            >
              <Ionicons name="person" size={20} color="#2563EB" />
              <Text style={tw`font-segoe flex-1 h-10`}>{selectedGender}</Text>
              <Ionicons
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={18}
                color="#2563EB"
              />
            </TouchableOpacity>
            {isExpanded ? (
              <View
                style={tw`absolute left-0 right-0 top-14 z-10 overflow-hidden rounded-lg border border-primary-light bg-white shadow-lg`}
              >
                {genderOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => {
                      setIsExpanded(false);
                      setSelectedGender(option);
                    }}
                    style={tw`px-4 py-3 border-b border-gray-100 last:border-b-0`}
                  >
                    <Text style={tw`font-segoe`}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>
        </View>
        <TextField title="Email Address">
          <Ionicons name="person" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your email address"
            placeholderTextColor="#9CA3AF"
          />
        </TextField>
        <TextField title="Password">
          <Ionicons name="lock-closed" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            placeholderTextColor="#9CA3AF"
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
        <TextField title="Confirm Password">
          <Ionicons name="lock-closed" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe text-black flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={tw`shrink-0`}
          >
            {showConfirmPassword ? (
              <Ionicons name="eye" size={20} color="#2563EB" />
            ) : (
              <Ionicons name="eye-off" size={20} color="#2563EB" />
            )}
          </TouchableOpacity>
        </TextField>
        <View style={tw`flex flex-row w-full items-center justify-start gap-2`}>
          <TouchableOpacity
            onPress={() => setAgreeTerms(!agreeTerms)}
            style={tw`w-5 h-5 border border-gray-300 rounded-sm items-center justify-center`}
          >
            {agreeTerms && <View style={tw`w-3 h-3 bg-primary rounded-sm`} />}
          </TouchableOpacity>
          <Text>Agree to the terms and conditions</Text>
        </View>
        <TouchableOpacity
          style={tw`bg-primary py-3 px-6 rounded-lg w-full max-w-80 items-center justify-center`}
          onPress={() => router.push("/login")}
        >
          <Text style={tw`text-white font-segoe-bold`}>Create Account</Text>
        </TouchableOpacity>
        {/* <View style={tw`flex flex-row items-center gap-2 w-full max-w-80`}>
          <HorizontalDivider />
          <Text style={tw`text-gray-500 font-segoe`}>or</Text>
          <HorizontalDivider />
        </View> */}
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
