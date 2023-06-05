import { View, StyleSheet, Image } from "react-native";
import { Repository } from "../../global";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <View key={repository.id} style={styles.container}>
      <RepositoryItemHeader {...repository} />
      <RepositoryStats {...repository} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    gap: 20,
  },
});

export default RepositoryItem;
