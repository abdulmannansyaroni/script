var numposts = 100;
var standardstyling = true;

/*  programmer and maker of this code is belong to founder of http://www.ardilas.com
    rawgit url (https://cdn.rawgit.com/D-dig/js/gh-pages/sitemap3.js)
*/

function startpost(json){
  for (var i = 100; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}
function finished(){
  document.write('<br /><br /><a href="https://bimbelwordpress.blogspot.com/p/kontak.html">Bimbel Wordpress</a>');
}
