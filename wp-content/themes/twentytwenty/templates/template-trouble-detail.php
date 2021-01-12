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
global $post;
$page_slug = $post->post_name;
$post_id = get_the_ID();
$h1_title =  get_post_meta( $post_id, 'h1_title_page', true );
?>

<div class="main-content">
<div class="amore-divider romaji hidden-xs" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_bg.png">
 <div class="container">
    <div class="row">
       <div class="col-xs-120 no-padding">
          <h1 class="top-headline"><?php the_title()?></h1>
       </div>
    </div>
 </div>
</div>
<div class="amore-divider romaji visible-xs" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_bg1.png">
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
          <h1 class="ppt" style="margin-bottom: 60px">
          <?php if ($page_slug === 'implant'):?>          
          <?php echo empty($h1_title) ? 'インプラントで大切な事。治療で残せる歯を簡単にインプラントの選択してはいけません。' : $h1_title; ?>
          <?php elseif ($page_slug === 'orthodonic'):?>
          <?php echo empty($h1_title) ? 'ホーチミンありが歯科のこども矯正歯科' : $h1_title; ?>
          <?php else:?>            
          <?php echo empty($h1_title) ? the_title() : $h1_title; ?>
          <?php endif;?> 
          </h1>
          <?php the_content();?> 

          
       </div>
       <?php 
         $args = array(
            'post_status' => array('publish'),
            'meta_query' => array(
                array(
                    'key'     => 'trouble_meta_key',
                    'value'   => get_the_ID(),
                    'compare' => 'LIKE',
                ),
            ),            
            'orderby' => 'post_date', 
            'order' => 'DESC'
         );
         $arrPosts = new WP_query($args);
       ?>
       <?php if (!empty($arrPosts->have_posts())):?>        
       <?php while ( $arrPosts->have_posts() ) : $arrPosts->the_post(); ?>
       <div class="cardlink">
        <a href="<?php the_permalink() ?>"></a>
        <div class="cardlink_thumbnail">
          <a href="<?php the_permalink() ?>">
            <img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'relative-thumb')[0];?>" alt="<?php the_title(); ?>" width="120" height="120">
          </a>
        </div>
        <div class="cardlink_content">
          <span class="fa fa-clock-o"></span><span class="timestamp"><?php echo get_the_date('Y.m.d');?></span>
          <div class="cardlink_title">
            <a href="<?php the_permalink() ?>"><?php the_title(); ?> </a></div>
            <div class="cardlink_excerpt">
             <?php if(has_excerpt()){ the_excerpt(); }else{ new_excerpt( 100); }; ?>...
            </div>
        </div>
        <div class="cardlink_footer">
            
        </div>
       </div>
       <?php endwhile; ?>
       <?php endif; ?>

    </div>
 </div>
</div>
</div>

<?php get_footer(); ?>
