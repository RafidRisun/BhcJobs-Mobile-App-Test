import TextField from "@/components/TextField";
import tw from "@/lib/tailwind";
// import { DropdownMenu, DropdownMenuItem } from "@expo/ui/jetpack-compose";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
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
            style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your full name"
          />
        </TextField>
        <TextField title="Mobile Number">
          <Ionicons name="call" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your mobile number"
          />
        </TextField>
        <TextField title="Date of Birth">
          <Ionicons name="calendar" size={20} color="#2563EB" />
          <TouchableOpacity onPress={() => setShowPicker(true)}>
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
            style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your passport number"
          />
        </TextField>
        {/* <View style={tw`flex flex-col gap-3 w-full max-w-80`}>
          <Text style={tw`font-segoe-bold`}>Gender</Text>
          <View
            style={tw`border border-primary-light rounded-lg px-3 py-2 flex flex-row items-center justify-start gap-2`}
          >
            <FaUser style={tw`text-primary`} />
            <DropdownMenu
              expanded={isExpanded}
              onDismissRequest={() => setIsExpanded(false)}
            >
              <DropdownMenu.Trigger>
                <TouchableOpacity onPress={() => setIsExpanded(true)}>
                  <Text
                    style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
                  >
                    {selectedGender}
                  </Text>
                </TouchableOpacity>
              </DropdownMenu.Trigger>
              <DropdownMenu.Items>
                <DropdownMenuItem
                  onClick={() => {
                    setIsExpanded(false);
                    setSelectedGender("Male");
                  }}
                >
                  <DropdownMenuItem.Text>
                    <Text>Male</Text>
                  </DropdownMenuItem.Text>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setIsExpanded(false);
                    setSelectedGender("Female");
                  }}
                >
                  <DropdownMenuItem.Text>
                    <Text>Female</Text>
                  </DropdownMenuItem.Text>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setIsExpanded(false);
                    setSelectedGender("Other");
                  }}
                >
                  <DropdownMenuItem.Text>
                    <Text>Other</Text>
                  </DropdownMenuItem.Text>
                </DropdownMenuItem>
              </DropdownMenu.Items>
            </DropdownMenu>
          </View>
        </View> */}
        <TextField title="Email Address">
          <Ionicons name="person" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe w-full focus:border-0 focus:ring-0`}
            placeholder="Enter your email address"
          />
        </TextField>
        <TextField title="Password">
          <Ionicons name="lock-closed" size={20} color="#2563EB" />
          <TextInput
            style={tw`font-segoe flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
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
            style={tw`font-segoe flex-1 min-w-0 focus:border-0 focus:ring-0`}
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
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
