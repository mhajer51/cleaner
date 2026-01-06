<?php

use App\Http\Controllers\Admin\AuthenticatedSessionController as AdminAuthenticatedSessionController;
use App\Http\Controllers\SliderController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App');
});

Route::redirect('/login', '/admin/login');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthenticatedSessionController::class, 'create'])
            ->name('login');
        Route::post('/login', [AdminAuthenticatedSessionController::class, 'store'])
            ->name('login.store');
    });

    Route::get('/session', function () {
        return response()->json([
            'authenticated' => Auth::guard('admin')->check(),
        ]);
    })->name('session');

    Route::middleware('auth:admin')->group(function () {
        Route::get('/dashboards', function () {
            return Inertia::render('App');
        })->name('dashboard');

        Route::redirect('/dashboard', '/admin/dashboards');

        Route::get('/slider', [SliderController::class, 'index'])
            ->name('slider.index');
        Route::post('/slider', [SliderController::class, 'store'])
            ->name('slider.store');

        Route::post('/logout', [AdminAuthenticatedSessionController::class, 'destroy'])
            ->name('logout');
    });
});

Route::get('/{any}', function () {
    return Inertia::render('App');
})->where('any', '.*');
