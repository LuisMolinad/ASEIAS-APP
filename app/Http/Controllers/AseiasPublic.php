<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class AseiasPublic extends Controller
{
    public function show(/* Pizza $pizza */): Response
    {
        return Inertia::render('ASEIAS/Show', [
            /*  'pizza' => $pizza, */]);
    }
}
