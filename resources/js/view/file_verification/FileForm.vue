<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="mb-2 title-form d-inline-block">
                                    ARCHIVOS
                                </h3>
                            </div>
                        </div> 
                        <div class="opciones-section mt-1 pb-2">
                            <small class="text-muted">
                                <strong>
                                    Descripción:
                                </strong> 
                                Estas son las categorias de las normas propuestas por SINEASE
                            </small>
                        </div> 
                        <div class="origen-section ">
                            <div class="row pr-3">
                                
                                <div class="col-12 col-sm-12 col-xl-12 mt-3">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">STANDAR</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component route="standar" @selectOption="selectOption"></multiselect-component>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">NOMBRE</label> 
                                        <span class="input-widht col-12">
                                            <input type="text" :placeholder="'Coloque el nombre para '+ nameButton.toLowerCase() " class="form-control text-primary col-12" v-model="dataForm.name"> 
                                        </span>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-12 col-xl-12 mt-2 " v-if="action != 'search'">
                                    <div class="form-row">
                                        <input type="file" name="file" accept=".pdf" id="file" class="" style="display:none" @change="changeFile"> 
                                        <label for="file" class="btn btn-warning pl-2 pr-2 pt-1 pb-1">
                                            Agregar una imagen del envío <i class="fas fa-plus ml-2"></i>
                                        </label> 
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-xl-12 mt-2 mt-4 pl-6" v-if=" files.length != 0 ">
                                    <div class="form-row">
                                        <file-component v-for="(file, index) in files" :key="'file'+index" :file="file" @removeFile="removeFile"></file-component>
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
import FileComponent from './../../components/FileComponent.vue';

export default {
    components: { 
        MultiselectComponent,
        FileComponent
    },

    data() {
        return {
            action : 'search',
            dataForm : this.jsonDataForm(),
            idEdit : null,
            idSearchSelect : null,
            files : [],
        }
    },

    methods: {
        
        removeFile( id ){
            $('#file').val('')
            this.files.splice( id, 1 )
        },

        async changeFile( event ){

            const document = event.target.files[0]
            
            let file = {
                id : this.files.length + 1,
                file : document,
                url : URL.createObjectURL(document)
            }

            this.files.push( { ...file } )
            $('#file').val('')

        },

        selectOption( option ) {
            if( this.action == 'search' ) {
                this.idSearchSelect = option.id
                return
            }
            this.dataForm.standars_id = option.id
        },

        async showEditItem(id){
            try {
                
                let response = await axios.get( `standar/${id}` )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        Alerts.success( response.data.msg )
                        
                        this.action = 'update'
                        this.idEdit = id
                        this.dataForm.name = response.data.data.name

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

        async apiForm(){

            if( this.action == 'search' ){
                this.$emit( 'searchItem', { name : this.dataForm.name, idCategory : this.idSearchSelect } )
                return
            }

            try {
                
                let formData = new FormData();
                formData.append('file', this.files[0].file);

                const responseFile = await axios.post( 'file-upload', formData,

                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if( responseFile.status == 200 ) {

                    if( responseFile.data.value ) {
                        
                        await Alerts.success( responseFile.data.msg )

                        this.dataForm.url = responseFile.data.data.url
                        this.dataForm.name_file = responseFile.data.data.name_file

                        let response = await this.axiosForm( 'file', '' )

                        if( response.status == 200 ) {

                            if( response.data.value ) {
                                
                                await Alerts.success( response.data.msg )

                                this.action = 'search'
                                this.resetData()
                                this.$emit( 'updateList' )

                            } else {

                                Alerts.error( response.data.msg )

                            }

                        } else {

                            Alerts.error( response.status + ': Error, no especificado.' )

                        }
                        

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

        resetData(){
            this.dataForm = this.jsonDataForm()
            this.file = []
        },

        jsonDataForm(){
            return {
                name : '',
                standars_id : null,
                name_file : null,
                url : null
            }
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