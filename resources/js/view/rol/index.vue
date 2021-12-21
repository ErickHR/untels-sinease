<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <rol-form ref="rolForm" @updateList="updateList" @searchItem="searchItem"></rol-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

</template>


<script>

import RolForm from './RolForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        RolForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('rol/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.rolForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.rolForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>