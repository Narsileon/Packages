<?php

namespace App\Http\Controllers\Backoffice;

#region USE

use App\Http\Controllers\Controller;
use App\Models\Session\Locale;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

#endregion

class LanguageController extends Controller
{
    #region PUBLIC METHODS

    public function index()
    {
        $locales = Locale::search(request('search'))->get();

        $filters = [
            'search' => Request::input('search'),
        ];

        return Inertia::render('Backoffice/Languages/Index', compact(
            'locales',
            'filters',
        ));
    }

    public function update($request)
    {
        foreach($request as $item)
        {
            $attributes = $request->validated();
            $item->update($attributes);
        }

        return redirect(route('backoffice.orders.index'));
    }

    #endregion
}
