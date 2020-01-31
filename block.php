<?php

/**
 * Plugin name: Gutendashd
 */

add_action('admin_init', function () {
    $manifest = (object) require __DIR__ . '/admin/admin.asset.php';
    wp_enqueue_script('gutendash-js', plugins_url('admin/admin.js', __FILE__), $manifest->dependencies, $manifest->version);
    wp_enqueue_style('gutendash-css', plugins_url('admin/admin.css', __FILE__), [], $manifest->version);
});
