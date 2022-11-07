<?php

use App\Acl\Permissions;

return [
    'new_role'      => 'eine neue Rolle',
    'permissions'   => 'Berechtigung|Berechtigungen',
    'roles'         => 'Rolle|Rollen',

    Permissions::BACKOFFICE_VIEW        => 'Anzeigen des Backoffice',

    Permissions::LANGUAGES_VIEW         => 'Anzeigen von Sprachen',

    Permissions::USERS_VIEW             => 'Anzeigen von Benutzern',
    Permissions::USERS_CREATE           => 'Erstellung eines Benutzers',
    Permissions::USERS_UPDATE           => 'Bearbeitung eines Benutzers',
    Permissions::USERS_DELETE           => 'Löschen eines Benutzers',

    Permissions::ROLES_VIEW             => 'Anzeigen von Rollen',
    Permissions::ROLES_CREATE           => 'Erstellung einer Rolle',
    Permissions::ROLES_UPDATE           => 'Bearbeitung einer Rolle',
    Permissions::ROLES_DELETE           => 'Löschen einer Rolle',

    Permissions::HEADER_LINKS_VIEW      => 'Anzeigen von Header-Links',
    Permissions::HEADER_LINKS_CREATE    => 'Erstellung eines Header-Links',
    Permissions::HEADER_LINKS_UPDATE    => 'Bearbeitung eines Header-Links',
    Permissions::HEADER_LINKS_DELETE    => 'Löschen eines Header-Links',

    Permissions::FOOTER_LINKS_VIEW      => 'Anzeigen von Footer-Links',
    Permissions::FOOTER_LINKS_CREATE    => 'Erstellung eines Footer-Links',
    Permissions::FOOTER_LINKS_UPDATE    => 'Bearbeitung eines Footer-Linksk',
    Permissions::FOOTER_LINKS_DELETE    => 'Löschen eines Footer-Links',

    Permissions::FAQS_VIEW              => 'Anzeigen von FAQs',
    Permissions::FAQS_CREATE            => 'Erstellung einer FAQ',
    Permissions::FAQS_UPDATE            => 'Bearbeitung einer FAQ',
    Permissions::FAQS_DELETE            => 'Löschen einer FAQ',

    Permissions::ORDERS_VIEW            => 'Anzeigen von Aufträgen',
    Permissions::ORDERS_CREATE          => 'Erstellung eines Auftrags',
    Permissions::ORDERS_UPDATE          => 'Bearbeitung eines Auftrags',
    Permissions::ORDERS_DELETE          => 'Löschen eines Auftrags',
];
