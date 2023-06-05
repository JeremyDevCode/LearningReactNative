import { Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      style={{ marginVertical: 28 }}
      data={repositories}
      ItemSeparatorComponent={() => <Text style={{ padding: 20 }}></Text>}
      renderItem={({ item: repository }) => (
        <RepositoryItem repository={repository} />
      )}
    ></FlatList>
  );
};

export default RepositoryList;
