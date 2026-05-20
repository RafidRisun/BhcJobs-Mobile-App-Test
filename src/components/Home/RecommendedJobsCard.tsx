import tw from "@/lib/tailwind";
import { Ionicons as IoIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RecommendedJobsCard = ({ job }: { job: any }) => {
  return (
    <TouchableOpacity
      key={job.id}
      style={tw`flex flex-col w-full h-96 bg-white border border-primary-light rounded-xl items-start justify-start gap-3 p-4`}
    >
      <Text style={tw`text-xs text-gray-500 font-segoe mb-2`}>
        {job.company.industry.name}
      </Text>
      <View style={tw`flex flex-row items-center justify-start gap-2`}>
        <Image
          source={{
            uri: `https://dev.bhcjobs.com/storage/company-image/${job.company.image}`,
          }}
          style={tw`w-10 h-10 border border-gray-300 rounded-full`}
          contentFit="contain"
        />
        <Text style={tw`text-base text-black font-segoe-bold`}>
          {job.company.name}
        </Text>
      </View>
      <Text style={tw`text-center font-segoe-bold text-black`}>
        {job.job_title}
      </Text>
      <View
        style={tw`flex flex-row items-center w-full bg-primary-light p-4 rounded-xl`}
      >
        <Text style={tw`text-lg font-segoe text-primary mr-2`}>
          {job.currency}
        </Text>
        <Text style={tw`text-lg font-segoe-bold text-primary`}>
          {job.min_salary}
        </Text>
        <Text style={tw`text-lg font-segoe text-primary`}>-</Text>
        <Text style={tw`text-lg font-segoe-bold text-primary`}>
          {job.max_salary}
        </Text>
      </View>
      <View
        style={tw`flex flex-row items-center justify-start gap-4 px-3 py-2`}
      >
        <View style={tw`flex flex-row items-center justify-start gap-1`}>
          <IoIcons name="briefcase" size={16} color="#2563EB" />
          <Text style={tw`text-sm text-gray-500`}>
            {job.type.toUpperCase()}
          </Text>
        </View>
        <View style={tw`flex flex-row items-center justify-start gap-1`}>
          <IoIcons name="location" size={16} color="#2563EB" />
          <Text style={tw`text-sm text-gray-500`}>
            {job.company.country.name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={tw`bg-primary py-2 px-4 rounded-lg items-center justify-center w-full mt-auto`}
      >
        <Text style={tw`text-white font-segoe-bold`}>Apply Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RecommendedJobsCard;
