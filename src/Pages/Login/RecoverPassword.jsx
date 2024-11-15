import './RecoverPassword.css'
const RecoverPassword = () => {
    return (
<nav>
    <head>
        <title>Space Delivery official wepside</title>
    </head>
    <body>
        <header>
            <div id="first">
                <table>
                    <thead>
                        <tr>                      
                            <th class="Uheader"><a href="">Support</a></th>
                            <th class="Uheader"><a href="">Account</a></th>
                            <th class="Uheader"><a href="">Shipment</a></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </header>
        <section>
            <div class="contendPassword">
                <h2>Password Recovery</h2>
                <p>Please enter your new password</p>
                <form action="/Database" method="post">
                    <table>
                        <tr>
                            <th><label for="NewPassword">New Password</label></th>
                            <th><label for="ConfirmPassword">Confirm Password</label></th>
                        </tr>
                        <tr>
                            <td><input id="NewPassword" type="password" name="NewPassword"/></td>
                            <td><input id="ConfirmPassword" type="password" name="ConfirmPassword" /></td>
                        </tr>
                    </table>
                    <div class="Continue">
                        <button type="submit"><a terget="_blank" href="">Continue</a></button>
                    </div>
                    <br></br>         
                </form>
            </div>
        </section><br></br>
        <footer>
            <div id="last">
                <p>Copyright 2024</p>
            </div>
        </footer>
    </body>
</nav>
    )
}
export default RecoverPassword;