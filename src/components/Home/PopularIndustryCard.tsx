import tw from "@/lib/tailwind";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const PopularIndustryCard = ({ industry }: { industry: any }) => {
  return (
    <TouchableOpacity
      key={industry.id}
      style={tw`w-40 h-40 bg-white shadow-md rounded-lg items-center justify-center gap-2 p-4`}
    >
      <Image
        source={{
          uri: `https://dev.bhcjobs.com/storage/industry-image/${industry.image}`,
        }}
        style={tw`w-10 h-10`}
        contentFit="contain"
      />
      <Text style={tw`text-center font-segoe-bold text-black`}>
        {industry.name}
      </Text>
      <Text style={tw`text-sm text-gray-500`}>{industry.jobs_count} Jobs</Text>
    </TouchableOpacity>
  );
};

export default PopularIndustryCard;
