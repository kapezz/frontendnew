<?php
defined( '_JEXEC' ) or die( 'Restricted access');
defined('JPATH_BASE') or die();
echo file_get_contents(JURI::root().'index.php?option=com_content&view=article&id=28');
?>