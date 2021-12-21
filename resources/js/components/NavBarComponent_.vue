<template>

    <div v-if="!getUserPermissions">
    </div>

    <div  class="navbar_container text-ellipsis bg-success py-3" v-else>
        <ul class="nav flex-column" v-for=" ( permission, index ) in getUserPermissions " :key="'permissions_'+index">
            <li class="nav-item">
                <a class="nav-link collapsed text-ellipsis" data-toggle="collapse" :href="`#${ ( permission.name ).replaceAll(' ','-') }`" aria-expanded="false">
                    <div class="navbar_item">
                        <div class="navbar_item-icons w-18">
                            <i class="fa-w-20 fa-9px color-aliceblue" :class="permission.icon"></i>
                        </div>
                        <div>
                            <small class="nav-link style-text" >
                                {{ permission.name }}
                            </small>
                        </div>
                    </div>
                </a>
                <div class="collapse " :id="`${ ( permission.name ).replaceAll(' ','-') }`" style="height: auto;" v-for=" ( permissionAuth, index ) in permission.permissions_auth " :key="'permissions-auth_'+index" >
                    <ul class="nav">
                        <li class="nav-item ">
                            <router-link :to="permissionAuth.url" class="nav-link">
                                <div class="navbar_sub-item">
                                    <div class="navbar_item-icons">
                                        <i class="fa-w-20 fa-9px" :class="permissionAuth.icon"></i>
                                    </div>
                                    <div class="style-text">
                                        {{ permissionAuth.name }}
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    
    import { mapGetters, mapActions } from 'vuex';

    export default {

        methods: {
            ...mapActions([
                'getPermissions'
            ])
        },

        mounted() {
            this.getPermissions()
        },

        computed: {

            ...mapGetters([
                'getUserData',
                'getUserPermissions'
            ])

        }
    }
    
</script>

<style scoped>

    .navbar_container{
        border: 1px solid transparent;
        border-radius: 0px .375rem .375rem 0px;
        width: 50px;
        height: calc( 100vh - 180px );
        transition: width 0.3s linear;
    }

    .navbar_container:hover{
        width: 150px;
    }

    .navbar_item, .navbar_sub-item{
        display: flex;
        transition: justify-content 0.1s linear;
    }

    .navbar_item:hover, .navbar_sub-item:hover{
        justify-content: start !important;
    }
    
    .navbar_sub-item{
        margin-left: 10px;
    }

    .navbar_item-icons{
        margin-right: 20px;
    }

    .text-ellipsis{
        overflow: hidden;
        text-overflow: ellipsis;
        transition: width 0.3s linear;
    }

    .text-ellipsis:hover{
        width: 200px;
    }

    .nav-link{
        padding: .25rem 1em;
    }

    .color-aliceblue {
        color: aliceblue;
    }

    .style-text{
        font-size: .65rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #434950;
    }

</style>