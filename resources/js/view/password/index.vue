<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <password-form ref="passwordForm" @updateList="updateList" @searchItem="searchItem"></password-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

</template>


<script>

import PasswordForm from './PasswordForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        PasswordForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('standar-category/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.passwordForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.passwordForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>