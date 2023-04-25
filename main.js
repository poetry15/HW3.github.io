document.querySelector('.login_btn').onclick = login;
document.querySelector('.FB').onclick = FB_login;

function login(){
    alert("請確認登入!!!")
    setTimeout("location.href = 'next.html'",2000);
}

function FB_login() {
    alert("FB登入正在維修中，請輸入帳號與密碼")
}
