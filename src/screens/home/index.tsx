import NavBar from "@/components/NavBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import {
  industries,
  popularCompanies,
  recommendedJobs,
} from "@/constants/dummyData";
import tw from "@/lib/tailwind";
import { Ionicons as IoIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [industrySlice, setIndustrySlice] = useState(4);
  const visibleIndustries = industries.slice(0, industrySlice);

  const [jobsSlice, setJobsSlice] = useState(4);
  const visibleJobs = recommendedJobs.slice(0, jobsSlice);

  const [companySlice, setCompanySlice] = useState(4);
  const visibleCompanies = popularCompanies.slice(0, companySlice);

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
          {industrySlice < industries.length ? (
            <TouchableOpacity
              onPress={() => setIndustrySlice(industrySlice + 4)}
              style={tw`pt-4`}
            >
              <Text
                style={tw`text-center font-segoe-bold text-primary text-base`}
              >
                View More
              </Text>
              <Text style={tw`text-sm text-gray-500 text-center`}>
                {industries.length - industrySlice} more industries
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Recommended Jobs */}
      <View style={tw`flex flex-col items-center p-8 gap-6`}>
        <View
          style={tw`bg-white px-6 py-3 rounded-full border border-gray-300`}
        >
          <Text style={tw`text-xl font-segoe-bold text-black`}>
            Recommended Jobs
          </Text>
        </View>
        <View style={tw`flex w-full items-center justify-center gap-4`}>
          {visibleJobs.map((job) => (
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
                <View
                  style={tw`flex flex-row items-center justify-start gap-1`}
                >
                  <IoIcons name="briefcase" size={16} color="#2563EB" />
                  <Text style={tw`text-sm text-gray-500`}>
                    {job.type.toUpperCase()}
                  </Text>
                </View>
                <View
                  style={tw`flex flex-row items-center justify-start gap-1`}
                >
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
          ))}
          {jobsSlice < recommendedJobs.length ? (
            <TouchableOpacity
              onPress={() => setJobsSlice(jobsSlice + 4)}
              style={tw`pt-4`}
            >
              <Text
                style={tw`text-center font-segoe-bold text-primary text-base`}
              >
                View More
              </Text>
              <Text style={tw`text-sm text-gray-500 text-center`}>
                {recommendedJobs.length - jobsSlice} more jobs
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Popular Companies */}
      <View style={tw`flex flex-col bg-white items-center p-8 gap-6 pb-25`}>
        <View
          style={tw`bg-gray-100 px-6 py-3 rounded-full border border-gray-300`}
        >
          <Text style={tw`text-xl font-segoe-bold text-black`}>
            Popular Companies
          </Text>
        </View>
        <View
          style={tw`flex flex-row flex-wrap items-center justify-center gap-4`}
        >
          {visibleCompanies.map((company) => (
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
          ))}
          {companySlice < popularCompanies.length ? (
            <TouchableOpacity
              onPress={() => setCompanySlice(companySlice + 4)}
              style={tw`pt-4`}
            >
              <Text
                style={tw`text-center font-segoe-bold text-primary text-base`}
              >
                View More
              </Text>
              <Text style={tw`text-sm text-gray-500 text-center`}>
                {popularCompanies.length - companySlice} more companies
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={tw`flex flex-col items-center justify-start p-8 gap-4`}>
        <LinearGradient
          colors={["#3D75ED", "#70AEFA"]}
          style={tw`absolute inset-0`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <Text style={tw`text-2xl font-segoe-bold text-white`}>
          Thank you for your consideration!
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
