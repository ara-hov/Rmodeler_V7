$(document).ready(function () {
    // handle on click new file button
    $('#newFile').on('click', function (event) {
        $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside");
        var resetElementIds = [
            'desg', 'desg2','desg3', 'desgtext', 'desgtext2',
            'desgtext3', 'meantext', 'mediantext', 'mintext',
            'maxtext', 'sdtext', 'difftext', 'rangetext', 'sumtext',
            'cortext', 'regtext', 'foretext', 'summarytext','rtable','rtablecsv','msql','sqlsrvr','rtable1','rtable','readTableText','readTableText1'
        , 'rtablecsv1','pgsql','desg4'];
        var childEs = $('#desgdiv').find('*');

        $('.popupwindow').PopupWindow('open');
        $('#resetPlum').plumbReset();

        childEs.each(function () {
            var childEId = $(this).attr('id');
            if (resetElementIds.includes(childEId)){
                // console.log('mapping', childEId);
                $(this).css('visibility', 'hidden');
            }
        });
    })
});

//log div
/*$(document).ready(function () {
    // handle on click new file button
    $('#newFile').on('click', function (event) {
        $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside");
        var resetElementIds = [
            'printlink', 'printlink','stdoutlink', 'sourcelink', 'consolelink',
            'infolink', 'vallink', 'deslink','readlink'];
        var childEs = $('#logdiv').find('*');

        //$('.popupwindow').PopupWindow('open');
        //$('#resetPlum').plumbReset();



        childEs.each(function () {
            var childEId = $(this).attr('id');
            if (resetElementIds.includes(childEId)){
                // console.log('mapping', childEId);
                //$(this).css('visibility', 'hidden');
            }
        });
    })
});

//console div
$(document).ready(function () {
    // handle on click new file button
    $('#newFile').on('click', function (event) {
        $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside");
        var resetElementIds = [
            'output'];
        var childEs = $('#consolediv').find('*');

        $('.popupwindow').PopupWindow('open');
        $('#resetPlum').plumbReset();



        childEs.each(function () {
            var childEId = $(this).attr('id');
            if (resetElementIds.includes(childEId)){
                // console.log('mapping', childEId);
                $(this).css('visibility', 'hidden');
            }
        });
    })
});*/

//mean

                        $('#smean').dblclick(function()
                        {
                            $('#smean').css('display','none');
                            $('#meantext').css('visibility','visible');
                        });
                        
    //sqlite
    $('#sqlite').dblclick(function()
    {
        $('#desg').toggle().css('visibility','visible');
    });

    //mysql
    $('#mysql').dblclick(function()
    {
        $('#desg2').toggle().css('visibility','visible');
    });

//sqlserver
$('#sqlsrvr').dblclick(function()
{
    //$('#sqlsrvr').css('display','block');
    $('#desg3').toggle().css('visibility','visible');
});
//pgsql
$('#pgsql').dblclick(function()
{
    $('#desg4').toggle().css('visibility','visible');
});

//oracle
$('#oracle').dblclick(function()
{
    $('#desg5').toggle().css('visibility','visible');
});

//for sqlite read table
$(document).ready(function(){
    $("#rtable3").dblclick(function(){
        $("#readTableText3").toggle().css('visibility','visible');
    });
});

//for mysql read table
$(document).ready(function(){
    $("#rtable").dblclick(function(){
        $("#readTableText").toggle().css('visibility','visible');
    });
});
//for mysql insert csv
$(document).ready(function(){
    $("#rtablecsv").dblclick(function(){
        $("#readTblText").toggle().css('visibility','visible');
    });
});

//for sqlserver read table
$(document).ready(function(){
    $("#rtable1").dblclick(function(){
        $("#readTableText1").toggle().css('visibility','visible');
    });
});

//for data.frame
$('#dataframetext').dblclick(function()
    {
        $('#dfText').toggle().css('visibility','visible');
    });

//pgsql readtable
$(document).ready(function(){
    $("#rtable2").dblclick(function(){
        $("#readTableText2").toggle().css('visibility','visible');
    });
});

//oracle read table
$(document).ready(function(){
    $("#rtable4").dblclick(function(){
        $("#readTableText4").toggle().css('visibility','visible');
    });
});

//for pgsql insert csv
$(document).ready(function(){
    $("#rtablecsv1").dblclick(function(){
        $("#readTblText1").toggle().css('visibility','visible');
    });
});

//for SQLite insert csv
$(document).ready(function(){
    $("#rtablecsv2").dblclick(function(){
        $("#readTblText2").toggle().css('visibility','visible');
    });
});