import { images } from "@/utils/exportsImages"
import Image from "next/image"
import { IMAGE_BLUR } from "../constant/image-blure"

const BrochureBackground = () => {
    return (
        <div className="flex overflow-hidden min-h-[200px] text-textColor">
            <Image
                className="w-1/4 object-center object-cover"
                src={images.bru0}
                alt={images.bru0}
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                width={600}
                height={500}
            />
            <Image
                className="w-1/4 object-center object-cover"
                src={images.bru3}
                alt={images.bru3}
                 placeholder="blur"
                 blurDataURL={IMAGE_BLUR}
                width={600}
                height={500}
            />
            <Image
                className="w-1/4 object-center object-cover"
                src={images.bru2}
                alt={images.bru2}
            placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                width={600}
                height={500}
            />
            <Image
                className="w-1/4 object-center object-cover"
                src={images.bru1}
                alt={images.bru1}
                 placeholder="blur"
                 blurDataURL={IMAGE_BLUR}
                width={600}
                height={500}
            />
        </div>
    )
}

export default BrochureBackground
