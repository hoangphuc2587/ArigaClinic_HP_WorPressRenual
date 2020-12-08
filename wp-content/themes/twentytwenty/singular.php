<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<div class="main-content">
 <div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url()?>/wp-content/uploads/tcd-w/IMG_245779.jpg">
    <div class="container">
       <div class="row">
          <div class="col-xs-120">
             <div class="top-headline" style="margin-top: 50px; margin-bottom: -20px;">ADC NEWS</div>
          </div>
       </div>
    </div>
 </div>
 <div class="container amore-inner-container">
    <div class="row">
       <div class="col-sm-120 no-left-padding">
          <?php
              if ( have_posts() ) {

                while ( have_posts() ) {
                  the_post(); 
                $post_id = get_the_ID();
                $title_post =  get_the_title($post_id);
                $url_post = get_permalink($post_id);
                $categories_post = get_the_category($post_id);
                $h1_title =  get_post_meta( $post_id, 'h1_title', true );
                $arr_cat_id = array();
          ?>
          <article id="post-1858" class="post-1858 post type-post status-publish format-standard has-post-thumbnail hentry category-51">
             <header class="breadcrumb">
                <ul id="bread_crumb" class="clearfix">
                   <li itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" class="home">
                     <a itemprop="url" href="<?php echo home_url(); ?>/">
                        <span itemprop="title">Home</span>
                     </a>
                  </li>
                  <li itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb"> 
                      <?php
                        $i = 0;
                        foreach ($categories_post as $cate) {
                           $arr_cat_id[] = $cate->cat_ID;
                      ?>
                        <a itemprop="url" href="<?php echo home_url().'/'.$cate->slug; ?>/">
                          <span itemprop="title"><?php echo $cate->name?><?php echo ($i < count($categories_post) -1 ) ? ',' : '';?></span>
                        </a>
                      <?php
                        $i++;
                        }
                      ?>
                    </li>
                   <li class="last"><?php echo $title_post; ?></li>
                </ul>
                <h1 class="page-title mt40 mb10"><?php echo empty($h1_title) ? $title_post : $h1_title; ?></h1>
                <div class="entry-meta mb45">
                  <span class="categories-wrap">
                      <?php
                        $i = 0;
                        foreach ($categories_post as $cate) {
                      ?>                        
                        <a href="<?php echo home_url().'/'.$cate->slug; ?>/" rel="category tag"><?php echo $cate->name?><?php echo ($i < count($categories_post) -1 ) ? ',' : '';?></a>   
                      <?php
                        $i++;
                        }
                      ?>                    
                  </span>
                </div>
             </header>
             <div class="entry-content">
                <?php get_template_part( 'template-parts/share-top', null, array('title_post' => $title_post, 'url_post' => $url_post));?>
              
                <div class="entry-content-thumbnail"> 
                 <img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id($post_id), 'full')[0];?>" style="margin-bottom:40px">
                </div>

                <?php the_content(); ?> 

                <div style="margin-top:30px;">
                  <?php get_template_part( 'template-parts/share-top', null, array('title_post' => $title_post, 'url_post' => $url_post));?>
                </div>
             </div>
             <footer class="entry-meta">
                <div class="row">
                   <div class="col-xs-60 text-right">
                     <?php if (!empty($previous_post = get_previous_post())): ?>
                     <a style="text-decoration:none" href="<?= get_permalink($previous_post->ID); ?>"> 
                      <span style="font-size:24px; padding-right:10px;" class="text-muted fa fa-chevron-left"></span>
                      <div class="thumb hidden-xs" style="width:120px; height:120px;">
                        <img width="120" height="120" src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id($previous_post->ID), 'relative-thumb')[0];?>" class="attachment-size3 size-size3 wp-post-image" alt="">
                      </div> 
                     </a>
                     <?php endif; ?>
                   </div>
                   <div class="col-xs-60 text-left">
                      <?php if (!empty($next_post = get_next_post())): ?>
                      <a style="text-decoration:none" href="<?= get_permalink($next_post->ID); ?>">
                         <div class="thumb hidden-xs" style="width:120px; height:120px;">
                          <img width="120" height="120" src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id($next_post->ID), 'relative-thumb')[0];?>" alt=""/>
                          </div>
                         <span style="font-size:24px; padding-left:10px;" class="text-muted fa fa-chevron-right"></span> 
                      </a>
                      <?php endif; ?>
                   </div>
                </div>
                <div class="row hidden-xs"></div>
             </footer>
          </article>
          <?php
               }
            }

          ?>
          <hr/>
          <div id="related_posts">
              <?php              
              $args = array( 
                'category__in'   => $arr_cat_id,
                'orderby'        => 'rand',
                'posts_per_page' => '6',
                'post__not_in'   => array($post_id),
              );
              // the query
              $the_query = new WP_Query( $args ); ?>
               
              <?php if ( $the_query->have_posts() ) : ?>
                  <!-- the loop -->
                  <?php $i=0; ?>
                  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                  <?php 
                     $p_id = get_the_ID();
                  ?>  
              <?php
                if ($i%2 == 0){
                  if ($i > 1){
                    echo '</div>';
                  }
                  echo '<div class="row mb25">';
                }
              ?>
              
                <div class="col-sm-60 col-xs-120 p0">
                   <article id="post-1844" class="post-1844 post type-post status-publish format-standard has-post-thumbnail hentry category-51">
                      <div class='col-xs-35' style='padding-right:0px'>
                         <a href="<?php echo get_permalink($p_id); ?>">
                            <div class="thumb"><img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id($p_id), 'relative-thumb')[0];?>" alt=""></div>
                         </a>
                      </div>
                      <div class='col-xs-85'>                        
                         <h4 class='underline-hover' style='display:block; margin-bottom:10px; margin-top:10px'>
                          <a class='content_links' href='<?php echo get_permalink($p_id); ?>'>
                            <?php echo get_the_title();?>
                          </a>
                        </h4>
                      </div>
                   </article>
                </div>
             
                  <?php $i++; ?>
                  <?php endwhile; ?>
                </div>  
                  <!-- end of the loop -->
             <?php wp_reset_postdata(); ?>
             <?php endif; ?>
             <div class="row mb25"></div>
          </div>
       </div>
    </div>
 </div>
