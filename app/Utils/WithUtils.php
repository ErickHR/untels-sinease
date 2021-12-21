<?php 

namespace App\Utils;

class WithUtils {

    public static function standar(){
        return [
            'factor'
        ];
    }

    public static function dimension(){
        return [
            'factor'
        ];
    }

    public static function factor(){
        return [
            'standar',
            'standar.file'
        ];
    }

    public static function directory(){
        return [
            'files',
            'files.standar',
            'files.standar.factor',
            'files.statusFile',
            'files.user',
            'files.user.person',
            'files.user.person.position',
            'files.fileDescription',
            'files.fileDescription.user',
            'files.fileDescription.user.person'
        ];
    }

    public static function file(){
        return [
            'standar',
            'standar.factor',
            'statusFile',
            'user',
            'user.person',
            'user.person.position',
            'fileDescription',
            'fileDescription.user',
            'fileDescription.user.person'
        ];
    }

    public static function fileDescription(){
        return [
            'user',
            'user.person',
        ];
    }

    public static function person(){
        return [
            'position',
        ];
    }

    public static function permissions(){
        return [
            'module',
        ];
    }

    public static function module(){
        return [
            'permissions',
        ];
    }

    public static function moduleAuth(){
        return [
            'permissionsAuth',
        ];
    }

    public static function rol(){
        return [
            'permissions',
            'permissions.module',
        ];
    }

    public static function user(){
        return [
            'role',
        ];
    }

    public static function userAll(){
        return [
            'person',
            'person.position',
            'person.position.office',
            'person.position.office.standar'
        ];
    }

    public static function office(){
        return [
            'standar'
        ];
    }

}

?>