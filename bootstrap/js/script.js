jQuery(document).ready(function($){
    $(document).on('click', '.min', function(){
        $(this).closest('.modal').find('.content').slideUp();
        $(this).closest('.modal').animate({'bottom':0});
        $(this).closest('.modal').animate({'width':'203px','height':'6%'},"fast");
    });

    $(document).on('click', '.max', function(){
        $(this).closest('.modal').find('.content').slideDown();
        $(this).closest('.modal').animate({'bottom':'10%'});
        $(this).closest('.modal').animate({'width':'99%' ,'height':'80%'},"fast");
    });
});


//2nd window

jQuery(document).ready(function($){
    $(document).on('click', '.minn', function(){
        $(this).closest('.modall').find('.contentt').slideUp();
        $(this).closest('.modall').animate({'bottom':0});
        $(this).closest('.modall').animate({'left':'13.3%','width':'204px','height':'6%'},"fast")
    });

    $(document).on('click', '.maxx', function(){
        $(this).closest('.modall').find('.contentt').slideDown();
        $(this).closest('.modall').animate({'bottom':'10%'});
        $(this).closest('.modall').animate({'width':'99%','left':'2px','height':'80%'},"fast");
    });
});

//3rd window
jQuery(document).ready(function($){
    $(document).on('click', '.minnn', function(){
        $(this).closest('.modalll').find('.contenttt').slideUp();
        $(this).closest('.modalll').animate({'bottom':0});
        $(this).closest('.modalll').animate({'left':'26.5%','width':'204px','height':'6%'},"fast");
    });

    $(document).on('click', '.maxxx', function(){
        $(this).closest('.modalll').find('.contenttt').slideDown();
        $(this).closest('.modalll').animate({'bottom':'10%'});
        $(this).closest('.modalll').animate({'width':'99%','left':'2px','height':'80%'},"fast");
    });
});


/* Loop through all dropdown buttons to toggle between hiding and
 showing its dropdown content -
 This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//file upload
/*window.onload = function () {
    var fileupload = document.getElementById("FileUpload1");
    var filePath = document.getElementById("spnFilePath");
    var button = document.getElementById("btn1");
    button.onclick = function () {
        fileupload.click();
    };
    fileupload.onchange = function Upload() {
        var fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
        filePath.innerHTML = "<b>Selected File: </b>" + fileName;
        var fileUpload = document.getElementById("FileUpload1");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt|.)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var row = table.insertRow(-1);
                        var cells = rows[i].split(",");
                        for (var j = 0; j < cells.length; j++) {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];
                        }
                    }
                    var dvCSV = document.getElementById("spnFilePath");
                    dvCSV.innerHTML = "";
                    dvCSV.appendChild(table);

                };
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        }
    };
};

//upload

// for dragging and dropping
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ','
        + (parseInt(style.getPropertyValue("top"),10) - event.clientY));

}
function drag_over(event) {
    event.preventDefault();


    return false;


}
function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    event.target.appendChild(document.getElementById("btn1"));
    var dm = document.getElementById('btn1');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();


    return false;
}
var dm = document.getElementById('btn1');
dm.addEventListener('dragstart',drag_start,false);
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false);
*/

//resize
var id;
$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);

});

function doneResizing(){
    $(".modal").append("<br/>");
}

//for sidebar

function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
}
function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
}

//nav bar dropdown
var dropdownn= document.getElementsByClassName("dropdownn");
var i;

for (i = 0; i < dropdownn.length; i++) {
    dropdownn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//close  input-files
window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
            .removeChild(this.parentNode.parentNode);
        return false;
    };
};

//form open
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//form open2
function openForm2() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}

//form open3
function openForm3() {
    document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
}
function closeFormi() {
    document.getElementById("btn1").style.display = "none";
    fileupload.close();
}
var Window;
function closeRightMenu(){
    window.close();
}
/*/function closeWindow() {
    window.open('','_parent','');
    window.close();
}
*/




//
//
//google.load("jquery", "1.4.2");
//        google.load("jqueryui", "1.7.2");
//
//
//          function closeFormi() {
//            document.getElementById("btn1").style.display = "none";
//            close.window();
//        }
            



//        $(document).ready(function(){
//            //Counter
//            counter = 0;
//            //Make element draggable
//            $(".drag").draggable({
//                helper:'clone',
//                containment: 'frame',
//            
//            
//                //When first dragged
//                stop:function(ev, ui) {
//                    var pos=$(ui.helper).offset();
//                    objName = "#clonediv"+counter
//                    $(objName).css({"left":pos.left,"top":pos.top});
//                    $(objName).removeClass("drag");
//    
//    
//                       //When an existiung object is dragged
//                    $(objName).draggable({
//                        containment: '#frame',
//                        stop:function(ev, ui) {
//                            var pos=$(ui.helper).offset();
//                            console.log($(this).attr("id"));
//                            console.log(pos.left)
//                            console.log(pos.top)
//                            
//                        }
//                    });
//                }
//            });
//            //Make element droppable
//            $("#frame").droppable({
//                drop: function(ev, ui) {
//                    if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
//                        counter++;
//                        var element=$(ui.draggable).clone();
//                        element.addClass("tempclass");
//                        $(this).append(element);
//                        
///*$(".drag").append("#w1");*/
//
//                        $(".tempclass").attr("id","clonediv"+counter);
//                        $("#clonediv"+counter).removeClass("tempclass");
//    
//                        //Get the dynamically item id
//                        draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
//                        itemDragged = "dragged" + RegExp.$1
//                        console.log(itemDragged)
//    
//                        $("#clonediv"+counter).addClass(itemDragged);
//                    }
//                }
//            });
//        });
        