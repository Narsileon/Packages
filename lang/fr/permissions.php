<?php

use App\Acl\Permissions;

return [
    'permissions'   => 'autorisation|autorisations',
    'roles'         => 'rôle|rôles',

    Permissions::BACKEND_VIEW           => 'Voir l\'arrière guichet',

    Permissions::FAQS_VIEW              => 'Voir les FAQs',
    Permissions::FAQS_CREATE            => 'Créer une FAQ',
    Permissions::FAQS_UPDATE            => 'Modifier une FAQ',
    Permissions::FAQS_DELETE            => 'Supprimer une FAQ',

    Permissions::FOOTER_LINKS_VIEW      => 'Voir les liens de pied de page',
    Permissions::FOOTER_LINKS_CREATE    => 'Créer un lien de pied de page',
    Permissions::FOOTER_LINKS_UPDATE    => 'Modifier un lien de pied de page',
    Permissions::FOOTER_LINKS_DELETE    => 'Supprimer un lien de pied de page',

    Permissions::GENERAL_SETTINGS_VIEW  => 'Voir les paramètres généraux',

    Permissions::HEADER_LINKS_VIEW      => 'Voir les liens d\'en-tête',
    Permissions::HEADER_LINKS_CREATE    => 'Créer un lien d\'en-tête',
    Permissions::HEADER_LINKS_UPDATE    => 'Modifier un lien d\'en-tête',
    Permissions::HEADER_LINKS_DELETE    => 'Supprimer un lien d\'en-tête',

    Permissions::LANGUAGES_VIEW         => 'Voir les langues',

    Permissions::MENU_ITEM_CREATE       => 'Créer un élément de menu',
    Permissions::MENU_ITEM_UPDATE       => 'Modifier un élément de menu',
    Permissions::MENU_ITEM_DELETE       => 'Supprimer un élément de menu',

    Permissions::ORDERS_VIEW            => 'Voir les commandes',
    Permissions::ORDERS_CREATE          => 'Créer une commande',
    Permissions::ORDERS_UPDATE          => 'Modifier une commande',
    Permissions::ORDERS_DELETE          => 'Supprimer une commande',

    Permissions::ROLES_VIEW             => 'Voir les rôles',
    Permissions::ROLES_CREATE           => 'Créer un rôle',
    Permissions::ROLES_UPDATE           => 'Modifier un rôle',
    Permissions::ROLES_DELETE           => 'Supprimer un rôle',

    Permissions::USERS_VIEW             => 'Voir les utilisateurs',
    Permissions::USERS_CREATE           => 'Créer un utilisateur',
    Permissions::USERS_UPDATE           => 'Modifier un utilisateur',
    Permissions::USERS_DELETE           => 'Supprimer un utilisateur',
];
