/* Copyright 2023 biolithic. All rights reserved.  odysee
variable types:
scbt...Is can be true or false
scbt...Show can be 1 or 2 or 3 (show, blur, hidden)
scbt...Arr is an array
scbtOptions is an object of viewer selected options
scbt...Ref  is a reference to a live DOM element
scbt... is a string

all DOM selector variables are arrays. Use [0] to get the 1st one/single selector
multiple element selector document.body.getElementsByTagName document.body.getElementsByClassName
multiple element selector complex document.body.querySelectorAll

elemArr = array of DOM elements selected
elem = one DOM element from a selected array
str = text string
arr = generic array
arrl = array length
chat = line of chat containing username, message, etc
obj = object
chatObj = chat object
chatObjArr = array of chat objects
username = text string like John
message = text string like hello

indexedDB = window.indexedDB

These are lower case so we dont get confused in selectors
channelid
serviceid
videoid

*/
if ( window.hasOwnProperty('scbtOptions') ) {  } else { window.scbtOptions = {}; }
if ( window.scbtOptions.hasOwnProperty('scbtBorderColor') ) {  } else { window.scbtOptions.scbtBorderColor = '#ff0000'; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature4') ) {  } else { window.scbtOptions.scbtfeature4 = false; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature5') ) {  } else { window.scbtOptions.scbtfeature5 = false; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature15') ) {  } else { window.scbtOptions.scbtfeature15 = 'https://www.archyved.com/'; }

if ( window.hasOwnProperty('scbtchannelid') ) {  } else { window.scbtchannelid = null; }
if ( window.hasOwnProperty('scbtserviceid') ) {  } else { window.scbtserviceid = null; }
if ( window.hasOwnProperty('scbtvideoid') ) {  } else { window.scbtvideoid = null; }

if ( window.hasOwnProperty('scbtCurrentURL') ) {  } else { window.scbtCurrentURL = null; }
if ( window.hasOwnProperty('scbtDbName') ) {  } else { window.scbtDbName = null; }
if ( window.hasOwnProperty('scbtDbNameToSearch') ) {  } else { window.scbtDbNameToSearch = null; }
if ( window.hasOwnProperty('scbtFileName') ) {  } else { window.scbtFileName = null; }
if ( window.hasOwnProperty('scbtFontSize') ) {  } else { window.scbtFontSize = null; }
if ( window.hasOwnProperty('scbtFontUp') ) {  } else { window.scbtFontUp = null; }
if ( window.hasOwnProperty('scbtHeightSize') ) {  } else { window.scbtHeightSize = null; }
if ( window.hasOwnProperty('scbtSearchChat') ) {  } else { window.scbtSearchChat = null; }

if ( window.hasOwnProperty('scbtFullScreenHeightIs') ) {  } else { window.scbtFullScreenHeightIs = false; }
if ( window.hasOwnProperty('scbtFullScreenWidthIs') ) {  } else { window.scbtFullScreenWidthIs = false; }
if ( window.hasOwnProperty('scbtMobileIs') ) {  } else { window.scbtMobileIs = false; }
if ( window.hasOwnProperty('scbtSearchBarActiveIs') ) {  } else { window.scbtSearchBarActiveIs = false; }
if ( window.hasOwnProperty('scbtVODIs') ) {  } else { window.scbtVODIs = false; }
if ( window.hasOwnProperty('scbtVODLoadedIs') ) {  } else { window.scbtVODLoadedIs = false; }
if ( window.hasOwnProperty('scbtVODCommentsLoadedIs') ) {  } else { window.scbtVODCommentsLoadedIs = false; }
if ( window.hasOwnProperty('scbtKeybindOnIs') ) {  } else { window.scbtKeybindOnIs = false; }
if ( window.hasOwnProperty('scbtChannelPageIs') ) {  } else { window.scbtChannelPageIs = false; }

if ( window.hasOwnProperty('scbtNonBotChatShow') ) {  } else { window.scbtNonBotChatShow = 1; }
if ( window.hasOwnProperty('scbtSubChatShow') ) {  } else { window.scbtSubChatShow = 1; }
if ( window.hasOwnProperty('scbtTextOnlyChatShow') ) {  } else { window.scbtTextOnlyChatShow = 1; }
if ( window.hasOwnProperty('scbtVerifiedChatShow') ) {  } else { window.scbtVerifiedChatShow = 1; }
if ( window.hasOwnProperty('scbtVisibilityChatShow') ) {  } else { window.scbtVisibilityChatShow = 1; }

if ( window.hasOwnProperty('scbtjsonSocialMediaArr') ) {  } else { window.scbtjsonSocialMediaArr = []; }
if ( window.hasOwnProperty('scbtSavingChatIdsArr') ) {  } else { window.scbtSavingChatIdsArr = []; }
if ( window.hasOwnProperty('scbtBlockedWordsArr') ) {  } else { window.scbtBlockedWordsArr = []; }
if ( window.hasOwnProperty('scbtSpokenWordsArr') ) {  } else { window.scbtSpokenWordsArr = []; }
if ( window.hasOwnProperty('scbtSavedStreamsArr') ) {  } else { window.scbtSavedStreamsArr = []; }
if ( window.hasOwnProperty('scbtSearchingMessageIdsArr') ) {  } else { window.scbtSearchingMessageIdsArr = []; }
if ( window.hasOwnProperty('scbtUsernamesArr') ) {  } else { window.scbtUsernamesArr = []; }
if ( window.hasOwnProperty('scbtFollowedChannelsArr') ) {  } else { window.scbtFollowedChannelsArr = []; }

if ( window.hasOwnProperty('scbtVODSecondsTotal') ) {  } else { window.scbtVODSecondsTotal = 1; }
if ( window.hasOwnProperty('scbtVODMinutesLong') ) {  } else { window.scbtVODMinutesLong = 1; }
if ( window.hasOwnProperty('scbtVODSecondsLong') ) {  } else { window.scbtVODSecondsLong = 1; }

if ( window.hasOwnProperty('scbtCategoryLoading') ) {  } else { window.scbtCategoryLoading = {}; }
if ( window.hasOwnProperty('scbtLivestreamsLoading') ) {  } else { window.scbtLivestreamsLoading = {}; }

// *** OPTIONS FUNCTIONS
function scbt_helper_save_options() {
  var obj = {};

  // THEME
  var x = document.body.getElementsByClassName('scbttheme1'); // background color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme1'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme1': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme1': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme2'); // user name color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme2'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme2': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme2': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme3'); // highlighted chat color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme3'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme3': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme3': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme4'); // message color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme4'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme4': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme4': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme5'); // font size
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme5'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme5': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme5': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme6'); // text only chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme6'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbttheme6': true}, function() { window.scbtOptions.scbttheme6 = true; scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme6': false}, function() { window.scbtOptions.scbttheme6 = false; scbt_helper_apply_css_from_option(obj) })
      }
    });
  }
  


  // HIGHLIGHT
  x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted1': e.target.value }, function() { window.scbtOptions.scbthighlighted1 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted1': '' }, function() { window.scbtOptions.scbthighlighted1 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted2': e.target.value }, function() { window.scbtOptions.scbthighlighted2 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted2': '' }, function() { window.scbtOptions.scbthighlighted2 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted3': e.target.value }, function() { window.scbtOptions.scbthighlighted3 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted3': '' }, function() { window.scbtOptions.scbthighlighted3 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted4': e.target.value }, function() { window.scbtOptions.scbthighlighted4 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted4': '' }, function() { window.scbtOptions.scbthighlighted4 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted5'); // highlight VIP messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted5': e.target.value }, function() {  window.scbtOptions.scbthighlighted5 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted5': '' }, function() { window.scbtOptions.scbthighlighted5 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted6': e.target.value }, function() { window.scbtOptions.scbthighlighted6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted6': '' }, function() { window.scbtOptions.scbthighlighted6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted7': e.target.value }, function() { window.scbtOptions.scbthighlighted7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted7': '' }, function() { window.scbtOptions.scbthighlighted7 = ''; })
      }
    });
  }


  x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted8': e.target.value }, function() { window.scbtOptions.scbthighlighted8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted8': '' }, function() { window.scbtOptions.scbthighlighted8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted9': e.target.value }, function() { window.scbtOptions.scbthighlighted9 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted9': '' }, function() { window.scbtOptions.scbthighlighted9 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted10': e.target.value }, function() { window.scbtOptions.scbthighlighted10 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted10': '' }, function() { window.scbtOptions.scbthighlighted10 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted11': e.target.value }, function() { window.scbtOptions.scbthighlighted11 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted11': '' }, function() { window.scbtOptions.scbthighlighted11 = ''; })
      }
    });
  }





  
  // MUTE
  x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted1': true}, function() { window.scbtOptions.scbtmuted1 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted1': false}, function() { window.scbtOptions.scbtmuted1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted2': true}, function() { window.scbtOptions.scbtmuted2 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted2': false}, function() { window.scbtOptions.scbtmuted2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted3': true}, function() { window.scbtOptions.scbtmuted3 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted3': false}, function() { window.scbtOptions.scbtmuted3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted4': true}, function() { window.scbtOptions.scbtmuted4 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted4': false}, function() { window.scbtOptions.scbtmuted4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted5': true}, function() { window.scbtOptions.scbtmuted5 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted5': false}, function() { window.scbtOptions.scbtmuted5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted6': true}, function() { window.scbtOptions.scbtmuted6 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted6': false}, function() { window.scbtOptions.scbtmuted6 = false; })
      }
    });
  }

  // HIDDEN
  x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden1': true}, function() { window.scbtOptions.scbthidden1 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden1': false}, function() { window.scbtOptions.scbthidden1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden2': true}, function() { window.scbtOptions.scbthidden2 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden2': false}, function() { window.scbtOptions.scbthidden2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden3': true}, function() { window.scbtOptions.scbthidden3 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden3': false}, function() { window.scbtOptions.scbthidden3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden4': true}, function() { window.scbtOptions.scbthidden4 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden4': false}, function() { window.scbtOptions.scbthidden4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden5': true}, function() { window.scbtOptions.scbthidden5 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden5': false}, function() { window.scbtOptions.scbthidden5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden6': true}, function() { window.scbtOptions.scbthidden6 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden6': false}, function() { window.scbtOptions.scbthidden6 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden7': e.target.value }, function() { window.scbtOptions.scbthidden7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden7': '' }, function() { window.scbtOptions.scbthidden7 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden8': e.target.value }, function() { window.scbtOptions.scbthidden8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden8': '' }, function() { window.scbtOptions.scbthidden8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden9': true}, function() { window.scbtOptions.scbthidden9 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden9': false}, function() { window.scbtOptions.scbthidden9 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden10': true}, function() { window.scbtOptions.scbthidden10 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden10': false}, function() { window.scbtOptions.scbthidden10 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden11': true}, function() { window.scbtOptions.scbthidden11 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden11': false}, function() { window.scbtOptions.scbthidden11 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden12': true}, function() { window.scbtOptions.scbthidden12 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden12': false}, function() { window.scbtOptions.scbthidden12 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden13': true}, function() { window.scbtOptions.scbthidden13 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden13': false}, function() { window.scbtOptions.scbthidden13 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden14': true}, function() { window.scbtOptions.scbthidden14 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden14': false}, function() { window.scbtOptions.scbthidden14 = false; })
      }
    });
  }


// parental
  var x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden15': true}, function() { localStorage.setItem("scbthidden15", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden15': false}, function() { localStorage.setItem("scbthidden15", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden16': true}, function() { localStorage.setItem("scbthidden16", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden16': false}, function() { localStorage.setItem("scbthidden16", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden17': true}, function() { localStorage.setItem("scbthidden17", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden17': false}, function() { localStorage.setItem("scbthidden17", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden18': true}, function() { localStorage.setItem("scbthidden18", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden18': false}, function() { localStorage.setItem("scbthidden18", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden19': true}, function() { localStorage.setItem("scbthidden19", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden19': false}, function() { localStorage.setItem("scbthidden19", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden20': true}, function() { localStorage.setItem("scbthidden20", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden20': false}, function() { localStorage.setItem("scbthidden20", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden21': true}, function() { localStorage.setItem("scbthidden21", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden21': false}, function() { localStorage.setItem("scbthidden21", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden22': true}, function() { localStorage.setItem("scbthidden22", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden22': false}, function() { localStorage.setItem("scbthidden22", "0"); });
      }
    });
  }



  x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature1': true}, function() { window.scbtOptions.scbtfeature1 = true; window.scbtKeybindOnIs = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature1': false}, function() { window.scbtOptions.scbtfeature1 = false; window.scbtKeybindOnIs = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature2': true}, function() { window.scbtOptions.scbtfeature2 = true; scbt_helper_options_turn_on_keybinds(); window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature2': false}, function() { window.scbtOptions.scbtfeature2 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature3': true}, function() { window.scbtOptions.scbtfeature3 = true; })
      } else {
        chrome.storage.sync.set({'scbtfeature3': false}, function() { window.scbtOptions.scbtfeature3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature4': true}, function() { window.scbtOptions.scbtfeature4 = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature4': false}, function() { window.scbtOptions.scbtfeature4 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature5': true}, function() { window.scbtOptions.scbtfeature5 = true; scbt_helper_chat_auto_show(); })
      } else {
        chrome.storage.sync.set({'scbtfeature5': false}, function() { window.scbtOptions.scbtfeature5 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature6'); // multi-stream-chat-replay server
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature6': e.target.value }, function() { window.scbtOptions.scbtfeature6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbtfeature6': '' }, function() { window.scbtOptions.scbtfeature6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature7'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature7': true}, function() { window.scbtOptions.scbtfeature7 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature7': false}, function() { window.scbtOptions.scbtfeature7 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }


  x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature8'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature8': true}, function() { window.scbtOptions.scbtfeature8 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature8': false}, function() { window.scbtOptions.scbtfeature8 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat 
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature9'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature9': true}, function() { window.scbtOptions.scbtfeature9 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature9': false}, function() { window.scbtOptions.scbtfeature9 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature10': true}, function() { window.scbtOptions.scbtfeature10 = true; scbt_add_listener_for_at_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature10': false}, function() { window.scbtOptions.scbtfeature10 = false; scbt_remove_listener_for_at_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature11': true}, function() { window.scbtOptions.scbtfeature11 = true; scbt_add_listener_for_press_chat_to_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature11': false}, function() { window.scbtOptions.scbtfeature11 = false; scbt_remove_listener_for_press_chat_to_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature12': e.target.value }, function() { window.scbtOptions.scbtfeature12 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature12': '' }, function() { window.scbtOptions.scbtfeature12 = ''; });
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature13'); // multi-stream-chat-replay Account ID
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature13': e.target.value }, function() { window.scbtOptions.scbtfeature13 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature13': '' }, function() { window.scbtOptions.scbtfeature13 = ''; });
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature14'); // multi-stream-chat-replay Account Key ID
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature14': e.target.value }, function() { window.scbtOptions.scbtfeature14 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature14': '' }, function() { window.scbtOptions.scbtfeature14 = ''; });
      }
    });
  }

  return false;
}



