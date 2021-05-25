let list = ['file','share','new','documentnew','fromtemplate','spreadsheet','presentation','form','drawingnew','open','makeacopy','email','download','makeavailableoffline','versionhistory','rename','move','addshortcuttodrive','movetotrash','publishtotheweb','documentdetails','language','pagesetup','printfile','edit','undoedit','redoedit','cut','copy','paste','pastewithoutformatting','delete','selectall','findandreplace','view','printlayout','mode','showruler','showdocumentoutline','showequationtoolbar','showsectionbreaks','fullscreen','insert','image','table','drawing','chart','horizontalline','footnote','specialcharacters','equation','headersandfooters','pagenumbers','break','link','comment','bookmark','tableofcontents','format','text','paragraphstyles','alignandindent','linespacing','columns','bulletsandnumbering','headersandfootersformat','pagenumbersformat','tableformat','imageformat','clearformattingformat','bordersandlines','tools','spellingandgrammar','wordcount','reviewsuggestededits','comparedocuments','citations','explore','linkedobjects','dictionary','translatedocument','voicetyping','scripteditor','preferences','accessibilitysettings','addons','documentaddons','getaddons','manageaddons','help','docshelp','training','updates','helpdocsimprove','reportabusecopyright','privacypolicy','termsofservice','keyboardshortcuts','accessibility','speak','comments','footnoteaccess','headings','graphics','listaccess','linkaccess','tableaccess','sectionaccess','misspelling','formattingaccess','showliveedits','undo','redo','print','spellingandgrammarcheck','paintformat','zoom','fit','50','75','90','100','125','150','styles','normal','title','subtitle','heading1','heading2','heading3','font','amaticsc','arial','caveat','comfortaa','comicsansms','couriernew','ebgaramond','georgia','impact','lobster','lora','merriweather','montserrat','nunito','oswald','pacifico','playfairdisplay','roboto','robotomono','spectral','timesnewroman','trebuchetms','verdana','fontsizedecrement','fontsize','fontsizeincrement','bold','italics','underline','textcolor','black','darkgray4','darkgray3','darkgray2','darkgray1','grey','lightgrey1','lightgrey2','lightgrey3','white','redberry','red','orange','yellow','green','cyan','cornflowerblue','blue','purple','magenta','lightredberry3','lightred3','lightorange3','lightyellow3','lightgreen3','lightcyan3','lightcornflowerblue3','lightblue3','lightpurple3','lightmagenta3','lightredberry2','lightred2','lightorange2','lightyellow2','lightgreen2','lightcyan2','lightcornflowerblue2','lightblue2','lightpurple2','lightmagenta2','lightredberry1','lightred1','lightorange1','lightyellow1','lightgreen1','lightcyan1','lightcornflowerblue1','lightblue1','lightpurple1','lightmagenta1','darkredberry1','darkred1','darkorange1','darkyellow1','darkgreen1','darkcyan1','darkcornflowerblue1','darkblue1','darkpurple1','darkmagenta1','darkredberry2','darkred2','darkorange2','darkyellow2','darkgreen2','darkcyan2','darkcornflowerblue2','darkblue2','darkpurple2','darkmagenta2','darkredberry3','darkred3','darkorange3','darkyellow3','darkgreen3','darkcyan3','darkcornflowerblue3','darkblue3','darkpurple3','darkmagenta3','bgcolor','tblack','tdarkgray4','tdarkgray3','tdarkgray2','tdarkgray1','tgrey','tlightgrey1','tlightgrey2','tlightgrey3','twhite','tredberry','tred','torange','tyellow','tgreen','tcyan','tcornflowerblue','tblue','tpurple','tmagenta','tlightredberry3','tlightred3','tlightorange3','tlightyellow3','tlightgreen3','tlightcyan3','tlightcornflowerblue3','tlightblue3','tlightpurple3','tlightmagenta3','tlightredberry2','tlightred2','tlightorange2','tlightyellow2','tlightgreen2','tlightcyan2','tlightcornflowerblue2','tlightblue2','tlightpurple2','tlightmagenta2','tlightredberry1','tlightred1','tlightorange1','tlightyellow1','tlightgreen1','tlightcyan1','tlightcornflowerblue1','tlightblue1','tlightpurple1','tlightmagenta1','tdarkredberry1','tdarkred1','tdarkorange1','tdarkyellow1','tdarkgreen1','tdarkcyan1','tdarkcornflowerblue1','tdarkblue1','tdarkpurple1','tdarkmagenta1','tdarkredberry2','tdarkred2','tdarkorange2','tdarkyellow2','tdarkgreen2','tdarkcyan2','tdarkcornflowerblue2','tdarkblue2','tdarkpurple2','tdarkmagenta2','tdarkredberry3','tdarkred3','tdarkorange3','tdarkyellow3','tdarkgreen3','tdarkcyan3','tdarkcornflowerblue3','tdarkblue3','tdarkpurple3','tdarkmagenta3','insertlink','addcomment','insertimage','uploadfromcomputer','searchtheweb','drive','photos','byurl','camera','leftalign','centeralign','rightalign','justify','linespacing','numberedlist','bulletedlist','decreaseindent','increaseindent','clearformatting'];

function Button(id) {
  var element = document.getElementById(id);
  element.onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
		code: 'var config = ' + JSON.stringify(id)
		}, function() {
			chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
		});
    });
  }
}
function runSwitchjs() {
	chrome.tabs.executeScript({
	  file: 'switch.js'
	});
  }
  
document.getElementById('clickme').addEventListener('click', runSwitchjs);

for (var i = 0; i < list.length; i++) {
	new Button(list[i]);
}


