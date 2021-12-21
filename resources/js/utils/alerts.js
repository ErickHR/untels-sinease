
import Swal from 'sweetalert2'

export class Alerts {

    success( title ) {
        return Swal.fire({
            toast : true,
            timerProgressBar: true,
            timer: 2000,
            showConfirmButton: false,
            icon: 'success',
            title
        })
    }

    error( title ) {
        return Swal.fire({
            toast : true,
            timerProgressBar: true,
            timer: 3000,
            showConfirmButton: false,
            icon: 'error',
            title
        })
    }

}
