// Component
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Loading({ variant, text }) {
  return (
    <View style={styles.container}>
      {variant === "with-text" ? (
        <View>
          <ActivityIndicator size="large" />
          <Text style={{ marginTop: 10 }}>{text}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 750,
  },
});
