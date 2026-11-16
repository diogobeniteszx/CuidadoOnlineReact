import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Brand } from "./Brand";
import { colors } from "@/theme";

export function AppHeader({ title, back = false }) {
  return (
    <View style={styles.header}>
      {back ? (
        <TouchableOpacity
          accessibilityLabel="Voltar"
          onPress={() => router.back()}
          style={styles.iconButton}
        >
          <Ionicons name="arrow-back" size={23} color={colors.ink} />
        </TouchableOpacity>
      ) : (
        <Brand />
      )}
      {title ? (
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      ) : null}
      <TouchableOpacity accessibilityLabel="Ajuda" style={styles.iconButton}>
        <Ionicons name="help-circle-outline" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 22,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.pale,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: colors.ink,
    fontSize: 17,
    fontWeight: "800",
  },
});
