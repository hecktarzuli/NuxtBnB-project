export default {
    components: true,
    head: {
        titleTemplate: "Nuxt.js Rocks!: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["my-style"]
        },

        meta: [{
            charset: "utf-8",
            name: 'viewport', content: 'width=device-width, initial-scale=1',
        }]
    },
    router: {
        prefetchLinks: false,
    },
    plugins:[ 
        '~/plugins/maps.client', 
        '~/plugins/dataApi', 
        '~/plugins/auth.client', 
        '~/plugins/vCalendar.client',
        '~/plugins/stripe.client',
    ],
    modules:[
        '~/modules/auth', 
        '~/modules/algolia', 
        '~/modules/cloudinary', 
        '@nuxtjs/cloudinary',
        '~/modules/stripe',
    ],
    buildModules:['@nuxtjs/tailwindcss', '@nuxt/image'],
    cloudinary:{
        cloudName: 'djh98dvm3',
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/djh98dvm3/image/upload/'
        }
    },
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    publicRuntimeConfig:{
        rootUrl: process.env.NODE_ENV === 'production' ? 'https://nuxtbnb.com' : 'http://localhost:3000',
        auth:{
            cookieName: 'idToken',
            clientId: '772040265019-oq7hvl7ioiboim281hdg62jshmqpn533.apps.googleusercontent.com',
        },
        algolia:{
            appId: 'EDO0YC1TIY',
            key:'015364f67288d63f6e1f3785ee3072b0',
        },
        cloudinary:{
            apiKey: '369284588955173',
        },
        stripe:{
            key: "pk_test_4dPkVwlbrK6zZlssatJrr26K",
        },
    },
    privateRuntimeConfig:{
        algolia:{
            appId: 'EDO0YC1TIY',
            key: process.env.ALGOLIA_SECRET_KEY,
        },
        cloudinary:{
            apiSecret: process.env.CLOUDINARY_SECRET_KEY,
        },
        stripe:{
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
    },

}