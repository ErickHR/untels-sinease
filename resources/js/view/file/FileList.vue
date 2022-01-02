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
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-items-center table-flush table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" data-sort="name" class="sort">CARPETA</th> 
                                    <th scope="col" data-sort="name" class="sort">NOMBRE ARCHIVO</th> 
                                    <th scope="col" data-sort="budget" class="sort">ESTADO</th> 
                                    <th scope="col" data-sort="budget" class="sort">STANDAR</th>
                                    <th scope="col" data-sort="budget" class="sort">DOCUMENTO</th> 
                                    <th scope="col"></th>
                                </tr>
                            </thead> 
                            <tbody v-html="listHtml">
                                <!-- <tr class="list" > -->
                                    <!-- <td class="text-muted">
                                        <div :style="'background:'+data.status_file.color" style="color:white;" class="btn-sm">
                                            <center>
                                                {{ data.status_file.name }}
                                            </center>
                                        </div>
                                    </td> 
                                    <td class="text-muted">
                                        <b>
                                            {{ data.standar.name +' / ' + data.standar.factor.name  }}
                                        </b>
                                    </td>
                                    <td class="text-muted"> 
                                        <a :href="`http://127.0.0.1:8000/${data.url}`" target="_blank" rel="noopener noreferrer">
                                            <i class="far fa-file-pdf fa-2x"></i>
                                        </a>
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown" v-if="data.file_description.length != 0">
                                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <div class="dropdown-item" @click="showDescriptionStatus( data.file_description )" > VER COMENTARIO </div>
                                            </div>
                                        </div>
                                    </td> -->
                                <!-- </tr> -->
                            </tbody>
                        </table>
                    </div> 
                    <div class="card-footer py-4">
                    </div>
                </div>
            </div>
        </div>

        <modal-component :sizeModal="'modal-lg'">
            <template v-slot:header>
                <h1>DESCRIPCIÓN</h1>
            </template>

            <template v-slot:default>
                <div class="table-responsive">
                    <table class="table align-items-center table-flush table-hover">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col" data-sort="name" class="sort">NOMBRE</th> 
                                <th scope="col" data-sort="budget" class="sort">DESCRIPCION</th> 
                                <th scope="col"></th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr class="list" v-for="( data, index ) in fileDescription" :key="'file-description'+index" >
                                <td class="text-muted">
                                    <b>{{ data.user.person.full_name }}</b>
                                </td> 
                                <td class="text-muted">
                                    {{ data.description }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >CERRAR</button>
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
            fileDescription : [],
            nowIndexFor : 0,
            listHtml : ``
        }
    },

    methods: {

        async actionGetDataHtml(){
            this.dataList = []
            $(".tdShowDescription").off('click'); 

            this.listHtml = ``
            await this.getApiList()
            let _this = this

            for( const dataListIndex in await _this.dataList ) {

                _this.listHtml += `
                    <tr>
                        <td rowspan=${ _this.dataList[ dataListIndex ].files.length }>${ _this.dataList[ dataListIndex ].name }
                `
                _this.dataList[ dataListIndex ].files.forEach( ( file, index ) => {
                    
                    if( index == 0 ) {
                        _this.listHtml += `
                                <td>${ file.name }</td>
                                <td class="text-muted">
                                    <div class="btn-sm" style="background:${file.status_file.color};color:white;" >
                                        <center>
                                            ${ file?.status_file?.name }
                                        </center>
                                    </div>
                                </td> 
                                <td class="text-muted">
                                    <b>
                                        ${file?.standar?.name +' / ' + file?.standar?.factor?.name  }
                                    </b>
                                </td>
                                <td class="text-muted"> 
                                    <a href="${window.location.origin}/${file.url}" target="_blank" rel="noopener noreferrer">
                                        <i class="far fa-file-pdf fa-2x"></i>
                                    </a>
                                </td>`
                                _this.listHtml += `
                                <td class="text-right">
                                    <div class="dropdown">
                                        <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <div class="dropdown-item tdShowDescription" data-id="${ file.id }"  > ELIMINAR </div>
                                            `
                        if( file.file_description.length != 0 ) {
                            _this.listHtml += `
                                
                                            <div class="dropdown-item tdShowDescription" data-id="${ file.id }"  > VER COMENTARIO prueba </div>
                                        `
                        }

                            _this.listHtml += `
                                            </div>
                                        </div>
                                    </td>`
                                    
                        _this.listHtml += `
                                </tr>
                            `

                    } else {

                        _this.listHtml += `
                                <tr>
                                    <td>${ file.name }</td>
                                    <td class="text-muted">
                                        <div class="btn-sm" style="background:${file.status_file.color};color:white;" >
                                            <center>
                                                ${ file.status_file.name }
                                            </center>
                                        </div>
                                    </td> 
                                    <td class="text-muted">
                                        <b>
                                            ${file.standar.name +' / ' + file.standar.factor.name  }
                                        </b>
                                    </td>
                                    <td class="text-muted"> 
                                        <a href="${window.location.origin}/${file.url}" target="_blank" rel="noopener noreferrer">
                                            <i class="far fa-file-pdf fa-2x"></i>
                                        </a>
                                    </td>`

                                     _this.listHtml += `
                                        <td class="text-right">
                                            <div class="dropdown">
                                                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                    <div class="dropdown-item tdShowDescription" data-id="${ file.id }"  > ELIMINAR </div>
                                        `
                        
                        if( file.file_description.length != 0 ) {
                            _this.listHtml += `
                                            <div class="dropdown-item tdShowDescription" data-id="${ file.id }" > VER COMENTARIO  prueba</div>
                                    `
                        }
                            _this.listHtml += `
                                        </div>
                                    </div>
                                </td>`
                                    
                        _this.listHtml += `
                                </tr>
                            `

                    }

                });

            }

            Alerts.success( 'Cargando....' )

            setTimeout(() => {

                $('.tdShowDescription').on('click', function(event) {
                    
                    _this.showDescriptionStatus( $(this).data('id') )

                }) 
            }, 2000);

        },

        async showDescriptionStatus( id ){

            try {
                
                const response  = await axios.get( `/file-description/${id}` )

                this.fileDescription = {...response.data.data}
                $('#modal-component').modal('show')

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

                const response = await axios.post( `file-active-desactive`, body )
                
                if( response.status == 200 ) {

                    if( response.data.value ) {

                        await Alerts.success( response.data.msg )

                        this.getApiList()

                    } else {

                        Alerts.error( response.data.msg )

                    }

                } else {

                    Alerts.error( response.status + ': Error, no especificado.' )

                }

            } catch ( e ) {
                
                Alerts.error( 'Perdida de conexión ó Error de sistema.' )

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
                const response = await data ? await axios.post( 'file-search', body  ) : await axios( 'directory' )
                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        Alerts.success( response.data.msg )

                        this.dataList = { ...response.data.data }

                    } else {
                        
                        Alerts.error( response.data.msg )

                        this.dataList = []

                    }

                } else {

                    Alerts.error( response.status + ': Error, no especificado.' )

                }

            } catch ( e ) {

                Alerts.error( 'Perdida de conexión ó Error de sistema.' )
                
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
        
        this.actionGetDataHtml()

    },

}
</script>