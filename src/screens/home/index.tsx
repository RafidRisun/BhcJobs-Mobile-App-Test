import NavBar from "@/components/NavBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import tw from "@/lib/tailwind";
import { Ionicons as IoIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const visibleIndustries = showAllIndustries
    ? industries
    : industries.slice(0, 4);

  return (
    <ScreenWrapper>
      <NavBar />
      {/* Hero Section */}
      <View style={tw`flex flex-col items-center justify-start p-8 gap-4`}>
        <LinearGradient
          colors={["#3D75ED", "#70AEFA"]}
          style={tw`absolute inset-0`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <Text style={tw`text-2xl font-segoe-bold text-white`}>
          #1 Platform for Saudi Jobs
        </Text>
        <Text style={tw`text-white text-center font-segoe`}>
          Apply for jobs in Saudi Arabia with verified employers. We connect
          Bangladeshi workforce with high-demand Saudi Jobs.
        </Text>
        <View
          style={tw`flex flex-row bg-white w-full my-6 rounded-full px-4 py-2 shadow-md max-w-96 items-center justify-start gap-2`}
        >
          <TextInput
            placeholder="Search for jobs..."
            style={tw`text-black flex-1`}
            placeholderTextColor="#9CA3AF"
          />
          <IoIcons name="search" size={20} color="#2563EB" />
        </View>
      </View>

      {/* Popular Industries */}
      <View style={tw`flex flex-col bg-white items-center p-8 gap-6`}>
        <View
          style={tw`bg-gray-100 px-6 py-3 rounded-full border border-gray-300`}
        >
          <Text style={tw`text-xl font-segoe-bold text-black`}>
            Popular Industries
          </Text>
        </View>
        <View
          style={tw`flex flex-row flex-wrap items-center justify-center gap-4`}
        >
          {visibleIndustries.map((industry) => (
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
              <Text style={tw`text-sm text-gray-500`}>
                {industry.jobs_count} Jobs
              </Text>
            </TouchableOpacity>
          ))}
          {!showAllIndustries && industries.length > 4 ? (
            <TouchableOpacity
              onPress={() => setShowAllIndustries(true)}
              style={tw`pt-4`}
            >
              <Text
                style={tw`text-center font-segoe-bold text-primary text-base`}
              >
                View all
              </Text>
              <Text style={tw`text-sm text-gray-500 text-center`}>
                {industries.length - 4} more industries
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const industries = [
  {
    id: 10,
    priority: 1,
    name: "Construction",
    is_active: 1,
    image: "2362_1754539698.webp",
    jobs_count: 6,
  },
  {
    id: 26,
    priority: 2,
    name: "Facilities Management",
    is_active: 1,
    image: "7857_1754539808.webp",
    jobs_count: 1,
  },
  {
    id: 11,
    priority: 3,
    name: "Fast Food Restaurant",
    is_active: 1,
    image: "3213_1754539712.webp",
    jobs_count: 0,
  },
  {
    id: 22,
    priority: 4,
    name: "Cafés & Coffee Shops",
    is_active: 1,
    image: "6369_1754539954.webp",
    jobs_count: 0,
  },
  {
    id: 16,
    priority: 5,
    name: "Agriculture",
    is_active: 1,
    image: "6102_1754539741.webp",
    jobs_count: 0,
  },
  {
    id: 29,
    priority: 5,
    name: "Contracting & Maintenance",
    is_active: 1,
    image: "3613_1761115042.webp",
    jobs_count: 2,
  },
  {
    id: 17,
    priority: 6,
    name: "Factory & Manufacturing",
    is_active: 1,
    image: "3275_1754539767.webp",
    jobs_count: 1,
  },
  {
    id: 28,
    priority: 7,
    name: "Hotel",
    is_active: 1,
    image: "9845_1754539825.webp",
    jobs_count: 0,
  },
  {
    id: 25,
    priority: 8,
    name: "Catering",
    is_active: 1,
    image: "6733_1754539843.webp",
    jobs_count: 4,
  },
  {
    id: 27,
    priority: 9,
    name: "Others",
    is_active: 1,
    image: "2281_1754539791.webp",
    jobs_count: 0,
  },
];