function scbt_helper_get_options() {
  chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);

    if (items.scbttheme1) {
      x = document.body.getElementsByClassName('scbttheme1'); // background color
      if (x[0]) {
        x[0].value = items.scbttheme1;
        window.scbtOptions.scbttheme1 = items.scbttheme1;
        var obj  = {};
        obj.a = 'scbttheme1';
        obj.b = items.scbttheme1;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme1 = '';
      }
    }

    if (items.scbttheme2) {
      x = document.body.getElementsByClassName('scbttheme2');  // username color
      if (x[0]) {
        x[0].value = items.scbttheme2;
        window.scbtOptions.scbttheme2 = items.scbttheme2;
        var obj  = {};
        obj.a = 'scbttheme2';
        obj.b = items.scbttheme2;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme2 = '';
      }
    }

    if (items.scbttheme3) {
      x = document.body.getElementsByClassName('scbttheme3'); // highlight color
      if (x[0]) {
        x[0].value = items.scbttheme3;
        window.scbtOptions.scbttheme3 = items.scbttheme3;
        var obj  = {};
        obj.a = 'scbttheme3';
        obj.b = items.scbttheme3;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme3 = '';
      }
    }

    if (items.scbttheme4) {
      x = document.body.getElementsByClassName('scbttheme4'); // message color
      if (x[0]) {
        x[0].value = items.scbttheme4;
        window.scbtOptions.scbttheme4 = items.scbttheme4;
        var obj  = {};
        obj.a = 'scbttheme4';
        obj.b = items.scbttheme4;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme4 = '';
      }
    }

    if (items.scbttheme5) {
      x = document.body.getElementsByClassName('scbttheme5'); // font size
      if (x[0]) {
        x[0].value = items.scbttheme5;
        window.scbtOptions.scbttheme5 = items.scbttheme5;
        var obj  = {};
        obj.a = 'scbttheme5';
        obj.b = items.scbttheme5;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme5 = '';
      }
    }

    if (items.scbttheme6) {
      x = document.body.getElementsByClassName('scbttheme6'); // TEXT ONLY
      if (x[0]) {
        x[0].checked = items.scbttheme6;
        window.scbtOptions.scbttheme6 = items.scbttheme6;
        var obj  = {};
        obj.a = 'scbttheme6';
        obj.b = items.scbttheme6;
        if (items.scbttheme6 === true) {
          scbt_helper_apply_css_from_option(obj);
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbttheme6 = false;
      }
    }

    if (items.scbthighlighted1) {
      x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted1;
        window.scbtOptions.scbthighlighted1 = items.scbthighlighted1;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted1 = '';
      }
    }

    if (items.scbthighlighted2) {
      x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages
      if (x[0]) {
        x[0].value = items.scbthighlighted2;
        window.scbtOptions.scbthighlighted2 = items.scbthighlighted2;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted2 = '';
      }
    }

    if (items.scbthighlighted3) {
      x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted3;
        window.scbtOptions.scbthighlighted3 = items.scbthighlighted3;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted3 = '';
      }
    }

    if (items.scbthighlighted4) {
      x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted4;
        window.scbtOptions.scbthighlighted4 = items.scbthighlighted4;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted4 = '';
      }
    }

    if (items.scbthighlighted5) {
      x = document.body.getElementsByClassName('scbthighlighted5');  // highlight VIP messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted5;
        window.scbtOptions.scbthighlighted5 = items.scbthighlighted5;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted5 = '';
      }
    }

    if (items.scbthighlighted6) {
      x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
      if (x[0]) {
        x[0].value = items.scbthighlighted6;
        window.scbtOptions.scbthighlighted6 = items.scbthighlighted6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted6 = '';
      }
    }

    if (items.scbthighlighted7) {
      x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
      if (x[0]) {
        x[0].value = items.scbthighlighted7;
        window.scbtOptions.scbthighlighted7 = items.scbthighlighted7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted7 = '';
      }
    }

    if (items.scbthighlighted8) {
      x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted8;
        window.scbtOptions.scbthighlighted8 = items.scbthighlighted8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted8 = '';
      }
    }

    if (items.scbthighlighted9) {
      x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted9;
        window.scbtOptions.scbthighlighted9 = items.scbthighlighted9;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted9 = '';
      }
    }

    if (items.scbthighlighted10) {
      x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted10;
        window.scbtOptions.scbthighlighted10 = items.scbthighlighted10;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted10 = '';
      }
    }

    if (items.scbthighlighted11) {
      x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted11;
        window.scbtOptions.scbthighlighted11 = items.scbthighlighted11;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted11 = '';
      }
    }




    if (items.scbtmuted1) {
      x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbtmuted1;
        window.scbtOptions.scbtmuted1 = items.scbtmuted1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted1 = false;
      }
    }

    if (items.scbtmuted2) {
      x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbtmuted2;
        window.scbtOptions.scbtmuted2 = items.scbtmuted2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted2 = false;
      }
    }

    if (items.scbtmuted3) {
      x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
      if (x[0]) {
        x[0].checked = items.scbtmuted3;
        window.scbtOptions.scbtmuted3 = items.scbtmuted3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted3 = false;
      }
    }

    if (items.scbtmuted4) {
      x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
      if (x[0]) {
        x[0].checked = items.scbtmuted4;
        window.scbtOptions.scbtmuted4 = items.scbtmuted4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted4 = false;
      }
    }

    if (items.scbtmuted5) {
      x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted5;
        window.scbtOptions.scbtmuted5 = items.scbtmuted5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted5 = false;
      }
    }

    if (items.scbtmuted6) {
      x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted6;
        window.scbtOptions.scbtmuted6 = items.scbtmuted6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted6 = false;
      }
    }


    if (items.scbthidden1) {
      x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbthidden1;
        window.scbtOptions.scbthidden1 = items.scbthidden1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden1 = false;
      }
    }

    if (items.scbthidden2) {
      x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbthidden2;
        window.scbtOptions.scbthidden2 = items.scbthidden2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden2 = false;
      }
    }

    if (items.scbthidden3) {
      x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
      if (x[0]) {
        x[0].checked = items.scbthidden3;
        window.scbtOptions.scbthidden3 = items.scbthidden3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden3 = false;
      }
    }

    if (items.scbthidden4) {
      x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
      if (x[0]) {
        x[0].checked = items.scbthidden4;
        window.scbtOptions.scbthidden4 = items.scbthidden4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden4 = false;
      }
    }

    if (items.scbthidden5) {
      x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden5;
        window.scbtOptions.scbthidden5 = items.scbthidden5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden5 = false;
      }
    }

    if (items.scbthidden6) {
      x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden6;
        window.scbtOptions.scbthidden6 = items.scbthidden6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden6 = false;
      }
    }

    if (items.scbthidden7) {
      x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
      if (x[0]) {
        x[0].value = items.scbthidden7;
        window.scbtOptions.scbthidden7 = items.scbthidden7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden7 = '';
      }
    }

    if (items.scbthidden8) {
      x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
      if (x[0]) {
        x[0].value = items.scbthidden8;
        window.scbtOptions.scbthidden8 = items.scbthidden8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden8 = '';
      }
    }

    if (items.scbthidden9) {
      x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
      if (x[0]) {
        x[0].checked = items.scbthidden9;
        window.scbtOptions.scbthidden9 = items.scbthidden9;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden9 = false;
      }
    }

    if (items.scbthidden10) {
      x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
      if (x[0]) {
        x[0].checked = items.scbthidden10;
        window.scbtOptions.scbthidden10 = items.scbthidden10;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden10 = false;
      }
    }

    if (items.scbthidden11) {
      x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
      if (x[0]) {
        x[0].checked = items.scbthidden11;
        window.scbtOptions.scbthidden11 = items.scbthidden11;
        scbt_helper_get_sexual_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden11 = false;
      }
    }

    if (items.scbthidden12) {
      x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
      if (x[0]) {
        x[0].checked = items.scbthidden12;
        window.scbtOptions.scbthidden12 = items.scbthidden12;
        scbt_helper_get_profanity_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden12 = false;
      }
    }

    if (items.scbthidden13) {
      x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden13;
        window.scbtOptions.scbthidden13 = items.scbthidden13;
        scbt_helper_get_political_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden13 = false;
      }
    }

    if (items.scbthidden14) {
      x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden14;
        window.scbtOptions.scbthidden14 = items.scbthidden14;
        scbt_helper_get_negative_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden14 = false;
      }
    }



    // parental features
    if (items.scbthidden15) {
      x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
      if (x[0]) {
        x[0].checked = items.scbthidden15;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden16) {
      x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
      if (x[0]) {
        x[0].checked = items.scbthidden16;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden17) {
      x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
      if (x[0]) {
        x[0].checked = items.scbthidden17;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden18) {
      x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
      if (x[0]) {
        x[0].checked = items.scbthidden18;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden19) {
      x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
      if (x[0]) {
        x[0].checked = items.scbthidden19;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden20) {
      x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
      if (x[0]) {
        x[0].checked = items.scbthidden20;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden21) {
      x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
      if (x[0]) {
        x[0].checked = items.scbthidden21;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }


    if (items.scbthidden22) {
      x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
      if (x[0]) {
        x[0].checked = items.scbthidden22;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }





    if (items.scbtfeature1) {
      x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature1;
        window.scbtOptions.scbtfeature1 = items.scbtfeature1;
        if (items.scbtfeature1 === true) {
          window.scbtKeybindOnIs = true;
        } else {
          window.scbtKeybindOnIs = false;
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature1 = false;
        window.scbtKeybindOnIs = false;
      }
    }

    if (items.scbtfeature2) {
      x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature2;
        window.scbtOptions.scbtfeature2 = items.scbtfeature2;
        if (items.scbtfeature2 === true) {
          scbt_helper_options_turn_on_keybinds();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature2 = false;
      }
    }

    if (items.scbtfeature3) {
      x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
      if (x[0]) {
        x[0].checked = items.scbtfeature3;
        window.scbtOptions.scbtfeature3 = items.scbtfeature3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature3 = false;
      }
    }

    if (items.scbtfeature4) {
      x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
      if (x[0]) {
        x[0].checked = items.scbtfeature4;
        window.scbtOptions.scbtfeature4 = items.scbtfeature4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature4 = false;
      }
    }

    if (items.scbtfeature5) {
      x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
      if (x[0]) {
        x[0].checked = items.scbtfeature5;
        window.scbtOptions.scbtfeature5 = items.scbtfeature5;
        scbt_helper_chat_auto_show();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature5 = false;
      }
    }

    if (items.scbtfeature6) {
      x = document.body.getElementsByClassName('scbtfeature6'); // multi-stream-chat-replay server
      if (x[0]) {
        x[0].value = items.scbtfeature6;
        window.scbtOptions.scbtfeature6 = items.scbtfeature6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature6 = '';
      }
    }

    if (items.scbtfeature7) {
      x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat 
      if (x[0]) {
        x[0].checked = items.scbtfeature7;
        window.scbtOptions.scbtfeature7 = items.scbtfeature7;
        var obj  = {};
        obj.a = 'scbtfeature7';
        obj.b = items.scbtfeature7;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature7 = false;
      }
    }

    if (items.scbtfeature8) {
      x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
      if (x[0]) {
        x[0].checked = items.scbtfeature8;
        window.scbtOptions.scbtfeature8 = items.scbtfeature8;
        var obj  = {};
        obj.a = 'scbtfeature8';
        obj.b = items.scbtfeature8;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature8 = false;
      }
    }

    if (items.scbtfeature9) {
      x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat
      if (x[0]) {
        x[0].checked = items.scbtfeature9;
        window.scbtOptions.scbtfeature9 = items.scbtfeature9;
        if (items.scbtfeature9) {
          var obj = {};
          obj.a = 'scbtfeature9';
          obj.b = true;
          scbt_helper_apply_css_from_option(obj);  
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature9 = false;
      }
    }

    if (items.scbtfeature10) {
      x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
      if (x[0]) {
        x[0].checked = items.scbtfeature10;
        window.scbtOptions.scbtfeature10 = items.scbtfeature10;
        if (items.scbtfeature10 === true) {
          scbt_add_listener_for_at_mention_menu();
        } else {
          scbt_remove_listener_for_at_mention_menu();
        }

      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature10 = false;
        scbt_remove_listener_for_at_mention_menu();
      }
    }

    if (items.scbtfeature11) {
      x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
      if (x[0]) {
        x[0].checked = items.scbtfeature11;
        window.scbtOptions.scbtfeature11 = items.scbtfeature11;
        if (items.scbtfeature11 === true) {
          scbt_add_listener_for_press_chat_to_mention_menu();
        } else {
          scbt_remove_listener_for_press_chat_to_mention_menu();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature11 = false;
        scbt_remove_listener_for_press_chat_to_mention_menu();
      }
    }

    if (items.scbtfeature12) {
      x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
      if (x[0]) {
        x[0].value = items.scbtfeature12;
        window.scbtOptions.scbtfeature12 = items.scbtfeature12;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature12 = '';
      }
    }



    if (items.scbtfeature13) {
      x = document.body.getElementsByClassName('scbtfeature13'); // multi-stream-chat-replay Account ID
      if (x[0]) {
        x[0].value = items.scbtfeature13;
        window.scbtOptions.scbtfeature13 = items.scbtfeature13;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature13 = '';
      }
    }

    if (items.scbtfeature14) {
      x = document.body.getElementsByClassName('scbtfeature14'); // multi-stream-chat-replay Account Key ID
      if (x[0]) {
        x[0].value = items.scbtfeature14;
        window.scbtOptions.scbtfeature14 = items.scbtfeature14;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature14 = '';
      }
    }

    if (window.scbtOptions.scbtfeature6 && window.scbtOptions.scbtfeature13 && window.scbtOptions.scbtfeature14) {
      var theURL = '';
      if (window.scbtOptions.scbtfeature6 == '1') {
        window.scbtOptions.scbtfeature15 = 'https://www.archyved.com/';
      }
      if (window.scbtOptions.scbtfeature6 == '2') {
        window.scbtOptions.scbtfeature15 = 'https://www.streamclipsgg.com/';
      }
      if (server) {
        theURL = window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/index.php/?account=' + window.scbtOptions.scbtfeature13 + '&accountkey=' + window.scbtOptions.scbtfeature14;
      }
      x = document.body.getElementsByClassName('scbtMultiStreamChatReplayLink');
      if (x[0]) {
        x[0].href = theURL;
        x[0].innerText = 'Multi Stream Chat Replay Admin';
      }
    }

    setTimeout(function() {
        if (window.scbtvideoid && window.scbtVODIs === false) {
            var chatElmArr = scbt_get_arr_chats(); 
            [].forEach.call(chatElmArr, function(chatElm) {
               scbt_helper_process_chat_line(chatElm, true);
            });
            scbt_helper_chat_listen();
        }
    }, 3000);

    x = items = chatElmArr = chatElm = null;
  });
  return false;
}



// ***** DB FUNCTIONS
async function scbt_get_binary_if_db_exists(dbName) {
  var dbFound = false;
  if (dbName) { } else { return dbFound; }
  var arr = await indexedDB.databases();
  if (arr.length > 0) { } else { return dbFound; }

  var arrl = arr.length;
  dbName = dbName.toLowerCase().trim();
  for (var i = 0; i < arrl && !dbFound; i++) {
    var dbNameToCheck = arr[i].name;
    if (arr[i].name) {
      dbNameToCheck = arr[i].name.toLowerCase().trim();
    }
    if (dbNameToCheck === dbName) {
      dbFound = true;
    }
  }
  dbName = arr = arrl = i = dbNameToCheck = null; return dbFound;
}



function scbt_get_arr_of_all_dbnames() {
  window.scbtSavedStreamsArr = [];
  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      window.scbtChatPreviousContentRef.innerHTML = '';
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          var dbArr = scbt_get_arr_from_dbname_string(dbName);
          var obj = {};
          obj.dbName = dbName;
          obj.serviceid = dbArr[1];
          obj.channelid = dbArr[2];
          obj.videoid = dbArr[3];
          window.scbtSavedStreamsArr.push(obj);
        }
      }
      scbt_handler_sort_saved_streams_by_serviceid();
    }
  });
}


function scbt_helper_build_chat_by_dbname_string(dbName) {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function(successObj) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function(completeObj) {
      console.log('oncomplete')
    };
    transaction.onabort = function(abortObj) {
      scbt_set_db_error_message(transaction.error); return false;
    };
    
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(successAllObj) {
      if (!successAllObj) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 failed.'); }, 2700);  return false; }
      if (!successAllObj.target) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target result failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result.length || successAllObj.target.result.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream not found.'); }, 2700);  return false; }
      
      window.scbtDbNameToSearch = dbName;
      var chatObjs = successAllObj.target.result;
      window.scbtChatContentRef.innerHTML = '';
      window.scbtChatARef.textContent = 'Saved Chat From ' + chatObjs[0].username + ' on ' + chatObjs[0].message;
      window.scbtChatBRef.textContent = '';
      // chatObjs = scbt_get_arr_sortedtimes_from_arr(chatObjs);
      [].forEach.call(chatObjs, function(chatObj) {
        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        var chatElmArr = document.body.getElementsByClassName('scbt-chat-line');
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
        scbt_user_chat_down_to_bottom();
      }, 2000);
    };
    store.getAll().onerror = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };
    store.getAll().onblocked = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };

  }; // request.onsuccess
  request.onerror = function(errorObj) {
    scbt_set_db_error_message(errorObj);
     return false;
  };
  request.onblocked = function(errorObj) {
    scbt_set_db_error_message(errorObj);
    return false;
  };
}


function scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr) {
  return new Promise((resolve, reject) => {
    var request = indexedDB.open(dbName, 10);

    request.onupgradeneeded = function() {
      if (!request.result) {
        scbt_set_db_error_message(e); 
        return e;
      }
      var store = request.result.createObjectStore('chat', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('itemid', 'itemid', {unique: true});
      store.createIndex('timestamp', 'timestamp', {unique: false});
      store.createIndex('username', 'username', {unique: false});
      store.createIndex('message', 'message', {unique: false});
      store.createIndex('sub', 'sub', {unique: false});
      store.createIndex('moderator', 'moderator', {unique: false});
      store.createIndex('owner', 'owner', {unique: false});
      store.createIndex('donation', 'donation', {unique: false});
      store.createIndex('newSub', 'newSub', {unique: false});
      store.createIndex('verified', 'verified', {unique: false});
      store.createIndex('gifter', 'gifter', {unique: false});
      store.createIndex('founder', 'founder', {unique: false});
      store.createIndex('og', 'og', {unique: false});
      store.createIndex('staff', 'staff', {unique: false});
      store.createIndex('anevent', 'anevent', {unique: false});
      store.transaction.oncomplete = (eee) => {
        scbt_helper_toast('Status: chat imported successfully.');
        resolve('good');
      }
    };

    request.onsuccess = function() {
      var db = request.result;
      var transaction = db.transaction('chat', 'readwrite', { durability: 'relaxed' } );
      var objectStore = transaction.objectStore('chat');
      [].forEach.call(chatObjArr, function(chatObj) {
        objectStore.put(chatObj);
      });
      transaction.commit();
    };

  });
}


function scbt_user_chat_delete_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  
  window.scbtSearchingMessageIdsArr = [];
  setTimeout(function(){
    var request = indexedDB.deleteDatabase(e.srcElement.dataset.dbname);
    request.onsuccess = function(e2) {
      setTimeout(function(){ scbt_helper_toast('Status: Chat messages from this stream successfully deleted'); scbt_get_arr_of_all_dbnames(); }, 3000);
      e = e2 =dbName = request = error = null; return false;
    }
    request.onerror = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
    request.onblocked = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
   }, 1000);
}


function scbt_user_chat_mark_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }

  var str = localStorage.getItem(window.location.href);
  if (str) {
    localStorage.removeItem(window.location.href);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video will NOT load this livestream chat automatically.'); return false; }, 2700);
  } else {
    localStorage.setItem(window.location.href, e.srcElement.dataset.dbname);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video WILL load this livestream chat automatically.'); return false; }, 2700);
  }
}


function scbt_user_chat_export_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(e.srcElement.dataset.dbname, 10);

  request.onsuccess = function(e2) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
      setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false;
    };
    var store = transaction.objectStore('chat'); 
    
    store.getAll().onsuccess = function(e3) {
      var chatObjArr = e3.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700); return false; }
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      var output = [];
      var titles = 'initial, message, itemid, timestamp, username, sub, moderator, owner, donation, newSub, VIP, gifter, founder, og, staff, anevent, id';
      output.push(titles);
      output.push('\n');
      
      [].forEach.call(chatObjArr, function(chatObj) {
          var row = '';
          var str = '';
          var str2 = '';
          var username = chatObj.username;
          if (username) {
            str = username.replace(/[^a-zA-Z0-9!._\-@\s]/g, ' ');
            str = str.replace(/(\r\n|\n|\r)/gm, "");
            str = str.replaceAll(',', ' ');
            str = str.trim();
          }
          var message = chatObj.message;
          if (message) {
            str2 = message.replace(/\/‘’,‚“”„"`~«´<>/g, ' ');
            str2 = str2.replace(/(\r\n|\n|\r)/gm, "");
            str2 = str2.replaceAll(',', ' ');
            str2 = str2.trim();  
          }
          row = row + str2 + ',';
          row = row + chatObj.itemid + ',';
          row = row + chatObj.timestamp + ',';
          row = row + str + ',';
          row = row + chatObj.sub + ',';
          row = row + chatObj.moderator + ',';
          row = row + chatObj.owner + ',';
          row = row + chatObj.donation + ',';
          row = row + chatObj.newSub + ',';
          row = row + chatObj.verified + ',';
          row = row + chatObj.gifter + ',';
          row = row + chatObj.founder + ',';
          row = row + chatObj.og + ',';
          row = row + chatObj.staff + ',';
          row = row + chatObj.anevent + ',';
          row = row + chatObj.id;
          output.push(row);
          output.push('\n');
      });
    
      var csvString = output.join();
      var output = null;
      csvString = csvString.replace(/\/'"`/g, '');
      csvString = csvString.replace(/%3D/g, '');
      var blob = scbt_get_csv_file_from_str(csvString);
      var csvName = e.srcElement.dataset.dbname + '-chatlog.csv';
      scbt_helper_csv_download(blob, csvName);
      return false;
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  };

  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}


