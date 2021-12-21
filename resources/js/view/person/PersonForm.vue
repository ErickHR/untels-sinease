<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="mb-2 title-form d-inline-block">
                                    USUARIOS
                                </h3>
                            </div>
                        </div>
                        <div class="origen-section ">
                            <div class="row pr-3">
                                <div class="col-12 col-sm-6 col-xl-6 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">DOCUMENTO</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el documento para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.document"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-12 col-sm-6 col-xl-6 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">NOMBRE</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el nombre para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.name"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-12 col-sm-6 col-xl-6 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">APELLIDO PATERNO</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el apellido paterno para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.sur_name"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-12 col-sm-6 col-xl-6 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">APELLIDO MATERNO</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el apellido materno para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.last_name"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">CORREO INSTITUCIONAL</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el apellido correo institucional para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.email"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">CARGO</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component route="position-get-active" 
                                                @selectOption="selectOptionPosition"
                                                @removeOption="removeOptionPosition"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">ROL</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component route="rol" 
                                                @selectOption="selectOptionRol"
                                                @removeOption="removeOptionRol"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-2 col-sm-2 col-xl-2">
                                    <br> 
                                    <button type="button" @click="apiForm"  class="btn" :class="[colorButton]">
                                        {{ nameButton }} <i class="fas" :class="[iconButton]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MultiselectComponent from './../../components/MultiselectComponent.vue';

export default {
    
    components: { 
        MultiselectComponent
    },

    data() {
        return {
            action : 'search',
            dataForm : {
                document : '',
                full_name : '',
                name : '',
                sur_name : '',
                last_name : '',
                email : '',
                positions_id : null,
                rol_id : [],
            },
            idEdit : null
        }
    },

    methods: {
        
        selectOptionRol( option ) {
            // this.idSearchSelect = null
            this.dataForm.rol_id.push( option.id )
        },

        removeOptionRol( option ) {
            // if( this.action == 'search' ) {
            //     this.idSearchSelect = option.id
            //     return
            // }
            // this.dataForm.rol_id.push( option.id, index )
        },

        selectOptionPosition( option ) {
            this.idSearchSelect = null
            this.dataForm.positions_id = option.id
        },

        removeOptionPosition( option ) {
            if( this.action == 'search' ) {
                this.idSearchSelect = option.id
                return
            }
            this.dataForm.positions_id = option.id
        },

        async showEditItem(id){
            try {
                
                let response = await axios.get( `standar-category/${id}` )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        this.action = 'update'
                        this.idEdit = id
                        this.dataForm.name = response.data.data.name

                    }

                }

            } catch ( e ) {
                
            }

        },

        async apiForm(){

            if( this.action == 'search' ){
                this.$emit( 'searchItem', this.dataForm.name )
                return
            }

            try {
                
                let response = await this.axiosForm( 'person', '' )

                if( response.status == 200 ) {

                    if( response.data.value ) {

                        // this.action = 'search'
                        this.dataForm.name = ''

                        await Alerts.success( response.data.msg )

                        if( this.routeHasList() ) {
                            this.$emit( 'updateList' )
                        }

                    }

                }

            } catch ( e ) {
                Alerts.error( response.status + ': Error, no especificado.' )
            }

        },

        axiosForm( url ){

            if( this.action == 'search' ) {
                return axios.get( url )
            }

            if( this.action == 'update' ) {
                let body = { ...this.dataForm }
                return axios.put( `${url}/${this.idEdit}`, body )
            }

            if( this.action == 'add' ) {
                let body = { ...this.dataForm }
                return axios.post( url, body )
            }

        },

        changeActionOfRegister( action ){
            this.action = action
        },

        routeHasList() {
            console.log('change route')
            if( !this.$route.fullPath.includes( '/list' ) ){

                this.action = 'add'
                return false
            }
            
            this.action = 'search'
            return true

        }

    },

    mounted() {
        this.routeHasList()
    },

    computed : {
        nameButton(){
            if( this.action == 'search' ) {
                return 'Buscar';
            }

            if( this.action == 'update' ) {
                return 'Editar';
            }

            if( this.action == 'add' ) {
                return 'Agregar';
            }
        },
        iconButton(){
            if( this.action == 'search' ) {
                return 'fa-search';
            }

            if( this.action == 'update' ) {
                return 'fa-pencil';
            }

            if( this.action == 'add' ) {
                return 'fa-plus';
            }
        },
        colorButton(){
            if( this.action == 'search' ) {
                return 'btn-primary';
            }

            if( this.action == 'update' ) {
                return 'btn-warning';
            }

            if( this.action == 'add' ) {
                return 'btn-success';
            }
        }
    },

    watch : {

        ['dataForm.name'] : function ( ) {
            this.dataForm.full_name = this.dataForm.sur_name + ' ' + this.dataForm.last_name + ', ' + this.dataForm.name
        },

        ['dataForm.sur_name'] : function ( ) {
            this.dataForm.full_name = this.dataForm.sur_name + ' ' + this.dataForm.last_name + ', ' + this.dataForm.name

        },

        ['dataForm.last_name'] : function ( ) {
            this.dataForm.full_name = this.dataForm.sur_name + ' ' + this.dataForm.last_name + ', ' + this.dataForm.name
        },

        $route(to, from) {
            
            this.routeHasList()

        }

    }

}
</script>