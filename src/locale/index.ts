import { createI18n } from 'vue-i18n'


import uz from "./uz.json"

const i18n = createI18n({
    // something vue-i18n options here ...

    locale: "uz",
    fallbackLocale: "uz",
    messages: {
        uz: uz
    }
})

export default i18n