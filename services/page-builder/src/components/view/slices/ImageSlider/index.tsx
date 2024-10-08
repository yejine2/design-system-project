import { Box } from "@ooz/react-components-layout";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { vars } from "@ooz/themes";
import { convertSpacingRemToPx } from "@/src/utils/size";

export type Image = {
  imageUrl: string;
  alt: string;
};

type Props = {
  images: Image[];
  sliceStyle?: {
    backgroundColor?: string;
    imageItemWidth?: number;
    spaceBetween?: number;
    paddingX?: keyof typeof vars.box.spacing;
  };
};

export const ImageSliderSlice = ({ images, sliceStyle }: Props) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 280,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  return (
    <Box style={{ backgroundColor }}>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SwiperSlide
            key={`${imageUrl}-${index}`}
            style={{ width: imageItemWidth }}
          >
            <img src={imageUrl} alt={alt} style={{ width: imageItemWidth }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
