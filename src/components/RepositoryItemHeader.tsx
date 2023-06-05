import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import { Repository } from "../../global";

const RepositoryItemHeader = (props: Repository) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 2,
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: props.imageURI,
        }}
      />
      <View style={{ flex: 1, paddingLeft: 10, gap: 4 }}>
        <StyledText color="primary" fontSize="subheading" fontWeight="bold">
          {props.fullName}
        </StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: "#fff",
    backgroundColor: "#09F",
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 3 / 4,
    height: 80,
    padding: 40,
  },
});

export default RepositoryItemHeader;
