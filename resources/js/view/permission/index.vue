<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <permission-form ref="permissionForm" @updateList="updateList" @searchItem="searchItem"></permission-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

</template>


<script>

import PermissionForm from './PermissionForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        PermissionForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('permission/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.permissionForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.permissionForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>