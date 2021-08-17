<template>
<div style="text-align: center;">
    <img src="https://tenor.com/view/travolta-lost-travolta-lost-gif-13352731"/><br/><br/>
    <h1>Error!</h1>
    {{ error.message }} {{ error.statusCode }}
    </div>
</template>
<script>
export default {
    head(){
        return {
            title: 'BIG PROBLEMS',
        }
    },
    props: {
        error:{
            type: Object,
            required: true,
        }
    }
}
</script>