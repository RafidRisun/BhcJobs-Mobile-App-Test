import tw from "@/lib/tailwind";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView
      style={tw`flex-1`}
      contentContainerStyle={tw`flex-grow items-center justify-start`}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ScrollView>
  );
};

export default ScreenWrapper;
