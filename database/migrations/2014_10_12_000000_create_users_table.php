<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('email')->unique();
            $table->string('phone')->nullable(true);
            $table->string('adresse')->nullable(true);
            $table->string('cin')->nullable(true);
            $table->string('organisation')->nullable(true);
            // $table->string('remember_token');
            $table->string('password');
            $table->string('role');
            // $table->boolean('isActive');

            $table->unsignedBigInteger('idRegion')->nullable(true);
            $table->foreign('idRegion')->references('id')->on('regions');

            $table->rememberToken()->nullable(true);
            $table->timestamps();
        });

        DB::insert("INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `phone`, `adresse`, `cin`, `organisation`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
        (1, 'admin', 'admin', 'admin@gmail.com', '0537255578', NULL, NULL, NULL, '123', 'admin', NULL, '2019-06-27 12:23:57', '2019-06-27 12:23:57')
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
