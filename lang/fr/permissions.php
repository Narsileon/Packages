<?php

use App\Acl\Permissions;

return [
    'roles'                         => 'Rôle|Rôles',
    'permissions'                   => 'Autorisation|Autorisations',

    Permissions::BACKOFFICE_VIEW    => 'Voir l\'arrière guichet',
    Permissions::USERS_VIEW         => 'Voir les utilisateurs',
    Permissions::USERS_CREATE       => 'Créer un utilisateur',
    Permissions::USERS_UPDATE       => 'Modifier un utilisateur',
    Permissions::USERS_DELETE       => 'Supprimer un utilisateur',
    Permissions::ROLES_VIEW         => 'Voir les rôles',
    Permissions::ROLES_CREATE       => 'Créer un rôle',
    Permissions::ROLES_UPDATE       => 'Modifier un rôle',
    Permissions::ROLES_DELETE       => 'Supprime un rôle',
];
