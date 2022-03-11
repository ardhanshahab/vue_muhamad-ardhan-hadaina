class user {
    var id;
    var username;
    var password;
}

function userservice () {
    user[] users = [];
    
    user[] getallusers() {
        return this.users;
    }

    usergetuserbyid(userid) {
        return this.users.filter(userid);
    }
}

/*
kalo di vs code ada 8 problem
seperti kurang pendeklarasian dan statement
kurang ;
dan yang lainnya
class user tidak memakai constructor
Kurang this saat pemanggilan
menduplikasi kode 
menurut saya penggunaan class nya kurang tepat
lebih baik diganti oleh function atau tidak dipakai sama sekali


*/