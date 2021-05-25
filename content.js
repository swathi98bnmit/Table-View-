//#region Listeners

// Establish a long-lived connection when the extension icon is clicked
chrome.runtime.onConnect.addListener(openModal);

//#endregion

//#region Function to open modal
function openModal(port) {

    // Throws error in the console if port name is not correct
    console.log(`content_script: ${port.sender.Tab}`);

    port.onMessage.addListener(request => {

        // If action is openModal
        if (request.action == "openModal") {
            
            let modal = document.querySelector('#modalMenu');
            let body = document.querySelector('body');

            if (!modal) {
                body.insertBefore(UI.modalMenu(), body.firstChild);

                // Listener for the add tag while port is open using event delegation
                document.querySelector('body').addEventListener('keydown', addTag);
                
                var col = document.getElementsByClassName('collapsible');
                collapse(col);
                //new code swathi suraksha for sorting table
                document.getElementById('myButton1').addEventListener('click', sortTable);


                //new code swathi suraksha for implementing search function
                document.getElementById('mytable').addEventListener('change', myFunction);

                

                var table = document.getElementsByTagName('table')[0];
                resizableGrid(table);
                // SUSHIL - Code for toggling the brand column
                document.getElementById('brand_col').addEventListener('change', toggleBrandColumn);
                document.getElementById('price_col').addEventListener('change', togglePriceColumn);
                document.getElementById('model_col').addEventListener('change', toggleModelColumn);
                document.getElementById('delivery_col').addEventListener('change', toggleDeliveryColumn);
                document.getElementById('specf_col').addEventListener('change', toggleSpecfColumn);
                


                //increase font size
                document.getElementById('myButton2').addEventListener('click', increase_size);

                

                  
                // Listener for when the submit button is pressed and to send the tags to background script
                document.querySelector('body').addEventListener('click', (e) => {
                    if (e.target.id == 'tagBtn') {
                        let tags = [];
                
                        // retrieve the tag elements
                        let el = document.querySelectorAll('.chip');
                        if (el.length != 0) {
                            el.forEach((node) => {
                
                                // get the text content of the tag
                                let tag = node.textContent;
                
                                // get rid of the trailing x
                                tag = tag.substring(0, tag.length - 1);
                
                                // push tag to the array
                                tags.push(tag)
                                
                            });

                        // send the tags array
                        port.postMessage({tags: JSON.stringify(tags)});

                        // close modal
                        UI.closeMenu();

                        // disconnect port
                        port.disconnect();
                        }
                    }
                });
            }
            else {
                // on click, if modal already exists, toggle display to none
                modal.classList.toggle('toggleMenu');
            }
        }
    });
}
//#endregion

//#region Function to create tag to the UI
function addTag(e) {

    // if the target is on the input of the modal and if enter is pressed
    if (e.target.id == 'addTag' && e.which == 13 || e.keyCode == 13) {

        if (e.target.value != '') {

            // pass the input to the UI
            let chip = UI.addTag(e, e.target.value);

            // clear input field
            e.target.value = '';

            // add the element to the modal
            document.querySelector('.tags').appendChild(chip);
        }

        e.preventDefault();
    }
}
//#endregion

//#region DEFUNCT Function to retrieve tags from the UI
function getTags(e) {

    if (e.target.id == 'tagBtn') {

        let tags = [];

        // retrieve the tag elements
        let el = document.querySelectorAll('.chip');

        if (el.length != 0) {
            el.forEach((node) => {

                // get the text content of the tag
                let tag = node.textContent;

                // get rid of the trailing x
                tag = tag.substring(0, tag.length - 1);

                // push tag to the array
                tags.push(tag)
                
            });
        }
        // return tags array
        return tags;
    }
}
//#endregion
function collapse(coll){
    var i;
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }


}

// swathi suraksha - function to sort table
function sortTable()
{
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mytable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}



