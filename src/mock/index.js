import Mock from 'mockjs'
 
const data={ 
    "id":"@guid",
    "name":"@cname",
};
 
Mock.mock('/api/test.json', 'get', data)
 
export default Mock;