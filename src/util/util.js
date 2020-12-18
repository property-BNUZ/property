export default {
    getUser: () => {
        var user = JSON.parse(window.sessionStorage.getItem('user'));
        return user;
    },
    getUserInfo: () => { //包括两个对象user和image
        var userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
        return userInfo;
    }

}