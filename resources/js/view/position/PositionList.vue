<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="row">
                            <div class="col-12 col-sm-3">
                                <h3 class="title-form">Lista de Cargos</h3>
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
                                    <th scope="col" data-sort="name" class="sort">NOMBRE</th> 
                                    <th scope="col" data-sort="budget" class="sort">ESTADO</th> 
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr class="list" v-for="( data, index ) in dataList" :key=" index" >
                                    <td class="text-muted">
                                        <b>{{ data.name }}</b>
                                    </td> 
                                    <td class="text-muted">
                                        <b>
                                            <span class="badge badge-dot mr-4">
                                                <i :class="{ 'bg-success' : data.status, 'bg-warning' : !data.status }"></i>
                                                <span class="status">{{ showStatus( data.status ) }}</span>
                                            </span>
                                        </b>
                                    </td> 
                                    <td class="text-muted"></td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <div class="dropdown-item" @click="activeOrDesactiveItem( data.id, !data.status )" >{{ showStatusItem( data.status ) }}</div>
                                                <div class="dropdown-item" @click="editItem( data.id )" v-if="data.status" > EDITAR </div>
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
    </div>
</template>


<script>
export default {
    
    data() {
        return {
            dataList : []
        }
    },

    methods: {

        async editItem( id ){

            this.$emit( 'editItem', id )

        },
        
        async activeOrDesactiveItem( id, status ){

            try {
                
                let body = {
                    id,
                    status
                }

                const response = await axios.post( `position-active-desactive`, body )
                
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

        async getApiList( searchName ){
            try {
                
                let body = {
                    name : searchName
                }
                const response = await searchName ? await axios.post( 'position-search', body  ) : await axios( 'position' )

                if( response.status == 200 ) {

                    if( response.data.value ) {

                        Alerts.success( response.data.msg )
                        
                        this.dataList = { ...response.data.data }

                    }  else {

                        Alerts.error( response.data.msg )

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
        
        this.getApiList()

    },

}
</script>