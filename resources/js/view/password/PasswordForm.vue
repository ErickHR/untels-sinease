<template>
    <div class="justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-10 ">
                <div class="card">
                    <div class="card-body">
                        <form method="post" autocomplete="off" v-if="false">
                            <h6 class="heading-small text-muted mb-4">User information</h6>
                            <div class="pl-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-name">Name</label>
                                    <input type="text" name="name" id="input-name" class="form-control form-control-alternative" placeholder="Name" value="Admin Admin" required="" autofocus="">
                                </div>
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-email">Email</label>
                                    <input type="email" name="email" id="input-email" class="form-control form-control-alternative" placeholder="Email" value="admin@argon.com" required="">
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn btn-success mt-4">Save</button>
                                </div>
                            </div>
                        </form>
                        <hr class="my-4">
                        <validation-observer v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(changePassword)" >
                                <h6 class="heading-small text-muted mb-4">CONTRASEÑA</h6>
                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <label class="form-control-label" for="input-current-password">CONTRASEÑA ACTUAL</label>
                                        <validation-provider name="CONTRASEÑA ACTUAL" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" :class="{ 'is-invalid' : errors.length != 0, 'form-control-alternative' : errors.length == 0 }" placeholder="CONTRASEÑA ACTUAL" value="" v-model="dataForm.passwordCurrent">
                                            <span class="invalid-feedback">{{ errors[0] }}</span>
                                        </validation-provider>  
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label" for="input-password">NUEVA CONTRASEÑA</label>
                                        <validation-provider name="NUEVA CONTRASEÑA" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" :class="{ 'is-invalid' : errors.length != 0, 'form-control-alternative' : errors.length == 0 }" placeholder="NUEVA CONTRASEÑA" value="" v-model="dataForm.passwordNew">
                                            <span class="invalid-feedback">{{ errors[0] }}</span>
                                        </validation-provider> 
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label" for="input-password-confirmation">CONFIRMAR NUEVA CONTRASEÑA</label>
                                        <validation-provider name="CONFIRMAR NUEVA CONTRASEÑA" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" :class="{ 'is-invalid' : errors.length != 0, 'form-control-alternative' : errors.length == 0 }" placeholder="CONFIRMAR NUEVA CONTRASEÑA" value="" v-model="dataForm.passwordNewConfirmate">
                                            <span class="invalid-feedback">{{ errors[0] }}</span> 
                                        </validation-provider>
                                    </div>

                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success mt-4" >CAMBIAR CONTRASEÑA</button>
                                    </div>
                                </div>
                            </form>
                        </validation-observer>
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
            dataForm : this.jsonData(),
        }
    },

    methods: {
        

        async changePassword(){

            if( this.dataForm.passwordNew == this.dataForm.passwordNewConfirmate ) {

                Alerts.error( 'La confirmación de contraseña es incorrecta' )
                return

            }

            try {
                
                let body = { ...this.dataForm }

                let response = await axios.post( 'user-change-password', body )

                if( response.status == 200 ) {

                    if( response.data.value ) {
                        
                        Alerts.success( response.data.msg )
                        
                        this.resetForm()

                    } else {

                        Alerts.error( response.data.msg )

                    }
                    

                } else {

                    Alerts.error( response.data.msg )

                }
                    

            } catch ( e ) {
                
                Alerts.error( 'Perdida de conexión ó Error de sistema.' )

            }

        },

        resetForm(){
            this.dataForm = this.jsonData()
        },

        jsonData(){

            return {
                passwordCurrent : '',
                passwordNew : '',
                passwordNewConfirmate : ''
            }

        }

    },

    mounted() {
        
    },

}
</script>