//strip all divs that aren't the checklist
$('div').not('.checklist').hide();
//attach the checklist contents directly to the body tag
$('body').append($('.checklist')[0]);
//get rid of the artist column because it's not useful in this case
$('.artist').hide();
//get rid of the set column because it's not useful in this case
$('.set').hide();
//get rid of the header row because we don't want it
$('.headerRow').remove();
//get rid of the form because we don't want to submit anything
$('form').remove();
//get rid of the head tag to remove all CSS and other javascript from the page
$('head').remove();
//aaaand you're left with a table!