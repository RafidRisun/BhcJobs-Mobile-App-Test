import { SafeAreaView } from "react-native-safe-area-context";


const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
