<template>
  <div class="home">
    <div class="back">
      <div class="container">
        <div>
          <h1 class="title">
            SHIFSHEL
          </h1>
          <h2>
            a
          </h2>
          <body>
            <!-- ログイン機能 -->
            <div id="form">
              <div class="login-links">
                <h3>
                  <div class="login">
                    <span style="font-size: 1.2em;"> ログイン</span>
                  </div>
                </h3>
                <h3>
                  <a
                    href="/register"
                    rel="noopener noreferrer"
                    class="register"
                  >
                    新規登録
                  </a>
                </h3>
              </div>
              <form action="post">
                <p>メールアドレス</p>
                <p class="mail"><input type="email" name="mail" /></p>
                <p>パスワード</p>
                <p class="pass"><input type="password" name="pass" /></p>
                <p class="check">
                  <input type="checkbox" name="checkbox" />パスワードを保存
                </p>
                <!-- <p class="submit"><input type="submit" value="ログイン" /></p> -->
                <a href="/home" class="login-button">
                  はじめる
                </a>
              </form>
            </div>
          </body>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #00897b;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 0;
  color: #fff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 777;
  font-size: 100px;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.back::before {
  /* 自由に位置指定 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  filter: brightness(90%);
  z-index: -1;
}

/* ここから下はログインフォームのデザイン */

body,
p,
form,
input {
  margin: 0;
}
#form {
  width: 400px;
  margin: 30px auto;
  padding: 20px;
}

form p {
  font-size: 14px;
}

.mail,
.pass {
  margin-bottom: 20px;
}

input[type='email'],
input[type='password'] {
  width: 350px;
  padding: 4px;
  font-size: 14px;
}

.submit {
  text-align: right;
}

/* font */
#form p {
  color: #077685;
  font-weight: bold;
}

#form .form-title {
  /* font-family: Arial; */
  font-size: 30px;
  color: #4eb4c2;
}

/* skin */
#form1 {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 1px 10px #488a9e;
  -moz-box-shadow: 1px 10px #488a9e;
  box-shadow: 1px 10px #488a9e;
  border: solid #4eb4c2 1px;
  background: #fafafa;
}

#form2 .form-title {
  padding-bottom: 6px;
  border-bottom: 2px solid #4eb4c2;
  margin-bottom: 20px;
}

/* ログインボタン  */

/* .submit input {
  color: #fff;
  font-size: 16px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  text-decoration: none;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 8px 6px #e3e3e3;
  -moz-box-shadow: 8px 6px #e3e3e3;
  box-shadow: 8px 6px #e3e3e3;
  border: solid #f5fdff 4px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#61c7e0), to(#418da8));
  background: -moz-linear-gradient(top, #61c7e0, #418da8);
  background: #00897b;
} */
/* ログインボタン */
.login-button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00675b;
  color: #fff;
  padding: 10px 30px;
  background-color: #00675b;
}
.submit input:hover {
  background: #37a4bf;
}

.login-links {
  padding: 20px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.login-links .login {
  display: inline;
  color: #077685;
  font-weight: bold;
}
.login-links .register {
  display: inline;
  color: #a0a0a0;
  font-weight: bold;
}
</style>
