<template>
    <div>
        <repair-header></repair-header>
        <record></record>
    </div>
</template>

<script>
    import RepairHeader from '../repair/components/Header.vue'
    import Record from './components/Record.vue'
    export default {
        components: {
            RepairHeader,
            Record
        }
    }
</script>

<style scoped>

</style>