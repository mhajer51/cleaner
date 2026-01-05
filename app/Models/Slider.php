<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Slider extends Model
{
    protected $table = 'slider';

    protected $fillable = [
        'order',
        'is_public',
        'status',
    ];

    protected $casts = [
        'is_public' => 'boolean',
    ];

    public function translation(): HasOne
    {
        return $this->hasOne(SliderTranslate::class, 'slider_id');
    }
}
