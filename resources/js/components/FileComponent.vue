<template>
    <div class="file-wrapper position-relative m-3">
        <div class="icon icon-shape bg-danger text-white rounded-circle shadow file-remove"  @click="removeFile">
            <i class="fas fa-minus"></i>
        </div>
        <div class="file-header d-flex justify-content-center align-items-center">
            <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i class="far fa-file-pdf fa-5x"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        
        props : {
            file : {
                type : Object,
                default : null,
            }
        },

        data() {
            return {}
        },

        methods: {
            
            removeFile(){
                this.$emit( 'removeFile', file.id )
            }

        },

        mounted() {
            
        }

    }
</script>
