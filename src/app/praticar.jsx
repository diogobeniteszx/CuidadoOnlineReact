import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Screen } from "@/components/Screen";
import { useApp } from "@/context/AppContext";
import { quizQuestion } from "@/data/content";
import { colors } from "@/theme";

export default function PracticeScreen() {
  //const [answer, setAnswer] = useState(null);
  let answer = null
  const { quizScore, setQuizScore } = useApp();
  const correct = answer === quizQuestion.correctAnswer;
  function choose(value) {
    if (answer) return;
    setAnswer(value);
    if (value === quizQuestion.correctAnswer) setQuizScore(quizScore + 1);
  }
  function reset() {
    setAnswer(null);
  }
  return (
    <View style={styles.page}>
      <Screen>
        <AppHeader />
        <View style={styles.heading}>
          <Text style={styles.kicker}>APRENDA NA PRÁTICA</Text>
          <Text style={styles.count}>Situação 1 de 1</Text>
        </View>
        <Text style={styles.title}>É golpe ou não?</Text>
        <Text style={styles.description}>
          Imagine que você recebeu esta mensagem:
        </Text>
        <View style={styles.message}>
          <View style={styles.sender}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color={colors.primary} />
            </View>
            <View>
              <Text style={styles.senderName}>{quizQuestion.sender}</Text>
              <Text style={styles.fiction}>Situação fictícia</Text>
            </View>
          </View>
          <Text style={styles.messageText}>{quizQuestion.message}</Text>
          <Text style={styles.time}>10:42</Text>
        </View>
        {!answer ? (
          <View style={styles.answers}>
            <AppButton title="É golpe" onPress={() => choose("scam")} />
            <AppButton
              title="Parece seguro"
              variant="secondary"
              onPress={() => choose("safe")}
            />
            <AppButton
              title="Não tenho certeza"
              variant="ghost"
              onPress={() => choose("unsure")}
            />
          </View>
        ) : (
          <>
            <View
              style={[
                styles.feedback,
                correct ? styles.success : styles.warning,
              ]}
            >
              <Text style={styles.feedbackTitle}>
                {correct ? "Isso mesmo!" : "Vamos entender juntos."}
              </Text>
              <Text style={styles.feedbackText}>
                {quizQuestion.explanation}
              </Text>
            </View>
            <AppButton
              title="Praticar novamente"
              variant="secondary"
              onPress={reset}
              style={styles.again}
            />
          </>
        )}
      </Screen>
      <BottomNav />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kicker: {
    color: colors.primary,
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: "900",
  },
  count: { color: colors.muted, fontSize: 12 },
  title: { color: colors.ink, fontSize: 30, fontWeight: "900", marginTop: 10 },
  description: {
    color: colors.muted,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 18,
  },
  message: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    padding: 18,
  },
  sender: { flexDirection: "row", alignItems: "center", gap: 11 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.pale,
    alignItems: "center",
    justifyContent: "center",
  },
  senderName: { color: colors.ink, fontWeight: "800" },
  fiction: { color: colors.muted, fontSize: 12, marginTop: 2 },
  messageText: {
    color: colors.body,
    fontSize: 16,
    lineHeight: 25,
    backgroundColor: "#F3F6FA",
    borderRadius: 12,
    padding: 15,
    marginTop: 16,
  },
  time: { color: colors.muted, fontSize: 11, textAlign: "right", marginTop: 7 },
  answers: { gap: 11, marginTop: 20 },
  feedback: { borderRadius: 14, padding: 18, marginTop: 20 },
  success: { backgroundColor: colors.greenPale },
  warning: { backgroundColor: colors.warningPale },
  feedbackTitle: { color: colors.ink, fontSize: 17, fontWeight: "900" },
  feedbackText: { color: colors.body, lineHeight: 23, marginTop: 8 },
  again: { marginTop: 12 },
});
