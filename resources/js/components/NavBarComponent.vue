<template>

    <div v-if="!getUserPermissions">
    </div>

    <div  class="navbar_container text-ellipsis background_secondary_untels py-3" v-else>
        <ul class="nav flex-column" v-for=" ( permission, index ) in getUserPermissions " :key="'permissions_'+index">
            <li class="nav-item">
                <a class="nav-link collapsed text-ellipsis" data-toggle="collapse" :href="`#${ ( permission.name ).replaceAll(' ','-') }`" aria-expanded="false">
                    <div class="navbar_item">
                        <div class="navbar_item-icons w-18">
                            <i class="fa-w-20 fa-9px" :class="permission.icon"></i>
                        </div>
                        <div>
                            <small class="nav-link style-text color_secondary_untels" >
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
                                    <div class="style-text color_secondary_untels">
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

        data() {
            return {}
        },

        mounted() {
            this.getPermissions()
        },

        computed: {

            ...mapGetters([
                'getUserData',
                'getUserPermissions'
            ])

        },

    }
    
</script>


    
