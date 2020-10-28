<?php
/**
 * Template Name: Contact Template
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
<div class="container amore-inner-container" style="margin-bottom:0px">
 <div class="row">
    <div class="col-sm-120 col-xs-120 no-padding single-page support-page">
       <header class="breadcrumb mb20"> <a href="<?php echo home_url(); ?>"><span><img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home"></span></a> <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span></header>
       <div class="row article" style="margin:auto 0;">
         <h4 class="padding-left-title">電話でのお問い合わせ/予約</h4>
         <div class="text-padding-left">
            <h2><b>【日本語専用】：０９０ - ４１８ - ６４８０ </b></h2><br />
            <h2><b>【診療時間】</b></h2>
            <div class="text-padding-left" >

               <table class="tbl"> 
                  <tr>
                     <th style="background-color: #8B8679;"></th>
                     <th style="background-color: #8B8679; text-align: center;color: #fff">午前</th>
                     <th style="background-color: #8B8679; text-align: center;color: #fff">午後</th>
                  </tr>
                  <tr style="text-align: center;">
                     <td>月曜~金曜</td>
                     <td>09:00 ~ 12:00</td>
                     <td>14:00 ~ 19:00</td>
                  </tr>
                  <tr style="text-align: center;">
                     <td>土曜</td>
                     <td>09:00 ~ 12:00</td>
                     <td>13:00 ~ 17:00</td>
                  </tr>
               </table>
            </div>
         <h2><b>【休診日】</b></h2>
         <h2 class="text-padding-left"><b>木曜(午前) / 日曜日</b></h2>
         </div>
         <h4 class="padding-left-title">LINEでの予約</h4>
         <div class="text-padding-left">
            <div class="alignleft wp-image-251 size-thumbnail">
               <img width="180" src="<?php echo home_url(); ?>/wp-content/uploads/2020/10/PIp-mJw6A.png" alt="qr-code">
            </div>
            <br /><p>友達追加後、以下情報をお送りください <br />【ご予約日】<br />【お名前】<br />【 治療内容】</p>
         </div>
         <h4 class="padding-left-title">住所</h4>
         <h2 class="text-address">住所：140 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh</h2>
         <div class="map" >
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.257174442704!2d106.697798!3d10.768024000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fda4c70ff%3A0x41f9fe114ec78365!2zMTQwIEvDvSBDb24sIFBoxrDhu51uZyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwg44OZ44OI44OK44Og!5e0!3m2!1sja!2sus!4v1601975422919!5m2!1sja!2sus" width="700" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
         
         <div class="fb-gg-fw">
    
            <a class="button_share share twitter" href="#"><i class="fa fa-twitter"></i> Tweet</a>
      
            <a class="button_share share facebook button_share1" href="#"><i class="fa fa-facebook"></i> Share</a>  
      
            <a class="button_share share gplus button_share1" href="#"><i class="fa fa-google-plus"></i> +1 </a>
         </div>  

         </div>
          
          
     </div>
   </div>
</div>
</div>
<?php get_footer(); ?>
