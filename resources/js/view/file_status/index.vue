<template>
    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            <file-status-form ref="fileStatusForm" @updateList="updateList" @searchItem="searchItem"></file-status-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
        </div>
    </div>
    <!-- <div class="col-12">
        <file-status-form ref="fileStatusForm" @updateList="updateList" @searchItem="searchItem"></file-status-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    </div> -->
</template>

<script>

import FileStatusForm from './FileStatusForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        FileStatusForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('file-status/list')
            }

            this.$refs.routerView.getApiList( name )
        },
        
        editItem( id ){
            this.$refs.fileStatusForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.fileStatusForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>