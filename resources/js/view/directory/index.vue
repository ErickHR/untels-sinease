<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <directory-form ref="directoryForm" @updateList="updateList" @searchItem="searchItem"></directory-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

    <!-- <div class="col-12">

        <standar-category-form ref="standarCategoryForm" @updateList="updateList" @searchItem="searchItem"></standar-category-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
    </div> -->
</template>


<script>

import DirectoryForm from './DirectoryForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        DirectoryForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('directory/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.directoryForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.directoryForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    }

}
</script>