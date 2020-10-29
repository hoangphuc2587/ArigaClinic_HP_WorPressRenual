<?php
/**
 * Template Name: Trouble Detail Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<div class="main-content">
<div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/2020/10/surface-945444_1920.jpg">
 <div class="container">
    <div class="row">
       <div class="col-xs-120 no-padding">
          <h1 class="top-headline"><?php the_title()?></h1>
       </div>
    </div>
 </div>
</div>
<div class="container amore-inner-container page-trouble" style="margin-bottom:0px">
 <div class="row">
    <div class="col-sm-120 col-xs-120 no-padding single-page">
       <header class="breadcrumb mb20"> 
        <a href="<?php echo home_url(); ?>"><span><img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home"></span></a> 
        <a href="<?php echo home_url(); ?>/trouble" style="text-decoration: none"><span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span>歯の悩み</span></a>
        <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span>
        </header>
       <div class="row article" style="margin:auto 0;">
          <h3 class="ppt" style="margin-bottom: 60px"><?php the_title()?></h3>
          <?php the_content();?>          
       </div>
    </div>
 </div>
</div>
</div>

<?php get_footer(); ?>
