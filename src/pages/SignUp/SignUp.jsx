import './SignUp.css'

function SignUp() {
    return ( <div className='wrapper'>
            <form action="" method="post" className="form" id="form-1">
            <h3 className="heading">Create new Account</h3>
            <p className="desc">
                Hi My Friends
            </p>

            <div className="spacer"></div>

            <div className="form-group">
                <label for="fullname" className="form-label">Full name</label>
                <input id="fullname" name="fullname" type="text" placeholder="VD: Nguyen A" className="form-control" />
                <span className="form-message"></span>
            </div>

            <div className="form-group">
                <label for="mail" className="form-label">Email</label>
                <input id="mail" name="mail" type="text" placeholder="VD: NguyenA@gmail.com" className="form-control" />
                <span className="form-message"></span>
            </div>

            <div className="form-group">
                <label for="password" className="form-label">Password</label>
                <input id="password" name="password" type="password" placeholder="Password" className="form-control" />
                <span className="form-message"></span>
            </div>

            <div className="form-group">
                <label for="password_confirmation" className="form-label">Password Again</label>
                <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Nhập lại mật khẩu" className="form-control" />
                <span className="form-message"></span>
            </div>

            <div className="form-group">
                <label for="gender" className="form-label">Sex</label>
                <div className="form-sex">
                    <div className="sex">
                        <label className="sex-m" for="">Male</label>
                        <input name="gender" type="radio" value="male" className="form-control" />
                    </div>
                    <div className="sex">
                        <label className="sex-m" for="">Female</label>
                        <input name="gender" type="radio" value="female" className="form-control" />
                    </div>
                    <div className="sex">
                        <label className="sex-m" for="">Other</label>
                        <input name="gender" type="radio" value="orther" className="form-control" />
                    </div>
                </div>
                <span className="form-message"></span>
            </div>

            <button className="form-submit">Sign Up</button>
        </form>
    </div> );
}

export default SignUp;