<?php
/**
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
<div id="share_top1">
   <div class="sns">
      <ul class="type1 clearfix">
         <li class="twitter">
            <a href="http://twitter.com/share?text=<?php echo $args['title_post']; ?>&url=<?php echo $args['url_post'];?>&via=&tw_p=tweetbutton&related=" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');return false;">
              <i class="icon-twitter"></i><span class="ttl">Tweet</span><span class="share-count"></span>
            </a>
          </li>
         <li class="facebook">
            <a href="//www.facebook.com/sharer/sharer.php?u=<?php echo $args['url_post'];?>&amp;t=<?php echo $args['title_post']; ?>" class="facebook-btn-icon-link" target="blank" rel="nofollow">
                <i class="icon-facebook"></i><span class="ttl">Share</span><span class="share-count"></span>
            </a>
          </li>
         <li class="googleplus">
            <a href="https://plus.google.com/share?url=<?php echo $args['url_post']; ?>" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=500');return false;">
              <i class="icon-google-plus"></i><span class="ttl">+1</span><span class="share-count"></span>
            </a>
          </li>
      </ul>
   </div>
</div>


