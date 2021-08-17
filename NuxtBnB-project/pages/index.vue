<template>
<div class="app">
    <div class="app-container">
      <div class="app-hero">
        <h2>
          - Explore the hidden gems of scandinavia with local tour-guides.
        </h2>
      </div>
    </div>
    <SectionPremiumListings />
    <SectionRecentlyAdded class="app-background-grey" :homes="homes" />
    <SectionMore />
  </div>

</template>
<script>
export default {
    head(){
        return {
            title: 'Forside',
            meta: [{
                name: 'description',
                content: 'This is a demo app which uses Nuxt, Cloudinary, Stripe, Google Maps and full text search. For further details visit lindamacdonald.me',
                hid: 'description'
            }]
        }
    },

    async asyncData({$dataApi}){
        return {
            homes:(await $dataApi.getHomes()).json.hits
        }
    }
}
</script>