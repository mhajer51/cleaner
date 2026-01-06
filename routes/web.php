<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SliderController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboards/default', function () {
        return view('app');
    })->name('dashboard');

    Route::get('/admin/slider', [SliderController::class, 'index'])
        ->name('admin.slider.index');
    Route::post('/admin/slider', [SliderController::class, 'store'])
        ->name('admin.slider.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
