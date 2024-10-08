import { Text } from "@ooz/react-components-layout";
import { vars } from "@ooz/themes";
import { useMemo } from "react";

type Props = {
  text: string;
  highlightTexts?: string[];
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    textColor?: string;
    textSize?: keyof typeof vars.typography.fontSize;
    textWeight?: keyof typeof vars.typography.fontWeight;
    textAlign?: "left" | "center" | "right";
    highlightTextColor?: string;
    highlightTextWeight?: keyof typeof vars.typography.fontWeight;
  };
};

export const TextSlice = ({ text, sliceStyle, highlightTexts = [] }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = "center",
    highlightTextColor = vars.colors.$static.light.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  const hasHighlightText = highlightTexts.length > 0;
  const highlightedText = useMemo(() => {
    if (hasHighlightText) {
      // g (global): 모든 일치 플래그, i (ignoreCase): 대소문자를 구분하지 않고 일치하는지 검사
      const regex = new RegExp(`(${highlightTexts.join("|")})`, "gi");

      return text.split(regex).map((word, index) => {
        if (highlightTexts.some((query) => new RegExp(query, "i").test(word))) {
          return (
            <span
              key={`${word}-${index}`}
              style={{
                color: highlightTextColor,
                fontWeight: highlightTextWeight ?? textWeight,
              }}
            >
              {word}
            </span>
          );
        }

        return word;
      });
    }

    return text;
  }, [text, highlightTexts]);

  return (
    <Text
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize="2xl"
      style={{
        backgroundColor,
        color: textColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign,
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all",
      }}
    >
      {highlightedText}
    </Text>
  );
};
