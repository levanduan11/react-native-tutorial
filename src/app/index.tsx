import { Link, router, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { images } from "@/constants";
import { CustomButton } from "@/components";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="justify-center items-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
            </Text>
            <Text className="text-2xl text-orange-600 font-bold text-center">
              Aora
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-0 -right-1"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-center text-white mt-3">
            Where creativity meets innovation: embark on a journey to discover
          </Text>
          <CustomButton
            title="Continue with Email"
            onPress={() => router.push("sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