function scbt_get_usernames_for_mention_menu() {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(e) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for mention chat failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {
      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 for mention chat failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target for mention chat failed.'); }, 2700);  return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target result for mention chat failed.'); }, 2700); return false; }

      var chatObjArr = e2.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700);  return false; }
      var sortedchats = chatObjArr.sort(function(a, b) {
        var nameA = a.username;
        if (nameA) {
          nameA = nameA.toUpperCase();
        }
        var nameB = b.username;
        if (nameB) {
          nameB = nameB.toUpperCase();
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      var i = 0;
      [].forEach.call(sortedchats, function(item) {
          var theHTML = '';
          if ( window.scbtUsernamesArr.indexOf(item.username) < 0) {
            theHTML = theHTML + "<li><button class='scbtusername' id='scbtusername" + i + "' tabindex='0'>" + item.username + "</button></li>";
            i = i + 1;
            window.scbtUsernamesArr.push(item.username);
            var elemArr = window.scbtMentionMenuRef.getElementsByTagName('ul');
            if (elemArr[0]) {
              elemArr[0].insertAdjacentHTML('afterbegin', theHTML );
            }
          }
      });
       return false;      
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
       return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  
}


function scbt_user_search_multiple_saved_chat(e) {  
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
  }
  var str = scbt_get_str_for_search();

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = str + ' beginning a message is being searched for';
    toastMessage2 = str + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    toastMessage = ' stream event search ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }
  if (str.length < 3) {  return false; }
  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);  
  window.scbtSavedStreamsArr = [];

  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          window.scbtSavedStreamsArr.push(dbName);
            
          (async () => {
            var request = await indexedDB.open(dbName, 10);
            request.onsuccess = function(e) {
              if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat result failed.'); }, 2700);  return false; }
              window.scbtSearchingMessageIdsArr = [];
              var db = request.result;
              var transaction = db.transaction('chat', 'readonly');
              transaction.oncomplete = function() {
              };
              transaction.onabort = function() {
                scbt_set_db_error_message(transaction.error);
              };
              var store = transaction.objectStore('chat'); 
              // (async () => {
              store.getAll().onsuccess = function(e2) {
                if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 failed.'); }, 2700);  return false; }
                if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target failed.'); }, 2700);  return false; }
                if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target result failed.'); }, 2700);  return false; }
                var chatObjArr = e2.target.result;
                if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display');  return false; }
                window.scbtChatARef.textContent = 'Saved Chat From All';
                window.scbtChatBRef.textContent = labelMessage;
                chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
                window.scbtChatWrapperRef.classList.add('scbt-bl');

                if (searchType == 'bykeyword') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'byuser') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.username) {
                      if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'full') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                    window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                  });
                }

                if (searchType == 'startswith') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                setTimeout(function() {
                  scbt_add_listener_for_username_insert_into_search();
                  scbt_add_listener_for_click_timestamp_go_to_video();
                  scbt_user_chat_down_to_bottom();
                }, 2000);
            };
            store.getAll().onerror = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
            store.getAll().onblocked = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
          }; // request.onsuccess
          request.onerror = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
          request.onblocked = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
      })(); // async

        }
      }
    }
  }); // indexedDB.databases().then
return false;
}


function scbt_user_search_saved_chat(e) {
  window.scbtSearchingMessageIdsArr = [];
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  if (window.scbtDbNameToSearch) { } else { setTimeout(function(){ scbt_helper_toast('Error: no active or loaded chat to search.'); }, 500); return false; }

  var str = scbt_get_str_for_search();
  if (e.target.classList) {
    if (e.target.classList.contains('scbt-multiple') ) {
      if (e.target.id == 'scbtChatSearchStartsWithButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchUserButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchKeywordButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
    }
  }

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = str + ' beginning a message is being searched for';
    toastMessage2 = str + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    str = 'test';
    toastMessage = ' stream events ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }


  if (str.length < 3) { return false; }

  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);
  var request = indexedDB.open(window.scbtDbNameToSearch, 10);

  request.onsuccess = function(e) {
    if (!request.result) { scbt_helper_toast('Error: get database for live stream chat failed.'); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
      
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {
      
      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target failed.'); }, 2700); return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target result failed.'); }, 2700);  return false; }
      var chatObjArr = e2.target.result;
      if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display'); return false; }

      var dbArr = scbt_get_arr_from_dbname_string(window.scbtDbNameToSearch);
      window.scbtChatContentRef.innerHTML = '';
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      window.scbtChatARef.textContent = dbArr[2] + ' on ' + dbArr[1] + ': ' + chatObjArr[0].message;
      window.scbtChatBRef.textContent = labelMessage;
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      
      if (searchType == 'byevent') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if ( (chatObj.anevent == 1) || (chatObj.staff === 1) ) {
            var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);

          if (chatObj.message) {
            if (chatObj.message.indexOf('clips.kick.com') > -1) {
              var m = chatObj.message;
              var mArr = m.split('-thumbnail.jpeg');
              var mString = mArr[0];
              var mmArr = mString.split('https://clips.kick.com/clips/');
              var clipID = mmArr[1];
              var mArr = m.split('img ');
              var imgElm = mArr[0] + "<br /><video class='vjs-tech' webkit-playsinline='' playsinline='' controls src='https://clips.kick.com/clips/" + clipID + ".mp4'></video>";
              var theHTML = "<p class='" + classString + "'><span>" + "<span class='author-name'>" + chatObj.username + "</span></span><b>" + imgElm + "</b></p>";
            } else {
              var theHTML = "<p class='" + classString + "'><span>" + " : <span class='author-name'>" + chatObj.username + "</span> </span><b>" + chatObj.message + "</b></p>";
            }
          }
          window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);  
          }
        });
      }

      if (searchType == 'bykeyword') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'byuser') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.username) {
            if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'full') {
        [].forEach.call(chatObjArr, function(chatObj) {
          var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
          window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
        });
      }

      if (searchType == 'startswith') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        scbt_user_chat_down_to_bottom();
      }, 2000);

    }; // store.getAll().onsuccess
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }; // request.onsuccess
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}



function scbt_set_db_for_saving(dbName, startSaving) {
  if (!dbName) { 
    console.error('Error: chat database not supported');
    setTimeout(function(){ scbt_helper_toast('Error: chat database not supported'); }, 2700);
    return false;
  }
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function (successObj) {
   if (startSaving == 'startSaving') {
    scbt_helper_chat_listen();
   }
   return request;
  };
  request.onerror = function (errorObj) {
    scbt_set_db_error_message(errorObj);
    return errorObj;
  };
  request.onblocked = function (blockedObj) {
    scbt_set_db_error_message(blockedObj);
    return blockedObj;
  };
  request.onupgradeneeded = function(upgradeObj) {
    if (!request.result) {
      scbt_set_db_error_message(upgradeObj); 
      return upgradeObj;
    }
    var store = request.result.createObjectStore('chat', {
      keyPath: 'id',
      autoIncrement: true,
    });

    store.createIndex('itemid', 'itemid', {unique: true});
    store.createIndex('timestamp', 'timestamp', {unique: false});
    store.createIndex('username', 'username', {unique: false});
    store.createIndex('message', 'message', {unique: false});
    store.createIndex('sub', 'sub', {unique: false});
    store.createIndex('moderator', 'moderator', {unique: false});
    store.createIndex('owner', 'owner', {unique: false});
    store.createIndex('donation', 'donation', {unique: false});
    store.createIndex('newSub', 'newSub', {unique: false});
    store.createIndex('verified', 'verified', {unique: false});
    store.createIndex('gifter', 'gifter', {unique: false});
    store.createIndex('founder', 'founder', {unique: false});
    store.createIndex('og', 'og', {unique: false});
    store.createIndex('staff', 'staff', {unique: false});
    store.createIndex('anevent', 'anevent', {unique: false});

    store.transaction.oncomplete = (completeObj) => {
      request.result.close();
      var obj = {};
      obj.anevent = 0;
      obj.donation = 0;
      obj.founder = 0;
      obj.gifter = 0;
      obj.itemid = '1111';
      obj.mention = 0;
      obj.message = new Date().toISOString().slice(0, 10);
      obj.moderator = 0;
      obj.newSub = 0;
      obj.og = 0;
      obj.owner = 0;
      obj.staff = 0;
      obj.sub = 0;
      obj.timestamp = '00:00AM';
      obj.username = window.scbtchannelid;
      obj.verified = 0;
      scbt_set_db_save_chat_obj(obj);
      return false;
    }
  };
}


function scbt_set_db_save_chat_obj(obj) {
  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(successObj) {
    var db = successObj.target.result;
    var transaction = db.transaction('chat', 'readwrite');
    transaction.oncomplete = function(completeObj) {
    };
    transaction.onabort = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    transaction.onerror = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    var store = transaction.objectStore('chat');
    store.add(obj).onsuccess = function(addObj) {
      scbt_helper_chat_listen();
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
  };
}



function scbt_get_str_dbname(startSaving) {
  if (window.scbtDbName) {
    return window.scbtDbName;
  } else {
    
    var videoEl = scbt_get_arr_video_elem();
    var chatboxEl = scbt_get_arr_chatbox_elem();

    if (
      (chatboxEl[0]) && 
      window.scbtserviceid && window.scbtchannelid && window.scbtvideoid
    ){
      
      chrome.storage.sync.get('scbtfeature4', function (option) {
        if (option) {
          if (option.scbtfeature4 === true) {
            window.scbtOptions.scbtfeature4 = true;
            window.scbtDbName = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
            window.scbtDbNameToSearch = window.scbtDbName;
            scbt_set_db_for_saving(window.scbtDbName, startSaving);
            return window.scbtDbName;
          }
        }
      });

    } else { 
      return false;
    }
  }
}




// ************* CSV export/import functions

function scbt_get_csv_file_from_str(str) {
  if (str) {
    var csv_mime_type = 'text/csv';
    return new Blob([str], {type: csv_mime_type});
  }
}


function scbt_helper_csv_download(blob, filename) {
  if (blob && filename) {
    var a = document.createElement('a');
    a.setAttribute('download', filename);
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.click();
    URL.revokeObjectURL(url);
  }
  blob = null; filename = null; a = null; url = null; return false;
}


function scbt_helper_csv_import_chat_log_from_chatarr(filename, chatArr) {
  scbt_helper_toast('Status: starting to import chat');
  window.scbtSearchingMessageIdsArr = [];
  if (filename && chatArr) { } else { setTimeout(function(){ scbt_helper_toast('Error: chat not found to import'); }, 2700); return false; }

  var fileNameArr = filename.split('-chatlog');
  fileNameArr = fileNameArr[0];
  var fileNamePartsArr = fileNameArr.split('&');
  var one = fileNamePartsArr[0];    // savedchat
  var two = fileNamePartsArr[1];    // odysee
  var three = fileNamePartsArr[2];  // streamer
  var four = fileNamePartsArr[3];   // abc123
  var dbName = one + '&' + two + '&' + three + '&' + four;
    
  if (chatArr.length > 1) {
    var chatObj = {};
    var chatObjArr = [];
    chatArr = chatArr.slice(1);
    var arrl = chatArr.length;
    for (var i = 0; i < arrl; i++) {
      if (chatArr[i][1]) {
        chatArr[i] = chatArr[i].slice(1);
        chatObj.message = chatArr[i][0];
        chatObj.itemid = chatArr[i][1];
        chatObj.timestamp = chatArr[i][2];
        chatObj.username = chatArr[i][3];
        chatObj.sub = Number(chatArr[i][4]);
        chatObj.moderator = Number(chatArr[i][5]);
        chatObj.owner = Number(chatArr[i][6]);
        chatObj.donation = Number(chatArr[i][7]);
        chatObj.newSub = Number(chatArr[i][8]);
        chatObj.verified = Number(chatArr[i][9]);
        chatObj.gifter = Number(chatArr[i][10]);
        chatObj.founder = Number(chatArr[i][11]);
        chatObj.og = Number(chatArr[i][12]);
        chatObj.staff = Number(chatArr[i][13]);
        chatObj.anevent = Number(chatArr[i][14]);
        chatObjArr.push(chatObj);
        chatObj = {};
      }
    }
    scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr);
    return false;
  }
  
}


function scbt_helper_csv_parse_chat_log(data) {
  var chatLineArr = [];
  if (data) {
    var newLinebrk = data.split("\n");
    var arrl = newLinebrk.length;
    for (var i = 0; i < arrl; i++) {
      chatLineArr.push(newLinebrk[i].split(','));
    }
    scbt_helper_csv_import_chat_log_from_chatarr(window.scbtFileName, chatLineArr);
  }
  data = chatLineArr = newLinebrk = arrl = null; return false;
}


