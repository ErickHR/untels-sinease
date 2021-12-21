import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        userData : null
    },

    getters: {
        
        getUserData( state ) {
            return state.userData
        },

        getUserPermissions( state ) {

            if( state.userData == null ) {
                return null
            }
            return { ...state.userData.permissions }

        },

    },

    mutations: {

        updateUserData( state, data ) {

            state.userData = { ...data }

        }

    },

    actions: {

        async getPermissions( { commit } ){

            const response = await axios.get( 'user-role' )
            // localStorage.setItem( 'userData', JSON.stringify( response.data ) )
            commit( 'updateUserData', response.data )

        },

    }

  })

export default store