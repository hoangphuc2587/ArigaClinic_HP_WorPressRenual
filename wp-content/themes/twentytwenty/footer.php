<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */
if(is_category()){
  $category = get_category( get_query_var( 'cat' ) );
  $cat_id = $category->cat_ID;
}else{
  $cat_id= 'null';
}
  if( $cat_id ){
    $cat_id = $cat_id;
  } else {
    $cat_id = 'null';
  }
?>          
      <div id="footer" class="front_mobile_footer">
         <div class="container">
            <div class="row hidden-xs">
               <div class="col-xs-60 col-xs-offset-20 text-center"></div>
               <div class="col-xs-40 text-right"></div>
            </div>
            <div class="row visible-xs">
               <div class="col-xs-120 text-center"></div>
               <div class="col-xs-120 footer_mobile_menu_wrapper">
                  <div id="footer-menu-2" class="footer_mobile_menu clearfix" style="width: 100%">
                     <ul id="menu-footer" class="menu">                       
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
               <div class="col-xs-120 text-center footer_social_link_wrapper"></div>
            </div>

            <div class="row visible-xs">
              <div class="col-xs-120 no-padding">
                  <a href="<?php echo home_url(); ?>">
                    <img class="h_logo" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/logo-footer.png"/>
                  </a>
              </div>
            </div> 

            <div class="row mt40 visible-xs">
              <div class="col-xs-20 footer-icon-phone">
                <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_1.png">
              </div>
              <div class="col-xs-100 footer-phone">
               <h3 style="">090-418-6480</h3>
              </div>
            </div>

            <div class="row visible-xs">
              <div class="col-xs-20 footer-icon-address">
                <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_2.png">
              </div>
              <div class="col-xs-100 footer-address-2">
               <h3>140 Ký Con, Quận 1, Thành Phố Hồ Chí Minh</h3>
              </div>
            </div>   

            <div class="row pt-35 visible-xs">
              <div class="col-xs-20 footer-icon-line">
                <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_3.png">
              </div>
              <div class="col-xs-50 footer-icon-pr-code">
                <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_6.png">
              </div>
              <div class="col-xs-50 footer-pr-code">
                <h3>LINEでのご予約</h3>
              </div>
            </div>

            <div class="row mt40 visible-xs">
              <div class="col-xs-120 no-padding">
                  <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_5.png">
              </div>
            </div>            
            <div class="row mt40 visible-xs" style="margin-bottom: 30px">
              <div class="col-xs-120 no-padding">
                  <div id="map-canvas-footer" class="visible-xs" style="width:100%; height:380px; border:4px solid white; border-radius:2px;"></div>
              </div>
            </div> 
         </div>
      </div>
      <div class="hidden-xs footer_main">
         <div class="container amore-section">            
            <div class="row">
               <div class="col-xs-120 no-padding hidden-xs">
                  <div class="footer-menu collapse navbar-collapse">
                     <ul id="menu-footer-pc" class="nav navbar-nav">                        
                        <?php                              
                            wp_nav_menu(
                              array(
                                'container'  => '',
                                'items_wrap' => '%3$s',
                                'link_before'     => '',
                                'theme_location' => '',
                              )
                            );
                        ?>  
                     </ul>
                  </div>
               </div> 
            </div>
            <div class="row">
               <div class="col-xs-30 text-center romaji">
                  <div id='footer_logo_text_area'>
                     <h3 id="footer_logo_text">
                      <a href="<?php echo home_url(); ?>">
                       <img class="h_logo" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/logo-footer.png"/>
                      </a>
                      </h3>
                     <h4 id="footer_description"></h4>
                  </div>
                  <div class="row">
                    <div class="col-xs-25 footer-icon-phone">
                      <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_1.png">
                    </div>
                    <div class="col-xs-95 footer-phone">
                     <h3 style="">090-418-6480</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-25 footer-icon-address">
                      <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_2.png">
                    </div>
                    <div class="col-xs-95 footer-address-2">
                     <h3>140 Ký Con, Quận 1, Thành Phố Hồ Chí Minh</h3>
                    </div>
                  </div>                  
                  <div class="row pt-35">
                    <div class="col-xs-25 footer-icon-line">
                      <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_3.png">
                    </div>
                    <div class="col-xs-45 footer-icon-pr-code">
                      <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_6.png">
                    </div>
                    <div class="col-xs-50 footer-pr-code">
                      <h3>LINEでのご予約</h3>
                    </div>
                  </div>
               </div>
               <div class="col-xs-60 text-center romaji">
                   <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_5.png">
               </div>
               <div class="col-xs-30 text-center romaji">
                  <div id="map-canvas" style="width:100%; height:380px; border:4px solid white; border-radius:2px;"></div>
                  <div class="row">
                    <div class="col-xs-25 footer-icon-address">
                      <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer_1_2.png">
                    </div>
                    <div class="col-xs-95 footer-address-2">
                     <h3>140 Ký Con, Quận 1, Thành Phố Hồ Chí Minh</h3>
                    </div>
                  </div> 
               </div> 
            </div>
            <div class="scrolltotop">
            <a href="#verytop"> <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/arrow.png"></a></div>
            </div>
         </div>
         
      </div>    
      <div id="return_top"> <a href="#header_top" style="bottom: 50px;"><span>PAGE TOP</span></a></div>

		<?php //wp_footer(); ?>
      
     <!--  <script type='text/javascript'>var SlimStatParams = {"ajaxurl":"<?php echo home_url();?>/wp-admin\/admin-ajax.php","baseurl":"\/","dnt":"noslimstat,ab-item","ci":"YTozOntzOjEyOiJjb250ZW50X3R5cGUiO3M6NDoicGFnZSI7czoxMDoiY29udGVudF9pZCI7aTo2O3M6NjoiYXV0aG9yIjtzOjc6ImFyaWdhZGMiO30-.21e5926110e2850f7b7013fd02e5ccc1"};</script> <script type='text/javascript' src='https://cdn.jsdelivr.net/wp/wp-slimstat/tags/4.8.8.1/wp-slimstat.min.js'></script> -->
      <script type="text/javascript">
         var canLoad = true;

         
         function page_ajax_get(){
                  var page = jQuery('.paged').last().attr('data-paged') || 2;
              var cat = <?php echo $cat_id; ?>;
              var ajaxurl = '<?php echo admin_url( 'admin-ajax.php' ); ?>';

              canLoad = false
              jQuery.ajax({
                type: 'POST',
                url: ajaxurl,
                data: {"action": "load-filter", cat: cat, paged:page },
                success: function(response) {
                  if(response.length > 100){
                    var id = page - 1;
                    id.toString();
                    jQuery("#infiniscroll").html(jQuery("#infiniscroll").html() + response);
                  } else {
                    jQuery("#pagerlink").html("最終ページ")
                    jQuery("#pagerbutton").attr("disabled", "disabled")
                  }

                  setTimeout(function(){ canLoad = true }, 2000)
                }
              })
            }         
         
         jQuery(window).load(function(){
         
         jQuery("#site-cover").fadeOut('slow');
         
         var cat = null
         var currentSlide = -1
         
         var fixStuff = function(){
           jQuery(".heightaswidth").each(function(){
             jQuery(this).css('height', jQuery(this).outerWidth())
           })
         
         /* ここ削除 */
         
           jQuery(".verticalcenter").each(function(){
             var center = (jQuery(this).parent().width() / 2) - parseInt(jQuery(this).parent().css('padding-top'))
             //var size = jQuery(this).outerHeight() / 2
             var size = 13;
             jQuery(this).css('padding-top', center - size + 20)
           })
         
           jQuery(".verticalcentersplash").each(function(){
             var center = jQuery(window).height() / 2
             var size = jQuery(this).outerHeight() / 2
             jQuery(this).css('padding-top', center - size)
           })
         }
         
         // var nextSlide = function(){
         //   currentSlide++
         
         //   if(jQuery("[data-order='" + currentSlide + "']").length == 0) currentSlide = 0
         
         //   jQuery('.parallax-mirror[data-order]').fadeOut("slow");
         //   jQuery("[data-order='" + currentSlide + "']").fadeIn("slow");
         // }
         
         //   jQuery('.parallax-mirror[data-order]').hide();
         
         
         var nextSlide = function(){      
           currentSlide++
         
           if(jQuery("[data-order='" + currentSlide + "']").length == 0) currentSlide = 0
         
                 // if( $( window ).width() > 767 ){
             jQuery('.parallax-mirror[data-order]').fadeOut("slow");
           // } else {
                 // }
           
           jQuery("[data-order='" + currentSlide + "']").fadeIn("slow");
         }
         
                 // if( $( window ).width() > 767 ){
             jQuery('.parallax-mirror[data-order]').hide();
           // } else {
                 // }
          
           fixStuff();
           nextSlide();


          //setInterval(nextSlide, 3000);

          setInterval(function(){
            nextSlide();
            jQuery( ".button-slider ul li" ).each(function( index ) {
               if (jQuery(this).hasClass("active")){
                  jQuery(this).removeClass("active");
               }      
            }); 
            jQuery(".slider-item-"+currentSlide).addClass("active"); 

          }, 5000)
         
         
          setInterval(function(){
           jQuery(".fade-me-in").first().fadeIn().removeClass('fade-me-in');
          }, 200)
         
         
         
          jQuery(window).resize(function() {
           fixStuff();
          });
         
         
         
         
         if (jQuery("#telephone").length && jQuery("#logo").length) {
           jQuery("#telephone").css('left', jQuery("#logo").width() + 30)
         }
         
         jQuery('#topcover').addClass('topcover-visible')
         
         jQuery("a[href*=#]:not([href=#])").click(function(){
           if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
             var e=jQuery(this.hash);            
             if(e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]"),e.length)return jQuery("html,body").animate({scrollTop:e.offset().top - 150},1e3),!1
           }
         })         

         var hash = window.location.hash;        
         if(hash != ''){
             var e=jQuery(hash);
             if(e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]"),e.length)return jQuery("html,body").animate({scrollTop:e.offset().top - 150},1e3),!1
         }

        
         jQuery(".button-slider ul li").click(function(){ 
            currentSlide = parseInt(jQuery(this).attr("data-order")) - 1;
            nextSlide();
            jQuery( ".button-slider ul li" ).each(function( index ) {
               if (jQuery(this).hasClass("active")){
                  jQuery(this).removeClass("active");
               }      
            }); 
            jQuery(".slider-item-"+currentSlide).addClass("active"); 
         })
         
         $(".menu-item, .menu-item a").click(function(){ })
         
         jQuery(window).scroll(function(){
           var center = jQuery(window).height() - 300
         
         /*
         
           if(jQuery(window).scrollTop() > jQuery("#footer").offset().top - jQuery(window).height() && canLoad){
             page_ajax_get();
           }
         */
         
           jQuery('.invisibletexteffect').each(function(){
             var percentFromCenter = Math.abs(( (jQuery(this).offset().top + jQuery(this).outerHeight() / 2 ) - jQuery(document).scrollTop()) - center) / center
         
             if(percentFromCenter < 1)
               jQuery(this).removeClass('offsetted')
           })
         
         
         })
         })
                   
           google.maps.event.addDomListener(window, 'load', function(){
           var geocoder = new google.maps.Geocoder();
         
                 geocoder.geocode({'address':'140 Ký Con, Quận 1 THÀNH PHỐ HỒ CHÍ MINH71010'}, function(results, status) {
                   if (status == google.maps.GeocoderStatus.OK){
               var mapOptions = {
                 center: results[0].geometry.location,
                 zoom: 18,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scrollwheel: false,
                           }
         
         　        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
               var marker = new google.maps.Marker({
                   map: map,
                                 position: results[0].geometry.location
                             })

                   var map2 = new google.maps.Map(document.getElementById('map-canvas-footer'), mapOptions)
               var marker2 = new google.maps.Marker({
                   map: map2,
                                 position: results[0].geometry.location
                             })              
             }
         
           })
         })

        $(".stick-greeting").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#section-greeting").offset().top - 60
            }, 2000);
        });

        $(".stick-care").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#section-care").offset().top - 120
            }, 2000);
        });

        $(".stick-support").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#section-support").offset().top - 60
            }, 2000);
        });
        
      </script>
      <script defer src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/js/autoptimize_b29c772d238f4707fabd394edbc70dfc.js"></script>

	</body>
</html>
