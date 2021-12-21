<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            <standar-form ref="standarForm" 
                @updateList="updateList" 
                @searchItem="searchItem"
            ></standar-form>
            <router-view ref="routerView"  
                @changeToAddRegister="changeToAddRegister" 
                @editItem="editItem" 
            ></router-view>
        </div>
    </div>

    <!-- <div class="col-12">
        <standar-form ref="standarForm" 
            @updateList="updateList" 
            @searchItem="searchItem"
        ></standar-form>
        <router-view ref="routerView"  
            @changeToAddRegister="changeToAddRegister" 
            @editItem="editItem" 
        ></router-view>
    </div> -->
</template>


<script>

import StandarForm from './StandarForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        StandarForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( data ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('standar/list')
            }

            this.$refs.routerView.getApiList( data )
        },
        
        editItem( id ){
            this.$refs.standarForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.standarForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>