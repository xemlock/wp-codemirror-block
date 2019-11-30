<?php
namespace CodeMirror_Blocks;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * CodeMirror Block Option Settings
 *
 * @since 1.1.0
 * @package CodeMirror_Blocks/Settings
 */
class Settings {

    /**
     * Use as option page slug
     *
     * @since 1.1.0
     * @var string
     */
	public static $option_page_slug = 'wpcm-options';

    /**
     * Use as prefix to store values in wp_options table
     *
     * @since 1.1.0
     * @var string
     */
	public static $option_prefix = 'wpcm_setting_';

    /**
     * Holds all the fields in array
     *
     * @since 1.1.0
     * @var array
     */
	public static $fields = [];

    /**
     * Constructor.
     *
     * @since 1.1.0
     */
    public function __construct() {

		self::fields();

		add_action( 'init', array(__CLASS__, 'init') );

		add_action( 'init', array( __CLASS__, 'register_fields' ) );
		add_action( 'admin_menu', array( __CLASS__, 'add_menu' ) );
		add_action( 'admin_init', array( __CLASS__, 'setup_sections' ) );
		add_action( 'admin_init', array( __CLASS__, 'setup_fields' ) );

		if(!empty($_REQUEST['page']) && $_REQUEST['page'] == self::$option_page_slug) {
			add_action( 'admin_print_scripts', array( __CLASS__, 'style' ) );
			add_action( 'admin_footer_text', array(__CLASS__, 'admin_footer_text' ) );
		}
	}

	/**
     * Initialize plugin links
     *
     * @since 1.1.0
     */
    public static function init() {
		add_action( 'plugin_action_links_' . plugin_basename( CODEMIRROR_BLOCKS_PLUGIN ), array(__CLASS__, 'plugin_action_links') );
	}

	/**
     * Add menu to admin menu
     *
     * @since 1.1.0
     */
	public static function add_menu() {
		$page_title = 'CodeMirror Blocks Settings';
		$menu_title = 'CodeMirror Blocks';
		$capability = 'manage_options';
		$slug = self::$option_page_slug;
		$callback = array(__CLASS__, 'plugin_settings_page');
		$icon = 'dashicons-editor-code';
		$position = 80;
		add_menu_page($page_title, $menu_title, $capability, $slug, $callback, $icon, $position);
		// add_options_page($page_title, $menu_title, $capability, $slug, $callback, $icon, $position);
    }

    /**
     * Render/Display setting page.
     *
     * @since 1.1.0
     */
	public static function plugin_settings_page() {
		if(!current_user_can('manage_options')) {
			wp_die(__('You do not have sufficient permissions to access this page.'));
		}
	 ?>
		<div class="wrap wpcm-options">
			<h1>CodeMirror Blocks Options</h1>
			<?php settings_errors(); ?>
			<div class="wpcm">
                <div class="wrap wpcm-setting">
                    <form method="POST" action="options.php">
                    <?php
                        settings_fields( 'wpcm-options' );
                        do_settings_sections( 'wpcm-options' );

                        submit_button();
                    ?>
                    </form>
                </div>
                <div class="wpcm-support">
                    <h2>Support CodeMirror Blocks</h2>
                    <h3>Rate</h3>
                    <?php
                    echo self::admin_footer_text('') ?>
                    <h3>Any Questions?</h3>
                        <p><a href="https://wordpress.org/support/plugin/wp-codemirror-block/" target="_blank">Ask on support forum</a> You can also ask us to add new feature!</p>
                    <h3>Donate</h3>
                        <p><a href="https://paypal.me/VikeshAgravat" target="_blank">Cup of Coffee</a> to Support Continue Development.</p>
                </div>
            </div>
		</div>
        <?php
	}

    /**
     * Render/Display section in setting page.
     *
     * @since 1.1.0
     */
	public static function setup_sections() {
		add_settings_section( 'editor', 'Editor Default Settings', array(__CLASS__, 'editor_section'), 'wpcm-options' );
		add_settings_section( 'output', '(Beta) Output Block', array(), 'wpcm-options' );
	}

