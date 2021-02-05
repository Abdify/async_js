console.log('start');


function logIn(email, password, callback){
    setTimeout(() => {
        console.log('Now we got the data')
        callback({ email });
    }, 2000);
}
function userName(name, callback){
    setTimeout(() => {
        callback({name})
    }, 1000);
}
function userFriends(friends){
    setTimeout(() => {
        callback({friends})
    }, 1000);
}

const email = logIn('hi@there.com', '12345', (email) => {
    if(error){
        console.log(error);
    }
    else{
       console.log(email);
        userName('user', (name) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(name);
                userFriends(['a', 'aa', 'dd'], (friends) => {
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log(friends);
                    }
                }); 
            }
        }); 
    }
});




console.log('finish')