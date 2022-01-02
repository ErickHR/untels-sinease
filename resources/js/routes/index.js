import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../vuex';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name : 'home',
        component: () => import('./../view/index.vue')
    },
    { 
        path: '/standar',
        name : 'standar',
        component: () => import('./../view/standar'),
        children : [
            { 
                path: '/standar/list', 
                component: () => import('./../view/standar/StandarList.vue')
            }
        ]
    },
    { 
        path: '/office', 
        component: () => import('./../view/office'),
        children : [
            { 
                path: '/office/list', 
                component: () => import('./../view/office/OfficeList.vue')
            }
        ]
    },
    { 
        path: '/factor', 
        component: () => import('./../view/factor'),
        children : [
            { 
                path: '/factor/list', 
                component: () => import('./../view/factor/FactorList.vue')
            }
        ]
    },
    { 
        path: '/dimension', 
        component: () => import('./../view/dimension'),
        children : [
            { 
                path: '/dimension/list', 
                component: () => import('./../view/dimension/DimensionList.vue')
            }
        ]
    },
    { 
        path: '/file', 
        name : 'file',
        component: () => import('./../view/file'),
        children : [
            { 
                path: '/file/list', 
                component: () => import('./../view/file/FileList.vue')
            }
        ]
    },
    { 
        path: '/directory',
        name : 'directory',
        component: () => import('./../view/directory'),
        children : [
            { 
                path: '/directory/list',
                component: () => import('./../view/directory/DirectoryList.vue')
            }
        ]
    },
    { 
        path: '/file-status', 
        component: () => import('./../view/file_status'),
        children : [
            { 
                path: '/file-status/list', 
                component: () => import('./../view/file_status/FileStatusList.vue')
            }
        ]
    },
    { 
        path: '/file-verification', 
        component: () => import('./../view/file_verification'),
        // children : [
        //     { 
        //         path: '/file-verification/list', 
        //         component: () => import('./../view/file_verification/FileList.vue')
        //     }
        // ]
    },
    { 
        path: '/position', 
        component: () => import('./../view/position'),
        children : [
            { 
                path: '/position/list', 
                component: () => import('./../view/position/PositionList.vue')
            }
        ]
    },
    { 
        path: '/person', 
        component: () => import('./../view/person'),
        children : [
            { 
                path: '/person/list', 
                component: () => import('./../view/person/PersonList.vue')
            }
        ]
    },
    { 
        path: '/rol', 
        component: () => import('./../view/rol'),
        children : [
            { 
                path: '/rol/list', 
                component: () => import('./../view/rol/RolList.vue')
            }
        ]
    },
    { 
        path: '/permission', 
        component: () => import('./../view/permission'),
        children : [
            { 
                path: '/permission/list', 
                component: () => import('./../view/permission/PermissionList.vue')
            }
        ]
    },
    { 
        path: '/module', 
        component: () => import('./../view/module'),
        children : [
            { 
                path: '/module/list', 
                component: () => import('./../view/module/ModuleList.vue')
            }
        ]
    },
    { 
        path: '/change-password', 
        component: () => import('./../view/password'),
        children : [
            { 
                path: '/module/list', 
                component: () => import('./../view/password/PasswordList.vue')
            }
        ]
    },
    // { 
    //     path: '/dashboard', 
    //     component: () => import('./../view/dashboard')
    //     // children : [
    //     //     { 
    //     //         path: '/module/list', 
    //     //         component: () => import('./../view/dashboard/DashboardList.vue')
    //     //     }
    //     // ]
    // },
    { 
        path: '/*', 
        component: {
            template : `<div><h1>404</h1></div>`
        }
    }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {

//     // if( to.path == from.path )    return;
//     next()
//     return

//     if( store.state.userData == null ) {
//         next()
//         return
//     }

//     if( to.fullPath == '/' ) {
//         next()
//         return
//     }

//     let notHasPermissions = true

//     for ( const permissions in store.state.userData.permissions ) {
        
//         let permissions_auth = store.state.userData.permissions[ permissions ].permissions_auth
        
//         permissions_auth.forEach( ( item ) => {

//             if( item.has_two_actions ) {

//                 if( to.fullPath.includes( item.url ) ) {
//                     notHasPermissions = false
//                     next()
//                     return
//                 }

//             } else if( item.url == to.fullPath ) {
//                 notHasPermissions = false
//                 next()
//                 return
//             }

//         } )

//     }

//     if( notHasPermissions ) {
//         next({ name : 'home' })
//         return
//     }

    // next()
    
// })

export default router
