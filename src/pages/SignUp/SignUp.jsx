

function SignUp() {
    return ( <div>
                <form action="" method="post" class="form" id="form-1">
            <h3 class="heading">Thành viên đăng ký</h3>
            <p class="desc">
                Cùng nhau học lập trình miễn phí tại F8 ❤️
            </p>

            <div class="spacer"></div>

            <div class="form-group">
                <label for="fullname" class="form-label">Tên đầy đủ</label>
                <input id="fullname" name="fullname" type="text" placeholder="VD: Thế Việt" class="form-control" />
                <span class="form-message"></span>
            </div>

            <div class="form-group">
                <label for="mail" class="form-label">Email</label>
                <input id="mail" name="mail" type="text" placeholder="VD: viet02092001@gmail.com" class="form-control" />
                <span class="form-message"></span>
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Mật khẩu</label>
                <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control" />
                <span class="form-message"></span>
            </div>

            <div class="form-group">
                <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
                <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Nhập lại mật khẩu" class="form-control" />
                <span class="form-message"></span>
            </div>

            <div class="form-group">
                <label for="gender" class="form-label">Giới tính</label>
                <div class="form-sex">
                    <div class="sex">
                        <label class="sex-m" for="">Nam</label>
                        <input name="gender" type="radio" value="male" class="form-control" />
                    </div>
                    <div class="sex">
                        <label class="sex-m" for="">Nữ</label>
                        <input name="gender" type="radio" value="female" class="form-control" />
                    </div>
                    <div class="sex">
                        <label class="sex-m" for="">Khác</label>
                        <input name="gender" type="radio" value="orther" class="form-control" />
                    </div>
                </div>
                <span class="form-message"></span>
            </div>

            <button class="form-submit">Đăng ký</button>
        </form>
    </div> );
}

export default SignUp;