function scbt_add_listener_for_uploading_chatlog(e) {
  window.scbtChatLogRef.addEventListener('change', function(e2) {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      if (myFile.name.substring(myFile.name.length - 11) != 'chatlog.csv') {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( (myFile.size < 8) || (myFile.size > 100000000) ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( myFile.type != 'text/csv' ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      window.scbtFileName = myFile.name;
      var reader = new FileReader();
      reader.addEventListener('load', function(e3) {
        scbt_helper_toast('Status: importing chat now.');
        var csvdata = e3.target.result;
        scbt_helper_csv_parse_chat_log(csvdata);
      });
      reader.readAsBinaryString(myFile);
    }
  });
}


// ************** Voice functions
function scbt_helper_chat_speak(str) {
  if (str) {
      var strMatch = str.toLowerCase().trim();
      var arr = window.scbtOptions.scbtfeature12.split(',');
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var str2 = arr[i];
        var str2Match = str2.toLowerCase().trim();
        if ( strMatch.includes(str2Match) ) {
          if ( window.scbtSpokenWordsArr.includes(str) ) {  } else {
            window.scbtSpokenWordsArr.push(str);
            var synth = window.speechSynthesis;
            var voices = synth.getVoices();
            var utterance = new SpeechSynthesisUtterance(t);
            utterance.voice = voices[0];
            synth.speak(utterance);
            utterance.addEventListener('start', e => {
              console.log('speak start of ' + str);
            });
            utterance.addEventListener('end', e => {
              console.log('speak end of ' + str);
              str = strMatch = arr = arrl = i = str2 = strMatch = synth = voices = null; return false;
            });
          }
        }
      }
  }
}

function scbt_user_turn_off_voice_commands() {
  window.recognition = null;
  window.SpeechRecognition = null;
  window.SpeechGrammarList = null;
  window.SpeechRecognitionEvent = null;
  return false;
}


function scbt_user_turn_on_voice_commands() {
      window.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      window.recognition.continuous = true;
      window.recognition.lang = 'en-US';
      window.recognition.interimResults = false;
      window.recognition.maxAlternatives = 1;
      window.recognition.start();

      window.recognition.onresult = function(e) {
        if (e) {
          var str = e.results[e.results.length - 1][0].transcript;
          if (str) {
            str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
            str = str.trim();
            str = str.toLowerCase();
            
            if (str == 'computer toggle chat') {
              scbt_user_command1();
              return false;
            }
            if (str == 'computer search chat') {
              scbt_user_command2();
              return false;
            }
            if (str == 'computer search all chat') {
              scbt_user_command4();
              return false;
            }
            if (str == 'computer chat top') {
              scbt_user_chat_up_to_top();
              return false;
            }
            if (str == 'computer chat bottom') {
              scbt_user_chat_down_to_bottom();
              return false;
            }
          }
        }
      }

      window.recognition.onspeechend = function(e) {
        console.log('onspeechend speech');
        window.recognition.stop();
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
      }

      window.recognition.onnomatch = function(e) {
        console.log('onnomatch speech');
      }

      window.recognition.onerror = function(e) {
        console.log('on speech error');
        console.log(e);
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
        return false;
      }
}



// ************** API functions
function scbt_helper_get_sexual_json() {
  var url = chrome.runtime.getURL('./sexualterms.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'sexualterms') );
}

function scbt_helper_get_profanity_json() {
  var url = chrome.runtime.getURL('./profanity.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'profanity') );
}

function scbt_helper_get_political_json() {
  var url = chrome.runtime.getURL('./political.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'political') );
}

function scbt_helper_get_negative_json() {
  var url = chrome.runtime.getURL('./negative.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'negative') );
}

function scbt_helper_save_word_list(json, listType) {
  if (listType == 'sexualterms') {
    window.scbtOptions.sexualterms = json;
    if (window.scbtOptions.sexualterms && typeof window.scbtOptions.sexualterms == 'object') {
        Object.entries(window.scbtOptions.sexualterms).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'profanity') {
    window.scbtOptions.profanity = json;
    if (window.scbtOptions.profanity && typeof window.scbtOptions.profanity == 'object') {
      Object.entries(window.scbtOptions.profanity).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'political') {
    window.scbtOptions.political = json;
    if (window.scbtOptions.political && typeof window.scbtOptions.political == 'object') {
      Object.entries(window.scbtOptions.political).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'negative') {
    window.scbtOptions.negative = json;
    if (window.scbtOptions.negative && typeof window.scbtOptions.negative == 'object') {
      Object.entries(window.scbtOptions.negative).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  var json = listType = entry = null; return false;
}


function scbt_user_toggle_clips_menu(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  var elemArr = document.body.getElementsByClassName('scbtClipsToggleMenu');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  var elemArr = document.body.getElementsByClassName('scbtClipsMenuWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  return false;
}


function scbt_user_toggle_load_refresh_menu() {
  // if on the home page, load clips for kick
  if ( (window.scbtserviceid == 'kick') && (window.location.href == 'https://kick.com/') ) {
    scbt_user_toggle_clips_menu();
    return false;
  }
  // load stream chats of this user
  if (window.scbtChannelPageIs === true) {
    scbt_user_toggle_user_chats_menu();
    return false;
  }
  // try to load chat for this VOD
  if (window.scbtVODIs === true) {
    scbt_user_search_for_saved_chat();
    return false;
  }
  // when I push it on a live stream do nothing
  return false;
}


function scbt_user_toggle_user_chats_menu() {
  var str = scbt_get_str_channelid();
  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          if (dbName.indexOf(str) > -1) {
            // you watched streamer on 9-13-2023. Return to it?
          }
        }
      }
      return false;
    }
  });
}


async function scbt_user_search_for_saved_chat() {
  var str = localStorage.getItem(window.location.href);
  if (str) {
    var dbExists = await scbt_get_binary_if_db_exists(str);
    if (dbExists === true) {
      // loading chat database from localStorage
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      e.srcElement.dataset.dbname = str;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }
  }

  var serviceidStr = scbt_get_str_serviceid();
  var channelidStr = scbt_get_str_channelid();
  var videoidStr = scbt_get_str_videoid();

  if (serviceidStr && channelidStr && videoidStr) {
    var dbStr = 'savedchat' + '&' + serviceidStr + '&' + channelidStr + '&' + videoidStr;
    var dbExists = await scbt_get_binary_if_db_exists(dbStr);
    if (dbExists === true) {
      // loading chat database from indexeddb
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      e.srcElement.dataset.dbname = dbStr;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }    
    scbt_helper_load_local_chat_from_api(serviceidStr, channelidStr, videoidStr);
  }
  
  if (serviceidStr && channelidStr && videoidStr) {
    // loading chat database from web api
    scbt_helper_load_chat_replay_from_api(serviceidStr, channelidStr, videoidStr);
    return false;
  }

  scbt_helper_toast( 'Status: No VOD chat found for this video.');
  return false;
}


function scbt_helper_load_chat_replay_from_api(serviceid, channelid, videoid) {
  var videoid = window.location.pathname.substr(1);
  videoid = videoid.replace('video/', '');
  if (serviceid && channelid && videoid) { } else { return false; }

  fetch(window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/api/?serviceid=' + serviceid + '&channelid=' + channelid + '&videoid=' + videoid,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  })
  .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
  .then(function(resp){ 

      if ( (typeof resp === 'object') && (resp.uid) && (resp.stream) ) {
        var arr = [];
        var baseURL = window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/uploads/' + resp.uid;
        if ( (resp.stream.kick) && (resp.stream.kick[1]) ) {
          arr.push(baseURL + '/' + resp.stream.kick[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.odysee) && (resp.stream.odysee[1]) ) {
          arr.push(baseURL + '/' + resp.stream.odysee[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.rumble) && (resp.stream.rumble[1]) ) {
          arr.push(baseURL + '/' + resp.stream.rumble[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.twitch) && (resp.stream.twitch[1]) ) {
          arr.push(baseURL + '/' + resp.stream.twitch[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.youtube) && (resp.stream.youtube[1]) ) {
          arr.push(baseURL + '/' + resp.stream.youtube[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.youtube2) && (resp.stream.youtube2[1]) ) {
          arr.push(baseURL + '/' + resp.stream.youtube2[1]);
        } else { arr.push('x'); }

      }
      scbt_helper_loop_through_resources_from_api_for_chat_replay(arr);
  })
  .catch(err => {
     console.log('api error4'); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
  });
}


function scbt_helper_loop_through_resources_from_api_for_chat_replay(arrOfCSVUrls) {
  var count = 1;
  for (var i = 0; i < arrOfCSVUrls.length; i++) {
    scbt_helper_get_chat_for_replay_from_api(arrOfCSVUrls[i], count);
    count = count + 1;
  }
  return false;
}


// function scbt_helper_get_chat_for_replay_from_api(serviceid, channelid, videoid, chatlog)
function scbt_helper_get_chat_for_replay_from_api(chatlog, i) {
    if (i && chatlog && chatlog != 'x') {
     var response = fetch(chatlog)
      .then(response => response.text())
      .then(v => Papa.parse(v))
      .catch(err => console.log(err))
      response.then(v => scbt_helper_populate_chat_for_replay(v, i))
    }
  return false;
}


function scbt_helper_populate_chat_for_replay(resp, i) {
  if (typeof resp === 'object') {
    if (resp.data) {
      var chatArr = resp.data;

      if (window.scbtMobileIs === true) {
        window.scbtSideMenuRef.classList.add('scbt-fl');
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
      }
      window.scbtOptionsMenuRef.classList.remove('scbt-bl');
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
      // window.scbtChatContentRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');  
      window.scbtSearchBarActiveIs = true;

      // window.scbtChatContentRef.innerHTML = '';
      window.scbtChatARef.textContent = 'Saved Chat From ' + chatArr[1][4] + ' on ' + chatArr[1][1];
      window.scbtChatBRef.textContent = '';
    
      [].forEach.call(chatArr, function(chatLine) {
        var theHTML = scbt_helper_build_chat_line_from_arr(chatLine);
        // window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
        if (i == 0) {
          document.getElementsByClassName('scbtChatContent')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 1) {
          document.getElementsByClassName('scbtChatContent2')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 2) {
          document.getElementsByClassName('scbtChatContent3')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 3) {
          document.getElementsByClassName('scbtChatContent4')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 4) {
          document.getElementsByClassName('scbtChatContent5')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 5) {
          document.getElementsByClassName('scbtChatContent6')[0].insertAdjacentHTML('beforeend', theHTML);
        }
        if (i == 6) {
          document.getElementsByClassName('scbtChatContent6')[0].insertAdjacentHTML('beforeend', theHTML);
        }

      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        var chatElmArr = document.getElementsByClassName('scbt-chat-line');
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
        scbt_user_chat_down_to_bottom();
      }, 3000);
    }
  }

  return false;
}


function scbt_helper_get_menu(app, element, thefile, firstTime) {
    var elemArr = document.body.getElementsByClassName(element);
    if (elemArr[0]) { return false }

    var url = chrome.runtime.getURL(thefile);
    fetch(url)
    .then((response) => response.text())
    .then((html) => {

      app.insertAdjacentHTML('afterbegin', html );
      var elemArr = [];

      if (element == 'scbtSideMenu') {
        
        elemArr = document.body.getElementsByClassName('scbtSideMenu');
        if (elemArr[0]) { 
          window.scbtSideMenuRef = elemArr[0];
        }

        elemArr = document.body.getElementsByClassName('scbtChatToggleMenu');
        if (elemArr[0]) { 
          window.scbtChatToggleMenuRef = elemArr[0];
        }

        elemArr = document.body.getElementsByClassName('scbt0');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chat_filter_menu); }

        elemArr = document.body.getElementsByClassName('scbt2');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_options_menu); }

        elemArr = document.body.getElementsByClassName('scbt4');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt5');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt6');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt7');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt8');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt9');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt10');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_non_bot); }

        elemArr = document.body.getElementsByClassName('scbt11');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt12');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt13');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_text_only); }

        elemArr = document.body.getElementsByClassName('scbt14');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_up_to_top); }

        elemArr = document.body.getElementsByClassName('scbt15');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_down_to_bottom); }

        elemArr = document.body.getElementsByClassName('scbt16');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_full_screen_width); }

        elemArr = document.body.getElementsByClassName('scbt17');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_full_screen_video_height_chat); }

        elemArr = document.body.getElementsByClassName('scbt20');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_font_size); }

        elemArr = document.body.getElementsByClassName('scbt22');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbt23');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbt24');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_load_refresh_menu); }

        elemArr = document.body.getElementsByClassName('scbt30');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt31');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt32');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt33');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt34');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt35');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt36');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt30d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt31d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt32d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt33d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt34d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt35d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        elemArr = document.body.getElementsByClassName('scbt36d');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

        return window.scbtSideMenuRef;
      } // if (element == 'scbtSideMenu') {


      if (element == 'scbtChatWrapper') {
        elemArr = document.body.getElementsByClassName('scbtChatWrapper');
        if (elemArr[0]) { window.scbtChatWrapperRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtCloseButton');
        if (elemArr[0]) { window.scbtCloseButtonRef = elemArr[0]; window.scbtCloseButtonRef.addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbtChatA');
        if (elemArr[0]) { window.scbtChatARef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatB');
        if (elemArr[0]) { window.scbtChatBRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatTitle');
        if (elemArr[0]) { window.scbtChatTitleRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtChatContent');
        if (elemArr[0]) { window.scbtChatContentRef = elemArr[0]; }
        
        return window.scbtChatWrapperRef;
      }

      if (element == 'scbtChatMenu') {
        elemArr = document.body.getElementsByClassName('scbtChatMenu');
        if (elemArr[0]) { window.scbtChatMenuRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
        if (elemArr[0]) { window.scbtChatSearchInputTextRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatSearchStartsWithButton');
        if (elemArr[0]) { window.scbtChatSearchStartsWithButtonRef = elemArr[0]; window.scbtChatSearchStartsWithButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchUserButton');
        if (elemArr[0]) { window.scbtChatSearchUserButtonRef = elemArr[0]; window.scbtChatSearchUserButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchKeywordButton');
        if (elemArr[0]) { window.scbtChatSearchKeywordButtonRef = elemArr[0]; window.scbtChatSearchKeywordButtonRef.addEventListener('click', scbt_user_search_saved_chat); }

        elemArr = document.body.getElementsByClassName('scbtChatSearchEventsButton');
        if (elemArr[0]) { window.scbtChatSearchEventsButtonRef = elemArr[0]; window.scbtChatSearchEventsButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchFullButton');
        if (elemArr[0]) { window.scbtChatSearchFullButtonRef = elemArr[0]; window.scbtChatSearchFullButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        return window.scbtChatMenuRef;
      }


      if (element == 'scbtOptionsMenu') {
        
        elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
        if (elemArr[0]) { window.scbtOptionsMenuRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousTitle');
        if (elemArr[0]) { window.scbtChatPreviousTitleRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousWrapper');
        if (elemArr[0]) { window.scbtChatPreviousWrapperRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtOptionsTitle');
        if (elemArr[0]) { window.scbtOptionsTitleRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtOptionsWrapper');
        if (elemArr[0]) { window.scbtOptionsWrapperRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtChatLog');
        if (elemArr[0]) { window.scbtChatLogRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousContent');
        if (elemArr[0]) { window.scbtChatPreviousContentRef = elemArr[0]; }
        
        elem3Arr = document.body.getElementsByClassName('scbt2');
        if (elem3Arr[0]) { elem3Arr[0].classList.add('lawngreen'); }

        scbt_user_toggle_chat_menu();
        setTimeout(function() {
          if (elem3Arr[0]) { elem3Arr[0].classList.remove('lawngreen'); }
          scbt_user_toggle_chat_menu();
        }, 2500);

        scbt_helper_save_options();
        scbt_helper_get_options(firstTime);
        scbt_add_listener_for_uploading_chatlog();
        scbt_add_listener_for_options_menu();
        
        elemArr = elem2Arr = arrl = elem2 = i = xx = app = element = thefile = firstTime = html = null;
        return window.scbtOptionsMenuRef;
      } // if (element == 'scbtOptionsMenu') {

      }).catch((error) => {
        console.log('error');
        console.error(error);
        return true;
      });
} // end scbt_helper_get_menu





// *************** Build functions

function scbt_helper_build_chat_line_from_obj(chatObj, chatObjFirst) {
  var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);
  if (chatObjFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span>" + chatObjFirst.username + ' stream on ' + chatObjFirst.message + "<br><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  }
  return theHTML;
}


function scbt_helper_build_chat_line_from_arr(chatArr, chatArrFirst) {
  var classString = scbt_get_str_for_chat_classes_from_arr(chatArr);
  if (chatArrFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span>" + chatArrFirst[3] + ' stream on ' + chatArrFirst[3] + "<br><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  }
  return theHTML;
}



function scbt_helper_build_list_of_saved_stream_chat_by_arr(arr) {
  var arrl = arr.length;
  for (var i = 0; i < arrl; i++) {
    var dbName = 'savedchat' + '&' + arr[i].serviceid + '&' + arr[i].channelid + '&' + arr[i].videoid;
    var theHTML = "<p>";
    theHTML = theHTML + "<button class='az2' data-serviceid='" + arr[i].serviceid + "' data-videoid='" + arr[i].videoid + "' data-channelid='" + arr[i].channelid + "'>" + arr[i].channelid + "</button> on ";
    theHTML = theHTML + arr[i].serviceid + " :<br>";
    theHTML = theHTML + "<button class='az3' data-dbname='" + dbName + "'>" + arr[i].videoid + "</button><br>";
    theHTML = theHTML + "<button class='az4' data-dbname='" + dbName + "'>💾</button><br>";
    theHTML = theHTML + "<button class='az5' data-dbname='" + dbName + "'>🗑️</button><br>";
    theHTML = theHTML + "<button class='az6' data-dbname='" + dbName + "'>🎯</button><br>";
    theHTML = theHTML + "</p><p>&nbsp;&nbsp;</p>";
    window.scbtChatPreviousContentRef.insertAdjacentHTML('beforeend', theHTML);
  }
  arr = i = theHTML = null; return false;
}


function scbt_make_toast() {
  var elemArr = document.body.getElementsByClassName('scbtSnackbar');
  var body = document.getElementsByTagName('body');
  if (body[0]) {
    body = body[0];
  }
  if (elemArr[0]) { } else {
    var theHTML = '<div id="scbtSnackbar" class="scbtSnackbar"></div><div id="scbtLoading" class="scbtLoading"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 44 44" stroke="#fff"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg></div>';
    body.insertAdjacentHTML('afterbegin', theHTML);
    window.scbtSnackbarRef = document.body.getElementsByClassName('scbtSnackbar')[0];
    setTimeout(function(){ scbt_helper_toast('Status: building menus'); }, 500);
  }
  elemArr = null; theHTML = null; return body;
}


// *************** commands/keybinds functions
function scbt_user_command1() {
  scbt_user_theatre_mode();
  return false; 
}

function scbt_user_command2() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  setTimeout(function() {
    if (window.scbtSearchBarActiveIs === true) {
      var e = {};
      e.target = {};
      e.target.id = 'scbtChatSearchFullButton';
      e.delay = 1;
      scbt_user_search_saved_chat(e);
    }
    e = null; return false;
  }, 2000);
}

function scbt_user_command3() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}

function scbt_user_command4() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt23';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}


function scbt_helper_keybind_close() {
  var elemArr = document.body.getElementsByClassName('scbt-options-wrapper');
  [].forEach.call(elemArr, function(elem) {
    elem.classList.remove('scbt-bl');
  });
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatInputRef.focus();
  elemArr = elem = null; return false;
}


function scbt_helper_options_turn_on_keybinds() {
  window.scbtChatARef.textContent = '';
  window.scbtChatBRef.textContent = '';
  window.scbtChatTitleRef.classList.add('scbt-bl');

  window.addEventListener('keydown', function(e) {

    if ( (e.keyCode == '16') && (e.altKey === true) )  {
      console.log('you pressed shift + Alt to toggle the main menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
        window.scbtSideMenuRef.classList.remove('scbt-bl');
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }

    // scbtChatToggleMenu
    if ( (e.keyCode == '90') && (e.altKey === true) )  {
      console.log('you pressed Z + Alt to toggle the scbtChatToggleMenu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
        window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtChatToggleMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt4')[0].focus();
        return false;
      }
    }

    // scbtOptionsMenuRef
    if ( (e.keyCode == '88') && (e.altKey === true) )  {
      console.log('you pressed Z + Alt to toggle the options menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }


    if ( (e.keyCode == '67') && (e.altKey === true) )  {
      console.log('you pressed X + Alt to toggle the options menu bring up hide menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsHideTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsHideWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbthidden1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '86') && (e.altKey === true) )  {
      console.log('you pressed C + Alt to toggle the options menu bring up feature menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsFeaturesTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsFeaturesWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbtfeature1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '66') && (e.altKey === true) )  {
      console.log('you pressed V + Alt to toggle the options menu bring up save menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsSavedTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsSavedWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '81') && (e.altKey === true) )  {
      console.log('you pressed Q + Alt to toggle Broadcaster Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('owner');
      return false;
    }
    if ( (e.keyCode == '87') && (e.altKey === true) )  {
      console.log('you pressed W + Alt to toggle Moderator Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('moderator');
      return false;
    }
    if ( (e.keyCode == '69') && (e.altKey === true) )  {
      console.log('you pressed E + Alt to toggle Sub Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('sub');
      return false;
    }
    if ( (e.keyCode == '82') && (e.altKey === true) )  {
      console.log('you pressed R + Alt to toggle Sub + Moderator Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('mod_sub');
      return false;
    }
    if ( (e.keyCode == '84') && (e.altKey === true) )  {
      console.log('you pressed T + Alt to toggle VIP Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('vip');
      return false;
    }
    if ( (e.keyCode == '89') && (e.altKey === true) )  {
      console.log('you pressed Y + Alt to toggle Donation Chats Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('donation');
      return false;
    }
    if ( (e.keyCode == '85') && (e.altKey === true) )  {
      console.log('you pressed U + Alt to toggle Mention Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('mention');
      return false;
    }
    if ( (e.keyCode == '73') && (e.altKey === true) )  {
      console.log('you pressed I + Alt to toggle Hashtag Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('hashtag');
      return false;
    }
    if ( (e.keyCode == '79') && (e.altKey === true) )  {
      console.log('you pressed O + Alt to toggle OG Messages Only'); 
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('og');
      return false;
    }
    if ( (e.keyCode == '80') && (e.altKey === true) )  {
      console.log('you pressed P + Alt to toggle text only chat');  // scbt13
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_text_only();
      return false;
    }
    if ( (e.keyCode == '219') && (e.altKey === true) )  {
      console.log('you pressed [ + Alt to  View Top of Chat'); // scbt14
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_up_to_top();
      return false;
    }
    if ( (e.keyCode == '221') && (e.altKey === true) )  {
      console.log('you pressed ] + Alt to  View Bottom of Chat'); // scbt15
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_down_to_bottom();
      return false;
    }
    if ( (e.keyCode == '220') && (e.altKey === true) )  {
      console.log('you pressed  + Alt to  Change Chat Font Size'); // scbt20
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_font_size();
      return false;
    }
    e = null; return false;
  });
} // end helper_turn_on_keybinds_from_options



// ****************** GET FUNCTIONS THAT RETURN A VALUE
 
function scbt_get_str_for_search() {
  var str = '';
  str = window.scbtChatSearchInputTextRef.value;
  if (str) {
    str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
    str = str.trim();
  }
  return str;
}


function scbt_get_str_for_chat_classes_from_obj(obj) {
  var str = '';
  if (obj.sub === 1) {
    str = str + ' sub ';
  }
  if (obj.moderator === 1) {
    str = str + ' moderator ';
  }
  if (obj.owner === 1) {
    str = str + ' owner ';
  }
  if (obj.donation === 1) {
    str = str + ' donation ';
  }
  if (obj.newSub === 1) {
    str = str + ' newSub ';
  }
  if (obj.verified === 1) {
    str = str + ' verified vip ';
  }
  if (obj.gifter === 1) {
    str = str + ' gifter ';
  }
  if (obj.founder === 1) {
    str = str + ' founder ';
  }
  if (obj.og === 1) {
    str = str + ' og ';
  }
  if (obj.staff === 1) {
    str = str + ' staff ';
  }
  if (obj.anevent === 1) {
    str = str + ' anevent ';
  }
  obj = null; return str;
}


function scbt_get_str_for_chat_classes_from_arr(arr) {
  var str = '';
  if (arr) {
    if (arr[5] == 1) {
      str = str + ' sub ';
    }
    if (arr[6] == 1) {
      str = str + ' moderator ';
    }
    if (arr[7] == 1) {
      str = str + ' owner ';
    }
    if (arr[8] == 1) {
      str = str + ' donation ';
    }
    if (arr[9] == 1) {
      str = str + ' newSub ';
    }
    if (arr[10] == 1) {
      str = str + ' verified vip ';
    }
    if (arr[11] == 1) {
      str = str + ' gifter ';
    }
    if (arr[12] == 1) {
      str = str + ' founder ';
    }
    if (arr[13] == 1) {
      str = str + ' og ';
    }
    if (arr[14] == 1) {
      str = str + ' staff ';
    }
    if (arr[15] == 1) {
      str = str + ' anevent ';
    }
  }
  arr = null; return str;
}


function scbt_get_obj_cleaned_message_from_obj(obj) {
  if (obj && obj.message) {
    obj.message = obj.message.toLowerCase();
    obj.message = obj.message.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.message = obj.message.replace(/,/g, ' ');
    obj.message = obj.message.replaceAll("’", "");
    obj.message = obj.message.trim();
    if (obj.message.charAt(0) == '!') {
      obj.isBot = 1;
    }
  }
  return obj;
}


function scbt_get_obj_cleaned_username_from_obj(obj) {
  if (obj && obj.username) {
    obj.username = obj.username.toLowerCase();
    obj.username = obj.username.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.username = obj.username.replace(/,/g, ' ');
    obj.username = obj.username.replace(/:/g, '');
    obj.username = obj.username.trim();
    if ( ( obj.username.indexOf('bot') > -1 ) || ( obj.username == 'streamelements') || ( obj.username == 'streamlabs') || ( obj.username == 'tifa lockhart') ) {
      obj.isBot = 1;
    }
  }
  return obj;
}


function scbt_get_str_serviceid() {
  if (window.scbtserviceid != null) { return window.scbtserviceid; }
  var str = window.location.hostname;
  if (str) {
    str = str.replace('www.', '');
    str = str.replace('.com', '');
    str = str.replace('.tv', '');
    str = str.replace('m.', '');  
  }
  window.scbtserviceid = str; str = null; return window.scbtserviceid;
}



function scbt_get_arr_video_elem() {
  var elemArr = document.body.getElementsByTagName('video');
  return elemArr;
}



function scbt_get_arr_sortedtimes_from_arr(arr) {
  if (!arr) {
    return false;
  }
  if (!arr[1]) {
    return arr;
  }
  if (!arr[1].timestamp) {
    return arr;
  }
  if (typeof arr[1].timestamp === 'number') {
    return arr;
  }
  if (arr[1].timestamp.indexOf(':') < 0) {
    return arr;
  }
  return arr.sort(function (a, b) {
    if (parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]) === 0) {
      return parseInt(a.timestamp.split(':')[1]) - parseInt(b.timestamp.split(':')[1]);
    } else {
      return parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]);
    }
  })
}



function scbt_get_str_seconds_from_hour_minute_time(str) {
  str = str.replace('@', '');
  str = str.replace('.', '');
  str = str.trim();
  var p = str.split(':');
  var seconds = 0;
  var m = 1;
  while (p.length > 0) {
      seconds += m * parseInt(p.pop(), 10);
      m *= 60;
  }
  str = null; p = null; m = null;
  return seconds;
}



function scbt_get_binary_role_from_chat_message(elem, parameter) {
  var toReturn = 0;

  if (parameter == 'sub') {
    if ( 
      (elem.classList.contains('sub')) || 
      (elem.querySelector('img[alt="Subscriber"]')) || 
      (elem.querySelector('[data-v-df7f331e]') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'moderator') {
    if ( 
      (elem.classList.contains('moderator')) || 
      (elem.querySelector('[data-v-43d962e8]') ) || 
      (elem.querySelector('path[style="fill: rgb(0, 199, 255);"]') ) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'founder') {
    if ( 
      (elem.classList.contains('founder')) || 
      (elem.querySelector('[data-v-62b88e44]')) || 
      (elem.querySelector('#badge-founder-gradient'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'verified') {
    if ( 
      (elem.classList.contains('verified')) || 
      (elem.classList.contains('vip')) || 
      (elem.querySelector('[data-v-899c5d7d]')) || 
      (elem.querySelector('[data-v-935db34c]')) ||
      (elem.querySelector('[data-v-f55c3249]')) || 
      (elem.querySelector('#badge-verified-gradient'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'vip') {
    if ( 
      (elem.classList.contains('vip')) || 
      (elem.querySelector('[data-v-f55c3249]')) || 
      (elem.querySelector('#badge-vip-gradient'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'og') {
    if ( 
      (elem.classList.contains('og')) || 
      (elem.querySelector('[data-v-935db34c]')) || 
      (elem.querySelector('#badge-og-gradient-1'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'owner') {
    if ( 
      (elem.classList.contains('owner')) || 
      (elem.querySelector('[data-v-11d1cc91]')) || 
      (elem.querySelector('[data-v-1c3105ea]')) || 
      (elem.querySelector('#badge-host-gradient-1'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'staff') {
    if ( 
      (elem.classList.contains('staff')) || 
      (elem.querySelector("svg g#surface1 path[d='M 8 14 L 5 11 L 7 5 L 9 5 L 11 11 Z M 8 14 ']")) || 
      (elem.querySelector('[data-v-9200dfef]')) || 
      (elem.querySelector('path[d="M2.07324 1.33331H6.51991V4.29331H7.99991V2.81331H9.47991V1.33331H13.9266V5.77998H12.4466V7.25998H10.9599V8.73998H12.4466V10.22H13.9266V14.6666H9.47991V13.1866H7.99991V11.7066H6.51991V14.6666H2.07324V1.33331Z"]') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'gifter') {
    if ( 
       (elem.classList.contains('gifter')) || 
       (elem.querySelector("svg g[clip-path='url(#clip0_301_17810)']")) || 
       (elem.querySelector("svg g[clip-path='url(#clip0_301_17825)']"))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  elem = null; parameter = null; return toReturn;
}



function scbt_get_str_military_hours_minutes_from_timestamp(timestamp) {
  timestamp = timestamp.trim(); // 10:01AM
  if (timestamp) {
    if (timestamp.indexOf('AM') > -1) {
      timestamp = timestamp.replace('AM', '');
    } else {
      timestamp = timestamp.replace('PM', '');
      var arr = timestamp.split(':');
      var hours = parseInt(arr[0]);
      hours = hours + 12;
      timestamp = hours + ':' + arr[1];
    }
  }
  arr = hours = null; return timestamp;
}



function scbt_get_number_seconds_difference_from_two_timestamps(startTime, timeToCompare) {
  var diff = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
  var diff2 = Math.floor((diff/1000)/60);
  var seconds = diff2 * 60;
  diff = diff2 = null; return seconds;
}



function scbt_get_arr_from_dbname_string(dbName) {
  var arr = [];
  if (typeof dbName === 'string') {
    var arr = dbName.split('&');
  }
  return arr;
}


function scbt_get_obj_filter_blocked_links_from_obj(obj, elem) {
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    if ( (elemArr[0].textContent.indexOf('http') > -1 ) || (elemArr[0].textContent.indexOf('.com') > -1 ) || (elemArr[0].textContent.indexOf('xxx') > -1 ) || (elemArr[0].textContent.indexOf('www.') > -1 ) ) {
      elemArr[0].textContent = '---';
      obj.message = '---';
    }
  }
  elemArr = elem = null; return obj;
}


// I do not want to see these words in chat. Comma separated list. Example: rat,mouse,vermin 
function scbt_get_obj_filter_blocked_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  // get blocked words selected by user
  if (window.scbtBlockedWordsArr.length > 0) {
    arr = window.scbtBlockedWordsArr;
  }
  if (obj.anevent == 1) {
    return obj;
  }
  
  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = elemArr[0].textContent;
    tMatch = tOriginal.toLowerCase().trim();
    arr2 = window.scbtOptions.scbthidden7.split(',');
    fullArr = arr.concat(arr2);
    arrl = fullArr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = fullArr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch.includes(t2Match) ) {
          var regexp = new RegExp(t2Match, 'gi');
          var cleaned = tOriginal.replace(regexp, ' xxx ');
          elemArr[0].textContent = cleaned;
          obj.message = cleaned;
          regexp = null; cleaned = null; 
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these words in chat in big letters. Comma separated list. Example: fun,happy
function scbt_get_obj_filter_highlighted_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.message;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted7.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch.includes(t2Match) ) {
            elemArr[0].style.setProperty('font-size', '3rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');  
          }
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these users chats in big letters. Comma separated list. Example: johnny,sally
function scbt_get_obj_filter_vip_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;
  var elem2Arr = [];

  elemArr = elem.getElementsByClassName('chat-history--username');
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.username;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted6.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch == t2Match) {
            elemArr[0].classList.add('vip');
            obj.isHighlighted = window.scbtOptions.scbthighlighted5;
            elemArr[0].style.setProperty('font-size', '3rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');
            
            elem2Arr = scbt_get_arr_message_elems_from_parent_element(elem);
            if (elem2Arr[0]) {
              elem2Arr[0].style.setProperty('font-size', '3rem', 'important');
              elem2Arr[0].style.setProperty('line-height', '1', 'important');
            }
          } // if ( tMatch == t2Match)
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


// I do not want to see these user chats. Comma separated list. Example: john,mary,bigfoot
function scbt_get_obj_filter_blocked_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  var tOriginal = obj.username;
  if (tOriginal) {
    tMatch = tOriginal.toLowerCase().trim();
    arr = window.scbtOptions.scbthidden8.split(',');
    arrl = arr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = arr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch == t2Match) {
          obj.isHidden = 1;
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


function scbt_helper_chat_make_decisions(obj, elem) {
  if (window.scbtOptions.scbtmuted5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbtmuted6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbthidden5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isHidden = 1;
    }
  }
  if (window.scbtOptions.scbthidden6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isHidden = 1;
    }
  }

  if (window.scbtOptions.scbttheme6 === true) {
    var imgElemArr = elem.getElementsByTagName('img');
    [].forEach.call(imgElemArr, function(imgElm) {
      imgElm.style.display = 'none';
    });
    var iElemArr = elem.getElementsByTagName('i');
    [].forEach.call(iElemArr, function(iElem) {
      iElem.style.display = 'none';
    });
    var svgElemArr = elem.getElementsByTagName('svg');
    [].forEach.call(svgElemArr, function(svgElem) {
      svgElem.style.display = 'none';
    });
  }
  
  // Highlight sub messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted1 != '#ffffff') {
      if (obj.sub === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted1;
      }
  }

  // Highlight gifter messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted11 != '#ffffff') {
    if (obj.gifter === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted11;
    }
  }

  // Highlight VIP messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted5 != '#ffffff') {
    if (elem.classList.contains('vip')) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted5;
    }
  }

  // Highlight founder messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted8 != '#ffffff') {
    if (obj.founder === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted8;
    }
  }

  // Highlight OG messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted9 != '#ffffff') {
    if (obj.og === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted9;
    }
  }

  // Highlight owner messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted10 != '#ffffff') {
    if (obj.owner === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted10;
    }
  }
  
  // Highlight moderator messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted2 != '#ffffff') {
      if (obj.moderator === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted2;
      }
  }
  // Mute owner/streamer messages in chat in dim text 
  if (window.scbtOptions.scbtmuted2 === true) {
      if (obj.owner === 1) {
        obj.isMuted = 1;
      }
  }
  // Hide owner/streamer messages in chat
  if (window.scbtOptions.scbthidden2 === true) {
      if (obj.owner === 1) {
        obj.isHidden = 1;
      }
  }

  if ( (obj.owner === 1) || (obj.moderator === 1) || (obj.sub === 1) || (obj.newSub === 1) || (obj.verified === 1) ) { } else {
    // scbtmuted4 Mute non moderator/sub messages in chat
    if (window.scbtOptions.scbtmuted1 === true) {
      obj.isMuted = 1;
    }
    // scbthidden4 Hide non moderator/sub messages in chat
    if (window.scbtOptions.scbthidden1 === true) {
      obj.isHidden = 1;
    }
  }
    
  // scbtmuted3 Mute bot messages
  if (window.scbtOptions.scbtmuted4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isMuted = 1;
      }
    }
  }
    
  // scbthidden3 Hide bot  messages
  if (window.scbtOptions.scbthidden4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isHidden = 1;
      }
    }
  }

  // Highlight mention messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted3 != '#ffffff') {
    if (obj.mention === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted3;
    }
  }
  // Highlight hashtag messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted4 != '#ffffff') {
    if (obj.hashtag === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted4;
    }
  }
  // Mute @ mention messages in chat in dim text 
  if (window.scbtOptions.scbtmuted3 === true) {
    if (obj.mention === 1) {
      obj.isMuted = 1;
    }
  }
  // Hide @ mention messages in chat 
  if (window.scbtOptions.scbthidden3 === true) {
    if (obj.mention === 1) {
      obj.isHidden = 1;
    }
  }

  return obj;
} // end scbt_helper_chat_make_decisions





// ****************** OTHER FUNCTIONS 
// scbt_handler_ functions are click handlers caused by user interaction
// ********************* set click handlers functions

function scbt_add_listener_for_at_mention_menu() {
  setTimeout(function() {
    if (window.scbtCloseMentionButtonRef && window.scbtCloseMentionButtonRef.id != 'scbtX') {
      window.scbtCloseMentionButtonRef.addEventListener('click', scbt_user_chat_close_mention_menu);  
    }
    if (window.scbtChatInputRef && window.scbtChatInputRef.id != 'scbtX') {
      window.scbtChatInputRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
    }
    if (window.scbtChatSearchInputTextRef && window.scbtChatSearchInputTextRef.id != 'scbtX') {
      window.scbtChatSearchInputTextRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
    }
    return false;
  }, 2000);
}


function scbt_remove_listener_for_at_mention_menu() {
  setTimeout(function() {
    window.scbtCloseMentionButtonRef.removeEventListener('click', scbt_user_chat_close_mention_menu);
    window.scbtChatInputRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
    window.scbtChatSearchInputTextRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
    return false;
  }, 2000);
}


function scbt_add_listener_for_press_chat_to_mention_menu() {
  var elemArr = scbt_get_arr_chats();
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.classList.add('scbt-clickable'); }
  });
  setTimeout(function() {
    var elemArr2 = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr2, function(elem2) {
      if (elem2) { elem2.addEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
    elemArr = null; elem = null; elemArr2 = null; elem2 = null; return false;
  }, 2000);
}


function scbt_remove_listener_for_press_chat_to_mention_menu() {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.removeEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
  }, 1000);
  return false;
}


function scbt_add_listener_for_username_insert_into_search() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-username');
  [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_handler_click_username_insert_into_search); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_click_timestamp_go_to_video() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-timestamp');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_click_timestamp_go_to_video); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_saved_chat_from_streams(e) {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('az2');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_go_to_stream); }
    });
    elemArr = document.body.getElementsByClassName('az3');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_load_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az4');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_export_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az5');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_delete_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az6');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_mark_by_videoid); }
    });
    e = elem = elemArr = arrl = null; return false;
  }, 2000);
}


function scbt_add_listener_for_options_menu() {
  var elemArr = document.body.getElementsByClassName('scbtSortByServiceID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_serviceid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChannelID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_channelid); }

  elemArr = document.body.getElementsByClassName('scbtSortByVideoID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_videoid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChan');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_current); }

  elemArr = document.body.getElementsByClassName('scbttwelveOptions');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_helper_toggle_options_wrapper); }

  elemArr = document.body.getElementsByClassName('scbt-options-title');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_for_options_menu, false); }
  });
  return false;
}


function scbt_handler_for_options_menu(e) {
  if (e.target.id == 'scbtOptionsSavedTitle') {
    if (document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.remove('scbt-bl');
      document.body.getElementsByClassName('scbtChatPreviousContent')[0].innerHTML = '';
    } else {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.add('scbt-bl');
      scbt_get_arr_of_all_dbnames();
    }
  } 

  else if (e.target.id == 'scbtOptionsImportTitle') {
    if (document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.remove('scbt-bl');
    } else {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.add('scbt-bl');
    }
  }

  else {
    var elem = e.target.nextElementSibling;
    if (elem) {
      if (elem.classList.contains('scbt-bl') ) {
        elem.classList.remove('scbt-bl');
      } else {
        elem.classList.add('scbt-bl');
      }
    }
  }
}


function scbt_handler_for_chat_mention_menu_keystrokes(e) {
  if (e.key == 'ArrowUp')  {
    if (e.preventDefault) { e.preventDefault(); }
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var previousElm = parentElm.previousSibling;
        if (previousElm) {
          var previousElm1 = previousElm.getElementsByTagName('button');
          if (previousElm1[0]) {
            previousElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'ArrowDown')  {
    if (e.preventDefault) { e.preventDefault(); }
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var nextElm = parentElm.nextSibling;
        if (nextElm) {
          var nextElm1 = nextElm.getElementsByTagName('button');
          if (nextElm1[0]) {
            nextElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'Escape')  {
    if (e.preventDefault) { e.preventDefault(); }
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);  
    scbt_user_chat_close_mention_menu('');
    return false;
  }

  if (e.key == 'Enter')  {
    if (e.preventDefault) { e.preventDefault(); }
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var selectedElem = document.activeElement;
    var str = '';
    if (selectedElem) {
      str = selectedElem.textContent;
    }
    scbt_user_chat_close_mention_menu(str);
    return false;
  }
};


function scbt_handler_for_chat_mention_menu_usernames(e) {
  if (e.preventDefault) { e.preventDefault(); }
  window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
  scbt_user_chat_close_mention_menu(e.target.textContent);
  return false;
};      


function scbt_handler_for_chat_mention_menu(e) {
  if (e.data == '@') {
    scbt_get_usernames_for_mention_menu();
    window.scbtMentionMenuRef.classList.add('scbt-bl');
    window.document.addEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var elemArr = document.body.getElementsByClassName('scbtusername1');
    if (elemArr[0]) {
      elemArr[0].focus();
    }
    elemArr = null;

    var elemArr = document.body.getElementsByClassName('scbtusername');
    [].forEach.call(elemArr, function(elem) {
      if (elem) {
        elem.addEventListener('click', scbt_handler_for_chat_mention_menu_usernames);
      }
    });
  }
  return false;
}


function scbt_handler_for_mention_menu_click(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  var str = '';

  if (e.target.classList.contains('chat-history--message') ) {
    var elemArr = document.body.getElementsByClassName('chat--input');

    // not a sub or mod chatting
    if (e.target && e.target.previousElementSibling) {
      var elem = e.target.previousElementSibling;

      if (elem && elem.textContent) {
        str = elem.textContent.trim();
        str = '@' + str + ' ';
        window.scbtChatInputRef.value = str;
        window.scbtChatSearchInputTextRef.value = str;
        if (elemArr[0]) {
          elemArr[0].focus();
        }
        return false;

      } else {
        // sub or mod chatting
        if (elem.previousElementSibling && elem.previousElementSibling.textContent) {
          str = elem.previousElementSibling.textContent.trim();
          str = '@' + str + ' ';
          window.scbtChatInputRef.value = str;
          window.scbtChatSearchInputTextRef.value = str;
          if (elemArr[0]) {
            elemArr[0].focus();
          }
          return false;
        }
      }

    }
  }
  return false;
};



function scbt_handler_sort_saved_streams_by_serviceid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.serviceid.toLowerCase() > b.serviceid.toLowerCase()) ? 1 : ((b.serviceid.toLowerCase() > a.serviceid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_channelid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.channelid.toLowerCase() > b.channelid.toLowerCase()) ? 1 : ((b.channelid.toLowerCase() > a.channelid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_videoid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_current(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));

  var arrl = window.scbtSavedStreamsArr.length;
  var arr = [];
  var str = scbt_get_str_channelid();
  if (str) {
    str = str.toLowerCase();
  }
  
  for (var i = 0; i < arrl; i++) {
    if (window.scbtSavedStreamsArr[i].channelid == str) {
      arr.unshift(window.scbtSavedStreamsArr[i]);
    } else {
      arr.push(window.scbtSavedStreamsArr[i]);
    }
  }
  scbt_helper_build_list_of_saved_stream_chat_by_arr(arr);
  scbt_add_listener_for_saved_chat_from_streams(arr);
  e = a = b = i = arrl = arr = null; return false;
}


function scbt_handler_click_username_insert_into_search(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.target) {
      if (e.target.textContent) {
        var elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
        if (elemArr[0]) {
          elemArr[0].value = e.target.textContent;
        }
        elemArr = null; e = null;
      }
    }
  }
  return false;
}


function scbt_helper_chat_listen() {
  if (window.scbtOptions.observer) { return false; }
  targetNode = scbt_get_arr_chatbox_elem();
  if (targetNode[0]) {
    var config = { childList: true,
                 attributes: false,
                 characterData: false,
                 subtree: false,
                 attributeOldValue: false,
                 characterDataOldValue: false 
               };
    var callback = function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              if (mutation.addedNodes) {
                var arrl = mutation.addedNodes.length;
                for (var i=0; i < arrl; i++) { 
                  scbt_helper_process_chat_line(mutation.addedNodes[i], true);
                  if (window.scbtOptions.scbtfeature8 === true) {
                    var elem = document.body.querySelector('.livestream__comments');
                    var str = elem.scrollHeight;
                    elem.scrollTop = "-" + str;
                  }
                }
              }  // if (mutation.addedNodes) {
            }   // end if (mutation.type === 'childList') {      
       } // end for(const mutation of mutationsList) {
    };  // end var callback = function(mutationsList, observer) {

    if (window.scbtOptions) {
      window.scbtOptions.observer = new MutationObserver(callback);
      window.scbtOptions.observer.observe(targetNode[0], config);
    }
  }
  return false;
}


function scbt_helper_chat_blur(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.border = '1px dotted ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_on(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.border = '2px solid ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_off(elem) {
  elem.style.paddingLeft = 'initial';
  elem.style.paddingRight = 'initial';
  elem.style.border = '0px';
}

function scbt_helper_chat_set_to_hide(elem) {
  elem.style.opacity = 0;
  return false;
}

function scbt_helper_chat_set_to_highlight(elem, color) {
  elem.style.setProperty('border-left', '2px solid ' + color, 'important');
  elem.style.setProperty('border-right', '2px solid ' + color, 'important');
  return false;
}

function scbt_helper_chat_set_to_mute(elem) {
  elem.style.opacity = '.3';
  return false;
}

function scbt_helper_chat_set_to_show(elem) {
  elem.style.opacity = '1';
  return false;
}

function scbt_helper_copy_text_to_clipboard(str) {
  var toShare = window.location.href;
  if (typeof str == 'string') {
    toShare = str;
  }
  navigator.clipboard.writeText(toShare).then(function() {
    setTimeout(function(){ scbt_helper_toast('copied to clipboard'); str = toShare = null; return false; }, 500);
  }, function(err) {
    alert(err);
    console.error(err);
    str = toShare = null; return false;
  });
}


function scbt_helper_comments_set_up() {
  window.scbtVODCommentsLoadedIs = true;
  var elemArr = document.body.querySelectorAll('#video-comments');
  if (elemArr[0]) {
    var commentElemArr = elemArr[0].querySelectorAll('.comment-item .comment-text');
    [].forEach.call(commentElemArr, function(commentElem) {
      if (commentElem.textContent) {
        var arr = commentElem.textContent.split(' ');
        var arrl = arr.length;
        for (var i=0; i < arrl; i++) {
          var str = arr[i];
          if (str) {
            str = str.trim();  
          }
          var isTimeHas = /:\d\d/.test(str);
          if (isTimeHas === true) {
            var seconds = scbt_get_str_seconds_from_hour_minute_time(str);
            commentElem.setAttribute('data-seconds', seconds);
            commentElem.addEventListener('click', scbt_helper_go_to_timestamp_in_video);
            commentElem.style.cursor = 'pointer';
          }
        }
      }
    });
  }
  return false;
}


function scbt_helper_go_to_timestamp_in_video(e) {
  window.scbtVODLoadedIs = true;
  var seconds = e;
  if (e) {
    if (e.target) {
      if (e.target.dataset) {
        if (e.target.dataset.seconds) {
         seconds = e.target.dataset.seconds;
        }
      }
    }
  }
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    if (videoEl[0].readyState > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      videoEl[0].currentTime = Number(seconds);
      videoEl[0].play();
      videoEl = null;
    }
  }
  return false;
}


function scbt_helper_do_coming_soon_message() {
  scbt_helper_toast('Status: Coming soon in later versions in 2023');
  return false;
}


function scbt_helper_share_native_disabled(e) { 
  if (e) {
    if (navigator.share) { } else {
      e.classList.add('disabled');
    }
  }
  e = null; return false;
}


function scbt_helper_toast(theText) {
  window.scbtSnackbarRef.textContent = theText;
  window.scbtSnackbarRef.className = 'show';
  setTimeout(function(){ window.scbtSnackbarRef.className = window.scbtSnackbarRef.className.replace('show', ''); }, 2500);
  return false;
}


// put cursor into chat box to type via keybind
function scbt_user_chat_focus(e) {
  window.scbtChatInputRef.focus();
  e = null; return false;
}


function scbt_helper_toggle_options_wrapper(e) {
  var elemArr = document.body.getElementsByClassName('scbttwelveOptionsWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  elemArr = null; return false;
}





function scbt_helper_is_element_visible(el) {
  var rect     = el.getBoundingClientRect();
  var vWidth   = window.innerWidth || document.documentElement.clientWidth;
  var vHeight  = window.innerHeight || document.documentElement.clientHeight;
  var efp      = function(x, y) { return document.elementFromPoint(x, y) };     
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
    return false;
  }
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}


function scbt_helper_process_chat_line(elem, currentChatLine) {
  var obj = {};
  obj.isHighlighted = 0;
  obj.isMuted = 0;
  obj.isHidden = 0;
  obj.isBot = 0;
  obj.hashtag = 0;
  obj.mention = 0;

  obj.anevent = 0;
  obj.donation = 0;
  obj.founder = 0;
  obj.gifter = 0;
  obj.moderator = 0;
  obj.newSub = 0;
  obj.og = 0;
  obj.owner = 0;
  obj.staff = 0;
  obj.sub = 0;
  obj.timestamp = '00:02AM';
  obj.verified = 0;

  obj = scbt_helper_chat_clean(obj, elem);

  if (window.scbtOptions.scbthidden9) {
    obj = scbt_get_obj_filter_blocked_links_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden7) {
    obj = scbt_get_obj_filter_blocked_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted7) {
    obj = scbt_get_obj_filter_highlighted_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted6) {
    obj = scbt_get_obj_filter_vip_users_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden8) {
    obj = scbt_get_obj_filter_blocked_users_from_obj(obj, elem);
  }

  obj = scbt_helper_chat_make_decisions(obj, elem);

  if (obj.isHighlighted != 0) {
    scbt_helper_chat_set_to_highlight(elem, obj.isHighlighted);
  }
  if (obj.isMuted === 1) {
    scbt_helper_chat_set_to_mute(elem);
  }
  if (obj.isHidden === 1) {
    scbt_helper_chat_set_to_hide(elem);
  }

  // click on message to mention in chat (for mobile)
  if (window.scbtOptions.scbtfeature11 === true) {
    var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
    if (elemArr[0]) {
      elemArr[0].addEventListener('click', scbt_handler_for_mention_menu_click, false);  
      elemArr = null;
    }
  }

  // speak out loud chat with keywords
  if (window.scbtOptions.scbtfeature12 && window.scbtOptions.scbtfeature12 != '' && currentChatLine === true) {
    scbt_helper_chat_speak(obj.message);
  }

  // console.log('because we are saving? ' + window.scbtOptions.scbtfeature4 + ' ' + currentChatLine + '  going to save this chat line: ' + obj.username + ' MMM ' + obj.message + ' ' + obj.isBot + ' to DBNAME ' + window.scbtDbName);
  // console.log(obj);
  // return false;

  if (window.scbtDbName) { } else {  elem = currentChatLine = obj = null; return false; }
  if (obj.isBot > 0) {  elem = currentChatLine = obj = null; return false; }
  if ( (obj.itemid) && (obj.username) && (obj.message) ) { } else { elem = currentChatLine = obj = null; return false; }

  if ( (window.scbtOptions.scbtfeature4 === true) && (currentChatLine === true) && window.scbtDbName && obj ) {
    delete obj.isHighlighted;
    delete obj.isMuted;
    delete obj.isHidden;
    delete obj.isBot;
    delete obj.hashtag;
    delete obj.mention;
    try {
      scbt_set_db_save_chat_obj(obj);
      elem = currentChatLine = obj = null; return false;
    } catch (errorx) {
      console.log('save error ');
      console.log(errorx);
      elem = currentChatLine = obj = null; return false;
    }
  } 
}


function scbt_set_chat_parameter(parameter, visibility) {
  var str = '';
  
  if (parameter == 'owner') {
    if (visibility == 1) {
      str = ' - broadcaster chats -';
    }
    if (visibility == 2) {
      str = ' - non broadcaster chats -';
    }
  }

  if (parameter == 'moderator') {
    if (visibility == 1) {
      str = ' - mod chats -';
    }
    if (visibility == 2) {
      str = ' - non mod chats -';
    }
  }

  if (parameter == 'sub') {
    if (visibility == 1) {
      str = ' - sub chats -';
    }
    if (visibility == 2) {
      str = ' - non sub chats -';
    }
  }

  if (parameter == 'newSub') {
    if (visibility == 1) {
      str = ' - new sub chats -';
    }
    if (visibility == 2) {
      str = ' - non new sub events -';
    }
  }

  if (parameter == 'mod_sub') {
    if (visibility == 1) {
      str = ' - sub+mod chats -';
    }
    if (visibility == 2) {
      str = ' - non sub+mod chats -';
    }
  }

  if ( (parameter == 'vip') || (parameter == 'verified') ) {
    if (visibility == 1) {
      str = ' - vip/verified chats -';
    }
    if (visibility == 2) {
      str = ' - non vip/verified chats -';
    }
  }

  if (parameter == 'donation') {
    if (visibility == 1) {
      str = ' - donation chats -';
    }
    if (visibility == 2) {
      str = ' - non donation chats -';
    }
  }
  
  if (parameter == 'mention') {
    if (visibility == 1) {
      str = ' - mention chats -';
    }
    if (visibility == 2) {
      str = ' - non mention chats -';
    }
  }

  if (parameter == 'hashtag') {
    if (visibility == 1) {
      str = ' - hashtag chats -';
    }
    if (visibility == 2) {
      str = ' - non hashtag chats -';
    }
  }

  parameter = null; visibility = null; return str;
}


function scbt_user_chat_load_by_videoid(e) {
  if (!e) { return false; }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.dbname) { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  
  scbt_helper_build_chat_by_dbname_string(e.srcElement.dataset.dbname);

  if (window.scbtMobileIs === true) {
    window.scbtSideMenuRef.classList.add('scbt-fl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatWrapperRef.classList.add('scbt-bl');
  window.scbtChatTitleRef.classList.add('scbt-bl');
  // window.scbtChatContentRef.classList.add('scbt-bl');
  window.scbtChatMenuRef.classList.add('scbt-fl');  
  window.scbtSearchBarActiveIs = true;
  return false;
}


function scbt_user_chat_close_mention_menu(username) {
  if (!username.target) {
      if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
          var str = window.scbtChatSearchInputTextRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatSearchInputTextRef.value = '@' + username + ' ';
          }
          window.scbtChatSearchInputTextRef.focus();
      } else {
          var str = window.scbtChatInputRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatInputRef.value = str + username + ' ';
          }
          window.scbtChatInputRef.focus();
      }
  }
  window.scbtMentionMenuRef.classList.remove('scbt-bl');
  username = str = null; return false;
}


// view stream in full screen mode
function scbt_full_screen_video() {
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    videoEl[0].requestFullscreen();
  }
  videoEl = null; return false;
}


function scbt_user_go_to_stream(e) {
  if (!e) { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.channelid) { return false; }

  var str = e.target.dataset.channelid;
  if (e.target.dataset.serviceid == 'odysee') {
    window.open('https://odysee.com/$/search?q=' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'rumble') {
    str = str.replace(/ /g, '');
    str = str.replace(/_+/g, '');
    window.open('https://rumble.com/c/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'kick') {
    window.open('https://kick.com/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'twitch') {
    window.open('https://twitch.tv/' + str, '_blank');
  }
  if (e.target.dataset.serviceID == 'youtube') {
    str = str.replace(/ /g, '+');
    window.open('https://www.youtube.com/results?search_query=' + str,'_blank');
  }
  e = null; str = null; return false;
}


function scbt_user_search_chat_toggle(e) {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 

  var str = 'abcxyz';
  if (e) {
    if (e.target) {
      str = e.target.id;
    }
  }

  if ( (window.scbtvideoid && window.scbtDbName) || (window.scbtDbNameToSearch != null) || (window.scbtMobileIs === true) || (str == 'scbtCloseButton') ) { } else { scbt_helper_toast('You can only search a stream chat on a livestream. Please find an active livestream.'); return false; }
  window.scbtChatTitleRef.classList.add('scbt-bl');

  if (e) {
    if (e.target) {
      if (e.target.id == 'scbt22') {
        window.scbtSearchChat = 'current';
        window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
      }
      if (e.target.id == 'scbt23') {
        window.scbtSearchChat = 'previous';
        window.scbtChatSearchStartsWithButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.add('scbt-multiple');

        if (window.scbtChatMenuRef.classList.contains('scbt-fl') ) {
          return false;
        }

      }
    }
  }

  // opening
  if (window.scbtSearchBarActiveIs === false) {
    window.scbtChatContentRef.innerHTML = '';
    if (window.scbtSearchChat == 'current') {
      window.scbtChatARef.textContent = 'Search this stream chat';
    } else {
      window.scbtChatARef.textContent = 'Search previous stream chat';
    }
    if (window.scbtMobileIs === true) {
      window.scbtSideMenuRef.classList.add('scbt-fl');
    }
    
    window.scbtChatMenuRef.classList.add('scbt-fl');
    window.scbtChatWrapperRef.classList.add('scbt-bl');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.focus();
    window.scbtSearchBarActiveIs = true;
    return false;
  }

  // closing
  if (window.scbtSearchBarActiveIs === true) {
    window.scbtChatContentRef.innerHTML = '';
    window.scbtChatARef.textContent = '';
    window.scbtChatBRef.textContent = '';
    if (window.scbtMobileIs === true) { 
      window.scbtSideMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
    }
    window.scbtChatMenuRef.classList.remove('scbt-fl');
    window.scbtChatWrapperRef.classList.remove('scbt-bl');
    window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.blur();
    window.scbtSearchBarActiveIs = false;
    window.scbtDbNameToSearch = window.scbtDbName;
    return false;
  }

}


function scbt_user_search_chat_by_keyword(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchKeywordButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_by_user(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchUserButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_by_events(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchEventsButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_full(e) {
scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchFullButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_starts_with(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchStartsWithButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_toggle_chat_filter_menu() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtMobileIs === true) {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      window.scbtChatToggleMenuRef.classList.remove('scbt-fl');
      // window.scbtChatTitleRef.classList.remove('scbt-bl');
      window.scbtChatARef.textContent = '';
      window.scbtChatBRef.textContent = '';
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      window.scbtChatToggleMenuRef.classList.add('scbt-fl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
    }
  }
  return false;
}


function scbt_user_toggle_chat_menu() {
  var elemArr = [];

  if (window.scbtDbName || window.scbtDbNameToSearch) {
    
  } else {

  }

  if (window.scbtMobileIs === true) {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  }
  return false;
}


function scbt_user_toggle_options_menu(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.target) {
      if (e.target.id == 'scbt2') {
        if (e.target.classList.contains('focused') ) {
          e.target.classList.remove('focused');
        } else {
          e.target.classList.add('focused');
        }
      } 
    }
  }

  var elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
  if (elemArr[0]) {
    if (elemArr[0].className.match('scbt-bl') ) { 
      elemArr[0].classList.remove('scbt-bl');
      
      var elem2Arr = document.body.getElementsByClassName('scbtClipsMenuWrapper');
      if (elem2Arr[0]) {
        elem2Arr[0].remove('scbt-bl');
      }
      elem2Arr = document.body.getElementsByClassName('scbtClipsMenuTitle');
      if (elem2Arr[0]) {
        elem2Arr[0].innerHTML = '';
      }
      elem2Arr = document.body.getElementsByClassName('scbtClipsMenuContent');
      if (elem2Arr[0]) {
        elem2Arr[0].innerHTML = '';
      }
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  e = elemArr = elem2Arr = null; return false;
}


function scbt_handler_click_timestamp_go_to_video(e) {
  if (e) { } else { console.log('error1'); return false; }
  if (e.target) { } else { console.log('error2');  return false; }
  if (e.target.innerText) { } else { console.log('error3');  return false; }      

  var startTimeEl = document.body.getElementsByClassName('scbt-chat-timestamp');
  if (startTimeEl[1]) {
    var startTime = startTimeEl[1].innerText; // 12:42PM 
    if (startTime) {
      startTime = startTime.trim();
      if (startTime.indexOf('AM') > -1) {
        startTime = startTime.replace('AM', '');
      }
      if (startTime.indexOf('PM') > -1) {
        startTime = startTime.replace('PM', '');
        var arr = startTime.split(':');
        var hours = parseInt(arr[0]);
        if (hours > 12) {
          hours = hours + 12;
        }
        startTime = hours + ':' + arr[1];
      }
    }
  }

  var timeToCompare = e.target.innerText; // 02:42PM 
  if (timeToCompare) {
    timeToCompare = timeToCompare.trim();
    if (timeToCompare.indexOf('AM') > -1) {
      timeToCompare = timeToCompare.replace('AM', '');
    }
    if (timeToCompare.indexOf('PM') > -1) {
      timeToCompare = timeToCompare.replace('PM', '');
      var arr = timeToCompare.split(':');
      var hours = parseInt(arr[0]);
      if (hours < 12) {
        hours = hours + 12;
      }
      timeToCompare = hours + ':' + arr[1];
    }
  }

  if (startTime && timeToCompare) {
    var diff1 = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
    var diff2 = Math.floor((diff1/1000)/60);
    var seconds = diff2 * 60;
    scbt_helper_go_to_timestamp_in_video(seconds);
  }
  return false;
}





function scbt_set_db_error_message(error) {
  console.error('Error: getting and displaying saved chat failed or blocked for db: ' + window.scbtDbName);
  if (error) {
    console.error(error);
    if (typeof error === 'string') {
      console.log(error);
    }
    if (error.target) {
      if (error.target.transaction) {
        if (error.target.transaction.error) {
          console.log('typeof error.target.transaction.error');
          console.log(typeof error.target.transaction.error);
          console.log(error.target.transaction.error);
          if (error.target.transaction.error.message) {
            console.log('typeof error.target.transaction.error.message');
            console.log(typeof error.target.transaction.error.message);
            console.log(error.target.transaction.error.message);
          }
          if (error.target.transaction.error.message.indexOf('uniqueness requirements') > -1) {
            console.log('no unique id cannot be saved');
          }
        } 
      } 
    }
  }
}


function scbt_set_vod_length() {
  // duration is 30449.461 SECONDS, minutes is: 507,  seconds is: 29.46099999999933
  var elemArr = scbt_get_arr_video_elem();
  if (elemArr[0]) {
    if (elemArr[0].readyState > 0) {
      window.scbtVODSecondsTotal = parseInt(elemArr[0].duration);
      window.scbtVODMinutesLong = parseInt(elemArr[0].duration / 60, 10);
      window.scbtVODSecondsLong = parseInt(elemArr[0].duration % 60);
    }
  }
  elemArr = null; return false;
}












































































// DIFFERENT FUNCTIONS - these functions are different bewtween extentions

function scbt_get_arr_message_elems_from_parent_element(elem) {
  var elemArr = [];
  if (elem) {
    elemArr = elem.getElementsByClassName('livestream-comment__text');
  }
  return elemArr;
}


function scbt_get_arr_username_elems_from_parent_element(elem) {
  var elemArr = [];
  if (elem) {
    elemArr = elem.getElementsByClassName('livestream-comment__meta-information');
  }
  return elemArr;
}


function scbt_get_arr_chats() {
  var elemArr = document.body.getElementsByClassName('livestream__comment');
  return elemArr;
}


function scbt_get_str_videoid() {
  /*
  var str = window.location.pathname;
  if (str) {
    str = str.trim();  
  }
  */
  var videoid = '';
  var arr1 = window.location.pathname.split(':');
  if (arr1[0]) {
    videoid = ':' + arr1[1] + ':' + arr1[2];  
  }
  return videoid;
}


function scbt_get_str_channelid() {
  var channelid = null;
  /*var elemArr = document.body.getElementsByClassName('claim-preview__title');
  var channelElem = '';
  if (elemArr[0]) {
    channelElem = elemArr[0];
  } 
  if (channelElem) {
    channelid = channelElem.textContent;
    if (channelid) {
      channelid = channelid.trim();
      channelid = channelid.replace(/ /g, '');
      channelid = channelid.replace(/\W/g, '');
    }
  }*/
  var arr1 = window.location.pathname.split('/@');
  var str = arr1[1];
  var arr2 = str.split(':');
  var channelid = arr2[0];
  arr1 = str = arr2 = null;
  return channelid;
}


function scbt_get_arr_chatbox_elem() {
  var elemArr = document.body.getElementsByClassName('chat__wrapper');
  return elemArr;
}

function scbt_helper_chat_clean(obj, elem) {
  var elemArr = [];
  var str = null;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  obj.timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);
  
  // username
  elemArr = elem.getElementsByClassName('comment__author');
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  obj.username = null;
  if (str) {
    obj.username = str;
    obj = scbt_get_obj_cleaned_username_from_obj(obj);
  }

  str = null;
  // chat message
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  if (!str) {
    elemArr = elem.getElementsByClassName('chat-history--rant-text');
    if (elemArr[0] && elemArr[0].textContent) { 
      obj.donation = 1;
      obj.anevent = 1;
      var elem2Arr = elem.getElementsByClassName('chat-history--rant-price');
      if (elem2Arr[0] && elem2Arr[0].textContent) { 
        str = elem2Arr[0].textContent + ' ' + str;
      }
      str = str + ' ' + elemArr[0].textContent;
    }
    var elem3Arr = elem.getElementsByClassName('chat-history--notification-text');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      str = obj.username + ' ' + elem3Arr[0].textContent;
      obj.newSub = 1;
      obj.anevent = 1;
    }
  }

  obj.message = null;
  if (str) {
    obj.message = str;
    obj = scbt_get_obj_cleaned_message_from_obj(obj);
    if (obj.message.indexOf('@') > -1) {
      obj.mention = 1;
    }
    if (obj.message.indexOf('#') > -1) {
      obj.hashtag = 1;
    }

  if (obj.message == null || obj.message.trim() === '') { } else { 
    obj.message = obj.message.replace(/(?:\r\n|\r|\n)/g, '');
    obj.message = obj.message.split("\t").join("");
    obj.message = obj.message.split("\"").join("");
    obj.message = obj.message.split("\'").join("");
  }

  var imgElemArr = elem.getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var alt = imgElm.getAttribute('alt');
    if (alt) {
      var a = alt.toLowerCase().trim();
      if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) || (a.indexOf('admin') > -1) ) {
        obj.owner = 1;
      }
      if ( (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1) ) {
        obj.sub = 1;
      }
      if (a.indexOf('moderator') > -1) {
        obj.moderator = 1;
      }
    }
  });

  if (elem.classList.contains('vip') ) {
    obj.verified = 1;
  }

  if (obj.username && obj.message) {
    var um = obj.message;
    obj.itemid = obj.username + um.substring(0, 7); // + Math.floor(Math.random() * 100)
  }
  
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
  }
} // end scbt_helper_chat_clean





function scbt_helper_build_all_menus() {
  var elemArr = [];

  elemArr = document.body.getElementsByClassName('scbtSideMenu');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtSideMenu', 'side_menu_odysee.html', false);
    })();
  }
  
  elemArr = document.body.querySelectorAll('.chat__comment-create textarea');
  if (elemArr[0]) { window.scbtChatInputRef = elemArr[0]; }
  
  elemArr = document.body.getElementsByClassName('scbtChatWrapper');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtChatWrapper', 'wrappers_menu.html', false);
    })();
   }  

  elemArr = document.body.getElementsByClassName('scbtChatMenu');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtChatMenu', 'chat_menu.html', false);
    })();
  }

  elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
  if (elemArr[0]) { } else {
     (async () => {
        await scbt_helper_get_menu(window.scbtXRef, 'scbtOptionsMenu', 'options_menu.html', false);
        var elemArr2 = document.body.getElementsByClassName('scbtMentionMenu');
        if (elemArr2[0]) {  } else {
            var theHTML = "<div id='scbtMentionMenu' class='scbtMentionMenu'><div id='scbtCloseMentionButton' class='scbtCloseMentionButton'></div><nav role='navigation' aria-label='List of Chat Users To Talk To'><ul>";
            window.scbtUsernamesArr.push(window.scbtchannelid);
            theHTML = theHTML + "<li><button id='scbtusername0' class='scbtusername scbtusername0' tabindex='0'>" + window.scbtchannelid + "</button></li>";
            var elemArr3 = document.body.querySelectorAll('.chat-history--username a');
            var i = 1;
            [].forEach.call(elemArr3, function(elem) {
              if (window.scbtUsernamesArr.indexOf(elem.textContent) < 0) {
                theHTML = theHTML + "<li><button id='scbtusername" + i + "' class='scbtusername scbtusername" + i + "' tabindex='0'>" + elem.textContent + "</button></li>";
                i = i + 1;
                window.scbtUsernamesArr.push(elem.textContent);
              }
            });
            theHTML = theHTML + "</ul></nav></div>";
            window.scbt1ElementRef.insertAdjacentHTML('afterbegin', theHTML );

            setTimeout(function() {
              var elemArr4 = document.body.getElementsByClassName('scbtMentionMenu');
              if (elemArr4[0]) {
                window.scbtMentionMenuRef = elemArr4[0];
              }
              var elemArr4 = document.body.getElementsByClassName('scbtCloseMentionButton');
              if (elemArr4[0]) {
                window.scbtCloseMentionButtonRef = elemArr4[0];
              }

              theHTML = elemArr = elemArr2 = elemArr3 = elemArr4 = i = null;
            }, 2000);
          }

      scbt_helper_toast( window.scbtserviceid + ' OdyseeBuddy loaded, RUNNING version: ' + chrome.runtime.getManifest().version);
      console.log(' OdyseeBuddy loaded, RUNNING version: ' + chrome.runtime.getManifest().version);
      var elemArr5 = document.body.getElementsByClassName('scbtToggleButton2');
      if (elemArr5[0]) { elemArr5[0].addEventListener('click', scbt_user_toggle_chat_menu); }
      return false;
     })(); // async 
  } // end scbtOptionsMenu

}


