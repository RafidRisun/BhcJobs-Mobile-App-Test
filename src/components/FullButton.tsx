import tw from "@/lib/tailwind";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const FullButton = ({
  text,
  action,
  isPending,
}: {
  text: string;
  action: () => void;
  isPending?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={tw`bg-primary py-3 px-6 rounded-lg w-full max-w-80 items-center justify-center`}
      onPress={action}
      disabled={isPending}
    >
      {isPending ? (
        <Text style={tw`text-white font-segoe-bold`}>Processing...</Text>
      ) : (
        <Text style={tw`text-white font-segoe-bold`}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FullButton;
