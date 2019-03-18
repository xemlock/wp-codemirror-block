<?php

defined('ABSPATH') || die;
/**
 * @package Codemirror_Blocks
 *
 */
class Codemirror_Blocks {
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @static @var boolean instance
     *
     */
    private static $instance = null;
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @var array notice
     *
     */
    private $notice = [];
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @var string plugin_version
     *
     */
    private $plugin_version;
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @var const CODEMIRROR_VERSION
     *
     */
    const CODEMIRROR_VERSION = '5.40.2';
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @var const GUTENBERG_REQUIRE_VERSION
     *
     */
    const GUTENBERG_REQUIRE_VERSION = '4.5.0';

    /**
     * @since Codemirror Blocks 1.0.0
     * @access public
     * @method __construct
     *
     */
    public function __construct()
    {
        add_action( 'init', array($this, 'init') );
        add_action( 'plugins_loaded', array($this, 'gutenberg_version_check') );

        // enqueue styles and scripts
        add_action('enqueue_block_editor_assets', array($this, 'admin_enqueue_scripts'));
        add_action('wp_enqueue_scripts', array($this, 'wp_enqueue_scripts'));

        // Add custom block category
        add_action('block_categories', array($this, 'block_categories'), 10, 2);
    }

    /**
     * @since Codemirror Blocks 1.0.0
     * @access public
     * @static @method instance
     *
     */
    public static function instance() {
        if ( is_null( self::$instance ) ) {
        self::$instance = new self( );
        }
        return self::$instance;
    }
    /**
     * @since Codemirror Blocks 1.0.0
     * @access private
     * @method init
     *
     */
    public function init() {
        $plugin_data = get_file_data(CODEMIRROR_BLOCKS_PLUGIN, array('Version' => 'Version'), false);
        $this->plugin_version = $plugin_data['Version'];
    }

    /**
     * CodeMirror Blocks only works if Gutenberg is installed and activated. or Wordpress version 5 haveing built in Gutenberg Editor.
     *
     * @since Codemirror Blocks 1.0.0
     * @access public
     * @method gutenberg_version_check
     *
     */
    public function gutenberg_version_check() {
        // if register_block_type is exist, it means site is run on Wordpress 5 with built-in Gutenberg, then just return, no further check is needed.
        if (function_exists('register_block_type')) {
            return;
        }
        else if (defined('GUTENBERG_VERSION')) {

            if (version_compare(GUTENBERG_VERSION, self::GUTENBERG_REQUIRE_VERSION, 'lt')) {

                // $gutenbergInstallUrl = wp_nonce_url(
                //     add_query_arg(
                //         array(
                //             'action' => 'upgrade-plugin',
                //             'plugin' => 'gutenberg/gutenberg.php'
                //         ),
                //         admin_url('update.php')
                //     ),
                //     'install-plugin_gutenberg'
                // );

                // $this->notice['message'] = __( 'CodeMirror Blocks requires Gutenberg Editor Versiion  '.self::GUTENBERG_REQUIRE_VERSION.'. Your running '.GUTENBERG_VERSION.', Please <a href="'. esc_attr($gutenbergInstallUrl) .'">'. esc_html__('Update Gutenberg Now!', 'codemirror-blocks') .'</a>');

                $this->notice['message'] = sprintf(
                    __('CodeMirror Blocks requires Gutenberg Editor Version  %s. Your running %s, Please Update Gutenberg!', 'codemirror-blocks'),
                    self::GUTENBERG_REQUIRE_VERSION,
                    GUTENBERG_VERSION
                );
                add_action( 'admin_notices', array($this, 'show_upgrade_notice') );
            }
        } else {
            $gutenbergInstallUrl = wp_nonce_url(
                add_query_arg(
                    array(
                        'action' => 'install-plugin',
                        'plugin' => 'gutenberg'
                    ),
                    admin_url('update.php')
                ),
                'install-plugin_gutenberg'
            );

            $link = '<a href="'. esc_attr($gutenbergInstallUrl) .'">'. esc_html__('Install Gutenberg Now!', 'codemirror-blocks') .'</a>';
            $this->notice['message'] = sprintf(
                __('CodeMirror Blocks requires Gutenberg Editor. Please Activate it or: %s', 'codemirror-blocks'),
                $link
            );

            add_action( 'admin_notices', array($this, 'show_upgrade_notice') );
        }
    }

