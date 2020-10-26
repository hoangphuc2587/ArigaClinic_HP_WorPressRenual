<?php
/**
 * Template Name: Top Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<div class="main-content">
   <div id="site-cover"></div>
   <section>
     <div class="slider heightasviewport has-background" data-order='0' data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/banner_1.png"></div>
    <div class="slider heightasviewport has-background" data-order='1' data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top3.jpg"></div>
    <div class="slider heightasviewport has-background" data-order='2' data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/banner_1.png"></div>
    <div class="slider heightasviewport has-background" data-order='3' data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/city-1557668_19201.jpg"></div>
    <div class="slider heightasviewport has-background" data-order='4' data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top2.png"></div>

    <div id="topcover" class="topcover heightasviewport">
       <div class="text-center verticalcentersplash amore-welcome-center">        
       </div>
    </div>
    <div class="topcover heightasviewport" style="opacity:1;-ms-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);transform:translate(0px,0px);"></div>
    <div id="top" class="heightasviewport" style="opacity:1; background:transparent">
    </div>
    <div class="button-slider hidden-xs">
      <ul>
          <li class="slider-item-0 active" data-order='0'></li>
          <li class="slider-item-1" data-order='1'></li>
          <li class="slider-item-2" data-order='2'></li>
          <li class="slider-item-3" data-order='3'></li>
          <li class="slider-item-4" data-order='4'></li>
      </ul>  
    </div>  
   </section>
   <section class="top-second">
    <div id="second">
       <div class="text-center container amore-welcome-top">
          <div class="row">
           <div class="col-sm-30 col-xs-58">
              <h4><img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top_1_1.png"></h4>
              <h3>ご挨拶</h3>
              <h2>GREETING</h2>
           </div>
           <div class="col-sm-30 col-xs-58">
              <h4><img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top_1_2.png"></h4>
              <h3>治療一覧</h3>
              <h2>CARE</h2>
           </div>
           <div class="col-sm-30 col-xs-58">
              <h4><img class="mt10" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top_1_3.png"></h4>
              <h3>サポート一覧</h3>
              <h2>SUPPORT</h2>
           </div>
           <div class="col-sm-30 col-xs-58">
              <h4><img class="mt15" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/top_1_4.png"></h4>
              <h3>お問い合わせ</h3>
              <h2>CONTACT</h2>
           </div>
          </div>
       </div>
    </div>
   </section>
  <?php 
         $args = array(
            'post_status' => array('publish'),                  
            'meta_query' => array(
                array(
                    'key'     => 'show_post_homepage',
                    'value'   => '',
                    'compare' => '!=',
                ),
            ),
            'posts_per_page' => 3,
            'orderby' => 'post_date', 
            'order' => 'DESC'
         );
         $arrPosts = new WP_query($args);
    ?>
    <?php if (!empty($arrPosts->have_posts())):?>
   <section class="news-top">
    <div id="third" class="container">
       <div class="row">
        <div class="col-xs-120 no-padding">
          <h3 class="text-center text-header"><span class="news-text">お知らせ &nbsp;&nbsp;<span>NEWS</span></span></h3>
         
          <div class="amore-section amore-section-list">
            
            <ul>
                <?php while ( $arrPosts->have_posts() ) : $arrPosts->the_post(); ?>
                <li><a href="<?php the_permalink() ?>"><span><?php echo get_the_date('Y.m.d');?></span> <?php the_title(); ?></a></li>                
                <?php endwhile; ?>
            </ul>          
         </div>
          
        </div>
       </div>
    </div>
   </section>
   <?php endif; ?>
   <section>
    <div id="fourth" class="container greeting-top">
       <div class="row">         
         <div class="col-xs-120 no-padding">
         <h3 class="lead romaji top-headline-center top-headline-greeting col-sm-offset-5 top-headline2 mb50"><span>GREETING</span></h3>
         <div class="row">
          <div class="col-xs-120 col-sm-50 col-sm-offset-5">
            <h3>日本人歯科医師がいる <br/>安心の歯科医院</h3>
            <p>ホーチミンのありが歯科では、<span style="color:#B16E6E">可能な限り歯を抜かず削らない</span>ことで歯の寿命を延ばすことに努力しています。</p>
            <p>日本人に合った歯医者さん、歯科医院での治療内容をわかりやすく丁寧にご説明し、納得していただいた上で診察・治療を行なっています。</p>
            <p>『虫歯の治療』『歯周病』『口臭』『歯並びの矯正』『かみ合わせ』『お子様の治療』歯を自然な白い色にする『ホワイトニング』『クリーニング』失った歯の『インプラント治療』まで、患者様にご安心して日本の歯医者さんの治療をしていただけます。</p>
            <p>最新の歯科用CTも完備されており、インプラントや親知らずの抜歯、歯の根の治療などで利用でき、施設面でも充実しております。</p>
          </div>
          <div class="col-xs-120 col-sm-55 col-sm-offset-5 col-sm-offset-5-right">
              <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_1.png">
          </div>
         </div>
        </div>
       </div>
    </div>
   </section>
   <section class="care-top">
    <div id="fifth" class="container">
       <div class="row">
        <div class="col-xs-120 no-padding text-center">
         <h3 class="lead romaji top-headline-center top-headline-care top-headline2"><span>CARE</span></h3>
         <h4 class="top-headline-care-text">治療一覧</h4>
         <div class="row">
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_1.png">
                 <h3 class="text-inline">CLEANING</h3>
               </div>
               <h3 class="text-outline">掃除・クリーニング</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top: 45px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_2.png">
                 <h3 class="text-inline">PREVENTION</h3>
               </div>
               <h3 class="text-outline">虫歯・歯周病予防</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top: 30px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_3.png">
                 <h3 class="text-inline">PAIN</h3>
               </div>
               <h3 class="text-outline">痛い・しみる</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top: 45px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_4.png">
                 <h3 class="text-inline">WHITENING</h3>
               </div>
               <h3 class="text-outline">白くしたい</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top: 35px;" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_5.png">
                 <h3 class="text-inline">PERIODONTITIS</h3>
               </div>
               <h3 class="text-outline">歯周病治療</h3>
            </div>  
      <!--    </div>
          <div class="row pb40"> -->
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top:40px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_6.png">
                 <h3 class="text-inline">BREATH</h3>
               </div>
               <h3 class="text-outline">口臭対策</h3>
            </div>
           <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top:60px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_7.png">
                 <h3 class="text-inline">WISDOM TOOTH</h3>
               </div>
               <h3 class="text-outline">親知らずが痛い</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top:70px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_8.png">
                 <h3 class="text-inline">ORTHODONIC</h3>
               </div>
               <h3 class="text-outline">歯並び・歯科矯正</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top:28px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_9.png">
                 <h3 class="text-inline">SECOND OPINION</h3>
               </div>
               <h3 class="text-outline">セカンドオピニオン</h3>
            </div>
            <div class="col-xs-120 col-sm-24">
               <div class="circle">
                 <img style="margin-top:40px" src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/care_1_10.png">
                 <h3 class="text-inline">IMPLANT</h3>
               </div>
               <h3 class="text-outline">インプラント</h3>
            </div>  
         <!-- </div> -->
        </div>
       </div>
    </div>
   </section>
   <section class="support-top">
    <div id="sixth" class="container">
       <div class="row">         
         <div class="col-xs-120 no-padding">
         <h3 class="lead romaji text-center top-headline-center top-headline-support top-headline2"><span>SUPPORT</span></h3>
         <h4 class="text-center top-title">サポート一覧</h4>

         <div class="row">
          <div class="col-xs-120 col-sm-50 col-sm-offset-5">
              <img  src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_2.png">
          </div>
          <div class="col-xs-120 col-sm-55 col-sm-offset-5 col-sm-offset-5-right">
            <h3 class="title-header-first" style="">はじめてのありが歯科</h3>
            <h4 class="title-header-first-text">First</h3>
        
            <p>ホーチミンのありが歯科では、患者様の声に耳を傾け、ご希望やご要望を伺います。何気ない言動から患者様の真意を把握し、努力します。そして、歯科医師としての専門的な意見を述べさせていただき、治療方針を立てます。このような医療人として当たり前の行為をきちんとこなしていきます。これが『ありが歯科スタイル』です。</p>

            <div class="row pt140">
              <div class="col-sm-80">
                   <a class="view-more" href="<?php echo home_url(); ?>/first-visit/">詳しく読む</a>
              </div> 
            </div> 
          </div>
         </div>

         <div class="row pt100 hidden-xs">
         
          <div class="col-xs-120 col-sm-50 col-sm-offset-5" >
            <h3 class="title-header-staff">スタッフ紹介</h3>
            <h4 class="title-header-staff-text">STAFF</h3>
        
            <p>ホーチミンのありが歯科のスタッフをご紹介いたします。日本人ドクターとスタッフ全員が日本語対応できるため、ご安心して受診していただけます。笑顔が素敵なベトナム人スタッフたちは和気あいあいと日本流の歯科システム、歯科医療を学びながら日本語の勉強も日々研鑚しております。どうぞ温かい目で見守ってください。</p>

            <div class="row pt100">
              <div class="col-sm-80">
                   <a class="view-more" href="<?php echo home_url(); ?>/staff/">詳しく読む</a>
              </div> 
            </div> 
          </div>

           <div class="col-xs-120 col-sm-55 col-sm-offset-5 col-sm-offset-5-right">
              <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_3.png">
          </div>
         </div>

         <div class="row pt100 visible-xs">
          <div class="col-xs-120 col-sm-50 col-sm-offset-5">
              <img  src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_3.png">
          </div>
          <div class="col-xs-120 col-sm-55 col-sm-offset-5 col-sm-offset-5-right">
            <h3 class="title-header-first" style="">スタッフ紹介</h3>
            <h4 class="title-header-first-text">STAFF</h3>
        
            <p>ホーチミンのありが歯科のスタッフをご紹介いたします。日本人ドクターとスタッフ全員が日本語対応できるため、ご安心して受診していただけます。笑顔が素敵なベトナム人スタッフたちは和気あいあいと日本流の歯科システム、歯科医療を学びながら日本語の勉強も日々研鑚しております。どうぞ温かい目で見守ってください。</p>

            <div class="row pt140">
              <div class="col-sm-80">
                   <a class="view-more" href="<?php echo home_url(); ?>/staff/">詳しく読む</a>
              </div> 
            </div> 
          </div>
         </div>


         <div class="row pt100">
          <div class="col-xs-120 col-sm-50 col-sm-offset-5">
              <img src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_4.png">
          </div>
          <div class="col-xs-120 col-sm-55 col-sm-offset-5 col-sm-offset-5-right">
            <h3 class="title-header-promise">ありが歯科の5つのお約束</h3>
            <h4 class="title-header-first-text">PROMISE</h3>
        
            <p>ホーチミンに関わる一人でも多くの方が、一生自分の歯で、美しく、楽しく、健康で、幸せに過ごしていただくためのサポートをしていくことが、我々ありが歯科の使命(ミッション)だと考えています。</p>

            <p class="mt60">『ホーチミンありが歯科の5つの約束』</p>
            <p>1.コミュニケーションを大事にする</p>
            <p>2.常に清潔で安全な環境を作る</p>
            <p>3.痛みにケアする</p>
            <p>4.医療人として日々研鑚する</p>
            <p>5.自分の受けた治療を提供する</p>

            <div class="row pt60">
              <div class="col-sm-80">
                   <a class="view-more" href="<?php echo home_url(); ?>/promise/">詳しく読む</a>
              </div> 
            </div> 
          </div>
         </div>

        </div>
       </div>
    </div>
   </section>
   <section class="tb120">
    <div class="amore-divider romaji" data-parallax="scroll" data-speed="0.6" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/images_5.png">
       <div class="container">
        <div class="row">
         <div class="col-xs-120 no-padding">
          <h2 class="invisibletexteffect animate offsetted top-headline fourth_headline"></h2>
         </div>
        </div>
       </div>
    </div>
  </section>
  <section class="category-top">
    <div id="seventh" class="container">
       <div class="row">         
         <div class="col-xs-120 no-padding">
         <h3 class="lead romaji text-center top-headline-center top-headline-category top-headline2"><span>Category</span></h3>
         <h4 class="text-center top-title">カテゴリ</h4>

         <div class="row">
          <div class="col-sm-120 padding030">
              <?php
                $categories = get_categories( array(
                   'orderby' => 'id',
                   'order'   => 'ASC',
                   'hide_empty' => '0',
                   'posts_per_page' => 6,
                ));
                $index = 0;
              ?>
              <?php foreach( $categories as $category ) { ?>
              <?php if ($index === 0 || $index%3 === 0 ){
                if ($index > 0){
                  echo '</div>';
                }
                echo '<div class="row">';
              }
              ?>              
                <div class="col-sx-60 col-sm-40 no-padding">
                  <a href="<?php echo home_url(); ?>/<?php echo $category->taxonomy ?>/<?php echo $category->slug;?>">
                    <img class="category-img"  src="<?php echo wp_get_attachment_image_src(get_term_meta($category->term_id, 'featured_image_id', true), 'full')[0];?>" />
                    <div class="caption-text"></div> 
                    <div class="text-center text-content">
                      <?php echo $category->name;?> <br/>
                      <span><?php echo $category->description;?></span>
                    </div> 
                  </a>
                </div>
              <?php
                 $index++;
              ?>
              <?php } ?>
              </div>

          </div>       
         </div>

        </div>
       </div>
    </div>
   </section>
  </div>
  <script>jQuery('.heightasviewport').css('height', jQuery(window).height())</script> 

<?php get_footer(); ?>
 
