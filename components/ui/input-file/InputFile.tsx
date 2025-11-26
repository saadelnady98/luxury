"use client"
import useCurrentLang from "@/components/hooks/useCurrentLang"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./InputFile.module.scss"
import { IMAGE_BLUR } from "@/components/constant/image-blure"

type InputFile_TP = {
    form: any
    name: string
    reset?: boolean
}

const InputFile = ({ form, name, reset }: InputFile_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [preview, setPreview] = useState<string | null>(null)
    const [uploadedFiles, setUploadedFiles] = useState<string>("")

    useEffect(() => {
        setPreview(null)
        setUploadedFiles("")
        form.setValue(name, null)
    }, [reset])

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0] // السماح فقط بملف واحد
            const fileURL = URL.createObjectURL(file)
            setPreview(fileURL)
            setUploadedFiles(file.name)
            form.setValue(name, file)
        }
    }

    const handleRemoveFile = () => {
        setPreview(null)
        setUploadedFiles("")
        form.setValue(name, null)
    }

    return (
        <>
            <div className="flex justify-between gap-x-2">
                <div className="flex mb-2 mt-2 border border-[#d9d9d933] hover:border-[#b3b3b3] w-full" dir="ltr">
                    <div className="flex flex-col w-full justify-center items-center h-[58px] overflow-hidden">
                        <div className={styles.inputfileBbox}>
                            <input
                                required
                                type="file"
                                id="file"
                                accept="image/*"
                                className={styles.inputfile}
                                onChange={({ target }) => handleFileChange(target.files)}
                            />
                            <label htmlFor="file">
                                <p className="relative top-4 left-2 text-sm text-subGray">{locale?.upload_media}</p>
                                <span id="file-name" className={styles.fileBox}></span>
                                <p className={styles.fileButton}>
                                    <Image
                                        src={images.upload}
                                        width={20}
                                        height={20}
                                        placeholder="blur"
                                       blurDataURL={IMAGE_BLUR}
                                        alt="upload"
                                        className="w-[40px]"
                                    />
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                {preview && (
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <img src={preview} alt="preview" className="w-[58px] h-[57px] object-cover" />
                            <button
                                type="button"
                                onClick={handleRemoveFile}
                                className="bg-red-500 text-white w-5 h-5 rounded-full text-sm absolute right-0 top-0 "
                            >
                                x
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* {uploadedFiles && <p className="text-sm text-mainGray mb-5">{uploadedFiles}</p>} */}
        </>
    )
}

export default InputFile

// "use client"
// import useCurrentLang from "@/components/hooks/useCurrentLang"
// import { dictionary } from "@/dictionaries/clientContent"
// import { images } from "@/utils/exportsImages"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import styles from "./InputFile.module.scss"
// import { IMAGE_BLUR } from "@/components/constant/image-blure"
// type InputFile_TP = {
//     form: any
//     name: string
//     reset?: boolean
// }
// const InputFile = ({ form, name, reset }: InputFile_TP) => {
//     const { lang } = useCurrentLang()
//     const locale = dictionary[lang!]
//     const [uploadedFiles, setUploadedFiles] = useState("")
//     useEffect(() => {
//         setUploadedFiles("")
//         form.setValue(name, null)
//     }, [reset])

//     return (
//         <>
//             <div className="flex mb-2 mt-2 border border-[#d9d9d933] hover:border-[#b3b3b3]" dir="ltr">
//                 <div className="flex flex-col w-full justify-center items-center h-[58px] overflow-hidden">
//                     <div className={styles.inputfileBbox}>
//                         <input
//                             required
//                             type="file"
//                             id="file"
//                             multiple
//                             accept="image/*"
//                             className={styles.inputfile}
//                             onChange={({ target }) => {
//                                 const arrayOfFiles = Array.from(target.files as any)
//                                 const filesNames = arrayOfFiles
//                                     ?.map((file: any) => file.name.replace(/^([^.]{3})[^.]*([.][^.]+)$/, "$1$2"))
//                                     .join(" , ")
//                                 setUploadedFiles(filesNames)
//                                 form.setValue(name, arrayOfFiles)
//                             }}
//                         />
//                         <p className="relative top-4 left-2 text-sm text-subGray">{locale?.upload_media}</p>
//                         <label htmlFor="file">
//                             <span id="file-name" className={styles.fileBox}></span>
//                             <p className={styles.fileButton}>
//                                 <Image
//                                     src={images.upload}
//                                     width={20}
//                                     height={20}
//                                     placeholder="blur"
//                                     blurDataURL={IMAGE_BLUR}
//                                     alt="upload"
//                                     className="w-[40px]"
//                                 />
//                             </p>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//             {uploadedFiles && <p className="text-sm text-mainGray mb-5">{uploadedFiles}</p>}
//         </>
//     )
// }

// export default InputFile
