import tw from "@/lib/tailwind";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PopularCompaniesCard = ({ company }: { company: any }) => {
  return (
    <TouchableOpacity
      key={company.id}
      style={tw`flex flex-row w-full h-30 bg-white shadow-md rounded-lg items-center justify-start gap-4 p-4`}
    >
      <Image
        source={{
          uri: `https://dev.bhcjobs.com/storage/company-image/${company.image}`,
        }}
        style={tw`w-20 h-20`}
        contentFit="contain"
      />
      <View style={tw`flex flex-col items-start justify-center gap-1`}>
        <Text style={tw`text-center font-segoe-bold text-black`}>
          {company.name}
        </Text>
        <Text style={tw`text-sm text-gray-500`}>
          {company.jobs_count} Available Jobs
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCompaniesCard;
