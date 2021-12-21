<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFileHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_histories', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');

            $table->unsignedBigInteger('file_id')->nullable();
            $table->foreign('file_id')
                ->references('id')
                ->on('files')
                ->onDelete('cascade');
            
            $table->unsignedBigInteger('status_file_id')->nullable();
            $table->foreign('status_file_id')
                ->references('id')
                ->on('status_files')
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
        Schema::dropIfExists('file_histories');
    }
}
