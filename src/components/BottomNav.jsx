import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/theme";

const items = [
  { label: "Início", icon: "home", route: "/inicio" },
  { label: "Aprender", icon: "book", route: "/aprender" },
  { label: "Praticar", icon: "game-controller", route: "/praticar" },
];
export function BottomNav() {
  const path = usePathname();
  return (
    <View style={styles.nav}>
      {items.map((item) => {
        const active = path.startsWith(item.route);
        return (
          <TouchableOpacity
            key={item.label}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => router.replace(item.route)}
            style={styles.item}
          >
            <Ionicons
              name={active ? item.icon : `${item.icon}-outline`}
              size={22}
              color={active ? colors.primary : colors.muted}
            />
            <Text style={[styles.label, active && styles.active]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    paddingTop: 10,
    paddingBottom: 8,
  },
  item: { flex: 1, alignItems: "center", gap: 4, minHeight: 48 },
  label: { color: colors.muted, fontSize: 12, fontWeight: "600" },
  active: { color: colors.primary, fontWeight: "800" },
});