// swathi suraksha -function to implement search
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// SUSHIL - Function called to toggle brand column
function toggleBrandColumn() {
    var isChecked = document.getElementById("brand_col").checked;
    var colBrandNameHeader = document.getElementById('brand_col_head');
    var allCells = document.getElementsByClassName('brand_col');

    if (!isChecked) {
        colBrandNameHeader.style.display = 'none';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = 'none';
        }
    }
    else {
        colBrandNameHeader.style.display = '';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = '';
        }
    }
}  

// SUSHIL - Function called to toggle price column
function togglePriceColumn() {
    var isChecked = document.getElementById("price_col").checked;
    var colPriceHeader = document.getElementById('price_col_head');
    var allCells = document.getElementsByClassName('price_col');

    if (!isChecked) {
        colPriceHeader.style.display = 'none';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = 'none';
        }
    }
    else {
        colPriceHeader.style.display = '';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = '';
        }
    }
}  

// SUSHIL - Function called to toggle model column
function toggleModelColumn() {
    var isChecked = document.getElementById("model_col").checked;
    var colModelHeader = document.getElementById('model_col_head');
    var allCells = document.getElementsByClassName('model_col');

    if (!isChecked) {
        colModelHeader.style.display = 'none';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = 'none';
        }
    }
    else {
        colModelHeader.style.display = '';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = '';
        }
    }
}  

// SUSHIL - Function called to toggle delivery column
function toggleDeliveryColumn() {
    var isChecked = document.getElementById("delivery_col").checked;
    var colModelHeader = document.getElementById('delivery_col_head');
    var allCells = document.getElementsByClassName('delivery_col');

    if (!isChecked) {
        colModelHeader.style.display = 'none';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = 'none';
        }
    }
    else {
        colModelHeader.style.display = '';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = '';
        }
    }
}  


// SUSHIL - Function called to toggle specification column
function toggleSpecfColumn() {
    var isChecked = document.getElementById("specf_col").checked;
    var colModelHeader = document.getElementById('specf_col_head');
    var allCells = document.getElementsByClassName('specf_col');

    if (!isChecked) {
        colModelHeader.style.display = 'none';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = 'none';
        }
    }
    else {
        colModelHeader.style.display = '';
        for (var i = 0; i < allCells.length; i++) {
            allCells[i].style.display = '';
        }
    }
}  

//Suraksha code for column resize
function resizableGrid(e){
    var t=e.getElementsByTagName("tr")[0],n=t?t.children:void 0;if(n){e.style.overflow="hidden";for(var i=e.offsetHeight,o=0;o<n.length;o++){var r=s(i);n[o].appendChild(r),n[o].style.position="relative",d(r)}}function d(e){var t,n,i,o,r;e.addEventListener("mousedown",function(e){n=e.target.parentElement,i=n.nextElementSibling,t=e.pageX;var d=function(e){if("border-box"==l(e,"box-sizing"))return 0;var t=l(e,"padding-left"),n=l(e,"padding-right");return parseInt(t)+parseInt(n)}(n);o=n.offsetWidth-d,i&&(r=i.offsetWidth-d)}),e.addEventListener("mouseover",function(e){e.target.style.borderRight="2px solid #0000ff"}),e.addEventListener("mouseout",function(e){e.target.style.borderRight=""}),document.addEventListener("mousemove",function(e){if(n){var d=e.pageX-t;i&&(i.style.width=r-d+"px"),n.style.width=o+d+"px"}}),document.addEventListener("mouseup",function(e){n=void 0,i=void 0,t=void 0,r=void 0,o=void 0})}function s(e){var t=document.createElement("div");return t.style.top=0,t.style.right=0,t.style.width="5px",t.style.position="absolute",t.style.cursor="col-resize",t.style.userSelect="none",t.style.height=e+"px",t}function l(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}}



function increase_size() {
    document.getElementById("mytable").style.fontSize = "large";
  }