<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="row">
                            <div class="col-12 col-sm-3">
                                <h3 class="title-form">Lista de Categorias de Standar</h3>
                            </div> 
                            <div class="text-sm-right col-12 col-sm-9 mt-sm-0 mt-2">
                                <button type="button" class="btn btn-sm btn-success btn-icon" @click="changeToAddRegister">
                                        <span class="btn-inner--icon">
                                            <i class="fas fa-plus"></i>
                                        </span> 
                                        <span class="btn-inner--text">
                                            Agregar registro
                                        </span>
                                </button>

                                <button type="button" class="btn btn-sm btn-primary btn-icon" @click="dowloandAllFiles">
                                        <span class="btn-inner--icon">
                                            <i class="fa-w-20 fa-9px fas fa-file-pdf"></i>
                                        </span> 
                                        <span class="btn-inner--text">
                                            Descargar archivos
                                        </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-items-center table-flush table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" data-sort="name" class="sort">NOMBRE</th> 
                                    <th scope="col" data-sort="budget" class="sort">ESTADO</th> 
                                    <th scope="col" data-sort="budget" class="sort">STANDAR</th>
                                    <th scope="col" data-sort="budget" class="sort">DOCUMENTO</th> 
                                    <th scope="col" data-sort="budget" class="sort">USUARIO</th> 
                                    <th scope="col"></th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr class="list" v-for="( data, index ) in dataList" :key=" index" >
                                    <td class="text-muted">
                                        <b>{{ data.name }}</b>
                                    </td> 
                                    <td class="text-muted">
                                        <div :style="'background:'+data.status_file.color" style="color:white;" class="btn-sm">
                                            <center>
                                                {{ data.status_file.name }}
                                            </center>
                                        </div>
                                    </td> 
                                    <td class="text-muted">
                                        <b>
                                            {{ ( data.standar ? data.standar.name : '' ) +' / ' + ( data.standar ? data.standar.factor.name : '' ) }}
                                        </b>
                                    </td> 
                                    <td class="text-muted"> 
                                        <a :href="`http://127.0.0.1:8000/${data.url}`" target="_blank" rel="noopener noreferrer">
                                            <i class="far fa-file-pdf fa-2x"></i>
                                        </a>
                                    </td>
                                    <td class="text-muted">
                                        <b>
                                            {{ data.user.person.full_name +' / ' +  data.user.person.position.name  }}
                                        </b>
                                    </td> 
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <div class="dropdown-item" v-for="( statusData, index ) in dataStatusList" :key="index"  @click="changeStatus( statusData, data )"> {{ statusData.name }} </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                    <div class="card-footer py-4">
                    </div>
                </div>
            </div>
        </div>

        <modal-component @dataForm="getDataForm" @save="saveRegisterByModal" ref="modalComponent">
            <template v-slot:header>
                <h1>DESCRIPCIÓN</h1>
            </template>

            <template v-slot:default="modalSlotPropsDefault">
                <form>
                    <textarea class="form-control" rows="3" placeholder="DESCRIPCIÓN" v-model="modalSlotPropsDefault.dataForm.description" ></textarea>
                </form>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >CERRAR</button>
                <button type="button" class="btn btn-primary" @click="$refs.modalComponent.save()">GUARDAR</button>
            </template>

        </modal-component>

    </div>
</template>

<script>

import ModalComponent from './../../components/ModalComponent.vue'

export default {
    
    components : {
        ModalComponent
    },

    data() {
        return {
            dataList : [],
            dataStatusList : [],
            dataForm : {
                id_status_file : null,
                id_file : null,
                description : ''
            }
        }
    },

    methods: {

        async saveRegisterByModal(){
            let body = {...this.dataForm}
            $('#modal-component').modal('hide')
            await this.changeStatusAPI( body )
        },

        getDataForm( dataFormModal ){

            this.dataForm.description = dataFormModal.description

        },

        dowloandAllFiles(){

            window.open( 'file-dowloand-all/files-all', '_blank' )

        },

        async changeStatus( status_file, file ){

            this.dataForm.id_status_file = status_file.id
            this.dataForm.id_file = file.id
            this.dataForm.need_msg = status_file.need_msg

            if( status_file.need_msg ) {

                // if( dataForm.description == ''  ) {

                    $('#modal-component').modal('show')
                    return
                // }

            }

            let body = {...this.dataForm}

            this.changeStatusAPI( body )
            
        },

        async changeStatusAPI( body ){
            try {

                const response = await axios.post( `file-change-status`, body )
                
                if( response.status == 200 ) {

                    if( response.data.value ) {

                        this.getApiList()

                    }

                }

            } catch ( e ) {
                
            }
        },

        async editItem( id ){

            this.$emit( 'editItem', id )

        },
        
        async activeOrDesactiveItem( id, status ){

            try {
                
                let body = {
                    id,
                    status
                }

                const response = await axios.post( `standar-active-desactive`, body )
                
                if( response.status == 200 ) {

                    if( response.data.value ) {

                        this.getApiList()

                    }

                }

            } catch ( e ) {
                
            }

        },

        showStatusItem( status ){
            return !status ? 'ACTIVAR' : 'DESACTIVAR'
        },

        changeToAddRegister(){
            this.$emit('changeToAddRegister', 'add')
        },

        async getApiList( data = null ){
            try {
                
                let body = {
                    name : data ? data.name??null : '',
                    idCategory : data ? data.idCategory??null : ''
                }
                const response = await data ? await axios.post( 'file-search', body  ) : await axios( 'file-get-file' )
                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        this.dataList = { ...response.data.data }

                    } else {
                        
                        this.dataList = []

                    }

                }

            } catch ( e ) {
                
            }
        },

        async getStatusFile(){
            try {

                const response = await axios.get( 'status-file-get-active' )
                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        this.dataStatusList = { ...response.data.data }

                    } 

                }

            } catch ( e ) {
                
            }

        },

        showStatus( status ) {

            return status ? 'ACTIVO' : 'DESACTIVADO'

        },

        showIconStatus( status ) {

            return status ? 'ACTIVO' : 'DESACTIVADO'

        }

    },

    mounted() {
        
        this.getApiList()
        this.getStatusFile()

    }

}
</script>