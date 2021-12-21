<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->string('document')->nullable()->unique();
            $table->string('full_name')->nullable();
            $table->string('name')->nullable();
            $table->string('sur_name')->nullable();
            $table->string('last_name')->nullable();
            $table->unsignedBigInteger('positions_id')->nullable();
            $table->foreign('positions_id')
                ->references('id')
                ->on('positions')
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
        Schema::dropIfExists('people');
    }
}
