<?php
/**
 * Template Name: Staff Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
$post_id = get_the_ID();
$h1_title =  get_post_meta( $post_id, 'h1_title_page', true );
?>

<div class="main-content">
<div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/bg_staff.jpg">
   <div class="container">
      <div class="row">
         <div class="col-xs-120 no-padding">
            <h1 class="top-headline"><?php the_title()?></h1>
         </div>
      </div>
   </div>
</div>
<div class="container amore-inner-container">
   <div class="row">
      <div class="col-sm-120 col-xs-120 no-padding single-page staff-page">
         <header class="breadcrumb mb20">
            <a href="<?php echo home_url(); ?>/">
            <span>
            <img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home">
            </span>
            </a>
            <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span>
         </header>
         <div class="row article">
            <h1 class="ppt"><?php echo empty($h1_title) ? 'プロフィール' : $h1_title; ?></h1>
            <div class="row pt-20">
               <div class="col-sm-35 col-xs-120">
                  <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_1.jpg" alt=""/> 
               </div>
               <div class="col-sm-85 col-xs-120">
                  院長　有賀　智哉　(ARIGA TOMOYA)<br />
                  <p class="info-dr">
                     【ご挨拶】<br />
                     ホーチミンのありが歯科　院長の有賀智哉です。<br /> 
                     ホーチミンの皆様に日本の技術だけではなく、おもてなしや接客など快適な空間での歯科治療をご提供したいと思っております。<br /> 医療人として真摯に患者様に向き合い最新の技術が提供できるように日々研鑽したいと思っております。<br /> ホーチミンに関わる方の歯のご健康に携われたらよいかと思っております。
                  </p>
                  <p class="info-dr">
                     【経験年数】 <br />
                     一般歯科治療　臨床経験　　20年<br />
                     インプラント　臨床経験　17年
                  </p>
                  <p class="info-dr">    
                     【得意分野】 <br />
                     審美歯科　インプラント　こども矯正　総合歯科診療
                  </p>
               </div>
            </div>
            <h4 class="circle">経 歴</h4>
            <div class="row">
               <div class="col-sm-80 col-xs-120">
                  <ul class="list-item">
                     <li>愛知学院大学歯学部　卒業</li>
                     <li>歯科医師免許取得</li>
                     <li>南カリフォルニア大学歯学部　短期留学</li>
                     <li>南カリフォルニア大学客員研究員</li>
                     <li>日本審美歯科学会所属</li>
                     <li>JBH　ビヨンドホワイトニングインストラクター</li>
                     <li>ベトナム医師免許　歯科医師免許</li>
                  </ul>
               </div>
               <div class="col-sm-40 col-xs-120 right-thumbnail">
                  <img class="wp-image-1799 size-thumbnail" width="170" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/license.png" alt="" />
               </div>
            </div>
            <h4 class="circle">STUDY</h4>
            <div class="row">
               <div class="col-sm-120">
                  <ul class="list-item">
                    <li>東京SJCD レギュラーコース修了</li>
                    <li>名古屋SJCD 土屋賢司先生プライベートコース受講</li>
                    <li>東京SJCD アドバンスコース修了</li>
                    <li>SJCD Summer Seminar 2008 in Berlin参加</li>
                    <li>Prof.Dr.Dr.Rainer Schmelzeisen Dr.Axel Kirsch</li>
                    <li>Augmentation &amp; Implants Live Surjery &amp; Hands-On Course in Freiburg Certificate取得</li>
                    <li>名古屋SJCD主催　土屋賢司先生プライベートコース受講</li>
                    <li>小濱忠一先生プライベートコース受講</li>
                  </ul>
               </div>
            </div>
            <h4 class="circle">インプラント</h4>
            <div class="row">
               <div class="col-sm-120">
                  <ul class="list-item">
                     <li>Nobel Biocare Replace certificate</li>
                     <li>Astratec implant certificate</li>
                     <li>camlog implant cetificate</li>        
                  </ul>
               </div>
            </div>
            <h4 class="circle">矯正</h4>
            <div class="row">
               <div class="col-sm-120">
                  <ul class="list-item">
                     <li>Japan Invisalign Ortodontic Certificate</li>
                  </ul>
                  <div class="slideshow-container">
            				<div class="mySlides" style="text-align: center;">				  
            				  <img width="800" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/スライド1-1024x709.jpg">				  
            				</div>
            			</div>
               </div>
            </div>
            <h4 class="circle">活動</h4>
            <div class="row">
            	<div class="col-sm-120">
		            <div class="row activities">
                
                  <div class="col-sm-120 col-xs-120 pt-35">
                      <div class="item-text">
                        ２０１７年８月８日　Liberty Central Saigon Citypoint<br/>
                        『GPでもできるマウスピース矯正アソアライナー』講演
                      </div>
                      <div class="item-text">
                        ２０１８年１月７日　Renaissance Riverside Hotel Saigon<br/>
                        『Welcome Porcelain laminate veneer』講演
                      </div>
                   </div>

                   <div class="col-sm-120 col-xs-120 l-block">
                      <div class="item-img">
                        <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/10/IMG_3978-150x150.jpg" alt="" width="150" height="150"/>
                      </div>
                   </div>

                   <div class="col-sm-120 col-xs-120 pt-35">
                     <div class="item-text">
                        ２０１８年１月１１日　JW マリオット ホテル ハノイ<br/>
                        『Welcome Porcelain laminate veneer』講演
                      </div> 
                      <div class="item-text">
                        ２０１９年６月２４日　Liberty Central Saigon Citypoint<br/>
                        『GPでもできるマウスピース矯正GIKOアライナー』講演
                      </div>
                   </div>

                   <div class="col-sm-120 col-xs-120 l-block">
                      <div class="item-img">
                        <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/10/IMG_0458-1-150x150.jpg" alt="" width="150" height="150"/>
                      </div>
                   </div>

                   <div class="col-sm-120 col-xs-120 pt-35">
                      <div class="item-text">
                        <strong>USC（南カリフォルニア大学)</strong>
                      </div> 
                   </div>

                   <div class="col-sm-120 col-xs-120 l-block">
                      <div class="item-img">
                        <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/11/a3e889ccf2c4bbb7beba8d7f6e4a52ea-640x480-150x150.jpg" alt="" width="150" height="150"/>
                        <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/11/topi05b-150x150.jpg" alt="" width="150" height="150"/>
                        <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/11/usc-150x150.jpg" alt="" width="150" height="150"/>
                      </div>                
                   </div>

                   <div class="col-sm-120 col-xs-120 pt-35">
                      <div class="item-text">
                        USC(南カリフォルニア大学)でのPorcelain laminate veneerの講演
                      </div> 
                   </div>

                   <div class="col-sm-120 col-xs-120 l-block">
                      <div class="item-img">
                         <img class="alignleft wp-image-251 size-thumbnail" src="<?php echo home_url(); ?>/wp-content/uploads/2020/11/E58699E79C9F-12-e1534319258988-150x150.jpg" alt="" width="150" height="150"/>
                      </div>
                   </div>
		            </div>

                </div>
           </div>

           <h4 class="circle">スタッフ紹介</h4>
            <div class="row">
              <div class="col-sm-120">
                <img style="margin-top: 15px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/staff_6.jpg">
              </div>
            </div>    

         </div>
      </div>
   </div>
</div>
</div>
    	

<?php get_footer(); ?>

<script type="text/javascript">
    var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");	 
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";  
	  }	  
	  slides[slideIndex-1].style.display = "block";  	  
}
</script> 
