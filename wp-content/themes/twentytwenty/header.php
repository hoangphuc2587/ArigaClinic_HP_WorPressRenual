<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */
?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

    <head>

        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" >

        <?php 
        global $post;
        $post_slug = $post->post_name;        
        ?>
        <link rel="profile" href="https://gmpg.org/xfn/11">       
        <?php if (in_array($post_slug, array("first-visit", "staff","about-medical-expenses", "support"))):?>
        <link media="all" href="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/css/autoptimize_742f7556a3c461fdfc23fddade51da38.css" rel="stylesheet" />
        <?php else:?>
        <link media="all" href="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/css/autoptimize_e19808f538a9ee2c513ec2f55d2b1c57.css" rel="stylesheet" />
        <?php endif?>              
        <link media="screen and (max-width:991px)" href="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/css/autoptimize_1a66718c7cb7a594dcdfd079b102bdf7.css" rel="stylesheet" />
        <link media="all" href="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/css/style.css" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/favicon-16x16.png">
        <link rel="manifest" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/site.webmanifest">
        <link rel="mask-icon" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="<?php echo home_url(); ?>/wp-content/uploads/fbrfg/browserconfig.xml">

        <?php //wp_head(); ?>
        <title>ホーチミンの日系歯科医院のありが歯科　こども矯正歯科、インプラントにも対応しています</title>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js?ver=4.9.15'></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBI_ctL4EoMtRLUIgnCZmAlQ2JOxpweHGo"></script> <script type="text/javascript">jQuery(function() {
         jQuery(".zoom").elevateZoom({
           zoomType : "inner",
           zoomWindowFadeIn: 500,
           zoomWindowFadeOut: 500,
           easing : true
         });
         });
        </script> 
       
    </head>

    <body <?php body_class(); ?>>
        <div id="verytop"></div>
        <?php
        wp_body_open();
        ?>

        <nav id="header" class="site-navigation">
         <div class="container">
            <div class="row">
               <div class="site-navigation-inner col-xs-120 no-padding" style="padding:0px">
                  <div class="navbar navbar-default">                     
                     <div class="navbar-header is-mobile">
                        <div id="logo-area">
                           <div id='logo_image'>
                              <h2 id="logo" style="top:5px; left:0px;"><a href="<?php echo home_url(); ?>/" title="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" data-label="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科"><img class="h_logo" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/logo.png?1601524837" alt="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" title="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" /></a></h2>
                           </div>
                        </div>
                     </div>                   
                     <div class="pull-right right-menu">
                        <div class="collapse navbar-collapse">
                           <ul id="main-menu" class="nav navbar-nav">
                               <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a href="http://dev.arigadc.com/first-visit/">初めてのありが歯科</a></li>
                               <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="http://dev.arigadc.com/staff/">Dr/スタッフ紹介</a></li>
                               <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="http://dev.arigadc.com/about-medical-expenses/">歯の悩み</a></li>
                               <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32">
                                <a href="<?php echo home_url(); ?>/" title="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" data-label="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科"><img class="h_logo" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/logo.png?1601524837" alt="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" title="ベトナム ホーチミンでの歯医者(歯科) 虫歯,ホワイトニング,インプラント,歯周病,こども矯正　ありが歯科" /></a>
                               </li> 
                               <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32">
                                  <a href="http://dev.arigadc.com/category/">ありが歯科のお約束</a>
                                 
                               </li>
                               <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/support/">治療費について</a></li>
                               <li id="menu-item-35" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/support/">お問い合わせ</a></li>
                            </ul>
                        </div>
                        <a href="#" class="menu_button"></a>
                        <div id="global_menu" class="clearfix">
                           <ul id="menu-mobile" class="menu">
                              <?php                              
                                  wp_nav_menu(
                                    array(
                                      'container'  => '',
                                      'items_wrap' => '%3$s',
                                      'theme_location' => '',
                                    )
                                  );
                              ?>     
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
