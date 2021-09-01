class Bank {
    createAccount() {
        let person_name = fname.value;
        // let DOB=dob.value;
        // let guardian_name=gname.value;
        // let address=exaampleFormControlTextarea1.value;
        // let pin_code=pin.value;
        // let email_id=emailid.value;
        // let mobile_number=mob.value;
        let acc_type = ac_type.value;
        let acc_no = ac_no.value;
        let balance = bal.value;
        let username = uname.value;
        let password = pwd1.value;
        // let confirm_password=pwd1.value;

        // let user={person_name, DOB, guardian_name, address, pin_code, email_id, mobile_number, acc_type, acc_no, balance, username, password, confirm_password}

        let user = { person_name, acc_type, acc_no, balance, username, password }

        localStorage.setItem(acc_no, JSON.stringify(user));
        alert(`Account with A/C No ${acc_no} is Created Successfully`);
        location.href = "index.html"
    }

    authenticate() {
        let acc_no = ac_no.value;
        // let username = uname.value;
        let password = pwd1.value;
        if (acc_no in localStorage) {
            let user = JSON.parse(localStorage.getItem(acc_no))
            // with username
            // if (user.username == username && user.password == password) {

            // without username
            if (user.password == password) {
                // console.log(`Login Success`);
                alert("Login Success. Welcome to FedBank")
                sessionStorage.setItem(acc_no, JSON.stringify(user))
                location.href = "bankappUser.html"
            }
            else {
                // console.log(`Invalid Credentials`);
                alert("Invalid Credentials")
            }
        }
        else {
            // console.log(`Invalid Account Number`);
            alert("Invalid Account Number")
        }
    }
    logOut() {
        sessionStorage.clear()
        location.href = "index.html"
    }
    balEnq() {
        let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Available Balance is ${user.balance}`);
        // let html_data=`<div class="row bg-dark text-white">
        // <div class="col-8"><h6>Your Account Balance is: </h6></div>
        // <div class="col-4"><h6>${user.balance}</h6></div>
        // </div>`;
        // displaydiv.innerHTML=html_data;
    }
    fundTransfer() {
        let to_acc = toacc.value;
        let amount = amt.value;
        if (to_acc in localStorage) {
            let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            if (user.balance >= amount) {
                let user1 = JSON.parse(localStorage.getItem(to_acc))
                let user2 = JSON.parse(localStorage.getItem(user.acc_no))               
                user1.balance = Number(user1.balance)+Number(amount);
                user2.balance -= amount;
                user.balance -= amount;
                localStorage.setItem(user1.acc_no, JSON.stringify(user1))
                localStorage.setItem(user2.acc_no, JSON.stringify(user2))
                sessionStorage.setItem(user.acc_no, JSON.stringify(user))
                alert(`Fund Transfered Successfully`)
            }
            else {
                alert(`Insuffient Balance.`)
            }
        }
        else {
            alert(`Invalid Account Number`)
        }
    }
}

var bank = new Bank();