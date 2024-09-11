import AnimatedIntro from "@/components/AnimatedIntro";
import Colors from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";
import ButtomLoginSheet from '@/components/ButtomLoginSheet'
export default function Page() {
  return (
    <View style={styles.container}>
      <AnimatedIntro />
      <ButtomLoginSheet/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});