import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, TouchableOpacity } from "react-native";
import movie from "../../assets/data/movie";

import { Text, View } from "../../components/Themed";
import styles from "./style";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={{ padding: 15 }}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
        <View style={{ marginBottom: 5 }}>
          <Pressable
            onPress={() => {
              console.warn("Plage");
            }}
            style={styles.playButton}
          >
            <Text style={styles.playButtonText}>
              <Entypo name="controller-play" size={16} color="black" /> Play
            </Text>
          </Pressable>
          {/*Download Button */}
          <Pressable
            onPress={() => {
              console.log("Download");
            }}
            style={styles.downloadButton}
          >
            <Text style={styles.downloadButtonText}>
              <AntDesign name="download" size={16} color="white" /> Download
            </Text>
          </Pressable>
        </View>
        <Text style={{ marginBottom: 5 }}>{movie.plot}</Text>
        <Text style={styles.year}>Cast: {movie.cast}</Text>
        <Text style={styles.year}>Creator: {movie.creator}</Text>

        {/* Row with Icon Buttons */}
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <TouchableOpacity>
              <AntDesign name="plus" size={30} color="white" />
              <Text style={{ color: "darkgrey" }}>My List</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <TouchableOpacity>
              <Feather name="thumbs-up" size={30} color="white" />
              <Text style={{ color: "darkgrey" }}>Like</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <TouchableOpacity>
              <Ionicons name="share-social" size={30} color="white" />
              <Text style={{ color: "darkgrey" }}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
