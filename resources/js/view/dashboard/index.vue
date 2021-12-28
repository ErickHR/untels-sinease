<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <dashboard-form ref="dashboardForm"></dashboard-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

    <!-- <div class="col-12">

        <standar-category-form ref="standarCategoryForm" @updateList="updateList" @searchItem="searchItem"></standar-category-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
    </div> -->
</template>


<script>

import DashboardForm from './DashboardForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        DashboardForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('dashboard/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.dashboardForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.dashboardForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>