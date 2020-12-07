<?php
/**
 * Template Name: Trouble Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<div class="main-content">
<div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble.jpg">
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
       <header class="breadcrumb mb20"> <a href="<?php echo home_url(); ?>"><span><img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home"></span></a> <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span></header>
       <div class="row article" style="margin:auto 0;">
          <h3 class="ppt">ホーチミンのありが歯科ではこのような１０の歯のお悩みにも対応しています。</h3><br />

          <section id="section-care" class="care-top care-trouble">
              <div id="fifth" class="container">
                 <div class="row">
                  <div class="col-xs-120 no-padding text-center">
                   <h3 class="lead romaji top-headline-center top-headline-care top-headline2"><span>CARE</span></h3>
                   <h4 class="top-headline-care-text">治療一覧</h4>
                   <div class="row">
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/cleaning">
                         <div class="circle">
                           <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_1.png">
                           <h3 class="text-inline">CLEANING</h3>
                         </div>
                         <h3 class="text-outline">掃除・クリーニング</h3>
                       </a>
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/prevention">
                         <div class="circle">
                           <img style="margin-top: 45px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_2.png">
                           <h3 class="text-inline">PREVENTION</h3>
                         </div>
                         <h3 class="text-outline">虫歯・歯周病予防</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/pain">
                         <div class="circle">
                           <img style="margin-top: 30px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_3.png">
                           <h3 class="text-inline">PAIN</h3>
                         </div>
                         <h3 class="text-outline">痛い・しみる</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/whitening">
                         <div class="circle">
                           <img style="margin-top: 45px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_4.png">
                           <h3 class="text-inline">WHITENING</h3>
                         </div>
                         <h3 class="text-outline">白くしたい</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/periodontitis">
                         <div class="circle">
                           <img style="margin-top: 35px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_5.png">
                           <h3 class="text-inline">PERIODONTITIS</h3>
                         </div>
                         <h3 class="text-outline">歯周病治療</h3>
                        </a> 
                      </div>  
                <!--    </div>
                    <div class="row pb40"> -->
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/breath">
                         <div class="circle">
                           <img style="margin-top:40px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_6.png">
                           <h3 class="text-inline">BREATH</h3>
                         </div>
                         <h3 class="text-outline">口臭対策</h3>
                        </a>
                      </div>
                     <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/wisdom-tooth">
                         <div class="circle">
                           <img style="margin-top:60px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_7.png">
                           <h3 class="text-inline">WISDOM TOOTH</h3>
                         </div>
                         <h3 class="text-outline">親知らずが痛い</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/orthodontic">
                         <div class="circle">
                           <img style="margin-top:70px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_8.png">
                           <h3 class="text-inline">ORTHODONTIC</h3>
                         </div>
                         <h3 class="text-outline">歯並び・歯科矯正</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/second-opinion">
                         <div class="circle">
                           <img style="margin-top:28px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_9.png">
                           <h3 class="text-inline">SECOND OPINION</h3>
                         </div>
                         <h3 class="text-outline">セカンドオピニオン</h3>
                        </a> 
                      </div>
                      <div class="col-xs-120 col-sm-24">
                        <a href="/trouble/implant">
                         <div class="circle">
                           <img style="margin-top:40px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/trouble_1_10.png">
                           <h3 class="text-inline">IMPLANT</h3>
                         </div>
                         <h3 class="text-outline">インプラント</h3>
                        </a> 
                      </div>  
                   <!-- </div> -->
                  </div>
                 </div>
              </div>
             </section>
       </div>
    </div>
 </div>
</div>
</div>

<?php get_footer(); ?>
