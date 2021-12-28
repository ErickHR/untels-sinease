<template>
    <div class="row mx-0">
        
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <dashboard-form ref="dashboardForm"></dashboard-form>

    </div>
</template>

<script>

    import NavBarComponent from './../components/NavBarComponent.vue';
    import DashboardForm from './dashboard/DashboardForm.vue';

    export default {
        components : {
            DashboardForm,
            NavBarComponent
        },

        methods: {
        },

        mounted() {
        },

    }
</script>