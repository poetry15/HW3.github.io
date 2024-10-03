# Web程式設計 HW3 詐欺遊戲-釣魚網站

# 目標網站— IG登入頁面

**目標網址**：[https://www.instagram.com/accounts/login/](https://www.instagram.com/accounts/login/)

                           目標畫面

![Untitled](Readme/Untitled.png)

                            完成畫面

![Untitled](Readme/Untitled%201.png)

## 與目標網站的差異

- 因為釣魚通常注重在登入的方面，故 註冊、忘記密碼和下載應用程式並沒有做出來
- 文字格式差了一點
- 整體的版面較目標網站的版面小

## 程式碼介紹

- 整體框架
    - 畫出位於畫面中心的格子
    
    ![Untitled](Readme/Untitled%202.png)
    
    CSS
    
    ```css
    .column {
        align-items: center;
        background-color: rgb(255,255,255);
        border: 1px solid rgb(219,219,219);
        display: flex;
        flex-direction: column;
        font-size: 100%;
        margin-top: 80px;
    }
    
    .block {
        color: rgb(0,0,0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 350px;
        width: 100%;
        margin: auto;
    }
    ```
    
- IG的logo
    - 因為原始圖並不是只有我們要的這個白底黑字的logo，所以需要創一個div讓原始圖變成背景照片
    - 這邊不能直接<img src>
        
        
    
    成品圖
    
    ![Untitled](Readme/Untitled%203.png)
    
                                  原始圖
    
    ![logo.png](Readme/logo.png)
    
    HTML
    
    ```html
    <div class="img"></div>
    ```
    
    CSS
    
    ```css
    .img {
        background-position: 0 -52px;
        width: 175px;
        height: 51px;
        background-repeat: no-repeat;
        display: inline-block;
        background-image: url("logo.png");
        margin-top: 32px;
    }
    ```
    
- 帳號&密碼
    - 與頂部間隔，並且帳號與密碼之間有需間隔
    
    ![Untitled](Readme/Untitled%204.png)
    
    HTML
    
    ```html
    <div class="data">
                <label class="input">
                    <span class = "hint">手機號碼、用戶名稱或電子郵件地址</span>
                    <input type="text" id="login" name="login" value>
                </label>
                <label class="input">
                    <span class = "hint">密碼</span>
                    <input type="password" id="password" name="password" value>
                </label>
            </div>
    
    ```
    
    CSS
    
    ```css
    .data {  /*與頂部間隔*/
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .input { /*設格子*/
        margin: 0 40px 6px;
        border: 0;
        display: flex;
        flex: 1 0 0;
        font: inherit;
        font-size: 100%;
        height: 36px;
        min-width: 0;
        position: relative;
        vertical-align: baseline;
    }
    
    .hint { /*提醒輸入帳號and密碼*/
        color: rgb(115,115,155);
        font-size: 13px;
        height: 36px;
        left: 8px;
        line-height: 36px;
        margin: 0;
        overflow: hidden;
        position: absolute;
        transform-origin: left;
        transform: scale(calc(10 / 12)) translateY(-10px); /*提醒字樣偏左上*/
    }
    
    input[type="text"] , input[type="password"]{ /*將要輸入時的格子設定*/
        border-top: 1px solid rgb(219,219,219);
        border-bottom: 1px solid rgb(219,219,219);
        border-left: 1px solid rgb(219,219,219);
        border-right: 1px solid rgb(219,219,219);
        outline: none;
        font-size: 17px;
        padding: 14px 0 2px 8px;
    }
    ```
    
- 登入按鈕
    - 輸入帳號與密碼後，先讓用戶確認登入(先確認要不要被騙)，2秒後跳轉頁面
    
    ![Untitled](Readme/Untitled%205.png)
    
    HTML
    
    ```html
    <button class="login_btn" type="submit">登入</button>
    ```
    
    CSS
    
    ```css
    
    .login_btn {
        background-color: rgba(0,149,246);
        color: rgb(255,255,255);
        border-radius: 8px;
        opacity: .7;
        position: relative;
        border: none;
        box-sizing: border-box;
        width: 219px;
        padding: 7px 16px;
        margin-bottom: 8px;
        cursor: pointer;
        font-weight: 600;
    }
    
    .login_btn:hover { /*游標在按鈕上時*/
        background-color: rgba(24,119,242);
    }
    ```
    
    Javascript
    
    ```jsx
    document.querySelector('.login_btn').onclick = login;
    
    function login(){
        alert("請確認登入!!!")
        setTimeout("location.href = 'next.html'",2000);
    }
    ```
    
    - 跳轉後頁面
        
        ![Untitled](Readme/Untitled%206.png)
        
- —或—
    - 分隔線
        
        ![Untitled](Readme/Untitled%207.png)
        
    
    HTML
    
    ```html
    <div class="line_box">
      <div class="line"></div> 
      <div class="or">或</div>
      <div class="line"></div>
    </div>
    ```
    
    CSS
    
    ```css
    .line_box { /*間隔*/
        display: flex;
        flex-direction: row;
        margin: 10px 40px 18px;
    }
    .line { /*畫出分隔線*/
        top: 0.45em;
        flex-shrink: 1;
        height: 1px;
        width: 80px;
        position: relative;
        flex-grow: 1;
        background-color: rgb(219,219,219);
    }
    
    .or { /*'或'要放中間*/
        display: flex;
        margin-right: 18px;
        margin-bottom: 0;
        flex-direction: column;
        margin-left: 18px;
        font-size: .8125rem;
        align-items: stretch;
    }
    ```
    
- FB登入
    - 仿照目標網站，但不會通到FB登入
    - 會強制要你輸入帳號與密碼
    
    ![Untitled](Readme/Untitled%208.png)
    
    HTML
    
    ```html
    <button class="FB" type="button">
      <span class="logo"></span>
      <span style="color: #385185">使用 Facebook 帳號登入</span>
    </button>
    ```
    
    CSS
    
    ```css
    .FB {
        background: none;
        border: none;
        cursor: pointer;
        color: rgb(0,149,246);
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 15px;
    }
    
    .logo { /*跟ig的logo圖案一樣的作法*/
        background-image: url("FB.png");
        background-repeat: no-repeat;
        background-position: -414px -259px;
        height: 16px;
        width: 16px;
        display: inline-block;
        font: inherit;
        font-size: 100%;
        margin-right: 8px;
        padding: 0;
        position: relative;
        top: 3px;
        vertical-align: baseline;
    }
    
    /*依裝置大小調整FB的logo*/
    @media (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) { 
        .logo {
            background-size: 440px 411px;
            background-position: -347px -329px;
        }
    }
    ```
    
    javascript
    
    ```jsx
    document.querySelector('.FB').onclick = FB_login;
    
    function FB_login() {
        alert("FB登入正在維修中，請輸入帳號與密碼")
    }
    ```
