<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route untuk melihat seluruh data patients
Route::get('/patients', [PatientsController::class, 'index']);

//Route untuk add patient data baru
Route::post('/patients', [PatientsController::class, 'store']);

//Route untuk mendapatkan detail data patient
Route::get("/patients/{id}", [PatientsController::class, 'show']);

//Route untuk meng-update data patient
Route::put('/patients/{id}', [PatientsController::class, 'update']);

//Route untuk menghapus data patient
Route::delete('/patients/{id}', [PatientsController::class, 'destroy']);