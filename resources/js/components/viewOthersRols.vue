<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="mb-2 title-form d-inline-block">
                                    CARGOS
                                </h3>
                            </div>
                        </div> 
                        <div class="opciones-section mt-1 pb-2">
                            <small class="text-muted">
                                <strong>
                                    Descripción:
                                </strong> 
                                Cargos existentes en la UNTELS
                            </small>
                        </div> 
                        <div class="origen-section ">
                            <div class="row pr-3">

                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">DIMENSIÓN</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component route="/api/dimension" 
                                                @changeOption="changeOptionDimension"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        <div class="origen-section " v-if="showMultiSelect.factor">
                            <div class="row pr-3">

                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">FACTOR</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component :route="`/api/factor-get-by-dimension/${this.data.dimension_id}`" 
                                                @changeOption="changeOptionFactor"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div> 
                            </div>
                        </div>

                        <div class="origen-section"  v-if="showMultiSelect.standar">
                            <div class="row pr-3">

                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">STANDAR</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component :route="`/api/standar-get-by-factor/${this.data.factor_id}`" 
                                                @changeOption="changeOptionStandar"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div> 
                            </div>
                        </div>

                        <div class="origen-section"  v-if="showMultiSelect.status_file">
                            <div class="row pr-3">

                                <div class="col-12 col-sm-12 col-xl-12 ">
                                    <div class="form-row">
                                        <label class="form-control-label col-12">ESTADO DE DOCUMENTO</label> 
                                        <span class="input-widht col-12">
                                            <multiselect-component :route="`/api/status-file-get-active`" 
                                                @changeOption="changeOptionStatusFile"
                                            ></multiselect-component>
                                        </span>
                                    </div>
                                </div> 
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card" v-if="showMultiSelect.documents">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="mb-2 title-form d-inline-block">
                                    DOCUMENTOS
                                </h3>
                            </div>
                        </div>

                        <div class="origen-section ">
                            <div class="row pr-3">

                                <div class="col-12 col-sm-12 col-xl-12 mt-2 mt-4 pl-6">
                                    <div class="form-row">

                                        <div class="card m-3" style="width: 10rem; " v-for=" ( file, fileIndex ) in data.documents " :key="'file'+fileIndex">
                                            <center>
                                                <div class="file-wrapper m-3">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a :href="file.url" target="_blank" rel="noopener noreferrer">
                                                        <i class="far fa-file-pdf fa-5x"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            </center>
                                            <div class="card-body">
                                                <h5 class="card-title">{{ file.name }}</h5>
                                                <p class="card-text">
                                                    {{ file.description }}
                                                </p>
                                                <a href="#" class="btn btn-primary">Descargar</a>
                                            </div>
                                        </div>

                                    </div>
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

import MultiselectComponent from './MultiselectComponent.vue';

export default {

    components: { 
        MultiselectComponent
    },

    data() {

        return {

            data : {
                dimension_id : null,
                factor_id : null,
                standar_id : null,
                status_file_id : null,
                documents : [],
            },

            showMultiSelect : {
                factor: false,
                standar: false,
                documents: false,
                status_file: false
            }

        }

    },

    methods: {

        async changeOptionDimension( value ){
            this.data.dimension_id = null
            this.data.factor_id = null
            this.data.standar_id = null
            this.showMultiSelect.factor = false
            this.showMultiSelect.standar = false
            this.showMultiSelect.documents = false
            this.showMultiSelect.status_file = false

            if( value == null ) {
                return
            }

            setTimeout( () => {
                this.data.dimension_id = value.id
                this.showMultiSelect.factor = true
            },200 )
        },

        async changeOptionFactor( value ){
            
            this.data.factor_id = null
            this.data.standar_id = null
            this.showMultiSelect.standar = false
            this.showMultiSelect.documents = false
            this.showMultiSelect.status_file = false

            if( value == null ) {
                return
            }

            setTimeout( () => {
                this.data.factor_id = value.id
                this.showMultiSelect.standar = true
            },200 )

        },

        async changeOptionStandar( value ){


            this.data.standar_id = null
            this.showMultiSelect.documents = false
            this.showMultiSelect.status_file = false

            if( value == null || value.hasOwnProperty() ) {
                return
            }

            this.data.standar_id = value.id

            setTimeout( () => {
                this.data.factor_id = value.id
                this.showMultiSelect.status_file = true
            },200 )

        }, 

        async changeOptionStatusFile( value ){
            
            this.data.status_file_id = value.id

            this.showMultiSelect.documents = false

            if( value == null ) return
            
            this.data.status_file_id = value.id

            try {

                const response = await axios.get( `/api/file-get-by-standar/${this.data.standar_id}/${this.data.status_file_id}` )

                this.showMultiSelect.documents = true

                this.data.documents = {...response.data.data}
                
            } catch ( e ) {
                
            }

        }

    },

    mounted() {
        

    }

}
</script>