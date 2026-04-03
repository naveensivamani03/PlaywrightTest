const {LoginSteps} =require('../Steps/LoginSteps');
class pageobjectmanager{

constructor(page){

    this.page=page;
    this.LoginSteps=null;

}

getLoginSteps(){
    if(!this.LoginSteps){
        this.LoginSteps=new LoginSteps(this.page);
    }
    return this.LoginSteps;
}

}

module.exports = {pageobjectmanager};