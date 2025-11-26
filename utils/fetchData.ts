import axios from "axios"
// Define a generic type for the response data
interface ApiResponse<T> {
    data: T
}

const MAIN_URL = process.env.NEXT_PUBLIC_BASE_URL

///////////////////////// get data ///////////////////////
type GetDataParams = {
    endpoint: string
    revalidateTime?: number
    lang?: "ar" | "en" | "ru"
}
export const getData = async <T>(data: GetDataParams) => {
    const url = `${MAIN_URL}/${data.endpoint}`
    const headers = {
        Accept: "application/json",
        lang: data.lang!,
    }

    const getConfig: RequestInit = {
        headers,
        cache: "no-cache",
    }

    try {
        const response = await fetch(url, getConfig)

        if (!response.ok) {
            const errorData = await response.json()
            return errorData
        }
        const responseData: ApiResponse<T> = await response.json()
        return responseData
    } catch (error: any) {
        return error
    }
}

///////////////////////// post data ///////////////////////
type PostDataParams = {
    endpoint: string
    values: any
    formData?: boolean
}
export const postData = async (data: PostDataParams) => {
    const postConfig = {
        headers: {
            Accept: "application/json",
            "Content-Type": data.formData ? "multipart/form-data" : "application/json",
        },
    }
    try {
        const res = await axios.post(`${MAIN_URL}/${data.endpoint}`, data.values, postConfig)
        return res.data
    } catch (error: any) {
        return error?.response?.data
    }
}

///////////////////////// delete data ///////////////////////
type DeleteDataParams = {
    endpoint: string
}

export const deleteData = async (data: DeleteDataParams) => {
    const url = `${MAIN_URL}/${data.endpoint}`
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }

    const deleteConfig: RequestInit = {
        method: "DELETE",
        headers,
    }

    try {
        const response = await fetch(url, deleteConfig)

        if (!response.ok) {
            const errorData = await response.json()
            return errorData
        }

        return response
    } catch (error: any) {
        console.log("🚀 ~ file: fetchData.ts:111 ~ deleteData ~ error:", error)
        return error?.message
    }
}
