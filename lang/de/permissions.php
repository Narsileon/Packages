<?php

use App\Acl\Permissions;

return [
    'permissions'   => 'Berechtigung|Berechtigungen',
    'roles'         => 'Rolle|Rollen',

    Permissions::BACKEND_VIEW           => 'Anzeigen des Backoffice',

    Permissions::FAQS_VIEW              => 'Anzeigen von FAQs',
    Permissions::FAQS_CREATE            => 'Erstellung einer FAQ',
    Permissions::FAQS_UPDATE            => 'Bearbeitung einer FAQ',
    Permissions::FAQS_DELETE            => 'Löschen einer FAQ',

    Permissions::FOOTER_LINKS_VIEW      => 'Anzeigen von Footer-Links',
    Permissions::FOOTER_LINKS_CREATE    => 'Erstellung eines Footer-Links',
    Permissions::FOOTER_LINKS_UPDATE    => 'Bearbeitung eines Footer-Linksk',
    Permissions::FOOTER_LINKS_DELETE    => 'Löschen eines Footer-Links',

    Permissions::GENERAL_SETTINGS_VIEW  => 'Anzeigen von allgemeinen Einstellungen',

    Permissions::HEADER_LINKS_VIEW      => 'Anzeigen von Header-Links',
    Permissions::HEADER_LINKS_CREATE    => 'Erstellung eines Header-Links',
    Permissions::HEADER_LINKS_UPDATE    => 'Bearbeitung eines Header-Links',
    Permissions::HEADER_LINKS_DELETE    => 'Löschen eines Header-Links',

    Permissions::LANGUAGES_VIEW         => 'Anzeigen von Sprachen',

    Permissions::MENU_ITEM_CREATE       => 'Erstellung eines Menüpunkts',
    Permissions::MENU_ITEM_UPDATE       => 'Bearbeitung eines Menüpunkts',
    Permissions::MENU_ITEM_DELETE       => 'Löschen eines Menüpunkts',

    Permissions::ORDERS_VIEW            => 'Anzeigen von Aufträgen',
    Permissions::ORDERS_CREATE          => 'Erstellung eines Auftrags',
    Permissions::ORDERS_UPDATE          => 'Bearbeitung eines Auftrags',
    Permissions::ORDERS_DELETE          => 'Löschen eines Auftrags',

    Permissions::ROLES_VIEW             => 'Anzeigen von Rollen',
    Permissions::ROLES_CREATE           => 'Erstellung einer Rolle',
    Permissions::ROLES_UPDATE           => 'Bearbeitung einer Rolle',
    Permissions::ROLES_DELETE           => 'Löschen einer Rolle',

    Permissions::USERS_VIEW             => 'Anzeigen von Benutzern',
    Permissions::USERS_CREATE           => 'Erstellung eines Benutzers',
    Permissions::USERS_UPDATE           => 'Bearbeitung eines Benutzers',
    Permissions::USERS_DELETE           => 'Löschen eines Benutzers',
];
