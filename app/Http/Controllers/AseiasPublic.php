<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class AseiasPublic extends Controller
{
    public function index(/* Pizza $pizza */): Response
    {
        return Inertia::render('ASEIAS/index', [
            /*  'pizza' => $pizza, */]);
    }

    public function contact(/* Pizza $pizza */): Response
    {
        return Inertia::render('ASEIAS/contact', [
            /*  'pizza' => $pizza, */]);
    }
}
