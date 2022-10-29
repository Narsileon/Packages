<?php

use App\Acl\Permissions;

return [
    'roles'                         => 'Rolle|Rollen',
    'permissions'                   => 'Berechtigung|Berechtigungen',

    Permissions::BACKOFFICE_VIEW    => 'Anzeigen des Backoffice',

    Permissions::USERS_VIEW         => 'Anzeigen von Benutzern',
    Permissions::USERS_CREATE       => 'Erstellung eines Benutzers',
    Permissions::USERS_UPDATE       => 'Bearbeitung eines Benutzers',
    Permissions::USERS_DELETE       => 'Löschen eines Benutzers',

    Permissions::ROLES_VIEW         => 'Anzeigen von Rollen',
    Permissions::ROLES_CREATE       => 'Erstellung einer Rolle',
    Permissions::ROLES_UPDATE       => 'Bearbeitung einer Rolle',
    Permissions::ROLES_DELETE       => 'Löschen einer Rolle',

    Permissions::FAQS_VIEW          => 'Anzeigen von Faqs',
    Permissions::FAQS_CREATE        => 'Erstellung einer faq',
    Permissions::FAQS_UPDATE        => 'Bearbeitung einer faq',
    Permissions::FAQS_DELETE        => 'Löschen einer faq',
];
