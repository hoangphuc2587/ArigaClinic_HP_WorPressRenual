<?php
/**
 * Template Name: First Visit Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>
<?php

	// if ( have_posts() ) {

	// 	while ( have_posts() ) {
	// 		the_post();
			
	// 	}
	// }
$post_id = get_the_ID();
$h1_title =  get_post_meta( $post_id, 'h1_title_page', true );
?>
<div class="main-content">
<div class="amore-divider romaji" data-parallax="scroll" data-image-src="<?php echo home_url(); ?>/wp-content/uploads/tcd-w/first_visit.jpg">
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
    <div class="col-sm-120 col-xs-120 no-padding single-page">
       <header class="breadcrumb mb20"> <a href="<?php echo home_url(); ?>"><span><img src="<?php echo home_url(); ?>/wp-content/themes/twentytwenty/assets/images/home.png" class="breadcrumb-home"></span></a> <span class="fa fa-chevron-right text-muted" style="font-size:10px">&nbsp;</span> <span><?php the_title()?></span></header>
       <div class="row article" style="margin:auto 0;">
          <h1 class="ppt"><?php echo empty($h1_title) ? 'Welcome ホーチミンのありが歯科へ' : $h1_title; ?></h1><br />
          <p>ホーチミンのありが歯科では患者様の声に耳を傾け、ご希望やご要望を知る。<br /> 何気ない言動から患者様の真意を知る努力をする。<br /> そして歯科医師としての専門家から意見を述べさせていただき、治療方針を立てる。<br />このような医療人として当たり前の行為をきちんとこなす。<br /><br />これが『<b>ありが歯科スタイル</b>』<br /><br />せっかく治療をするならきちんと綺麗に治して欲しい。
          <br />ホーチミンのありが歯科では、ご要望にお応えし、患者様に安心して歯科治療をホーチミンで受けていただけるように私たちは努力します。</p>        
          <h4 class="padding-left-title">初めてのホーチミンありが歯科ご来院の流れ</h4>
          <h5>STEP 1　ご予約</h5>
          <p>お電話 / LINEにてご予約をお願い致します。<br /> <a style="color:#337ab7" href="<?php echo home_url(); ?>/contact">お電話番号/ LINEの情報はこちら</a></p>
          <h5>STEP 2　ご来院</h5>
          <p>タクシーには<b>[140 KÝ CON , QUẬN 1 , THÀNH PHỐ HỒ CHÍ MINH] </b> (モッ ボーン ムイ キーコン クウォン モッ)とお伝えください。<br /> バイクでお越しの方は、地下にバイク駐車場がありますので、ご利用ください。<br />もし迷われたら、お電話にてタクシー運転手等に指示いたしますので、お電話よろしくお願い致します。</p>
          <h5>STEP 3　受付</h5>
          <p>受付にてご予約いただきたお名前をご頂戴いたしまして、問診録をご記入していただきます。<br />日本の健康保健証のご提示やパスポートのご提示は基本的に必要ありませんが、保険会社により必要であれば、<br />後ほど郵送やメールにて添付していただくことがございます。<br /> <span style="color: #ff0000;">※注　ベトナムのレッドインボイスが必要な方は、当日のみ発行等なりますのでご確認お願い致します。</span></p>
          <h5>STEP 4　 診察</h5>
          <p>ドクターがしっかりと病状や経過をお聞きします。その後治療に必要な検査、治療内容をご説明後、治療費用をご説明いたします。<br />また、日本の健康保険に準じた治療も可能でございますので、この点も説明させていただきます。 </p>
         
          <p>日本の健康保険に準じた治療のメリットやデメリットをお聞きになってからの治療開始でも良いと思いますので、ご検討ください。<br />また、その場ですぐにお見積もり、治療費の総額をお作りできますので、お気軽にお申し出ください。<br /> 保険会社やホーチミンの会社規定で診断書等が必要な場合も、無料でお作りできますのでお気軽にお問い合わせください。</p>
          <h5>STEP 5　　お会計</h5>
          <p>お疲れ様でした。<br />歯科治療は緊張いたしますので大変疲れると思います。受付にてお名前が呼ばれるまでしばらくご休息ください。 </p>
          <p>お支払いは<b>現金、クレジットカード、デビットカードの使用が可能です。</b> <br />(ベトナムドン、日本円、USドルが利用できますが、端数はベドナムドンでのお支払いをお願い致します。)</p>
          <p>次回かかる治療費用もお伝えしますので、ご準備よろしくお願いします。</p>
          <h5>STEP 6　　ご予約</h5>
          <p>次回も治療が必要な方は、受付にてご予約お願いします。<br /> 診察券をお渡ししますので、次回のご予約の日付と時間が記載されていますので、ご確認にご利用ください。</p>
          <h5>STEP 7　　ご帰宅</h5>
          <p>ドクターより本日の注意事項（食事のタイミングや出血等）をお伝えしておりますので、ご順守よろしくお願いします。<br />タクシーが必要な方は、お尋ねいたしますので、ご遠慮なくお伝えください。こちらから手配いたします。</p>
          <p>ホーチミンは雨が多いため、ホーチミンのありが歯科では傘の貸し出しサービスもしております。<br /> 次回のご来院時にご返却よろしくお願いします。</p>
          <p><span style="color: #ff0000;"><strong>『お疲れ様でした！お気をつけてお帰り下さい。』</strong></span></p>
          <p>なにかご自宅にてトラブルありましたらお気軽にお電話にてお問い合わせください。<br />費用面でのご心配事や保険請求につきましてもお気軽にご相談ください。</p>                            
       </div>
    </div>
 </div>
</div>
</div>

<?php get_footer(); ?>