    /**
     * Render/Display edit section in setting page.
     *
     * @since 1.1.0
     */
	public static function editor_section() {
		?>
		<h4>This is default setting for New Code Blocks. you can override theme on (Block Editor)</h4>
		<h5>Don't worry, It will not affect your existing Code Blocks.</h5>
		<?php
	}

	/**
     * Setup All fields to Render/Display in setting page.
     *
     * @since 1.1.0
     */
	public static function fields() {
		$fields = array(
			array(
				'label' => 'Language / Mode',
				'id' => 'mode',
				'type' => 'select',
                'options' => self::modes(),
				'section' => 'editor',
				'description' => 'Language Mode.',
                'placeholder' => 'Select Language Mode',
                'default' => 'htmlmixed,text/html'
			),
			array(
				'label' => 'Theme',
				'id' => 'theme',
                'type' => 'select',
                'options' => self::themes(),
				'section' => 'editor',
				'description' => 'Select Theme.',
                'placeholder' => 'Select Theme',
                'default' => 'material'
			),
			array(
				'label' => 'Show Line Number?',
				'id' => 'lineNumbers',
                'type' => 'radio',
                'options' => array(
                    'no' => 'No',
                    'yes' => 'Yes',
                ),
				'section' => 'editor',
                'description' => 'Show Line Number?',
                'default' => 'no'
			),
			array(
				'label' => 'Highlight Active Line?',
				'id' => 'styleActiveLine',
                'type' => 'radio',
                'options' => array(
                    'no' => 'No',
                    'yes' => 'Yes',
                ),
				'section' => 'editor',
                'description' => 'Highlight Active Line?',
                'default' => 'no'
			),
			array(
				'label' => 'Warp Long Line?',
				'id' => 'lineWrapping',
                'type' => 'radio',
                'options' => array(
                    'no' => 'No',
                    'yes' => 'Yes',
                ),
				'section' => 'editor',
				'description' => 'Warp Long Line?',
                'default' => 'no'
			),
			array(
				'label' => 'Editable on Frontend?',
				'id' => 'readOnly',
                'type' => 'radio',
                'options' => array(
                    'yes' => 'No',
                    'no' => 'Yes',
                    // 'nocursor' => 'Disable Copy on Frontend ',
                ),
				'section' => 'editor',
                'description' => 'Editable on Frontend?',
                'default' => 'yes'
			),
			array(
				'label' => 'Enable Execution Button?',
				'id' => 'button',
                'type' => 'radio',
                'options' => array(
                    'no' => 'No',
                    'yes' => 'Yes',
                ),
				'section' => 'output',
                'description' => 'It will display Execute Button after Code Block on Front End (Only for HTML, CSS and JS mode type) if "Editable on front end" is enabled, for that block.',
                'default' => 'no'
			),
			array(
				'label' => 'Button Text',
				'id' => 'button_text',
                'type' => 'input',
                'class' => 'regular-text',
				'section' => 'output',
                'description' => 'Text on Execute Button.',
                'placeholder' => 'Execute, Run',
                'default' => 'Execute'
			)
		);
		foreach( $fields as &$field ){
			$field['id'] = self::$option_prefix . $field['section']. '_'. $field['id'];
		}
		self::$fields = $fields;
	}

    /**
     * Register field to Render/Display in setting page.
     *
     * @since 1.1.0
     */
	public static function register_fields() {
		$fields = self::$fields;
		foreach( $fields as $field ){
			$id = $field['id'];
			register_setting( 'wpcm-options', $id, $field );
		}
	}

    /**
     * Render/Display setting page.
     *
     * @since 1.1.0
     */
	public static function setup_fields() {
		$fields = self::$fields;
		foreach( $fields as $field ){

			$id = $field['id'];
			add_settings_field(
				$id,
				$field['label'],
				array( __CLASS__, 'render_field' ),
				self::$option_page_slug,
				$field['section'],
				$field
			);
		}
	}

