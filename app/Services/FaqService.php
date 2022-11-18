<?php

namespace App\Services;

#region USE

use App\Models\Frontend\Faq;

#endregion

class FaqService
{
    #region PUBLIC METHODS

    public static function getColumns()
    {
        return array(
            [
                'accessorKey' => Faq::FIELD_ID,
                'id' => Faq::FIELD_ID,
                'header' => 'common.id',
                'minSize' => 100,
                'maxSize' => 300,
            ],
            [
                'accessorKey' => Faq::FIELD_QUESTION,
                'id' => Faq::FIELD_QUESTION,
                'header' => 'common.questions',
                'minSize' => 100,
                'maxSize' => 300,
            ],
            [
                'accessorKey' => Faq::FIELD_ANSWER,
                'id' => Faq::FIELD_ANSWER,
                'header' => 'common.answers',
                'minSize' => 100,
                'maxSize' => 300,
            ],
            [
                'accessorKey' => Faq::CREATED_AT,
                'id' => Faq::CREATED_AT,
                'header' => 'validation.attributes.created_at',
                'minSize' => 100,
                'maxSize' => 300,
            ],
            [
                'accessorKey' => Faq::UPDATED_AT,
                'id' => Faq::UPDATED_AT,
                'header' => 'validation.attributes.updated_at',
                'minSize' => 100,
                'maxSize' => 300,
            ],
        );
    }

    public static function getDefaultTemplate()
    {
        $order = self::getDefaultOrder();
        $sorting = self::getDefaultSorting();

        return compact(
            'order',
            'sorting',
        );
    }

    #endregion

    #region PRIVATE METHODS

    private static function getDefaultOrder()
    {
        return [
            Faq::FIELD_ID,
            Faq::FIELD_QUESTION,
            Faq::FIELD_ANSWER,
            Faq::UPDATED_AT,
            Faq::CREATED_AT,
        ];
    }

    private static function getDefaultSorting()
    {
        return array(
            [
                'id' => 'id',
                'desc' => false,
            ],
        );
    }

    #endregion
}
