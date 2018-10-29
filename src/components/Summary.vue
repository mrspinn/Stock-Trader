<template>
    <div class="card">
        <div class="card-body">
            <h1>Trade of View your Portfolio</h1>
            <p>You may Save &amp; Load your Data</p>
            <p>Click on 'End Day' to begin a new day!</p>
            <hr>
            <h3>Your Funds: ${{ funds | addCommas }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.getters.getFunds;
            }
        } 
    }
</script>

