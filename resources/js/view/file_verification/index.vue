<template>
    <!-- <div class="col-12"> -->
    <div class="row mx-0">
        <div>
            <nav-bar-component></nav-bar-component>
        </div>
        <!-- <div class="col scroll-auto">
            <file-form ref="fileForm" 
                @updateList="updateList" 
                @searchItem="searchItem"
            ></file-form>
            <router-view ref="routerView"  
                @changeToAddRegister="changeToAddRegister" 
                @editItem="editItem" 
            ></router-view>
        
        </div> -->
    </div>
    <!-- </div> -->
</template>


<script>

// import FileForm from './FileForm.vue';
// import NavBarComponent from './../../components/NavBarComponent.vue';

export default {
    // components : {
    //     FileForm,
    //     NavBarComponent
    // },

    data() {
        return {
            
        }
    },

    methods: {

        async searchItem( data ){

            if( !( this.$route.fullPath ).includes('/list') ) {
                await this.$router.push('file-verification/list')
            }

            this.$refs.routerView.getApiList( data )
        },
        
        editItem( id ){
            this.$refs.fileForm.showEditItem( id )
        },

        changeToAddRegister(){
            this.$refs.fileForm.changeActionOfRegister( 'add' )
        },

        updateList(){
            this.$refs.routerView.getApiList()
        }

    },

    mounted() {
        
    },

}
</script>