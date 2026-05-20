import tw from "@/lib/tailwind";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Text, TouchableOpacity, View } from "react-native";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <View
        style={tw`flex flex-row items-center justify-between p-5 sticky top-0 bg-white z-10 border-b border-gray-300`}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={tw`w-32 h-12`}
          contentFit="contain"
        />
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <RxHamburgerMenu />
        </TouchableOpacity>
      </View>
      {showMenu && (
        <View
          style={tw`absolute top-16 right-5 bg-white border border-gray-300 rounded-lg p-3`}
        >
          <TouchableOpacity
            style={tw`py-2`}
            onPress={() => router.push("/login")}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default NavBar;
