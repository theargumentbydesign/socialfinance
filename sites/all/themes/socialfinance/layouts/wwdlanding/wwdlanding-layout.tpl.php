<div<?php print $attributes; ?>>
  <header class="l-header" role="banner">
    <div class="l-constrained">
      <?php print render($page['navigation']); ?>
    </div>
  </header>
 <div class="hero">
  <?php print render($page['hero']); ?>
</div>

  <div class="l-main l-constrained">
    <a id="main-content"></a>
    <?php print render($tabs); ?>
    <?php print $breadcrumb; ?>
    <?php print $messages; ?>
    <?php print render($page['help']); ?>

    <div class="l-content" role="main">
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      
      <?php print render($page['content']); ?>
      
      <div id="publicservice">
     	 <?php print render($page['publicservice']); ?>
		</div>
         <div id="charities">  
      <?php print render($page['charities']); ?>
 		</div>
         <div id="trusts">  
              <?php print render($page['trusts']); ?>
		</div>
         <div id="international">  
              <?php print render($page['international']); ?>
		</div>
      <?php print $feed_icons; ?>
    </div>

  </div>

  <footer class="l-footer-wrapper" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>
</div>
