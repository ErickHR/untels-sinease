<template>
    <div>
        <div class="modal fade" id="modal-component" tabindex="-1" role="dialog" aria-labelledby="modal-component-label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" :class="[ sizeModal ]" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-component-label">
                            <slot name="header"> </slot> 
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot v-bind:dataForm="dataForm"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {

        props : {
            sizeModal : {
                default : '',
                type : String
            }
        },

        data() {
            return {
                dataForm : {
                    description : ''
                }
            }
        },

        methods : {
            save(){
                this.$emit( 'save' )
            }
        },

        mounted(){

        },

        watch : {
            'dataForm.description' : function(){
                this.$emit( 'dataForm', this.dataForm )
            }
        }

    }

</script>