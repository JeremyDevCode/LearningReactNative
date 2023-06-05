import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

interface StyledTextProps {
  children?: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  align?: string;
  style?: object;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as "400",
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as "700",
  },
  subheding: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restOfProps
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheding,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textAlignCenter,
    style,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
