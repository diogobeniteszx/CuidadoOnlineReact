import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme";

export function Brand({ light = false }) {
  return (
    <View style={styles.row}>
      <View style={[styles.logo, light && styles.logoLight]}>
        <Ionicons name="shield-checkmark" size={22} color="#FFFFFF" />
      </View>
      <Text style={[styles.name, light && styles.light]}>
        Cuidad<Text style={styles.online}>Online</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoLight: { backgroundColor: "rgba(255,255,255,0.2)" },
  name: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: -0.8,
  },
  online: { color: "#75A5FF", fontWeight: "500" },
  light: { color: "#FFFFFF" },
});
