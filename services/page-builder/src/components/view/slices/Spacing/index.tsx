import { vars } from "@ooz/themes";
import { Box } from "@ooz/react-components-layout";

type Props = {
  sliceStyle?: {
    height?: number;
    backgroundColor?: string;
  };
};

export const SpacingSlice = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height: height, backgroundColor }} />;
};
