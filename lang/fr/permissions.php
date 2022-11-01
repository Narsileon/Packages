<?php

use App\Acl\Permissions;

return [
    'new_role'                      => 'un nouveau rôle',
    'permissions'                   => 'autorisation|autorisations',
    'roles'                         => 'rôle|rôles',

    Permissions::BACKOFFICE_VIEW    => 'Voir l\'arrière guichet',

    Permissions::USERS_VIEW         => 'Voir les utilisateurs',
    Permissions::USERS_CREATE       => 'Créer un utilisateur',
    Permissions::USERS_UPDATE       => 'Modifier un utilisateur',
    Permissions::USERS_DELETE       => 'Supprimer un utilisateur',

    Permissions::ROLES_VIEW         => 'Voir les rôles',
    Permissions::ROLES_CREATE       => 'Créer un rôle',
    Permissions::ROLES_UPDATE       => 'Modifier un rôle',
    Permissions::ROLES_DELETE       => 'Supprimer un rôle',

    Permissions::FAQS_VIEW          => 'Voir les faqs',
    Permissions::FAQS_CREATE        => 'Créer une faq',
    Permissions::FAQS_UPDATE        => 'Modifier une faq',
    Permissions::FAQS_DELETE        => 'Supprimer une faq',
];
