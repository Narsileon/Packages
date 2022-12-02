<?php

use App\Acl\Permissions;

return [
    'permissions'   => 'Berechtigung|Berechtigungen',
    'roles'         => 'Rolle|Rollen',

    Permissions::BACKEND_VIEW               => 'Anzeigen des Backoffice',

    Permissions::FAQS_VIEW                  => 'Anzeigen von FAQs',
    Permissions::FAQS_CREATE                => 'Erstellen einer FAQ',
    Permissions::FAQS_UPDATE                => 'Bearbeiten einer FAQ',
    Permissions::FAQS_DELETE                => 'Löschen einer FAQ',

    Permissions::GENERAL_SETTINGS_VIEW      => 'Anzeigen von allgemeinen Einstellungen',
    Permissions::GENERAL_SETTINGS_UPDATE    => 'Bearbeiten von allgemeinen Einstellungen',

    Permissions::LANGUAGES_VIEW             => 'Anzeigen von Sprachen',

    Permissions::MENU_ITEMS_VIEW            => 'Anzeigen von Menüpunkte',
    Permissions::MENU_ITEMS_CREATE          => 'Erstellen eines Menüpunkts',
    Permissions::MENU_ITEMS_UPDATE          => 'Bearbeiten eines Menüpunkts',
    Permissions::MENU_ITEMS_DELETE          => 'Löschen eines Menüpunkts',


    Permissions::ORDERS_VIEW                => 'Anzeigen von Aufträgen',
    Permissions::ORDERS_CREATE              => 'Erstellen eines Auftrags',
    Permissions::ORDERS_UPDATE              => 'Bearbeiten eines Auftrags',
    Permissions::ORDERS_DELETE              => 'Löschen eines Auftrags',

    Permissions::ROLES_VIEW                 => 'Anzeigen von Rollen',
    Permissions::ROLES_CREATE               => 'Erstellen einer Rolle',
    Permissions::ROLES_UPDATE               => 'Bearbeiten einer Rolle',
    Permissions::ROLES_DELETE               => 'Löschen einer Rolle',

    Permissions::USERS_VIEW                 => 'Anzeigen von Benutzern',
    Permissions::USERS_CREATE               => 'Erstellen eines Benutzers',
    Permissions::USERS_UPDATE               => 'Bearbeiten eines Benutzers',
    Permissions::USERS_DELETE               => 'Löschen eines Benutzers',
];
