<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <module-form ref="moduleForm" @updateList="updateList" @searchItem="searchItem"></module-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

</template>


<script>

import ModuleForm from './ModuleForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        ModuleForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('module/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.moduleForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.moduleForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    }

}
</script>