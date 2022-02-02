import React from "react";
import useImageHook from "../../hooks/useImageHook";
import Image from "next/image";

const CustomImage = ({
	src,
	alt,
	styleName = "",
	fullWidth = false,
	lazyLoad = true,
}: {
	src: string;
	alt: string;
	styleName?: string;
	fullWidth?: boolean;
	lazyLoad?: boolean;
}) => {
	const { toBase64, shimmer } = useImageHook();
	return (
		<Image
            layout="fill"
			objectFit="cover"
			placeholder="blur"
			blurDataURL={`data:image/svg+xml;base64,${toBase64(
				shimmer("100%", "100%")
			)}`}
			className={styleName}
			sizes={fullWidth ? "100vw" : "50vw"}
			src={src}
			alt={alt}
			loading={lazyLoad ? "lazy" : "eager"}
		/>
	);
};

export default CustomImage;
