import tw from "@/lib/tailwind";
import React from "react";
import { Text, View } from "react-native";

const TextField = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <View style={tw`flex flex-col gap-3 w-full max-w-80 justify-center`}>
      <Text style={tw`font-segoe-bold`}>{title}</Text>
      <View
        style={tw`border border-primary-light rounded-lg px-3 py-2 flex flex-row items-center justify-start gap-2`}
      >
        {children}
      </View>
    </View>
  );
};

export default TextField;
