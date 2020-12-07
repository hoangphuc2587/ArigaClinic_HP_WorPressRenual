<?php
/**
 * Template Name: Categories Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>
<style>
   ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
   }

   ul.pagination li {display: inline;}

   ul.pagination li a {
      color: white;
      float: left;
      padding: 10px 18px;
      text-decoration: none;
      background-color: #8f8554;
   }
   
</style>

<div class="main-content">
 <div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/banner_3.jpg">
    <div class="container">
       <div class="row">
          <div class="col-xs-120 no-padding">
             <h2 class="top-headline"><?php the_title()?></h2>
          </div>
       </div>
    </div>
 </div>

 <div class="container amore-inner-container">
    <div class="row">
       <div id="infiniscroll" class="col-xs-120 no-padding">
          <header class="breadcrumb mb20"> <a href="https://arigadc.com/"><span><img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home"></span></a> <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span></header>
          <h1 class="title-news">NEWS</h1>
          <div id="blog-index">             
             <div class="row" style="padding-right:15px">              
                <?php
                $catpage = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
                $catnum = 12;
                $offset = ($catnum * $catpage) - 12;

                $categories = get_categories( array(
                   'orderby' => 'name',
                   'order'   => 'ASC',
                   'hide_empty' => '0',
                   'number' => $catnum,
                   'offset' => $offset,
                   'posts_per_page' => 12,                   
                   'paged' => $catpage
                  ) );
                foreach( $categories as $category ) {
                ?>
                <div class="col-sm-38 col-sm-offset-2">
                   <div class="row">
                      <article id="post-17827" class="post-1787 post type-post status-publish format-standard has-post-thumbnail hentry category-dental_problems category-implant_reatment category-how_to_recover_periodontal_disease category-51">
                         <div class='col-sm-120 col-xs-60 mb20' style='padding-right:0px'>
                            <a href="<?php echo home_url(); ?>/<?php echo $category->slug;?>">
                               <!-- <div class="thumb blog-list-thumb"><img width="300" height="200" src="<?php echo(wp_get_attachment_image_src( get_term_meta($category->term_id, 'featured_image_id', true), 'category-thumb' )[0]) ?>" class="attachment-size1 size-size1 wp-post-image" alt="" srcset="<?php echo(wp_get_attachment_image_src( get_term_meta($category->term_id, 'featured_image_id', true), 'category-thumb' )[0]) ?> 300w, <?php echo(wp_get_attachment_image_src( get_term_meta($category->term_id, 'featured_image_id', true), 'category-thumb' )[0]) ?> 272w" sizes="(max-width: 300px) 100vw, 300px" /></div> -->
                               <div class="thumb blog-list-thumb"><img width="300" height="200" src="<?php echo(wp_get_attachment_image_src( get_term_meta($category->term_id, 'featured_image_id', true), 'category-thumb' )[0]) ?>" class="attachment-size1 size-size1 wp-post-image" alt=""  /></div>
                            </a>
                         </div>
                         <div class='col-sm-120 col-xs-60'>                            
                            <h4 class='blog-list-title'><a href="<?php echo home_url(); ?>/<?php echo $category->category_nicename ?>"><?php echo $category->name ?></a></h4>
                         </div>
                      </article>
                   </div>
                </div>
                <?php } ?>               
             </div>
             <div class="row" style="padding-right:15px; text-align: center;"><?php
            $total_terms = count( get_categories() );
            $pages = ceil($total_terms/$catnum);


            // if there's more than one page
            if( $pages > 1 ):
            echo '<ul class="pagination">';

            // if we're not on the first page, print the previous-link
            if ( $catpage > 1 ) {
            $prevpage = $catpage - 1;
            if ( $prevpage > 1 ) {
            echo '<li class="previous-page"><a href="'. get_permalink() .'?paged='. $prevpage .'"> &laquo; </a></li>';
            }
            else {
            echo '<li class="previous-page"><a href="'. get_permalink() .'"> &laquo; </a></li>';
            }
            }

            for ($pagecount=1; $pagecount <= $pages; $pagecount++):
            //set class
            $class = "page-num";
            if ( $pagecount == $catpage ) {
            $class .= " current-page";
            }
            // print number
            echo '<li class="'. $class .'"><a href="'. get_permalink() .'?paged='. $pagecount .'">'. $pagecount. '</a></li>';

            endfor;

            // if there is one more page after the current, print the next-link
            if ( $catpage < $pages ) {
            $nextpage = $catpage + 1;
            echo '<li class="previous-page"><a href="'. get_permalink() .'?paged='. $nextpage .'"> &raquo; </a></li>';

            }

            echo '</ul>';

            endif;

            ?></div>
             <div class="row" style="padding-right:15px;"></div>
          </div>
          
       </div>       
    </div>
 </div>
</div>

<?php get_footer(); ?>
