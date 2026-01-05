<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SliderTranslate extends Model
{
    protected $table = 'slider_translate';

    protected $fillable = [
        'slider_id',
        'title_ar',
        'title_en',
        'description_ar',
        'description_en',
    ];

    public function slider(): BelongsTo
    {
        return $this->belongsTo(Slider::class, 'slider_id');
    }
}