function scbt_helper_chat_auto_show() {
  if (window.scbtOptions.scbtfeature5 === true) {
    if (window.scbtMobileIs == false) {
      var elemArr = document.getElementsByClassName('chat__wrapper');
      if (elemArr[0]) {
        elemArr[0].style.position = 'absolute';
      }
      var elemArr = document.getElementsByClassName('chat__wrapper');
      if (elemArr[0]) {
        // elemArr[0].style.position = 'absolute';
        // elemArr[0].style.top = '1px';
        // elemArr[0].style.marginTop = '0 auto';
        elemArr[0].style.zIndex = '100000000';
        elemArr[0].style.display = 'block';
        elemArr[0].style.height = (window.screen.height - 100) + 'px';
        elemArr[0].setAttribute('style', 'background-color:transparent !important');
        // elemArr[0].style.opacity = '.66';
        elemArr[0].style.textShadow = '1px 1px 4px #000';
      }
      var elemArr = document.querySelectorAll('.chat');
      if (elemArr[0]) {
        elemArr[0].style.background = 'transparent';
      }
    }
  }
  return false;
}


function scbt_helper_apply_css_from_option(obj) {
  var css = '';

  if (typeof obj == 'object') {
    // Background of chat bubble in this hex colour. Use black #000 for transparent bubble.
    if (obj.a == 'scbttheme1') {
      if (obj.b == '#ffffff' || obj.b == '') {
        css = css + ' .livestream-comments__wrapper { background-color: initial !important; } .scbtChatWrapper { background-color: initial; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' .livestream-comments__wrapper { background-color: transparent !important; } .scbtChatWrapper { background-color: transparent; } ';
      }  
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' .livestream-comments__wrapper { background-color:' + obj.b + ' !important; } .scbtChatWrapper { background-color:' + obj.b + '; } '; 
      }
    }

    // User names in chat in this hex colour 
    if (obj.a == 'scbttheme2') {
      if (obj.b == '#ffffff') {
        css = css + ' .livestream__comments .comment__author { color: unset !important; } .scbt-chat-username { color: unset; } ';
      }
      if (obj.b == '#000000') {
        css = css + '.chat-entry-username { color: transparent !important; } .scbt-chat-username { color: transparent; } ';
      }
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' .livestream__comments .comment__author { color:' + obj.b + ' !important; } .scbt-chat-username { color: ' + obj.b + ' ; } ';
      }
    }

    // Highlighted chat text in this hex colour
    if (obj.a == 'scbttheme3') {
      if (obj.b != '#ffffff') {
        window.scbtOptions.scbtBorderColor = obj.b;
      } else {
        window.scbtOptions.scbtBorderColor = '#ff0000';
      }
    }

    // Text in chat in this hex colour
    if (obj.a == 'scbttheme4') {
      if (obj.b == '#ffffff') {
        css = css + ' .livestream-comment__text { color: unset !important; text-shadow: 0px; } .scbt-chat-message { color: unset; text-shadow: 0px; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' .livestream-comment__text { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } .scbt-chat-message { color: #111111; text-shadow: 0.5px 0.5px silver; } ';
      }  
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' .livestream-comment__text { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } .scbt-chat-message { color:' + obj.b + ' ; text-shadow: 0.5px 0.5px darkslategrey; } ';
      }
    }

    // Chat font size should be this times of normal, try 1.25
    if (obj.a == 'scbttheme5') {
      if (obj.b > 0) {
        var t = obj.b + 'rem';
        css = css + ' .livestream-comment__text { font-size: ' + t + '; line-height: ' + obj.b  + '; } .scbt-chat-message { font-size: ' + t + '; line-height: ' + obj.b  + '; } ';
      } else {
        css = css + ' .livestream-comment__text { font-size: initial; line-height: unset; } .scbt-chat-message { font-size: initial; line-height: unset; } ';
      }
    }

    // Text only
    if (obj.a == 'scbttheme6') {
      if (obj.b === true) {
        css = css + ' .livestream__comment canvas, .livestream__comment img, .livestream__comment svg, .livestream__comments .comment__author, .chat-history--badges-wrapper { visibility: hidden !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: hidden; } ';
      } else {
        css = css + ' .livestream__comment canvas, .livestream__comment img, .livestream__comment svg, .livestream__comments .comment__author, .chat-history--badges-wrapper  { visibility: visible !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: visible; } ';
      }      
    }

    // Left handed screen. Flip screen so video is on the right and chat is on the left. 
    if (obj.a == 'scbtfeature7') {
      if (obj.b === true) {
          css = css + ' .main-and-sidebar { flex-direction: row-reverse; } .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
      } else {
          if (window.scbtMobileIs === true) { 
            css = css + ' .main-and-sidebar { flex-direction: column; } .scbtChatWrapper { display: block; } ';
          } else {
            css = css + ' .main-and-sidebar { flex-direction: row; } .scbtChatWrapper { display: block; } ';
          }
      }
    }

    // Upside down chat screen. Newest chat is on the top, oldest chat is on the bottom 
    if (obj.a == 'scbtfeature8') {
      if (obj.b === true) {
          css = css + ' #chat-history-list { display: flex; flex-direction: column-reverse; } .scbtChatWrapper { display: flex; flex-direction: column-reverse; } ';
      } else {
          css = css + ' #chat-history-list { display: block; flex-direction: initial; } .scbtChatWrapper { display: block; flex-direction: initial; } ';
      }
    }

    // mouseover
    if (obj.a == 'scbtfeature9') {
      if (obj.b === true) {
        css = css + ' .livestream-comment__text:hover { font-size: 175% !important; } .scbtChatWrapper { font-size: 200%; } ';
       } else {
        css = css + ' .livestream-comment__text:hover { font-size: initial !important; } .scbtChatWrapper { font-size: initial; } ';
      }
    }

  }


  if (css != '') {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  obj = null; css = null; a = null; head = null; style = null; return false;
}


