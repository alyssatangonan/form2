function compare()
{
        var pass = document.getElementById('pass').value;
        var pass2 = document.getElementById('pass2').value;

        if (pass2==""){
            document.getElementById("passmsg").innerHTML = '';

        }else{
            if (pass2 !== pass){
                document.getElementById("passmsg").innerHTML = 'Passwords are not the same';
            } else if (pass2===pass){
                document.getElementById("passmsg").innerHTML = 'Passwords are same';

            }
        }
}

function checkemail(){
    var email = document.getElementById('email').value;
    if (email==""){
        document.getElementById("emailmsg").innerHTML = '';

    }else{
         if (email.includes("@")==true){
             document.getElementById("emailmsg").innerHTML = 'Mail is correct';
            } else {
             document.getElementById("emailmsg").innerHTML = 'Mail is wrong';
            }
        }

}

function checkpass(pass){
    var pass = document.getElementById('pass').value;
    var check=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;


    if (pass==""){
        document.getElementById("checkmsg").innerHTML = '';

    }else{
         if (pass.match(check)){
             document.getElementById("checkmsg").innerHTML = 'Strong';

            } else {
             document.getElementById("checkmsg").innerHTML = 'Weak';   
            }
        }


}

//ABCabc123@