	/**
     * Get options from option table.
     *
     * @since 1.1.0
     */
	public static function get_options($filtered = true) {
		$options = [];
		$fields = self::$fields;
		foreach( $fields as $field ){
			$id = $field['id'];
			$name = str_replace(self::$option_prefix . $field['section']. '_', '', $field['id']);

			$value = get_option( $id, $field['default'] );
            if($filtered) {
                if($value == 'yes') {
                    $value = true;
                } else if($value == 'no' ) {
                    $value = false;
                }
                if($name == 'mode') {
                    $v = \explode(',', $value);
                    $options[$field['section']]['mode'] = $v[0];
                    $options[$field['section']]['mime'] = $v[1];
                    continue;
                }
            }
			$options[$field['section']][$name] = $value;
		}
		return $options;
    }

	/**
     * Render form field depends on its type.
     *
     * @since 1.1.0
     */
	public static function render_field( $field ) {
		$id = $field['id'];
		$default = !empty($field['default']) ? $field['default'] : '';
		$class = !empty($field['class']) ? $field['class'] : '';
		$value = get_option( $id );

		switch ( $field['type'] ) {
            case 'select':
                if( ! empty ( $field['options'] ) && is_array( $field['options'] ) ) {
                    $options = $field['options'];
                } else {
                    $options = [
                        [
                            'key' => '',
                            'label' => 'No Options Provided.'
                        ]
                    ];
                }

                $options_markup = '';
                foreach($options as $key => $option) {
                    $label = !empty($option['label']) ? $option['label'] : ucfirst($option['value']);
                    $current_value = !empty($option['value']) ? $option['value'] : $key;
                    $data = '';
                    if(!empty($option['mime'])) {
                        $current_value .= ','.$option['mime'];
                    }
                    $selected = !empty($value) && $value == $current_value ? 'selected' : '';
                    $options_markup .= sprintf('<option value="%1$s"%4$s%3$s>%2$s</option>', $current_value, $label, $selected, $data);
                }
                printf( '<select name="%1$s" id="%1$s" placeholder="%2$s">%3$s</select>',
                    $id,
                    $field['placeholder'],
                    $options_markup
                );
                break;
            case 'textarea':
                printf( '<textarea name="%1$s" id="%1$s" placeholder="%2$s" rows="5" cols="50">%3$s</textarea>',
                    $id,
                    $field['placeholder'],
                    $value
                );
                break;
            case 'number':
                printf( '<input name="%1$s" id="%1$s" type="%2$s" placeholder="%3$s" value="%4$s" min="%5$s" max="%6$s" step="%7$s" autocomplete="off" />',
                    $id,
                    $field['type'],
                    $field['placeholder'],
                    $value,
                    $field['min'],
                    $field['max'],
                    $field['step']
                );
                break;
            case 'radio':
            case 'checkbox':
                if( ! empty ( $field['options'] ) && is_array( $field['options'] ) ) {
                    $options_markup = '';
                    $iterator = 0;
                    foreach( $field['options'] as $key => $label ) {
                        $iterator++;
                        $options_markup .= sprintf(
                            '<label for="%1$s_%6$s"><input id="%1$s_%6$s" name="%1$s" type="%2$s" value="%3$s" %4$s />%5$s</label>',
                            $id,
                            $field['type'],
                            $key,
                            checked($value, $key, false),
                            $label,
                            $iterator
                        );
                    }
                    printf( '<fieldset>%s</fieldset>',
                        $options_markup
                    );
                }
                break;
			default:
				printf( '<input name="%1$s" id="%1$s" type="%2$s" placeholder="%3$s" value="%4$s" class="%5$s" />',
					$id,
					$field['type'],
					$field['placeholder'],
                    $value,
                    $class
				);
		}
		if( $desc = $field['description'] ) {
			printf( '<p class="description">%s </p>', $desc );
		}
	}