function scbt_user_chat_down_to_bottom() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; }

  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = window.scbtChatWrapperRef.scrollHeight - window.scbtChatWrapperRef.clientHeight;
    return false;
  } else {
    var elemArr = document.body.getElementsByClassName('livestream__comments');
    if (elemArr[0]) {
      elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
    }
  }
  elemArr = null; return false;
}


function scbt_user_chat_font_size() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 

  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
  } else {
    var elemArr = scbt_get_arr_message_elems_from_parent_element(document.body);
  }

  if (window.scbtFontUp < 6) {
    if (window.scbtFontSize == 'initial') {
      window.scbtFontSize = 1;
    }
    if (window.scbtHeightSize == 'initial') {
      window.scbtHeightSize = 'auto'; 
    }
    window.scbtFontSize = window.scbtFontSize - -.25;
    var str = window.scbtFontSize + 'em';
    window.scbtFontUp = window.scbtFontUp - -1;
  } else {
    window.scbtFontSize = 'initial';
    var str = 'initial';
    window.scbtHeightSize = 'initial';
    var str2 = 'initial';
    window.scbtFontUp = 1;
  }

  [].forEach.call(elemArr, function(elem) {
      elem.style.setProperty('font-size', str, 'important');
      elem.style.height = str2;
  });
  str = str2 = elem = elemArr = null; return false;
}


