import ContactDetails from "@/components/templates/ContactDetails";
import ContactUsForm from "@/components/templates/ContactUsForm";
import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Contacts_TP } from "contacts";
import { Metadata } from "next";
type ContactProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
export const metadata: Metadata = {
  title: `Contact us | Luxurylivinhomes`,
  description: 'Get in touch with us for any questions about our industries or projects',
}

const Contact = async ({ params: { lang } }: ContactProps_TP) => {
  const locale: any = await getServerDictionary(lang);
  const contacts: Contacts_TP = await getData({
    endpoint: "api/setting/social",
    lang,
  });
  return (
    <div>
      <Header
        image={images.header}
        subTitle="contact_us"
        title={locale?.home}
      />
      <div className="lg:grid lg:grid-cols-12 px-4 lg:px-10 gap-x-12  -translate-y-16">
        <ContactDetails contacts={contacts} lang={lang} />
        <ContactUsForm contacts={contacts} />
      </div>
    </div>
  );
};

export default Contact;
