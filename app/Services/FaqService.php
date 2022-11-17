<?php

namespace App\Services;

#region USE

use App\Models\Frontend\Faq;

#endregion

class FaqService
{
    #region PUBLIC METHODS

    public static function getDefaultTemplate()
    {
        $columns = self::getDefaultColumns();
        $order = self::getDefaultOrder();
        $sorting = self::getDefaultSorting();

        return compact(
            'columns',
            'order',
            'sorting',
        );
    }

    public static function getDefaultColumns()
    {
        return array(
            (object) [
                'accessorKey' => Faq::FIELD_ID,
                'id' => Faq::FIELD_ID,
                'header' => 'common.id',
            ],
            (object) [
                'accessorKey' => Faq::FIELD_QUESTION,
                'id' => Faq::FIELD_QUESTION,
                'header' => 'common.questions',
            ],
            (object) [
                'accessorKey' => Faq::FIELD_ANSWER,
                'id' => Faq::FIELD_ANSWER,
                'header' => 'common.answers',
            ],
            (object) [
                'accessorKey' => Faq::CREATED_AT,
                'id' => Faq::CREATED_AT,
                'header' => 'validation.attributes.created_at',
            ],
            (object) [
                'accessorKey' => Faq::UPDATED_AT,
                'id' => Faq::UPDATED_AT,
                'header' => 'validation.attributes.updated_at',
            ],
        );
    }

    public static function getDefaultOrder()
    {
        return [
            Faq::FIELD_ID,
            Faq::FIELD_QUESTION,
            Faq::FIELD_ANSWER,
            Faq::UPDATED_AT,
            Faq::CREATED_AT,
        ];
    }

    public static function getDefaultSorting()
    {
        return array(
            (object) [
                'id' => Faq::FIELD_ID,
                'desc' => false,
            ],
        );
    }

    #endregion
}
