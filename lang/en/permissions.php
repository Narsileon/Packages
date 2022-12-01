<?php

use App\Acl\Permissions;

return [
    'permissions'   => 'permission|permissions',
    'roles'         => 'role|roles',

    Permissions::BACKEND_VIEW           => 'View backoffice',

    Permissions::FAQS_VIEW              => 'View FAQs',
    Permissions::FAQS_CREATE            => 'Create a FAQ',
    Permissions::FAQS_UPDATE            => 'Update a FAQ',
    Permissions::FAQS_DELETE            => 'Delete a FAQ',

    Permissions::GENERAL_SETTINGS_VIEW  => 'View general settings',

    Permissions::LANGUAGES_VIEW         => 'View languages',

    Permissions::MENU_ITEMS_VIEW        => 'View menu items',
    Permissions::MENU_ITEMS_CREATE      => 'Create a menu item',
    Permissions::MENU_ITEMS_UPDATE      => 'Update a menu item',
    Permissions::MENU_ITEMS_DELETE      => 'Delete a menu item',

    Permissions::ORDERS_VIEW            => 'View orders',
    Permissions::ORDERS_CREATE          => 'Create an order',
    Permissions::ORDERS_UPDATE          => 'Update an order',
    Permissions::ORDERS_DELETE          => 'Delete an order',

    Permissions::ROLES_VIEW             => 'View roles',
    Permissions::ROLES_CREATE           => 'Create a role',
    Permissions::ROLES_UPDATE           => 'Update a role',
    Permissions::ROLES_DELETE           => 'Delete a role',

    Permissions::USERS_VIEW             => 'View users',
    Permissions::USERS_CREATE           => 'Create an user',
    Permissions::USERS_UPDATE           => 'Update an user',
    Permissions::USERS_DELETE           => 'Delete an user',
];
