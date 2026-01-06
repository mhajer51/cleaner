<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SliderController extends Controller
{
    public function index(): Response
    {
        $sliders = Slider::with('translation')
            ->orderBy('order')
            ->get()
            ->map(function (Slider $slider) {
                return [
                    'id' => $slider->id,
                    'order' => $slider->order,
                    'is_public' => $slider->is_public,
                    'status' => $slider->status,
                    'title_ar' => $slider->translation?->title_ar,
                    'title_en' => $slider->translation?->title_en,
                    'description_ar' => $slider->translation?->description_ar,
                    'description_en' => $slider->translation?->description_en,
                ];
            });

        return Inertia::render('Admin/Slider', [
            'sliders' => $sliders,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title_ar' => ['required', 'string', 'max:255'],
            'title_en' => ['required', 'string', 'max:255'],
            'description_ar' => ['nullable', 'string'],
            'description_en' => ['nullable', 'string'],
            'order' => ['required', 'integer', 'min:1'],
            'is_public' => ['nullable', 'boolean'],
            'status' => ['required', 'string', 'max:50'],
        ]);

        $slider = Slider::create([
            'order' => $validated['order'],
            'is_public' => $validated['is_public'] ?? false,
            'status' => $validated['status'],
        ]);

        $slider->translation()->create([
            'title_ar' => $validated['title_ar'],
            'title_en' => $validated['title_en'],
            'description_ar' => $validated['description_ar'] ?? null,
            'description_en' => $validated['description_en'] ?? null,
        ]);

        return redirect()
            ->route('admin.slider.index')
            ->with('success', 'Slider created successfully.');
    }
}
