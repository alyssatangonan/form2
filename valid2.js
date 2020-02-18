function compare()
{
        var pass = document.getElementById('pass').value;
        var pass2 = document.getElementById('pass2').value;
        
        if (pass2 !== pass)
        {
                document.getElementById('pass').innerHTML = 'Passwords are not the same';
        }
        else
        {
                document.getElementById('pass').innerHTML = 'Passwords are same';
        }
}
/*
function validate(pass)
{
    var pass = document.getElementById('pass').value;
        var pass2 = document.getElementById('pass2').value;
    if (pass.length === 0) {
        document.getElementById("pass").innerHTML = "";
        return;
    } 
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pass)) {
            ctr++;
        }
    }
    // Display it
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            break;
        case 3:
            strength = "Medium";
            break;
        case 4:
            strength = "Strong";
            break;
    }
    document.getElementById("msg").innerHTML = strength;

}




