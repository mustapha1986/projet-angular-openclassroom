

export class AuthService {

    isAuth = false;

    signeIn() {
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                this.isAuth = true;
                resolve(true);
            }, 3000)
        })
    }

    signOut() {
        this.isAuth = false;
    }

}