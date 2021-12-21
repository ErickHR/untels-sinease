<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name')->nullable();
            $table->string('url')->nullable();
            $table->string('name_file')->nullable();
            $table->text('description')->nullable();

            $table->unsignedBigInteger('standars_id')->nullable();
            $table->foreign('standars_id')
                ->references('id')
                ->on('standars')
                ->onDelete('cascade');

            $table->unsignedBigInteger('directory_id')->nullable();
            $table->foreign('directory_id')
                ->references('id')
                ->on('directories')
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
        Schema::dropIfExists('files');
    }
}
