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

        $('.modal_thumbnails').on(click,function() {
            $('#set_user_image').prop('disabled', false);    

            user_href = $('#user-id').prop('href');
            user_href_split = user_href.split('=');
            user_id = user_href_split[user_href_split.length - 1];

            img_src = $(this).prop('src');
            img_src_split = img_src.split('/');
            img_filename = img_src_split[img_src_split.length - 1];

            photo_id = $(this).attr('data');

            $.ajax({
                url: "includes/ajax_code.php",
                data: {
                    photo_id: photo_id
                },
                type: "POST",
                success: function(data) {
                    if(!data.error) {
                        $('#modal_sidebar').html(data);    
                    }
                }
            });

        });


        $('#set_user_image').click(function() {
            $.ajax({
                url: "includes/ajax_code.php",    
                data: {
                    img_filename: img_filename, 
                    user_id: user_id
                },
                type: "POST",
                success: function(data) {
                    if(!data.error) {
                        $('.user_img_box a img').prop('src', data);
    //                    console.log(data);
                    }
                }
            });
        });
    }());
    
    //Edit Photo sidebar
    (function() {
        $('.inside').hide();
        
        $('#toggle').click(function() {
            $('.inside').slideToggle('fast');    
            $(this).toggleClass('glyphicon-menu-up');
        });
    }());

    tinymce.init({ selector:'textarea' });
});


















