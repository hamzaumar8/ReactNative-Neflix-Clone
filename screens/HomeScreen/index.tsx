import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";

const firstCategory = categories.items[0];

const HomeScreen = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