function scbt_user_chat_full_screen_width() {
  if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.getElementsByClassName('file-page__video');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = '0.1rem';
      elemArr[0].style.paddingLeft = '0.1rem';
      elemArr[0].style.maxWidth = 'none';
    }
    elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '-1rem';
      elemArr[0].style.width = '350px';
    }
    window.scbtFullScreenWidthIs = true;
    elemArr = null; return false;
  }

  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.getElementsByClassName('file-page__video');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = '2rem';
      elemArr[0].style.paddingLeft = '2rem';
      elemArr[0].style.maxWidth = '1700px';
    }
    elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '0';
      elemArr[0].style.width = '350px';
    }
    window.scbtFullScreenWidthIs = false;
    elemArr = null; return false;
  }
}


function scbt_user_chat_non_bot() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
  } else {
      var elemArr = scbt_get_arr_chats();
      
      if (window.scbtNonBotChatShow === 1) {
          window.scbtChatBRef.textContent = ' - non bot chats -';
          [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            var elem2Arr = scbt_get_arr_message_elems_from_parent_element(elem);
            if (elem2Arr[0]) {
              var str = elem2Arr[0].textContent;
              if (str) {
                if (str.indexOf('!') == '0') {
                  elem.style.opacity = '.25';
                }
              }
            }
            var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
            if (elem2Arr[0]) {
              var str = elem2Arr[0].textContent;
              if (str) {
                str = str.toLowerCase();
                if ( ( str.indexOf('bot') > -1 ) || ( str == 'streamelements') || ( str == 'streamlabs') ) {
                  elem.style.opacity = '.25';
                }
              }
            }
        });
        window.scbtNonBotChatShow = 2;
        elemArr = elem2Arr = str = elem = null; return false;
      }

      if (window.scbtNonBotChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
          elem.parentElement.style.opacity = 1;
        });
        window.scbtNonBotChatShow = 1;
        elemArr = elem2Arr = str = elem = null; return false;
      }

    }
}


