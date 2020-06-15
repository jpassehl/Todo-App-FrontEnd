class AuthenticationService{
    /* For ReactComponents, we export the class directly. For helper services, we export and instance of the class (an object) */ 

    registerSucessfulLogin(username,password){
    /* register the fact that a user has logged in. Put a value in the session storage. Data stroed in localStorage has no expiration time. Data
    stored in SessionStorage gets cleared when the page session ends*/

        console.log('method registerSucessfulLogin has been called');
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(username,password){

        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedin(){
        let  user = sessionStorage.getItem('authenticatedUser');
        if(user==null){ 
            return false;
        }
        return true;
    }
    getLoggedInUser(){
        if(this.isUserLoggedin){
            return sessionStorage.getItem('authenticatedUser')
        }
    }
}
/* if you forget the new keyword here: TypeError: Class constructor AuthenticationService cannot be invoked without 'new'*/
export default new  AuthenticationService()