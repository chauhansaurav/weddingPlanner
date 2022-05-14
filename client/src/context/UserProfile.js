var UserProfile=(function(){
    var username;

    var getName= function(){
        return username;
    };
    var setName = function(name){
        username=name;
    };
    
    return{
        getName: getName,
        setName: setName,
    }
})();

export default UserProfile;