
$(function(){

    $('#id').focus();

    const id = 'greencomputer';
    const pw = '1234';

    $('#btn_login').click(function(e){
        let userId = $('#id').val();
        let userPw = $('#pw').val();

        e.preventDefault();
        if(userId == id) {
            if(userPw == pw) {
                alert(id + '님 방문을 환영합니다.');
            } else {
                alert('비밀번호가 틀렸습니다.');
            }
        } else {
            alert('가입된 아이디가 없습니다.');
        };

        $('#id').val('').focus();
        $('#pw').val('');

    });
    

});




