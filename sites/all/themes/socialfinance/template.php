<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * socialfinance theme.
 */


/* RESETS USERNAME LENGTH - FOR GERALDINE PEACOCK */
function socialfinance_preprocess_username(&$vars) {
	//putting back what drupal core messed with
	$vars['name'] = check_plain($vars['name_raw']);
}