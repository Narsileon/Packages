<?php

use App\Acl\Permissions;

return [
    'roles'                         => 'Role|Roles',
    'permissions'                   => 'Permission|Permissions',

    Permissions::BACKOFFICE_VIEW    => 'View backoffice',
    Permissions::USERS_VIEW         => 'View users',
    Permissions::USERS_CREATE       => 'Create an user',
    Permissions::USERS_UPDATE       => 'Update an user',
    Permissions::USERS_DELETE       => 'Delete an user',
    Permissions::ROLES_VIEW         => 'View roles',
    Permissions::ROLES_CREATE       => 'Create a role',
    Permissions::ROLES_UPDATE       => 'Update a role',
    Permissions::ROLES_DELETE       => 'Delete a role',
];
