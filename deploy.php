<?php

namespace Deployer;

require 'recipe/laravel.php';

date_default_timezone_set('Europe/Berlin');
set('root_dir', __DIR__);

/**
 * Config
 */

set('repository', 'https://github.com/Narsileon/Packages.git');

add('shared_dirs', []);
add('shared_files', []);
add('writable_dirs', []);

/**
 * Hosts
 */

host('domain_prod')
    ->set('remote_user', 'deployer')
    ->set('bin/php', '/usr/bin/php8.1')
    ->set('auth_basic', 'test:test')
    ->set('deploy_path', '~/www/example');

/**
 * Hooks
 */

after('deploy:failed', 'deploy:unlock');
