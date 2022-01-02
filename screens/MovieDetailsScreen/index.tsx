import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";

import { Text, View } from "../../components/Themed";
import styles from "./style";

const firstSeason = movie.seasons.items[0];
const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);

  const seasonNames = movie.seasons.items.map((season) => season.name);

  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        style={{ marginBottom: 200 }}
        ListHeaderComponent={
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
                  console.log("Plage");
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
                  <AntDesign name="plus" size={24} color="white" />
                  <Text style={{ color: "darkgrey", marginTop: 3 }}>
                    My List
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <TouchableOpacity>
                  <Feather name="thumbs-up" size={24} color="white" />
                  <Text style={{ color: "darkgrey", marginTop: 3 }}>Like</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <TouchableOpacity>
                  <FontAwesome name="send-o" size={24} color="white" />
                  <Text style={{ color: "darkgrey", marginTop: 3 }}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Picker
              style={{ color: "#fff", width: 140 }}
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              dropdownIconColor={"white"}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
