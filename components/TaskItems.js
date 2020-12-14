import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/colors";

const TaskItems = (props) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 20,
        paddingHorizontal: 24,
        borderRadius: 7,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={props.icon}
          size={30}
          style={{
            color: props.theme,
            marginRight: 8,
          }}
        />
        <View style={{ textAlign: "left" }}>
          <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
          <Text style={{ fontSize: 12, marginTop: 4 }}>{props.timestamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{
            color: props.theme,
            marginRight: 8,
            fontSize: 18,
          }}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{
            color: props.theme,
            marginRight: 8,
            fontSize: 18,
          }}
        />
      </View>
    </View>
  );
};

export default TaskItems;
