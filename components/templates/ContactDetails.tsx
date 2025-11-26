import { getServerDictionary } from "@/lib/dictionary"
import { images } from "@/utils/exportsImages"
import { Contacts_TP } from "contacts"
import Image from "next/image"
import Link from "next/link"
import { IMAGE_BLUR } from "../constant/image-blure"

type ContactDetailsProps_TP = {
    lang: "ar" | "en" | "ru"
    contacts: Contacts_TP
}
type ContactDetail_TP = {
    image: any
    header: string
    details: string
}
const ContactDetails = async ({ lang, contacts }: ContactDetailsProps_TP) => {
    const locale: any = await getServerDictionary(lang)
    const ContactDetail = ({ details, header, image }: ContactDetail_TP) => (
        <div className="flex mb-16">
            <Image
                src={image}
                width={20}
                height={20}
                 placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                alt="location"
                className="relative mb-8 me-4 scale-150"
            />
            <div>
                <p className="text-xl font-[600] mb-2">{header}</p>
                <p className="text-subGray opacity-40 text-mg">{details}</p>
            </div>
        </div>
    )
    return (
        <div className="col-span-4  xl:px-8 px-4 pt-14 border border-mainColor border-opacity-20 w-full">
            <h3 className="font-[600] 2xl:text-4xl lg:text-3xl text-xl mb-8">{locale?.Contact_details}</h3>
            <p className="mb-10 2xl:w-[90%] lg:text-xl text-md text-subGray opacity-40">{locale?.get_touch}</p>
            <ContactDetail image={images.location} details={contacts?.data?.address} header={locale?.address} />
            <ContactDetail image={images.email} details={contacts?.data?.contacts?.email} header={locale?.email} />
            <ContactDetail image={images.phone} details={contacts?.data?.contacts?.phone} header={locale?.phone} />
            <ContactDetail
                image={images.whatsIcon}
                details={contacts?.data?.contacts?.whatsapp}
                header={locale?.whatsapp}
            />
            <div className="flex gap-x-2 relative bottom-10">
                <div className="bg-gray-700 bg-opacity-25 p-3 backdrop-blur">
                    <Link target="_blank" href={`${contacts?.data?.social?.facebook}`}>
                        <Image
                            src={images.facebook_contact}
                             placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            width={20}
                            height={20}
                            alt="social icon"
                            className="object-scale-down w-full scale-90"
                        />
                    </Link>
                </div>
                <div className="bg-gray-700 bg-opacity-25 p-3">
                    <Link target="_blank" href={`${contacts?.data?.social?.twitter}`}>
                        <Image
                            src={images.twitter_contact}
                            width={20}
                            height={20}
                             placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            alt="social icon"
                            className="object-scale-down w-full scale-90"
                        />
                    </Link>
                </div>
                <div className="bg-gray-700 bg-opacity-25 p-3">
                    <Link target="_blank" href={`${contacts?.data?.social?.instagram}`}>
                        <Image
                            src={images.insta_contact}
                            width={20}
                            height={20}
                            placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            alt="social icon"
                            className="object-scale-down w-full scale-90"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