    /**
     * Adds a notice for updating or Instal Gutenberg.
     *
     * Prints an update nag after an activating plugin
     * @access public
     * @since Codemirror Blocks 1.0.0
     *
     */
    public function show_upgrade_notice() {
        printf( '<div class="error"><p>%s</p></div>', $this->notice['message']);
    }
    /**
     * Enquque admin styles and scripts.
     *
     * @access public
     * @since Codemirror Blocks 1.0.0
     *
     */
    public function admin_enqueue_scripts() {
        $plugin_version = $this->plugin_version;
        wp_enqueue_script( 'codemirror', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/lib/codemirror.js', array(), self::CODEMIRROR_VERSION, true );

        wp_enqueue_style( 'codemirror', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/lib/codemirror.css', array(), self::CODEMIRROR_VERSION );


        wp_enqueue_script( 'codemirror-simplescrollbars', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/scroll/simplescrollbars.js', array(), self::CODEMIRROR_VERSION, true );

        wp_enqueue_style( 'codemirror-simplescrollbars', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/scroll/simplescrollbars.css', array(), self::CODEMIRROR_VERSION );

        wp_enqueue_script( 'codemirror-loademode', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/mode/loadmode.js', array(), self::CODEMIRROR_VERSION, true );

        wp_add_inline_script(
            'codemirror-loademode',
            'var CODEMIRROR_BLOCK_URL = "'. plugins_url("/vendor/codemirror/", CODEMIRROR_BLOCKS_PLUGIN).'";',
            'before'
        );

        // wp_enqueue_script( 'codemirror-meta', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/mode/meta.js', array(), '$plugin_version, true );

        wp_enqueue_script(
            'codemirror-blocks-editor-init', // Handle.
            plugins_url( '/assets/js/code-editor-init.js',  CODEMIRROR_BLOCKS_PLUGIN ), // Block.build.js: We register the block here. Built with Webpack.
            array( 'codemirror', 'codemirror-loademode' ),  // Dependencies, defined above.
            $plugin_version,
            true // Enqueue the script in the footer.
        );

        wp_enqueue_script(
            'codemirror-blocks-blocks', // Handle.
            plugins_url( '/assets/blocks/blocks.build.js',  CODEMIRROR_BLOCKS_PLUGIN ), // Block.build.js: We register the block here. Built with Webpack.
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components',  'wp-compose', 'underscore', 'codemirror-loademode' ),  // Dependencies, defined above.
            $plugin_version,
            true // Enqueue the script in the footer.
        );

        // Styles. only use for editor
        wp_enqueue_style(
            'codemirror-blocks-blocks-editor', // Handle.
            plugins_url( 'assets/blocks/blocks.editor.build.css',  CODEMIRROR_BLOCKS_PLUGIN ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $plugin_version
        );

    }
    /**
     * Enquque Frontend styles and scripts.
     *
     * @access public
     * @since Codemirror Blocks 1.0.0
     *
     */
    public function wp_enqueue_scripts() {
        $plugin_version = $this->plugin_version;

        wp_enqueue_script( 'codemirror', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/lib/codemirror.js', array(), self::CODEMIRROR_VERSION, true );

        wp_enqueue_style( 'codemirror', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/lib/codemirror.css', array(), self::CODEMIRROR_VERSION );

        wp_enqueue_script( 'codemirror-simplescrollbars', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/scroll/simplescrollbars.js', array(), self::CODEMIRROR_VERSION, true );

        wp_enqueue_style( 'codemirror-simplescrollbars', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/scroll/simplescrollbars.css', array(), self::CODEMIRROR_VERSION );

        wp_enqueue_script( 'codemirror-runmode', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/runmode/runmode.js', array(), self::CODEMIRROR_VERSION, true );

        wp_enqueue_script( 'codemirror-loademode', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/addon/mode/loadmode.js', array(), self::CODEMIRROR_VERSION, true );

        wp_add_inline_script(
            'codemirror-loademode',
            'var CODEMIRROR_BLOCK_URL = "'. plugins_url("/vendor/codemirror/", CODEMIRROR_BLOCKS_PLUGIN).'";',
            'before'
        );

        // wp_enqueue_script( 'codemirror-meta', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'vendor/codemirror/mode/meta.js', array(), $plugin_version, true );

        wp_enqueue_script(
            'codemirror-blocks-editor-init', // Handle.
            plugins_url( '/assets/js/code-editor-init.js',  CODEMIRROR_BLOCKS_PLUGIN ), // Block.build.js: We register the block here. Built with Webpack.
            array( 'codemirror', 'codemirror-loademode', 'jquery' ),  // Dependencies, defined above.
            $plugin_version,
            true // Enqueue the script in the footer.
        );

        wp_add_inline_script(
            'codemirror-blocks-editor-init',
            'wpcm.frontEndInitialization();',
            'after'
        );

        // wp_enqueue_script( 'codemirror-custom', plugin_dir_url( CODEMIRROR_BLOCKS_PLUGIN ) . 'assets/js/custom.js', array('codemirror-runmode'), $plugin_version, true);


        // Styles. only use for editor
        wp_enqueue_style(
            'codemirror-blocks-blocks', // Handle.
            plugins_url( 'assets/blocks/blocks.style.build.css',  CODEMIRROR_BLOCKS_PLUGIN ), // Block editor CSS.
            array(), // Dependency to include the CSS after it.
            $plugin_version
        );
    }

    /**
     * Add custom block category
     * @since Codemirror Blocks 1.0.0
     *
     * @param array $categories Gutenberg Block Categories.
     * @param object $post.
     * @return null
     */
    public function block_categories( $categories, $post ) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'codemirror-blocks',
                    'title' => __( 'CodeMirror Blocks', 'codemirror-blocks' ),
                ),
            )
        );
    }
}