function scbt_user_chat_text_only() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('span');

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'none';
        });
        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) { 
        window.scbtChatBRef.textContent = ' - non text only chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.display = 'inline-block';
            scbt_helper_chat_blur(elem);
        });
        window.scbtTextOnlyChatShow = 3;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'inline-block';
          scbt_helper_chat_off(elem);
        });
        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      
      var elemArr = scbt_get_arr_chats();

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';

        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'hidden';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'hidden';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'hidden';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'hidden';
          });
          var canvasElemArr = elem.getElementsByTagName('canvas');
          [].forEach.call(canvasElemArr, function(canvasElem) {
            canvasElem.style.visibility = 'hidden';
          });
        });

        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = canvasElemArr = canvasElem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        
        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'visible';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'visible';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'visible';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'visible';
          });
          var canvasElemArr = elem.getElementsByTagName('canvas');
          [].forEach.call(canvasElemArr, function(canvasElem) {
            canvasElem.style.visibility = 'visible';
          });
        });

        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = canvasElemArr = canvasElem = null; return false;
      } //if (window.scbtTextOnlyChatShow === 2)
    } // if livechat
}


function scbt_user_chat_up_to_top() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 

  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = 0;
  } else {
    var elemArr = document.body.getElementsByClassName('livestream__comments')
    if (elemArr[0]) {
      elemArr[0].scroll({top:0,behavior:'smooth'});
      elemArr[0].animate({ scrollTop: 0 }, 100);
      elemArr[0].scrollTop = 0;
    }
  }
  elemArr = null; return false;
}


function scbt_full_screen_video_height_chat() {
  if (window.scbtFullScreenHeightIs === false) {
    var elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.position = 'absolute';
      elemArr[0].style.top = '0px';
      elemArr[0].style.right = '20px';
      elemArr[0].style.zIndex = '10000';
      elemArr[0].style.height = '99vh';
      elemArr[0].style.marginTop = '-3rem';
    }
    window.scbtFullScreenHeightIs = true;
    scbt_user_chat_down_to_bottom();
    elemArr = null; return false;
  }

  if (window.scbtFullScreenHeightIs === true) {
    var elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.position = 'relative';
      elemArr[0].style.right = 'initial';
      elemArr[0].style.top = 'initial';
      elemArr[0].style.zIndex = 'initial';
      elemArr[0].style.height = 'initial';
      elemArr[0].style.marginTop = 'initial';
    }
    window.scbtFullScreenHeightIs = false;
    scbt_user_chat_down_to_bottom();
    elemArr = null; return false;
  }
}


// view stream in theatre mode
function scbt_user_theatre_mode() {
 var elemArr = document.body.querySelectorAll('#option-3--menu--11608');
 if (elemArr[0]) {
    elemArr[0].click();
  }
  elemArr = null; return false;
}


function scbt_user_toggle_chats(e) {

  var parameter = '';
  if (e) {
    if (typeof e == 'string') {
      parameter = e;
    } else {
      if (e.preventDefault) { e.preventDefault(); }
      if (e.target) {
        if (e.target.id) {
          switch ( e.target.id ) {
            case 'scbt4':
              parameter = 'owner';
              break;
            case 'scbt5':
              parameter = 'moderator';
              break;
            case 'scbt6':
               parameter = 'sub';
              break;
            case 'scbt7':
              parameter = 'mod_sub';
              break;
            case 'scbt8':
              parameter = 'vip';
              break;
            case 'scbt9':
              parameter = 'donation';
              break;
            case 'scbt11':
              parameter = 'mention';
              break;
            case 'scbt12':
              parameter = 'hashtag';
              break;
            case 'scbt29':
              parameter = 'newSub';
              break;
          } // end switch
        } // if e target id
      }   // e target
    }     // if e is not a string 

  }       // if e

  if (parameter) {
    
    if (parameter == 'vip') {
      parameter = 'verified';
    }
    // saved chat 
    if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
      
      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          }
        });
        window.scbtVisibilityChatShow = 2; 
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          }
        });
        window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      // live chat
    } else {
      var elemArr = scbt_get_arr_chats();
      // var elemArr = document.body.getElementsByClassName('chat-history--row');
      toSearchFor = '.chat-history--message, .chat-history--rant-text, .chat-history--notification-text';

      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;

          if (parameter == 'mention') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('@') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
          }
          if (parameter == 'hashtag') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('#') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
          }
          if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) || (a.indexOf('admin') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if (a.indexOf('moderator') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('moderator') > -1) || (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1)  ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
         if ( (parameter == 'vip') || (parameter == 'verified') ) {
          if (elem.classList.contains('vip') ) {
            scbt_helper_chat_on(elem);
            elem.style.opacity = 1;
          }
        }
        if (parameter == 'donation') {
          if (elem.classList.contains('chat-history--rant') ) {
            scbt_helper_chat_on(elem);
            elem.style.opacity = 1;
          }   
        }

      });
      window.scbtVisibilityChatShow = 2;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }

    if (window.scbtVisibilityChatShow === 2) {
      window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
      [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
          scbt_helper_chat_blur(elem);

          if (parameter == 'mention') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('@') > -1 ) {
                  elem.style.opacity = 0;
                }
              }
          }
          if (parameter == 'hashtag') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('#') > -1 ) {
                  elem.style.opacity = 0;
                }
              }
          }
          if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) || (a.indexOf('admin') > -1) ) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1) ) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if (a.indexOf('moderator') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var alt = imgElm.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('moderator') > -1) || (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1)  ) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
         if ( (parameter == 'vip') || (parameter == 'verified') ) {
          if (elem.classList.contains('vip') ) {
            elem.style.opacity = 0;
          }
        }
        if (parameter == 'donation') {
          if (elem.classList.contains('chat-history--rant') ) {
            elem.style.opacity = 0;
          }   
        }

        });
        window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

    }


  } else {
    // TODO: no parameter
  }

  return false;
}


function scbt_user_toggle_sub_event_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtSubChatShow === 1) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtSubChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtSubChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtSubChatShow = 3;
        elemArr = elem = null; return false;
      }


      if (window.scbtSubChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtSubChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      
      var elemArr = scbt_get_arr_chats();

      if (window.scbtSubChatShow === 1) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          if (elem.classList.contains('bg-secondary') ) {
            elem.style.opacity = 1;
          }            
        });
        window.scbtSubChatShow = 2;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtSubChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            if (elem.classList.contains('bg-secondary') ) {
              elem.style.opacity = 0;
            }            
        });
        window.scbtSubChatShow = 3;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtSubChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
        });
        window.scbtSubChatShow = 1;
        elemArr = null; elem = null; return false;
      }
  }
  return false;
}


function scbt_user_toggle_verified_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtVerifiedChatShow = 3;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem = null; return false;
      }

    } else {
      var elemArr = scbt_get_arr_chats();

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          var elem2Arr = elem.querySelectorAll('.badge');
          [].forEach.call(elem2Arr, function(elem2) {
            var str = elem2.textContent;
            if (str == 'VIP') {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          });            
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            var elem2Arr = elem.querySelectorAll('.badge');
            [].forEach.call(elem2Arr, function(elem2) {
              var str = elem2.textContent;
              if (str == 'VIP') {
                elem.style.opacity = 0;
              }
            });            
          });
          window.scbtVerifiedChatShow = 3;
          elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }
    }
  return false;
}


function scbt_user_toggle_clips_menu(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }

  if (window.scbtVODIs === true) {
    scbt_user_search_for_saved_chat();
    return false;
  }

  var elemArr = document.body.getElementsByClassName('scbtClipsToggleMenu');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  
  var elemArr = document.body.getElementsByClassName('scbtClipsMenuWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }

  return false;
}




















function scbt_helper_load_options(clicked) {

  var h = window.location.href;
  if (
    window.location.origin != 'https://odysee.com' || 
    h == 'https://odysee.com/subscriptions/' ||
    h == 'https://odysee.com/$/signin/' ||
    h == 'https://odysee.com/$/signup' ||
    h == 'https://help.odysee.tv/' ||
    h == 'https://odysee.com/$/careers' ||
    h == 'https://odysee.com/$/tos' ||
    h == 'https://odysee.com/$/privacypolicy' ||
    (h.indexOf('https://odysee.com/account/') > -1)
  ) { return false; }

  // set up options one time a page load
  if ( (window.hasOwnProperty('scbtIsOdysee') === true) && (window.scbtIsOdysee === true) ) { } else {
    window.scbtIsOdysee = true;
    scbt_get_str_serviceid();
    var body = scbt_make_toast();
    body.classList.add('scbt-odysee');
    var isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
    if (isMobile) {
      window.scbtMobileIs = true;
      body.classList.add('scbt-mobile');
    } else {
      body.classList.add('scbt-desktop');
    }
    
    var elemArr = document.body.getElementsByClassName('scbtX');
    if (elemArr[0]) { } else {
      body.insertAdjacentHTML('afterbegin', "<div id='scbtX' class='scbtX'> <button id='scbtToggleButton2' class='scbtToggleButton2 icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'><div></div><div></div><div></div></button>  <button id='scbtToggleButton' class='scbtToggleButton icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'>⚙</button></div>");        
      window.scbtXRef = document.body.getElementsByClassName('scbtX')[0];
      window.scbtMentionMenuRef = window.scbtXRef;
      window.scbtCloseMentionButtonRef = window.scbtXRef;
      window.scbtChatInputRef = window.scbtXRef;
      window.scbtChatSettingsMenuRef = window.scbtXRef;
      window.scbtChatWrapperLiveRef = window.scbtXRef;
      window.scbtSideMenuRef = window.scbtXRef;
      window.scbtChatWrapperRef = window.scbtXRef;
      window.scbtChatARef = window.scbtXRef;
      window.scbtChatBRef = window.scbtXRef;
      window.scbtChatTitleRef = window.scbtXRef;
      window.scbtCloseButtonRef = window.scbtXRef;
      window.scbtChatContentRef = window.scbtXRef;
      window.scbtChatMenuRef = window.scbtXRef;
      window.scbtChatSearchInputTextRef = window.scbtXRef;
      window.scbtChatSearchStartsWithButtonRef = window.scbtXRef;
      window.scbtChatSearchUserButtonRef = window.scbtXRef;
      window.scbtChatSearchKeywordButtonRef = window.scbtXRef;
      window.scbtChatSearchEventsButtonRef = window.scbtXRef;
      window.scbtChatSearchFullButtonRef = window.scbtXRef;
      window.scbtChatPreviousTitleRef = window.scbtXRef;
      window.scbtChatPreviousWrapperRef = window.scbtXRef;
      window.scbtOptionsTitleRef = window.scbtXRef;
      window.scbtOptionsWrapperRef = window.scbtXRef;
      window.scbtChatLogRef = window.scbtXRef;
      window.scbtChatPreviousContentRef = window.scbtXRef;
      window.scbtvideo6Ref = window.scbtXRef;
      window.scbtvideo7Ref = window.scbtXRef;
      window.scbtSocialMediaShareOptionsRef = window.scbtXRef;
      window.scbtSocialMediaShareCustomOptionsRef = window.scbtXRef;
      window.scbtSubmitButtonRef = window.scbtXRef;
      window.scbtStatusRef = window.scbtXRef;
      window.scbtCancelOptionsMenuRef = window.scbtXRef;        
      window.scbtHighlightsMenuRef = window.scbtXRef;
      window.scbtKeyboardContainerRef = window.scbtXRef;
    } // if scbtX exists

  } // if window.scbtIsOdysee === true


  var myInterval = setInterval(function () {
    if ( window.location.href.indexOf('/$/popout/') > -1) {
      var elem2Arr = document.body.querySelectorAll('#app');
      var elem3Arr = document.body.getElementsByClassName('main--popout-chat');
    } else {
      var elem2Arr = document.body.querySelectorAll('#app');
      var elem3Arr = document.body.querySelectorAll('header.header');
    }
    if (elem2Arr[0] && elem3Arr[0]) {
      window.scbt1ElementRef = elem2Arr[0];
      window.scbt2ElementRef = elem3Arr[0];
      clearInterval(myInterval);
      scbt_helper_build_all_menus();
    }
  }, 1000);

  var myInterval2 = setInterval(function () {
    // is livestream
    var chatContainer = document.body.getElementsByClassName('livestream__comments');
    if ( (chatContainer[0]) && (chatContainer.id !='chatReplayContainer') ) {
      clearInterval(myInterval2);

      if ( window.location.href.indexOf('/chat/popup/') > -1) {
        window.scbtchannelid = null;
        window.scbtvideoid = null;
        window.scbtDbNameToSearch = null;
        window.scbtVODIs = false;

        window.scbtvideoid = window.location.pathname;
        var arr1 = window.location.pathname.split('/$/popout/');
        if (arr1) {
          var arr2 = arr1.split(':');
          var str = arr2[0];
          if (str) {
            window.scbtchannelid = str;
          }
        }
        window.scbtDbName = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
        window.scbtDbNameToSearch = window.scbtDbName;
        scbt_set_db_for_saving(window.scbtDbName, 'startSaving');

      } else {
        window.scbtchannelid = scbt_get_str_channelid();
        
        window.scbtvideoid = scbt_get_str_videoid();
        

        if (window.scbtDbName == null) {
          window.scbtVODIs = false;
          window.scbtDbName = null;
          window.scbtDbNameToSearch = null;
          scbt_get_str_dbname('startSaving');
        }  
      } 

    } 
  }, 1000);

  var myInterval3 = setInterval(function () {
    // is VOD
    var videoContainer = document.body.getElementsByClassName('main--video-page');
    if ( (videoContainer[0]) ) {
      clearInterval(myInterval3);
      window.scbtchannelid = null;
      window.scbtvideoid = null;
      if (window.scbtChatWrapperRef && window.scbtChatWrapperRef.classList.contains('scbt-bl') ) { } else {
        window.scbtDbName = null;
        window.scbtDbNameToSearch = null;
      }
      window.scbtVODIs = true;
      scbt_set_vod_length();
      if (window.scbtVODCommentsLoadedIs === false) {
        scbt_helper_comments_set_up();  
      }
      if (window.location.search && window.scbtVODLoadedIs === false) {
        var arr = window.location.search.split('?t=');
        if (arr[1]) {
          var e = {};
          e.target = {};
          e.target.dataset = {};
          e.target.dataset.seconds = Number(arr[1]);
          setTimeout(function(){ scbt_helper_go_to_timestamp_in_video(e); }, 1000);
        }
      }
    }
  }, 1000);

 
} // end scbt_helper_load_options


          
/* @license
Papa Parse
v5.0.2
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var i=!1,_=!0,g=",",v="\r\n",n='"',s=n+n,r=!1,a=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");a=t.columns}void 0!==t.escapeChar&&(s=t.escapeChar+n)}();var o=new RegExp(U(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(a||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(o,s);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,b.BAD_DELIMITERS)||-1<e.indexOf(g)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(g.step)){var p=g.step;g.step=function(e){if(c=e,_())m();else{if(m(),0===c.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():p(c,t)}}}function v(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function m(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){q(g.transformHeader)&&(e=g.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!g.header&&!g.dynamicTyping&&!g.transform)return c;function e(e,t){var r,i=g.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];g.header&&(n=r>=l.length?"__parsed_extra":l[r]),g.transform&&(s=g.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return g.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data[0]||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);g.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return g.header&&0===l.length}function y(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){c.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)q(g.delimiter)&&(g.delimiter=g.delimiter(e),c.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(r&&v(p.data[m]))c++;else{var _=p.data[m].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(g.delimiter=s),bestDelimiter:s}}(e,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=b.DefaultDelimiter),c.meta.delimiter=g.delimiter}var s=w(g);return g.preview&&g.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),m(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(g.complete)&&g.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),m=a.indexOf(I,M),_=new RegExp(U(z)+U(O),"g"),g=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substr(M,s)===T){if(-1===m)return R();M=m+n,m=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<m||-1===m)){if(-1===g){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,g,m);if(v&&void 0!==v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===m)break;if(f.push(a.substring(M,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=M,M++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),w();if(g===i-1)return w(a.substring(M,g).replace(_,O));if(O!==z||a[g+1]!==z){if(O===z||0===g||a[g-1]!==z){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(M,g).replace(_,O)),a[M=g+1+y+e]!==O&&(g=a.indexOf(O,M)),p=a.indexOf(D,M),m=a.indexOf(I,M);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(M,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,M),g=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),g++}}else g++}return w();function b(e){h.push(e),d=M}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(M)),f.push(e),M=i,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],m=a.indexOf(I,M)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,b});

console.log('script running done ' + window.location.href);

window.addEventListener('load', e => {
  console.log('window on load done ' + window.location.href);
  window.scbtchannelid = null;
  window.scbtvideoid = null;
  window.scbtDbName = null;
  window.scbtDbNameToSearch = null;
  scbt_helper_load_options();
});

window.addEventListener('popstate', function (e) {
  console.log('window on popstate done');
  window.scbtchannelid = null;
  window.scbtvideoid = null;
  window.scbtDbName = null;
  window.scbtDbNameToSearch = null;
  scbt_helper_load_options();
});

document.addEventListener('transitionend', function(e) {
  if (e.target.id === 'progress') {
    console.log('document transitionend done');
    window.scbtchannelid = null;
    window.scbtvideoid = null;
    window.scbtDbName = null;
    window.scbtDbNameToSearch = null;
    scbt_helper_load_options();
  }
});

document.addEventListener('spfdone', function(e) {
  console.log('document spfdone');
  window.scbtchannelid = null;
  window.scbtvideoid = null;
  window.scbtDbName = null;
  window.scbtDbNameToSearch = null;
  scbt_helper_load_options();
});

window.addEventListener('unhandledrejection', e => {
  console.log('Browser database error: unhandled rejection: ');
  var request = e.target; 
  var error = e.reason; 
  console.error({ request, error });
  console.error(e);
  e = null; request = null; error = null;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, goCapture) {

    if (typeof request === 'object') {
      if (typeof request.tabUpdated === 'object') {
        if (request.tabUpdated.url) {
          if ( request.tabUpdated.url.indexOf('https://odysee.com/') > -1 ) {
            scbt_helper_load_options('clicked');
          }
        }
      }
    }

  if (request.chatloaded && request.chatloaded == 'odyseebuddychatloaded') {
    scbt_helper_load_options('clicked');
  }

  if (window.scbtKeybindOnIs === true) {
    if (request.message === 'odyseebuddycommand1') {
      scbt_user_command1();
    }
    if (request.message === 'odyseebuddycommand2') {
      scbt_user_command2();
    }
    if (request.message === 'odyseebuddycommand3') {
      scbt_user_command3();
    }
    if (request.message === 'odyseebuddycommand4') {
      scbt_user_command4();
    }
  }
});