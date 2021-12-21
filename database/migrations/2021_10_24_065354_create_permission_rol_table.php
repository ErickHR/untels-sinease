<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionRolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission_rol', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger( 'permission_id' )->nullable();
            $table->foreign('permission_id')
                ->references('id')
                ->on('permissions')
                ->onDelete('cascade');
            $table->unsignedBigInteger( 'rol_id' )->nullable();
            $table->foreign('rol_id')
                ->references('id')
                ->on('rols')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permission_rol');
    }
}
