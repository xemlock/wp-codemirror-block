<?php
/*
* Plugin Name:  CodeMirror Blocks
* Plugin URI:   https://wordpress.org/plugins/wp-codemirror-blocks/
 * Description: This Plug-in provides Code Block. it act as (syntax highlighter) built with CodeMirrror library, it is usefull for developers or tutorials blog to display highlighted code.
 * Version:     1.0.2
 * Author:      Vicky Agravat
 * Author URI:  https://profiles.wordpress.org/vickyagravat
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: codemirror-blocks
 * @package CodeMirror_Blockks
 */

defined('ABSPATH') || die;

if (! defined('CODEMIRROR_BLOCKS_PLUGIN')) {
    define('CODEMIRROR_BLOCKS_PLUGIN', __FILE__);
}

include( 'inc/class-codemirror-blocks.php' );
Codemirror_Blocks::instance();
