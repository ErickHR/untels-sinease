import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Este campo es obligatorio'
});

extend('min', {
    validate(value, args) {
        return value.length >= args.length;
    },
    message: 'El campo {_field_} debe tener más de {length} dígitos',
    params: ['length']
});