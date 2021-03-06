<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model {

    protected $fillable = ['name', 'status', 'image', 'published_at'];

    public function path(){
        return "/v1/movies/{$this->id}";
    }

    public function turns(){
        return $this->belongsToMany('App\Models\Turn');
    }
}