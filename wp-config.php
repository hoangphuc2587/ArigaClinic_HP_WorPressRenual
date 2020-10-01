<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'arigaclinic' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Q0Xo0Hx#Y$OA]zpSs+BTUa#`O_aA+*t[k<M>uV98F D(%OJlZ3B<j(E@O+js6!)G' );
define( 'SECURE_AUTH_KEY',  'g4D/Fb]/6t*%&!^Xw`6xP kiC9h6IB99a>Z8WH38p)@JX#;Iv]r]l }OAO)0TAt#' );
define( 'LOGGED_IN_KEY',    'W$[RhkZ]@C!v ,mr(h(}fO8P-E$U3Ua.(/q[~{x8bG(gN{wB-pH5%.y|LPR3TMz&' );
define( 'NONCE_KEY',        '0e2v],ar{P0n>[d|jd!d#85QZg/|XrH@ujI@`B0~]8m T&62?zaU7zE~%!+a[h5<' );
define( 'AUTH_SALT',        'fU75r=2~ s7f/;]JiC=s<4h41d<Vp&y<eU-)x+.1o-Eoa_vRT)g&u&fOXg=p^m+!' );
define( 'SECURE_AUTH_SALT', '3HYUfnus61R;rx/J<q^#PipFCf&&5#1Nt7(|$vKX|Re|p4g4>,a8d_oFKpI @,br' );
define( 'LOGGED_IN_SALT',   'z(ou!$P,Q2W r<=G:[N*ye6#sdm&uk&Fv2ohBX Bb#?Slj6>;6DU)|Uw1<pFbnK;' );
define( 'NONCE_SALT',       'DG}C/M(*=2b>~>K1S/viL?jN?dt]Pq;PKf4MLz;wLpOX;Jnpu0h^R-SL2Xbn*N8_' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
