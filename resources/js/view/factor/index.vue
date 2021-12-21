<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <factor-form ref="factorForm" @updateList="updateList" @searchItem="searchItem"></factor-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

    <!-- <div class="col-12">

        <standar-category-form ref="standarCategoryForm" @updateList="updateList" @searchItem="searchItem"></standar-category-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
    </div> -->
</template>


<script>

import FactorForm from './FactorForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        FactorForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('factor/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.factorForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.factorForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>