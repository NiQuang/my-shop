// set thong tin vao localStorage

export const authenticate = (user) => {
    localStorage.setItem("user",JSON.stringify(user));
}

//get thong tin tu localStorage
export const isAuthenticate = () => {
    if(localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"));
    }else{
        return false;
    }
};

//check admin
