<?php

use App\Http\Controllers\Admin\AuthenticatedSessionController as AdminAuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SliderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboards/default', function () {
        return Inertia::render('App');
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

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthenticatedSessionController::class, 'create'])
            ->name('login');
        Route::post('/login', [AdminAuthenticatedSessionController::class, 'store'])
            ->name('login.store');
    });

    Route::middleware('auth:admin')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('App');
        })->name('dashboard');

        Route::post('/logout', [AdminAuthenticatedSessionController::class, 'destroy'])
            ->name('logout');
    });
});

require __DIR__.'/auth.php';

Route::get('/{any}', function () {
    return Inertia::render('App');
})->where('any', '.*');
