<template>
    <div class="row">
        <ul class="list-group">
            <li 
                class="list-group-item list-group-item-action" 
                style="cursor: pointer;"
                v-for="save in $store.getters.getSaves" 
                :key="save.date"
                @click="newState(save)">{{ save.date }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'newState'
            ])
        }
    }
</script>
