import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme";

export function LessonCard({ lesson, completed }) {
  return (
    <Pressable
      onPress={() => router.push(`/leitura/${lesson.id}`)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.icon, { backgroundColor: lesson.background }]}>
        <Ionicons name={lesson.icon} size={24} color={lesson.color} />
      </View>
      <View style={styles.copy}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{lesson.title}</Text>
          {completed && (
            <Ionicons name="checkmark-circle" size={19} color={colors.green} />
          )}
        </View>
        <Text style={styles.summary}>{lesson.summary}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.muted} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface,
    marginBottom: 12,
  },
  pressed: { opacity: 0.8 },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  copy: { flex: 1, gap: 4 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  title: { color: colors.ink, fontSize: 16, fontWeight: "800" },
  summary: { color: colors.muted, fontSize: 13, lineHeight: 19 },
});
