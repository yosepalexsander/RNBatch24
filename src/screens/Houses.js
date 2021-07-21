import React from "react";
import { FlatList, View, Text } from "react-native";

const houses = [
  {
    id: "1",
    name: "rumah bagus",
    price: 1500000000,
  },
  {
    id: "2",
    name: "rumah bertingkat",
    price: 1600000000,
  },
  {
    id: "3",
    name: "rumah mewah pondok indah",
    price: 2750000000,
  },
  {
    id: "4",
    name: "rumah bagus daerah kemang",
    price: 1700000000,
  },
  {
    id: "5",
    name: "rumah elite di menteng",
    price: 2500000000,
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: "#fff" }}>{item.name}</Text>
      <Text style={{ color: "#fff" }}>{item.price}</Text>
    </View>
  );
};
export default function Houses() {
  return (
    <View style={{ margin: 60 }}>
      <FlatList
        data={houses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    // <View>
    //   {houses.map((house) => (
    //     <View style={{ marginBottom: 20 }} key={house.id}>
    //       <Text style={{ color: "#fff" }}>{house.name}</Text>
    //       <Text style={{ color: "#fff" }}>{house.price}</Text>
    //     </View>
    //   ))}
    // </View>
  );
}
