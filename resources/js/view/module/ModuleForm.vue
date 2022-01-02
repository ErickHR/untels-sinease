<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="mb-2 title-form d-inline-block">
                                    Modulos
                                </h3>
                            </div>
                        </div> 
                        <div class="opciones-section mt-1 pb-2">
                            <small class="text-muted">
                                <strong>
                                    Descripción:
                                </strong> 
                                Estas son las categorias de las normas propuestas por SINEACE
                            </small>
                        </div> 
                        <div class="origen-section ">
                            <div class="row pr-3">
                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">NOMBRE</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el nombre para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.name"> 
                                            <span class="is-invalid-numero text-red"></span>
                                        </span>
                                    </div>
                                </div> 
                                <div class="col-12 col-sm-12 col-xl-12" v-if="action!='search'">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">ICONO</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el nombre del icono para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.icon"> 
                                            <span class="is-invalid-numero text-red"></span>
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
export default {
    
    data() {
        return {
            action : 'search',
            dataForm : {
                name : '',
                icon : '',
            },
            idEdit : null
        }
    },

    methods: {
        
        async showEditItem(id){
            try {
                
                let response = await axios.get( `module/${id}` )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        this.action = 'update'
                        this.idEdit = id
                        this.dataForm.name = response.data.data.name
                        this.dataForm.icon = response.data.data.icon

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
                
                let response = await this.axiosForm( 'module', '' )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        this.action = 'search'
                        this.dataForm.name = ''
                        this.dataForm.icon = ''
                        this.$emit( 'updateList' )

                    }

                }

            } catch ( e ) {
                
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
        }

    },

    mounted() {
        
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
    }


}
</script>