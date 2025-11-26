declare module "options" {
  interface Options_TP {
    id: string | number
    value: string
    label: string
  }
}
interface Image_TP {
  id: number
  file_name: string
  original_url: string
  extension: string
  size: number
}
declare module "image" {
  interface Image_TP {
    id: number
    file_name: string
    original_url: string
    extension: string
    size: number
  }
}
declare module "contacts" {
  interface Contacts_TP {
    data: {
      social: {
        twitter: string
        facebook: string
        instagram: string
        linkedin: string
      }
      contacts: {
        email: string
        phone: string
        whatsapp: string
      }
      location: {
        lat: number | string
        long: number | string
      }
      address: string
    }
  }
}
declare module "blog" {
  interface Blog_TP {
    name: string
    title?: string
    date: string
    description: string
    slug: string
    image: any
  }
}

declare module "aboutUs" {
  interface AboutUs_TP {
    id: number
    title: string
    description: string
    image: Image_TP
  }
}
declare module "service" {
  interface Service_TP {
    slug: string
    name: string
    image: Image_TP
    agent: Agent_TP
  }
}
declare module "propertyData" {
  interface PropertyData_TP {
    slug: string
    title: string
    description: string
    price: number
    type: {id:string,name:string}[]
    category: string
    community: string
    address: string
    location: {
      lat: number
      long: number
    }
    agent: Agent_TP
    developer: {
      slug: string
      name: string
      image: Image_TP
    }
    amenities: Amenity_TP[]
    status: number
    details: {
      max_bathroom: string
      min_bathroom: string
      min_bedroom: string
      max_bedroom: string
      min_size: string
      max_size: string
    }
    badge: string
    handover_date: string | Date
    rental_period: {
      slug: string
      period: string
    }
    brochure:Image_TP
  }
}

declare module "community" {
  type Community_TP = {
    image: Image_TP
    name: string
    slug: string
    index: number
    product_count: number
  }
}
declare module "product" {
  type Product_TP = {
    slug: string
    title: string
    handover_date: string
    rental_period: {
      slug: string
      period: string
    }
    image: Image_TP
    address: string
    price: number
    size: {min:string,max:string}
    developer: {
      slug: string
      name: string
      image: Image_TP
    }
    badge: string
    location: {
      lat: string
      long: string
    }
  }
}
declare module "amenity" {
  type Amenity_TP = {
    slug: string
    name: string
    icon: Image_TP
    id: string
  }
}
declare module "agent" {
  type Agent_TP = {
    slug: string
    first_name: string
    last_name: string
    position: string
    language: string
    service: {
      id: number
      name: string
    }[]
    email: string
    phone: string
    whatsapp: string
    image: Image_TP
  }
}
declare module "lang" {
  type Lang = "ar" | "en" | "ru"
}
