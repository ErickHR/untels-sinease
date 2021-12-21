<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfficeStandarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('office_standar', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('office_id')->nullable();
            $table->foreign('office_id')
                ->references('id')
                ->on('offices')
                ->onDelete('cascade');
            
            $table->unsignedBigInteger('standar_id')->nullable();
            $table->foreign('standar_id')
                ->references('id')
                ->on('standars')
                ->onDelete('cascade');

            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->dateTime('datetime_register')->nullable();
            $table->boolean('status')->default(true);

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
        Schema::dropIfExists('office_standar');
    }
}
