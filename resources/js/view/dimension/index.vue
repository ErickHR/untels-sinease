<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            
            <dimension-form ref="dimensionForm" @updateList="updateList" @searchItem="searchItem"></dimension-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>

        </div>
    </div>

    <!-- <div class="col-12">

        <standar-category-form ref="standarCategoryForm" @updateList="updateList" @searchItem="searchItem"></standar-category-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
    </div> -->
</template>


<script>

import DimensionForm from './DimensionForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        DimensionForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('dimension/list')
            }

            this.$refs.routerView.getApiList( name )

        },
        
        editItem( id ){
            this.$refs.dimensionForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.dimensionForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>