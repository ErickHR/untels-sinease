<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol_user', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger( 'rol_id' )->nullable();
            $table->foreign('rol_id')
                ->references('id')
                ->on('rols')
                ->onDelete('cascade');
            $table->unsignedBigInteger( 'user_id' )->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('rol_user');
    }
}
