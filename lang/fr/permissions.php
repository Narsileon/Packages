<?php

use App\Acl\Permissions;

return [
    'permissions'   => 'autorisation|autorisations',
    'roles'         => 'rôle|rôles',

    Permissions::BACKEND_VIEW               => 'Voir l\'arrière guichet',

    Permissions::FAQS_VIEW                  => 'Voir les FAQs',
    Permissions::FAQS_CREATE                => 'Créer une FAQ',
    Permissions::FAQS_UPDATE                => 'Modifier une FAQ',
    Permissions::FAQS_DELETE                => 'Supprimer une FAQ',

    Permissions::GENERAL_SETTINGS_VIEW      => 'Voir les paramètres généraux',
    Permissions::GENERAL_SETTINGS_UPDATE    => 'Modifier les paramètres généraux',

    Permissions::LANGUAGES_VIEW             => 'Voir les langues',
    Permissions::LANGUAGES_UPDATE           => 'Modifier les langues',

    Permissions::MENUS_VIEW                 => 'Voir les menus',
    Permissions::MENUS_CREATE               => 'Créer un menu',
    Permissions::MENUS_UPDATE               => 'Modifier un menu',
    Permissions::MENUS_DELETE               => 'Supprimer un menu',

    Permissions::MENU_ITEMS_VIEW            => 'Voir les éléments de menu',
    Permissions::MENU_ITEMS_CREATE          => 'Créer un élémént de menu',
    Permissions::MENU_ITEMS_UPDATE          => 'Modifier un élément de menu',
    Permissions::MENU_ITEMS_DELETE          => 'Supprimer un élément de menu',

    Permissions::ORDERS_VIEW                => 'Voir les commandes',
    Permissions::ORDERS_CREATE              => 'Créer une commande',
    Permissions::ORDERS_UPDATE              => 'Modifier une commande',
    Permissions::ORDERS_DELETE              => 'Supprimer une commande',

    Permissions::ROLES_VIEW                 => 'Voir les rôles',
    Permissions::ROLES_CREATE               => 'Créer un rôle',
    Permissions::ROLES_UPDATE               => 'Modifier un rôle',
    Permissions::ROLES_DELETE               => 'Supprimer un rôle',

    Permissions::TEMPLATES_VIEW             => 'Voir les templates',
    Permissions::TEMPLATES_UPDATE           => 'Modifier les template',

    Permissions::USERS_VIEW                 => 'Voir les utilisateurs',
    Permissions::USERS_CREATE               => 'Créer un utilisateur',
    Permissions::USERS_UPDATE               => 'Modifier un utilisateur',
    Permissions::USERS_DELETE               => 'Supprimer un utilisateur',
];
