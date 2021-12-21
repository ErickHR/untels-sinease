<template>

    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <div class="col scroll-auto">
            <person-form ref="personForm" @updateList="updateList" @searchItem="searchItem"></person-form>
            <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
        </div>
    </div>

    <!-- <div class="col-12">
        <person-form ref="personForm" @updateList="updateList" @searchItem="searchItem"></person-form>
        <router-view ref="routerView"  @changeToAddRegister="changeToAddRegister" @editItem="editItem" ></router-view>
    </div> -->
</template>


<script>

import PersonForm from './PersonForm.vue';
import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    components : {
        PersonForm,
        NavBarComponent
    },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( name ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('person/list')
            }

            this.$refs.routerView.getApiList( name )
        },
        
        editItem( id ){
            this.$refs.personForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.personForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>