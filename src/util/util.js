export default {
    getUser: () => {
        var user = JSON.parse(window.sessionStorage.getItem('user'));
        return user;
    },
    getUserInfo: () => { //包括两个对象user和image
        console.log(sessionStorage.getItem('userInfo'));
        let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
        return userInfo;
    },
    /**
     * 深拷贝
     * @param obj
     * @returns {any}
     */
    deepClone: (obj) => {
        let _obj = JSON.stringify(obj)
        let objClone = JSON.parse(_obj)
        return objClone
    }
}