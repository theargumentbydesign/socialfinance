<?php

/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or
 *   'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 * @see omega_preprocess_html()
 */
?><!DOCTYPE html>
<?php if (omega_extension_enabled('compatibility') && omega_theme_get_setting('omega_conditional_classes_html', TRUE)): ?>
  <!--[if IEMobile 7]><html class="no-js ie iem7" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if lte IE 6]><html class="no-js ie lt-ie9 lt-ie8 lt-ie7" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie9 lt-ie8" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if IE 8]><html class="no-js ie lt-ie9" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><![endif]-->
  <!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><![endif]-->
  <!--[if !IE]><!--><html class="no-js" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><!--<![endif]-->
<?php else: ?>
  <html class="no-js" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<?php endif; ?>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <link rel="apple-touch-icon" sizes="57x57" href="/sites/all/themes/socialfinance/images/icons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/sites/all/themes/socialfinance/images/icons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/sites/all/themes/socialfinance/images/icons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/sites/all/themes/socialfinance/images/icons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/sites/all/themes/socialfinance/images/icons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/sites/all/themes/socialfinance/images/icons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/sites/all/themes/socialfinance/images/icons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/sites/all/themes/socialfinance/images/icons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/sites/all/themes/socialfinance/images/icons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/sites/all/themes/socialfinance/images/icons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/sites/all/themes/socialfinance/images/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/sites/all/themes/socialfinance/images/icons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/sites/all/themes/socialfinance/images/icons/favicon-16x16.png">
<link rel="manifest" href="/sites/all/themes/socialfinance/images/icons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/sites/all/themes/socialfinance/images/icons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<meta property="og:title" content="Social Finance UK">
<meta property="og:type" content="website">
<meta property="og:image" content="http://www.socialfinance.org.uk/sites/default/files/socialcard.jpg">
<meta property="og:url" content="http://www.socialfinance.org.uk">
<meta property="og:description" content="Social Finance is a not for profit organisation that partners with the government, the social sector and the financial community to find better ways of tackling social problems in the UK and beyond.">
</head>
<body<?php print $attributes;?>>
  <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
