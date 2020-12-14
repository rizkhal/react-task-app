import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TextInput } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

// custom
import colors from "./utils/colors";
import lists from "./utils/dummy";
import TaskItems from "./components/TaskItems";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.root, marginTop: 20 }}>
      <StatusBar style="auto" backgroundColor={colors.root} />

      <View style={{ backgroundColor: colors.root }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign
              name="user"
              size={30}
              style={{ color: colors.white, marginLeft: 12 }}
            />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text
            style={{ fontWeight: "bold", color: colors.white, fontSize: 30 }}
          >
            {"Hello"},
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 30,
            }}
          >
            {"Rizkhal Lamaau"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{
                  color: colors.white,
                }}
              />
              <TextInput style={{ flex: 1 }}></TextInput>
              <MaterialCommunityIcons
                name="magnify"
                size={30}
                style={{
                  color: colors.white,
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.overlay,
          justifyContent: "space-between",
          borderTopRightRadius: 23,
          borderTopLeftRadius: 23,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 29, fontWeight: "bold" }}>Task Lists</Text>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          style={{
            color: colors.root,
            backgroundColor: colors.white,
            borderRadius: 8,
            marginHorizontal: 8,
            padding: 13,
          }}
        />
      </View>
      <ScrollView style={{ backgroundColor: colors.overlay }}>
        {lists.map((item) => (
          <TaskItems
            key={item.id}
            icon={item.icon}
            title={item.title}
            theme={item.theme}
            timestamp={item.timestamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}
