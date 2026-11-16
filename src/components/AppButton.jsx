import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/theme";

export function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled,
  loading,
  style,
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        pressed && styles.pressed,
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "#FFFFFF" : colors.primary}
        />
      ) : (
        <Text
          style={[styles.text, variant !== "primary" && styles.textSecondary]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: colors.primary },
  secondary: {
    backgroundColor: colors.pale,
    borderWidth: 1,
    borderColor: "#DFE9FF",
  },
  ghost: { backgroundColor: "transparent" },
  text: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
  textSecondary: { color: colors.primary },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
  disabled: { opacity: 0.5 },
});
