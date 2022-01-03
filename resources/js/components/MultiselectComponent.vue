<template>
    <div v-if=" !validation ">
        <multiselect 
            v-model="value" 
            :options="options" 
            placeholder='Categoría Standar'
            selectLabel="Haz click para seleccionar"
            selectedLabel='Seleccionado'
            deselectLabel="Haz click para eliminar"
            :label="label"
            @select="selectOption"
            @remove="removeOption"
            @input="changeOption"
            :multiple="multipleSelect"
        ></multiselect>
    </div>
    <div v-else>
        <validation-observer>
            <validation-provider name="NOMBRE" rules="required" v-slot="{ errors }">
                <multiselect 
                    v-model="value" 
                    :options="options" 
                    placeholder='Categoría Standar'
                    selectLabel="Haz click para seleccionar"
                    selectedLabel='Seleccionado'
                    deselectLabel="Haz click para eliminar"
                    :label="label"
                    @select="selectOption"
                    @remove="removeOption"
                    @input="changeOption"
                    :multiple="multipleSelect"
                    :class="{ 'is-invalid is-invalid-select' : errors.length != 0, 'form-control-alternative' : errors.length == 0 }"
                ></multiselect>
                <span class="invalid-feedback">{{ errors[0] }}</span> 
            </validation-provider>
       </validation-observer>

    </div>
</template>
<script>

    import Multiselect from 'vue-multiselect';

    export default {

        components: { 
            Multiselect
        },

        props : {
            route : {
                type : String, 
                default : ''
            },

            label : {
                type : String, 
                default : 'name'
            },

            multipleSelect : {
                type : Boolean, 
                default : false
            },

            validation : {
                type : Boolean,
                default : false
            }

        },

        data() {
            return {
                value: null,
                options: []
            }
        },

        methods: {

            removeOption(removeOption, id){
                
                if( this.multipleSelect ) {
                    this.value.splice( id, 1 )
                }

                this.$emit('removeOption', removeOption)
            },

            selectOption(selectedOption, id){
                this.$emit('selectOption', selectedOption)
            },

            changeOption( value ){
                this.$emit('changeOption', {...value})
            },

            async showData(){
                let _this = this
                try {
                    const response = await axios( this.route )
                    
                    if( response.status == 200 ) {

                        if( response.data.value ) {
                            
                            let data = response.data.data


                            data.forEach( ( item )  => {
                            
                                let selectData = { ...item }
                                _this.options.push( { ...selectData } )

                            });
                            

                        }

                    }

                } catch ( e ) {
                    
                }

            }
            
        },

        mounted(){

            this.showData()

        }
    }
</script>