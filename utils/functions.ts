export function formatDate(inputDate: Date) {
    const date = new Date(inputDate)

    if (isNaN(date.getTime())) {
        // Invalid date
        return "Invalid Date"
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}
export function calculateAge(birthDate: string): number {
    const today = new Date()
    const birthDateObj = new Date(birthDate)

    let age = today.getFullYear() - birthDateObj.getFullYear()
    const monthDiff = today.getMonth() - birthDateObj.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--
    }
    return age
}
// Debounce function
export const debounce = <F extends (...args: any[]) => void>(func: F, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<F>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}
export function formatMonthYear(dateString: string, lang: string) {
    if (!dateString) return null
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    if (lang === "ar") {
        months = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "اغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
        ]
    }

    if (lang === "ru") {
        months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
    }

    const [year, month, day] = dateString?.split("-")
    const formattedDate = `${months[parseInt(month, 10) - 1]} ${year}`

    return formattedDate
}
