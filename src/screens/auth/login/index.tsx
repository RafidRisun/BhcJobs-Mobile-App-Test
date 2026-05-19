import tw from "@/lib/tailwind";
import { Text, View } from "react-native";


export default function LoginScreen() {
  return (
    <View style={tw`flex flex-col items-center justify-center h-full`}>
      <Text style={tw`font-segoe-bold text-2xl text-primary`}>Login Screen</Text>
    </View>
  );
}
