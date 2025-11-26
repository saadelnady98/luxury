"use client"
import { postData } from "@/utils/fetchData"
import { formatDate } from "@/utils/functions"
import { PropertyData_TP } from "propertyData"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Modal } from "../ui/Modal"
import SelectComp from "../ui/Select"
import SubButton from "../ui/button/SubButton"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
const iAmOptions = [
    {
        id: "1",
        value: "Agent",
        label: "Agent",
    },
    {
        id: "2",
        value: "Investor",
        label: "Investor",
    },
    {
        id: "3",
        value: "Other",
        label: "Other",
    },
]

const DownloadBrochure = ({ locale, propertyData }: { locale: any; propertyData: PropertyData_TP }) => {
    const inputStyle = "!max-h-[73px] !mb-4 border-0"
    const [open, setOpen] = useState(false)
    const [reset, setReset] = useState(false)
    const form = useForm()
    const submitHandler = async (values: any) => {
        await postData({
            endpoint: "api/product/form",
            values: {
                ...values,
                message: values.message.value,
                product_slug: propertyData.slug,
            },
        })
            .then((data) => {
                data?.message === "Success!" && setReset((prev) => !prev)
                window.open(propertyData.brochure.original_url, "_blank")
                setTimeout(() => {
                    setOpen(false)
                }, 3000)
            })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        setReset(false)
    }, [open])

    return (
        <div className="w-full" hidden={!propertyData?.brochure}>
            <SubButton
                className="w-full !text-mainColor !bg-darkMode border border-mainColor hover:!bg-mainColor hover:!text-textColor"
                onClick={() => setOpen(true)}
            >
                {locale?.down_brochure}
            </SubButton>
            <Modal open={open} setOpen={setOpen} className="!min-w-[95%] !max-h-[90%] scale-90 xl:scale-100">
                <div className="py-8 lg:px-24 px-4">
                    <div className="flex items-center justify-between max-h-[50px]">
                        <h2 className="lg:text-xl">{propertyData?.title}</h2>
                        <span className="text-mainColor lg:text-2xl">{propertyData?.price?.toLocaleString()} AED</span>
                    </div>
                    <div className="w-dull h-[1px] bg-mainGray my-16 opacity-80"></div>
                    <div className="grid lg:grid-cols-8 gap-x-20 w-full h-full">
                        <div className="col-span-4 flex flex-col gap-y-10 capitalize">
                            <div className="flex justify-between lg:text-xl">
                                <span className="text-mainGray">{locale?.developer} :</span>{" "}
                                <span>{propertyData?.developer?.name}</span>
                            </div>
                            <div className="flex justify-between lg:text-xl">
                                <span className="text-mainGray">{locale?.propertyType} :</span>{" "}
                                <span className="text-end">
                                    {propertyData?.type?.map((type) => type?.name).join("-")}
                                </span>
                            </div>
                            {!!propertyData?.details?.bedroom ? (
                                <div className="flex justify-between lg:text-xl">
                                    <span className="text-mainGray">{locale?.bed_cont} :</span>{" "}
                                    <span>{propertyData?.details?.bedroom}</span>
                                </div>
                            ) : null}
                            {!!propertyData?.details?.bathroom ? (
                                <div className="flex justify-between lg:text-xl">
                                    <span className="text-mainGray">{locale?.bath_count} :</span>{" "}
                                    <span>{propertyData?.details?.bathroom}</span>
                                </div>
                            ) : null}
                            {!!propertyData?.size ? (
                                <div className="flex justify-between lg:text-xl">
                                    <span className="text-mainGray">{locale?.size} :</span>{" "}
                                    <span>{propertyData?.size}</span>
                                </div>
                            ) : null}
                            <div className="flex justify-between lg:text-xl">
                                <span className="text-mainGray">{locale?.handover} :</span>{" "}
                                <span>{formatDate(propertyData?.handover_date as Date)}</span>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(submitHandler)}>
                                    <p className="text-mainGray lg:text-2xl">{locale?.fillData}</p>
                                    <Input
                                        form={form}
                                        required
                                        name="name"
                                        placeholder={locale?.full_name}
                                        reset={reset}
                                        className={inputStyle}
                                    />
                                    <Input
                                        form={form}
                                        required
                                        name="email"
                                        placeholder={locale?.email}
                                        reset={reset}
                                        className={inputStyle}
                                    />
                                    <Input
                                        form={form}
                                        required
                                        name="phone"
                                        placeholder={locale?.phone}
                                        reset={reset}
                                        className={inputStyle}
                                    />
                                    <div className="h-[58px]">
                                        <SelectComp
                                            form={form}
                                            options={iAmOptions}
                                            name="message"
                                            styles={{
                                                minHeight: 76,
                                                border: 0,
                                            }}
                                            placeholder={locale?.iAm}
                                            required
                                        />
                                    </div>
                                    <SubButton type="submit" className="w-full lg:w-auto mb-4 mt-8">
                                        {locale?.download}
                                    </SubButton>
                                    {reset ? (
                                        <p className="text-mainColor my-4 py-2 px-8 bg-white max-h-12 text-center leading-7">
                                            {locale?.sent_success}
                                        </p>
                                    ) : null}
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DownloadBrochure
