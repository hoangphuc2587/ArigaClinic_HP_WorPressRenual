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
                  <div id="footer-menu-2" class="footer_mobile_menu clearfix">
                     <ul id="menu-footer" class="menu">
                     <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a href="http://dev.arigadc.com/first-visit/">初めてのありが歯科</a></li>
                        <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="http://dev.arigadc.com/staff/">Dr/スタッフ紹介</a></li>
                        <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="http://dev.arigadc.com/category/">歯の悩み</a></li>
                        <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-32"><a href="http://dev.arigadc.com/promise/">ありが歯科のお約束</a></li>
                        <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/about-medical-expenses/">治療費について</a></li>
                        <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/support/">お問い合わせ</a></li>
                     </ul>
                  </div>                  
               </div>
               <div class="col-xs-120 text-center footer_social_link_wrapper"></div>
            </div>
         </div>
      </div>
      <div class="hidden-xs footer_main">
         <div class="container amore-section">
            <div class="row">
               <div class="col-xs-120 no-padding hidden-xs">
                  <div class="footer-menu collapse navbar-collapse">
                     <ul id="menu-footer-pc" class="nav navbar-nav">
                     <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a href="http://dev.arigadc.com/first-visit/">初めてのありが歯科</a></li>
                        <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="http://dev.arigadc.com/staff/">Dr/スタッフ紹介</a></li>
                        <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="http://dev.arigadc.com/category/">歯の悩み</a></li>
                        <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-32"><a href="http://dev.arigadc.com/promise/">ありが歯科のお約束</a></li>
                        <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/about-medical-expenses/">治療費について</a></li>
                        <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="http://dev.arigadc.com/support/">お問い合わせ</a></li>
                     </ul>
                  </div>
               </div>               
            </div>
            <br />
            <br />
            <br />     
            <br />
            <div class="row">
                    <div class="col-sm-34">
                    <div style="padding-left: 45px;">
                  
                    <a href="<?php echo home_url(); ?>"><img  src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer-1.png?1601524837" /></a><br /><br />
                    <p style=" font-family: Gill Sans; color: #F2F1EF; font-size: 30px;"><img style="width: 30px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/icon-map.png?1601524837" />090-418-6480</p>
                    <p style=" font-family: Gill Sans; color: #F2F1EF; font-size: 12px;"><img style="width: 30px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/icon-phone.png?1601524837" />140 Ký Con, Quận 1 THÀNH PHỐ HỒ CHÍ MINH</p>
                    <p style=" font-family: YuMincho; color: #F2F1EF; font-size: 12px;"><img style="width: 30px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/icon-line.png?1601524837" /><img style="width: 100px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/icon-qr.png?1601524837" />LINEでのご予約</p>
                  </div>
                    </div>
                    <div class="col-sm-56">
                    <a href="<?php echo home_url(); ?>"><img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/footer-9.png?1601524837" /></a>
                    </div>
                    <div class="col-sm-24">
                    <div class="nenvang">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.257174442704!2d106.697798!3d10.768024000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fda4c70ff%3A0x41f9fe114ec78365!2zMTQwIEvDvSBDb24sIFBoxrDhu51uZyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwg44OZ44OI44OK44Og!5e0!3m2!1sja!2sus!4v1601975422919!5m2!1sja!2sus" width="400" height="240" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <p style=" font-family: Gill Sans; color: #F2F1EF; font-size: 10px;"><img style="width: 30px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/icon-map.png?1601524837" />140 Ký Con, Quận 1 THÀNH PHỐ HỒ CHÍ MINH</p>
                    </div>
                    </div>
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
         
          setInterval(nextSlide, 3000);
         
         
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
             if(e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]"),e.length)return jQuery("html,body").animate({scrollTop:e.offset().top},1e3),!1
           }
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
         
          <?php if (get_the_title() == ''):?>
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
             }
         
           })
         })
         <?php endif;?>  
      </script>
      <script defer src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/js/autoptimize_b29c772d238f4707fabd394edbc70dfc.js"></script>

	</body>
</html>
