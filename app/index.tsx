import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/login"} style={styles.navButton}>
        Login screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    textAlign: "center",
    lineHeight: 40,
    marginTop: 10,
  },
});
