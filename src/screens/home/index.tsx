import PopularCompaniesCard from "@/components/Home/PopularCompaniesCard";
import PopularIndustryCard from "@/components/Home/PopularIndustryCard";
import RecommendedJobsCard from "@/components/Home/RecommendedJobsCard";
import NavBar from "@/components/NavBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useCompany } from "@/hooks/useCompany";
import { useIndustry } from "@/hooks/useIndustry";
import { useJob } from "@/hooks/useJob";
import tw from "@/lib/tailwind";
import { Ionicons as IoIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  const {
    data: industries,
    isLoading: isIndustryLoading,
    isError: isIndustryError,
  } = useIndustry();
  const { data: jobs, isLoading: isJobLoading, isError: isJobError } = useJob();
  const {
    data: companies,
    isLoading: isCompanyLoading,
    isError: isCompanyError,
  } = useCompany();

  const [industrySlice, setIndustrySlice] = useState(4);
  const industryList = industries?.data ?? [];
  const visibleIndustries = industryList.slice(0, industrySlice);

  const [jobsSlice, setJobsSlice] = useState(4);
  const jobList = jobs?.data ?? [];
  const visibleJobs = jobList.slice(0, jobsSlice);

  const [companySlice, setCompanySlice] = useState(4);
  const companyList = companies?.data ?? [];
  const visibleCompanies = companyList.slice(0, companySlice);

  if (isIndustryLoading || isJobLoading || isCompanyLoading) {
    return (
      <ScreenWrapper>
        <ActivityIndicator size="large" color="#2563EB" style={tw`mt-20`} />
      </ScreenWrapper>
    );
  }

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
          {visibleIndustries.map((industry: any) => (
            <PopularIndustryCard key={industry.id} industry={industry} />
          ))}
          {industrySlice < industryList.length ? (
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
                {industryList.length - industrySlice} more industries
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
          {visibleJobs.map((job: any) => (
            <RecommendedJobsCard key={job.id} job={job} />
          ))}
          {jobsSlice < jobList.length ? (
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
                {jobList.length - jobsSlice} more jobs
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
          {visibleCompanies.map((company: any) => (
            <PopularCompaniesCard key={company.id} company={company} />
          ))}
          {companySlice < companyList.length ? (
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
                {companyList.length - companySlice} more companies
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