	/**
     * Add custom css for current setting page only.
     *
     * @since 1.1.0
     */
	public static function style() {
	?>
	<style>
	.wpcm {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .wpcm-support {
        background-color: #fff;
        padding: 1em;
    }
    .wpcm-support h3 {
        margin-bottom: .5em;
        font-size: 1.3em;
    }
	.form-table {
		/* background-color: #fff; */
	}
	.wpcm input[type='text'],
    .wpcm select,
	.wpcm textarea {
        width: 100%;
    }
    .wpcm fieldset label {
		padding-right: 2em;
	}
    @media screen and (min-width: 782px) {
        .wpcm {
            flex-direction: row;
        }
       .wpcm-setting {
            width: 75%;
        }
        .wpcm-support {
            width: 25%;
        }
    }
    </style>
	<?php
	}

	/**
     * Add plugin action links.
     *
     * Add a link to the settings page on the plugins.php page.
     *
     * @since 1.1.0
     *
     * @param  array  $links List of existing plugin action links.
     * @return array         List of modified plugin action links.
     */
    public static function plugin_action_links( $links ) {
        $links = array_merge( array(
            '<a href="' . esc_url( admin_url( '/admin.php?page=wpcm-options' ) ) . '">' . __( 'Settings', 'codemirror-blocks' ) . '</a>'
        ), $links );
        return $links;
    }

	/**
     * Add admin footer rate-the-plugin.
     *
     * @since 1.1.0
     *
     * @param  string $text Footer html string
     * @return string 		Modified Footer html string
     */
    public static function admin_footer_text($text) {
		$text = 'If you like <strong>CodeMirror Block</strong> please leave us a <a href="https://wordpress.org/support/plugin/wp-codemirror-block/reviews?rate=5#new-post" target="_blank" class="wc-rating-link" aria-label="five star" data-rated="Thanks :)">★★★★★</a> rating. A huge thanks in advance!';
        return $text;
	}

	/**
     * Return Language/Modes in array.
     *
     * @since 1.1.0
     *
     * @return array All Modes
     */
	public static function modes() {

        $modes = [
            ["value" => "apl", "mime" => "text/apl", "label" => "APL"],

            ["value" => "asciiarmor", "mime" => "application/pgp", "label" => "PGP (application/pgp)"],
            ["value" => "asciiarmor", "mime" => "application/pgp-encrypted", "label" => "PGP (application/pgp-encrypted)"],
            ["value" => "asciiarmor", "mime" => "application/pgp-keys", "label" => "PGP (application/pgp-keys)"],
            ["value" => "asciiarmor", "mime" => "application/pgp-signature", "label" => "PGP (application/pgp-signature)"],

            ["value" => "asn.1", "mime" => "text/x-ttcn-asn", "label" => "ASN.1"],
            ["value" => "brainfuck", "mime" => "text/x-brainfuck", "label" => "Brainfuck"],
            ["value" => "clike", "mime" => "text/x-csrc", "label" => "C"],
            ["value" => "clike", "mime" => "text/x-c++src", "label" => "C++"],
            ["value" => "cobol", "mime" => "text/x-cobol", "label" => "Cobol"],
            ["value" => "clike", "mime" => "text/x-csharp", "label" => "C#"],
            ["value" => "clojure", "mime" => "text/x-clojure", "label" => "Clojure"],
            ["value" => "clojure", "mime" => "text/x-clojurescript", "label" => "ClojureScript"],
            ["value" => "css", "mime" => "text/x-gss", "label" => "Closure Stylesheets (GSS)"],
            ["value" => "cmake", "mime" => "text/x-cmake", "label" => "CMake"],

            ["value" => "coffeescript", "mime" => "application/vnd.coffeescript", "label" => "CoffeeScript (application/vnd.coffeescript)"],
            ["value" => "coffeescript", "mime" => "text/coffeescript", "label" => "CoffeeScript (text/coffeescript)"],
            ["value" => "coffeescript", "mime" => "text/x-coffeescript", "label" => "CoffeeScript (text/x-coffeescript)"],

            ["value" => "commonlisp", "mime" => "text/x-common-lisp", "label" => "Common Lisp"],
            ["value" => "css", "mime" => "text/css", "label" => "CSS"],
            ["value" => "sql", "mime" => "text/x-cassandra", "label" => "CQL"],
            ["value" => "d", "mime" => "text/x-d", "label" => "D"],

            ["value" => "dart", "mime" => "application/dart", "label" => "Dart (application/dart)"],
            ["value" => "dart", "mime" => "text/x-dart", "label" => "Dart (text/x-dart)"],

            ["value" => "diff", "mime" => "text/x-diff", "label" => "diff"],
            ["value" => "django", "mime" => "text/x-django", "label" => "Django"],
            ["value" => "dockerfile", "mime" => "text/x-dockerfile", "label" => "Dockerfile"],
            ["value" => "dtd", "mime" => "application/xml-dtd", "label" => "DTD"],
            ["value" => "dylan", "mime" => "text/x-dylan", "label" => "Dylan"],
            ["value" => "ebnf", "mime" => "text/x-ebnf", "label" => "EBNF"],
            ["value" => "ecl", "mime" => "text/x-ecl", "label" => "ECL"],
            ["value" => "clojure", "mime" => "application/edn", "label" => "edn"],
            ["value" => "eiffel", "mime" => "text/x-eiffel", "label" => "Eiffel"],
            ["value" => "elm", "mime" => "text/x-elm", "label" => "Elm"],
            ["value" => "htmlembedded", "mime" => "application/x-ejs", "label" => "Embedded Javascript"],
            ["value" => "htmlembedded", "mime" => "application/x-erb", "label" => "Embedded Ruby"],
            ["value" => "erlang", "mime" => "text/x-erlang", "label" => "Erlang"],
            ["value" => "sql", "mime" => "text/x-esper", "label" => "Esper"],
            ["value" => "factor", "mime" => "text/x-factor", "label" => "Factor"],
            ["value" => "fcl", "mime" => "text/x-fcl", "label" => "FCL"],
            ["value" => "fortran", "mime" => "text/x-fortran", "label" => "Fortran"],
            ["value" => "mllike", "mime" => "text/x-fsharp", "label" => "F#"],
            ["value" => "gas", "mime" => "text/x-gas", "label" => "Gas"],
            ["value" => "gherkin", "mime" => "text/x-feature", "label" => "Gherkin"],
            ["value" => "gfm", "mime" => "text/x-gfm", "label" => "GitHub Flavored Markdown"],
            ["value" => "go", "mime" => "text/x-go", "label" => "Go"],
            ["value" => "groovy", "mime" => "text/x-groovy", "label" => "Groovy"],
            ["value" => "haml", "mime" => "text/x-haml", "label" => "HAML"],
            ["value" => "haskell", "mime" => "text/x-haskell", "label" => "Haskell"],
            ["value" => "htmlembedded", "mime" => "application/x-aspx", "label" => "ASP.NET"],
            ["value" => "htmlmixed", "mime" => "text/html", "label" => "HTML"],
            ["value" => "http", "mime" => "message/http", "label" => "HTTP"],
            ["value" => "idl", "mime" => "text/x-idl", "label" => "IDL"],
            ["value" => "pug", "mime" => "text/x-pug", "label" => "Pug"],
            ["value" => "clike", "mime" => "text/x-java", "label" => "Java"],
            ["value" => "htmlembedded", "mime" => "application/x-jsp", "label" => "Java Server Pages"],

            ["value" => "javascript", "mime" => "text/javascript", "label" => "JavaScript (text/javascript)"],
            ["value" => "javascript", "mime" => "text/ecmascript", "label" => "JavaScript (text/ecmascript)"],
            ["value" => "javascript", "mime" => "application/javascript", "label" => "JavaScript (application/javascript)"],
            ["value" => "javascript", "mime" => "application/x-javascript", "label" => "JavaScript (application/x-javascript)"],
            ["value" => "javascript", "mime" => "application/ecmascript", "label" => "JavaScript (application/ecmascript)"],

            ["value" => "javascript", "mime" => "application/json", "label" => "JSON (application/json)"],
            ["value" => "javascript", "mime" => "application/x-json", "label" => "JSON (application/x-json)"],

            ["value" => "javascript", "mime" => "application/ld+json", "label" => "JSON-LD"],
            ["value" => "jsx", "mime" => "text/jsx", "label" => "JSX"],
            ["value" => "clike", "mime" => "text/x-kotlin", "label" => "Kotlin"],
            ["value" => "css", "mime" => "text/x-less", "label" => "LESS"],
            ["value" => "livescript", "mime" => "text/x-livescript", "label" => "LiveScript"],
            ["value" => "lua", "mime" => "text/x-lua", "label" => "Lua"],
            ["value" => "markdown", "mime" => "text/x-markdown", "label" => "Markdown"],
            ["value" => "sql", "mime" => "text/x-mariadb", "label" => "MariaDB SQL"],
            ["value" => "modelica", "mime" => "text/x-modelica", "label" => "Modelica"],
            ["value" => "mumps", "mime" => "text/x-mumps", "label" => "MUMPS"],
            ["value" => "sql", "mime" => "text/x-mssql", "label" => "MS SQL"],
            ["value" => "sql", "mime" => "text/x-mysql", "label" => "MySQL"],
            ["value" => "nginx", "mime" => "text/x-nginx-conf", "label" => "Nginx"],
            ["value" => "clike", "mime" => "text/x-objectivec", "label" => "Objective-C"],
            ["value" => "octave", "mime" => "text/x-octave", "label" => "Octave"],
            ["value" => "oz", "mime" => "text/x-oz", "label" => "Oz"],
            ["value" => "pascal", "mime" => "text/x-pascal", "label" => "Pascal"],
            ["value" => "perl", "mime" => "text/x-perl", "label" => "Perl"],

            ["value" => "php", "mime" => "text/x-php", "label" => "PHP (text/x-php)"],
            ["value" => "php", "mime" => "application/x-httpd-php", "label" => "PHP (application/x-httpd-php)"],
            ["value" => "php", "mime" => "application/x-httpd-php-open", "label" => "PHP (application/x-httpd-php-open)"],

            ["value" => "pig", "mime" => "text/x-pig", "label" => "Pig"],
            ["value" => "null", "mime" => "text/plain", "label" => "Plain Text"],
            ["value" => "sql", "mime" => "text/x-plsql", "label" => "PLSQL"],
            ["value" => "powershell", "mime" => "application/x-powershell", "label" => "PowerShell"],
            ["value" => "properties", "mime" => "text/x-properties", "label" => "Properties files"],
            ["value" => "protobuf", "mime" => "text/x-protobuf", "label" => "ProtoBuf"],
            ["value" => "python", "mime" => "text/x-python", "label" => "Python"],
            ["value" => "puppet", "mime" => "text/x-puppet", "label" => "Puppet"],
            ["value" => "q", "mime" => "text/x-q", "label" => "Q"],
            ["value" => "r", "mime" => "text/x-rsrc", "label" => "R"],
            ["value" => "ruby", "mime" => "text/x-ruby", "label" => "Ruby"],
            ["value" => "rust", "mime" => "text/x-rustsrc", "label" => "Rust"],
            ["value" => "sas", "mime" => "text/x-sas", "label" => "SAS"],
            ["value" => "clike", "mime" => "text/x-scala", "label" => "Scala"],
            ["value" => "scheme", "mime" => "text/x-scheme", "label" => "Scheme"],
            ["value" => "css", "mime" => "text/x-scss", "label" => "SCSS"],

            ["value" => "shell", "mime" => "text/x-sh", "label" => "Shell (text/x-sh)"],
            ["value" => "shell", "mime" => "application/x-sh", "label" => "Shell (application/x-sh)"],

            ["value" => "slim", "mime" => "text/x-slim", "label" => "Slim (text/x-slim)"],
            ["value" => "slim", "mime" => "application/x-slim", "label" => "Slim (application/x-slim)"],

            ["value" => "smalltalk", "mime" => "text/x-stsrc", "label" => "Smalltalk"],
            ["value" => "smarty", "mime" => "text/x-smarty", "label" => "Smarty"],
            ["value" => "solr", "mime" => "text/x-solr", "label" => "Solr"],
            ["value" => "mllike", "mime" => "text/x-sml", "label" => "SML"],
            ["value" => "soy", "mime" => "text/x-soy", "label" => "Soy"],
            ["value" => "sparql", "mime" => "application/sparql-query", "label" => "SPARQL"],
            ["value" => "spreadsheet", "mime" => "text/x-spreadsheet", "label" => "Spreadsheet"],
            ["value" => "sql", "mime" => "text/x-sql", "label" => "SQL"],
            ["value" => "sql", "mime" => "text/x-sqlite", "label" => "SQLite"],
            ["value" => "clike", "mime" => "text/x-squirrel", "label" => "Squirrel"],
            ["value" => "stylus", "mime" => "text/x-styl", "label" => "Stylus"],
            ["value" => "swift", "mime" => "text/x-swift", "label" => "Swift"],
            ["value" => "stex", "mime" => "text/x-stex", "label" => "sTeX"],
            ["value" => "stex", "mime" => "text/x-latex", "label" => "LaTeX"],
            ["value" => "verilog", "mime" => "text/x-systemverilog", "label" => "SystemVerilog"],
            ["value" => "tcl", "mime" => "text/x-tcl", "label" => "Tcl"],
            ["value" => "textile", "mime" => "text/x-textile", "label" => "Textile"],
            ["value" => "tiddlywiki", "mime" => "text/x-tiddlywiki", "label" => "TiddlyWiki "],
            ["value" => "tiki", "mime" => "text/tiki", "label" => "Tiki wiki"],
            ["value" => "toml", "mime" => "text/x-toml", "label" => "TOML"],
            ["value" => "tornado", "mime" => "text/x-tornado", "label" => "Tornado"],
            ["value" => "troff", "mime" => "text/troff", "label" => "troff"],
            ["value" => "ttcn", "mime" => "text/x-ttcn", "label" => "TTCN"],
            ["value" => "ttcn-cfg", "mime" => "text/x-ttcn-cfg", "label" => "TTCN_CFG"],
            ["value" => "turtle", "mime" => "text/turtle", "label" => "Turtle"],
            ["value" => "javascript", "mime" => "application/typescript", "label" => "TypeScript"],
            ["value" => "jsx", "mime" => "text/typescript-jsx", "label" => "TypeScript-JSX"],
            ["value" => "twig", "mime" => "text/x-twig", "label" => "Twig"],
            ["value" => "webidl", "mime" => "text/x-webidl", "label" => "Web IDL"],
            ["value" => "vb", "mime" => "text/x-vb", "label" => "VB.NET"],
            ["value" => "vbscript", "mime" => "text/vbscript", "label" => "VBScript"],
            ["value" => "velocity", "mime" => "text/velocity", "label" => "Velocity"],
            ["value" => "verilog", "mime" => "text/x-verilog", "label" => "Verilog"],
            ["value" => "vhdl", "mime" => "text/x-vhdl", "label" => "VHDL"],

            ["value" => "vue", "mime" => "script/x-vue", "label" => "Vue.js Component (script/x-vue)"],
            ["value" => "vue", "mime" => "text/x-vue", "label" => "Vue.js Component (text/x-vue)"],


            ["value" => "xml", "mime" => "application/xml", "label" => "XML (application/xml)"],
            ["value" => "xml", "mime" => "text/xml", "label" => "XML (text/xml)"],

            ["value" => "xquery", "mime" => "application/xquery", "label" => "XQuery"],
            ["value" => "yacas", "mime" => "text/x-yacas", "label" => "Yacas"],

            ["value" => "yaml", "mime" => "text/x-yaml", "label" => "YAML (text/x-yaml)"],
            ["value" => "yaml", "mime" => "text/yaml", "label" => "YAML (text/yaml)"],

            ["value" => "z80", "mime" => "text/x-z80", "label" => "Z80"],
            ["value" => "mscgen", "mime" => "text/x-mscgen", "label" => "mscgen"],
            ["value" => "mscgen", "mime" => "text/x-xu", "label" => "xu"],
            ["value" => "mscgen", "mime" => "text/x-msgenny", "label" => "msgenny"]
        ];
        return $modes;
    }

    /**
     * Return all Themes in array.
     *
     * @since 1.1.0
     *
     * @return array All Themes
     */
    public static function themes() {

        $themes = [
            ["value" => "default", "label" => "Default"],
            ["value" => "3024-day", "label" => "3024-day"],
            ["value" => "3024-night", "label" => "3024-night"],
            ["value" => "abcdef", "label" => "Abcdef"],
            ["value" => "ambiance", "label" => "Ambiance"],
            // ["value" => "ambiance-mobile", "label" => "Ambiance Mobile"],
            ["value" => "base16-dark", "label" => "Base16-dark"],
            ["value" => "base16-light", "label" => "Base16-light"],
            ["value" => "bespin", "label" => "Bespin"],
            ["value" => "blackboard", "label" => "Blackboard"],
            ["value" => "cobalt", "label" => "Cobalt"],
            ["value" => "colorforth", "label" => "Colorforth"],
            ["value" => "darcula", "label" => "Darcula"],
            ["value" => "dracula", "label" => "Dracula"],
            ["value" => "duotone-dark", "label" => "Duotone-dark"],
            ["value" => "duotone-light", "label" => "Duotone-light"],
            ["value" => "eclipse", "label" => "Eclipse"],
            ["value" => "elegant", "label" => "Elegant"],
            ["value" => "erlang-dark", "label" => "Erlang-dark"],
            ["value" => "gruvbox-dark", "label" => "Gruvbox-dark"],
            ["value" => "hopscotch", "label" => "Hopscotch"],
            ["value" => "icecoder", "label" => "Icecoder"],
            ["value" => "idea", "label" => "Idea"],
            ["value" => "isotope", "label" => "Isotope"],
            ["value" => "lesser-dark", "label" => "Lesser-dark"],
            ["value" => "liquibyte", "label" => "Liquibyte"],
            ["value" => "lucario", "label" => "Lucario"],
            ["value" => "material", "label" => "Material"],
            ["value" => "mbo", "label" => "Mbo"],
            ["value" => "mdn-like", "label" => "Mdn-like"],
            ["value" => "midnight", "label" => "Midnight"],
            ["value" => "monokai", "label" => "Monokai"],
            ["value" => "neat", "label" => "Neat"],
            ["value" => "neo", "label" => "Neo"],
            ["value" => "night", "label" => "Night"],
            ["value" => "oceanic-next", "label" => "Oceanic-next"],
            ["value" => "panda-syntax", "label" => "Panda-syntax"],
            ["value" => "paraiso-dark", "label" => "Paraiso-dark"],
            ["value" => "paraiso-light", "label" => "Paraiso-light"],
            ["value" => "pastel-on-dark", "label" => "Pastel-on-dark"],
            ["value" => "railscasts", "label" => "Railscasts"],
            ["value" => "react", "label" => "Reactjs.org Doc Theme"],
            ["value" => "rubyblue", "label" => "Rubyblue"],
            ["value" => "seti", "label" => "Seti"],
            ["value" => "shadowfox", "label" => "Shadowfox"],
            ["value" => "solarized", "label" => "Solarized"],
            ["value" => "the-matrix", "label" => "The-matrix"],
            ["value" => "tomorrow-night-bright", "label" => "Tomorrow-night-bright"],
            ["value" => "tomorrow-night-eighties", "label" => "Tomorrow-night-eighties"],
            ["value" => "ttcn", "label" => "Ttcn"],
            ["value" => "twilight", "label" => "Twilight"],
            ["value" => "vibrant-ink", "label" => "Vibrant-ink"],
            ["value" => "xq-dark", "label" => "Xq-dark"],
            ["value" => "xq-light", "label" => "Xq-light"],
            ["value" => "yeti", "label" => "Yeti"],
            ["value" => "zenburn", "label" => "Zenburn"]
        ];
        return $themes;
    }
}
