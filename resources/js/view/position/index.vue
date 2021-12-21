<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">

            <position-form ref="positionForm" @updateList="updateList" @searchItem="searchItem"></position-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
        </div>
    </div>

    <!-- <div class="col-12">

        <position-form ref="positionForm" @updateList="updateList" @searchItem="searchItem"></position-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    
    </div> -->
</template>


<script>

import PositionForm from './PositionForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        PositionForm,
        NavBarComponent

    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('position/list')
            }

            this.$refs.routerView.getApiList( name )
        },
        
        editItem( id ){
            this.$refs.positionForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.positionForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>