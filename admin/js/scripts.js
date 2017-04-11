$(document).ready(function() {

    //Edit User Photo Modal
    (function() {
        var user_href;
        var user_href_split;
        var user_id;

        var img_src;
        var img_src_split;
        var img_filename;

        var photo_id;



        $(".modal_thumbnails").click(function(){

        $("#set_user_image").prop('disabled', false);

        $(this).addClass('selected');
        user_href = $("#user-id").prop('href');

        user_href_splitted = user_href.split("=");
        user_id = user_href_splitted[user_href_splitted.length -1];


        image_src = $(this).prop("src");
        image_href_splitted = image_src.split("/");
        image_name = image_href_splitted[image_href_splitted.length -1];

        photo_id = $(this).attr("data");




        // photo_id = $(this).attr("data");


        $.ajax({
            url: "includes/ajax_code.php",
            data:{photo_id:photo_id},
            type: "POST",
            success:function(data) {
                if(!data.error) {
            
                $("#modal_sidebar").html(data); 
                }
            }

        }); //ajax

 
    }); // modal

        // /*************Edit Photo side bar************/



$(".info-box-header").click(function(){


$(".inside").slideToggle("fast");

$("#toggle").toggleClass("glyphicon-menu-down glyphicon , glyphicon-menu-up glyphicon ");



});



        $('#set_user_image').click(function() {

            $.ajax({
                url: "includes/ajax_code.php",    
                data: {
                    image_name: image_name, 
                    user_id: user_id
                },
                type: "POST",
                success: function(data) {
                    if(!data.error) {
                        $('.user_img_box a img').prop('src', data);
                        // alert(data);
                        // location.reload(true);
                       // console.log(data);
                    }
                }
            });
        });
    }());
    
    /***********Delete Functio***********/


$(".delete_link").click(function(){

return confirm("Are you sure you want to delete this item");

});
    

    tinymce.init({ selector:'textarea' });
});


















