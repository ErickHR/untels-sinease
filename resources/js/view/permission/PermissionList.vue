<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="form-row">
                    <label class="form-control-label col-12">MOSTRAR LISTA DE PERMISOS POR MODULOS</label> 
                    <span class="input-widht col-12">
                        <label class="custom-toggle">
                            <input type="checkbox" @change="showTypeList">
                            <span class="custom-toggle-slider rounded-circle" ></span>
                        </label>
                    </span>
                </div>
            </div>

            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="row">
                            <div class="col-12 col-sm-3">
                                <h3 class="title-form">Lista de Permisos</h3>
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
                    <div class="table-responsive" v-if=" showOtherList == 'By-Permissions' ">
                        <table class="table align-items-center table-flush table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" data-sort="name" class="sort">NOMBRE</th> 
                                    <th scope="col">URL</th>
                                    <th scope="col">MODULO</th>
                                    <th scope="col" data-sort="budget" class="sort">ESTADO</th> 
                                    <th scope="col"></th>
                                </tr>
                            </thead> 
                            <tbody v-if="dataList.length != 0" >
                                <tr class="list" v-for="( data, index ) in dataList" :key=" index" >
                                    <td class="text-muted">
                                        <b>{{ data.name }}</b>
                                    </td> 
                                    <td class="text-muted">
                                        {{ data.url }}
                                    </td>
                                    <td class="text-muted">
                                        {{ data.module.name }}
                                    </td>
                                    <td class="text-muted">
                                        <b>
                                            <span class="badge badge-dot mr-4">
                                                <i :class="{ 'bg-success' : data.status, 'bg-warning' : !data.status }"></i>
                                                <span class="status">{{ showStatus( data.status ) }}</span>
                                            </span>
                                        </b>
                                    </td> 
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
                    <div class="table-responsive" v-else-if=" showOtherList == 'By-Modules' ">
                        <table class="table align-items-center table-flush table-hover">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" data-sort="name" class="sort">MODULO</th> 
                                    <th scope="col" data-sort="name" class="sort">PERMISOS</th> 
                                    <th scope="col" data-sort="name" class="sort">URL</th> 
                                    <th scope="col" data-sort="name" class="sort">ESTADO</th> 
                                    <th scope="col"></th>
                                </tr>
                            </thead> 
                            <tbody v-if="dataList.length != 0" v-html="listHtml" ref="tbodyList">
                               

                                <!-- <tr class="list" v-for=" ( permission, permissionIndex ) in data.permissions" :key="'permission-'+permissionIndex" >
                                    <td class="text-muted">
                                        <b> {{ permission.name }} </b>
                                    </td> 
                                    
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
                                </tr> -->
                                    <!-- <td class="text-muted"> -->
                                        <!-- {{  }} -->
                                        
                                        <!-- <tr class="list" v-for=" ( permission, permissionIndex ) in data.permissions" :key="'permission-'+permissionIndex" >
                                            <td class="text-muted">
                                                <b> {{ permission.name }} </b>
                                            </td> 
                                            
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
                                        </tr> -->

                                        <!-- a -->
                                    
                                    <!-- </td> -->
                                    
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
            dataList : [],
            dataLengthList : 0,
            showOtherList : 'By-Permissions',
            listHtml : ``
        }
    },

    methods: {
        async actionGetDataByModule(){
            this.showOtherList = 'By-Modules'
            this.dataList = []
            $(".tdByModuleEditar").off('click'); 
            $(".tdByModuleActiveOrDesactive").off('click'); 

            this.listHtml = ``
            await this.getApiByModuleList()
            let _this = this

            for( const dataListIndex in await _this.dataList ) {

                _this.listHtml += `
                    <tr>
                        <td rowspan=${ _this.dataList[ dataListIndex ].permissions.length }>${ _this.dataList[ dataListIndex ].name }
                `
                _this.dataList[ dataListIndex ].permissions.forEach( ( permissions, index ) => {
                    
                    if( index == 0 ) {

                        _this.listHtml += `
                                <td>${ permissions.name }</td>
                                <td>${ permissions.url }</td>
                                <td>
                                    <b>
                                        <span class="badge badge-dot mr-4">
                                            <i class=${ permissions.status ? 'bg-success' : 'bg-warning' }></i>
                                            <span class="status">${ _this.showStatus( permissions.status ) }</span>
                                        </span>
                                    </b>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown">
                                        <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <div class="dropdown-item tdByModuleActiveOrDesactive" data-id="${ permissions.id }" data-status="${ !( permissions.status ) }" >${ _this.showStatusItem( permissions.status ) }</div>
                                            <div class="dropdown-item tdByModuleEditar" data-id="${ permissions.id }" v-if="${ permissions.status }" > EDITAR </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        `

                    } else {

                        _this.listHtml += `
                                <tr>
                                    <td>${ permissions.name }</td>
                                    <td>${ permissions.url }</td>
                                    <td>
                                        <b>
                                            <span class="badge badge-dot mr-4">
                                                <i class=${ permissions.status ? 'bg-success' : 'bg-warning' }></i>
                                                <span class="status">${ _this.showStatus( permissions.status ) }</span>
                                            </span>
                                        </b>
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <div class="dropdown-item tdByModuleActiveOrDesactive" data-id="${ permissions.id }" data-status="${ !( permissions.status ) }" >${ _this.showStatusItem( permissions.status ) }</div>
                                                <div class="dropdown-item tdByModuleEditar" data-id="${ permissions.id }" v-if="${ permissions.status }" > EDITAR </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `

                    }

                });

            }

            Alerts.success( 'Cargando....' )

            setTimeout(() => {
                $('.tdByModuleEditar').on('click', function(event) {
                    
                    _this.editItem( $(this).data('id') )

                }) 

                $('.tdByModuleActiveOrDesactive').on('click', function(event) {
                    
                    _this.activeOrDesactiveItem( $(this).data('id'), $(this).data('status') )

                }) 
            }, 2000);

        },

        async actionGetDataByPermission(){
            this.showOtherList = 'By-Permissions'
            this.dataList = []
            this.getApiList()
        },

        async showTypeList( event ){

            if( event.target.checked ) {

                this.actionGetDataByModule()

            } else {

                this.actionGetDataByPermission()

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

                const response = await axios.post( `permissions-active-desactive`, body )
                
                if( response.status == 200 ) {

                    if( response.data.value ) {

                        if( this.showOtherList == 'By-Modules' ) {
                            this.actionGetDataByModule()
                        } else if( this.showOtherList == 'By-Permissions' ) {
                            this.actionGetDataByPermission()
                        }


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

        async getApiList( searchName ){
            try {
                
                let body = {
                    name : searchName
                }
                const response = await searchName ? await axios.post( 'permissions-search', body  ) : await axios( 'permissions-with' )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        this.dataList = { ...response.data.data }
                        this.dataLengthList = this.dataList.length

                        Alerts.success( response.data.msg )

                    }

                }

            } catch ( e ) {
                
            }
        },

        async getApiByModuleList( searchName ){
            try {
                
                let body = {
                    name : searchName
                }
                const response = await searchName ? await axios.post( 'permissions-search', body  ) : await axios( 'module-with-permissions' )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        this.dataList = { ...response.data.data }

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

        },

        showNameByModule( data ){
            return data.name
        }

    },

    mounted() {
        
        this.getApiList()

    },

}
</script>