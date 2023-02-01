

$(function(){

    $('#user_id').focus();

    const idData = ['greencomputer', 'redcomputer', 'bluecomputer', 'yellowcomputer', 'blackcomputer'];
    let userId = '';



    $('#btn_id').click(function(e){
        e.preventDefault();

        userId = $('#user_id').val();

        for(let i in idData) {
    
            if(userId == idData[i]) {
                $('#id_no').css('display', 'block');
                $('#id_pass').css('display', 'none');
                $('#user_id').val('').focus();
                break;
            } else if (i == 4) {
                $('#id_pass').css('display', 'block');
                $('#id_no').css('display', 'none');
                $('#user_pw').focus();
            }
        }
    })


    $('#user_pw, #user_pw_chk').focusout(function(){

        let userPw = $('#user_pw').val();
        let pwChek = $('#user_pw_chk').val(); 

        if(userPw == pwChek) {
            $('#txt_chk').css('display', 'none');
        } else {
            $('#txt_chk').css('display', 'block');
        };
            
    })

    $('#email_select').change(function(){
        $('#email').val($(this).val());
        $('#email').focus(function(){
            $('#email').val('');
        })
    })
    

});