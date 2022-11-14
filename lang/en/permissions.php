<?php

use App\Acl\Permissions;

return [
    'new_role'      => 'a new role',
    'permissions'   => 'permission|permissions',
    'roles'         => 'role|roles',

    Permissions::BACKEND_VIEW        => 'View backoffice',

    Permissions::LANGUAGES_VIEW         => 'View languages',

    Permissions::USERS_VIEW             => 'View users',
    Permissions::USERS_CREATE           => 'Create an user',
    Permissions::USERS_UPDATE           => 'Update an user',
    Permissions::USERS_DELETE           => 'Delete an user',

    Permissions::ROLES_VIEW             => 'View roles',
    Permissions::ROLES_CREATE           => 'Create a role',
    Permissions::ROLES_UPDATE           => 'Update a role',
    Permissions::ROLES_DELETE           => 'Delete a role',

    Permissions::HEADER_LINKS_VIEW      => 'View header links',
    Permissions::HEADER_LINKS_CREATE    => 'Create a header link',
    Permissions::HEADER_LINKS_UPDATE    => 'Update a header link',
    Permissions::HEADER_LINKS_DELETE    => 'Delete a header link',

    Permissions::FOOTER_LINKS_VIEW      => 'View footer links',
    Permissions::FOOTER_LINKS_CREATE    => 'Create a footer link',
    Permissions::FOOTER_LINKS_UPDATE    => 'Update a footer link',
    Permissions::FOOTER_LINKS_DELETE    => 'Delete a footer link',

    Permissions::FAQS_VIEW              => 'View FAQs',
    Permissions::FAQS_CREATE            => 'Create a FAQ',
    Permissions::FAQS_UPDATE            => 'Update a FAQ',
    Permissions::FAQS_DELETE            => 'Delete a FAQ',

    Permissions::ORDERS_VIEW            => 'View orders',
    Permissions::ORDERS_CREATE          => 'Create an order',
    Permissions::ORDERS_UPDATE          => 'Update an order',
    Permissions::ORDERS_DELETE          => 'Delete an order',
];