</div>
<?php get_footer(); ?>
<script type="text/javascript">
  if($('#map999921').length > 0){
   var loaded_map999921 = false;
   var timer_map999921;
   
   timer_map999921 = setInterval(function(){
     if(google && !loaded_map999921){
       clearInterval(timer_map999921);
       loaded_map999921 = true;
   
       var disabled = false;
       var draggable = true;
       var geocoder = new google.maps.Geocoder();
   
       geocoder.geocode({address: '140 ky con Q1 HCMC'}, function(results, status) {
         if(status == google.maps.GeocoderStatus.OK){
           var mapOptions = {
             draggable: draggable == true ? true : false,
             center: results[0].geometry.location,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scrollwheel: false,
             disableDefaultUI: disabled,
             disableDoubleClickZoom: disabled,
             styles: [{"featureType":"landscape","stylers":[{"hue":"#F1FF00"},{"saturation":-27.4},{"lightness":9.4},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#0099FF"},{"saturation":-20},{"lightness":36.4},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#00FF4F"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFB300"},{"saturation":-38},{"lightness":11.2},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00B6FF"},{"saturation":4.2},{"lightness":-63.4},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#9FFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]}]
           };
   
           var map = new google.maps.Map(document.getElementById('map999921'), mapOptions);
           var marker = new google.maps.Marker({
               map: map,
               position: results[0].geometry.location
           });
   
           var map_changed = false;
           if(draggable){
             google.maps.event.addListener(map, 'dragstart', function(){
               map_changed = true;
             });
           }
   
           var map_resize = function(){
             google.maps.event.trigger(map, 'resize');
             if(map_changed){
               google.maps.event.removeListener(resize_listener);
             }else{
               map.setCenter(results[0].geometry.location);
             }
           };
   
           var resize_listener = google.maps.event.addDomListener(window, 'resize', map_resize);
   
           setTimeout(map_resize, 1000);
           google.maps.event.addDomListenerOnce(window, 'load', map_resize);
         }
       });
     }
   }, 500);
 }
</script>
