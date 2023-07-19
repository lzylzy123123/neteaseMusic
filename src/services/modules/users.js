import service from "../request";
import { UID } from "./data";

export function getUser(user) {
    return service({
        method: 'GET',
        url: `/user/${user}?timestamp=${Date.now()}`,
        params:{
            uid:UID
        }
    })
}

export function getUserByCookie(user,cookie) {
    return service({
        method: 'GET',
        url: `/user/${user}?timestamp=${Date.now()}`,
        params:{
            uid:UID,
            cookie
        }
    })
}

export function changemessage(props){
    return service({
        method:"POST",
        url:`/user/update?gender=0&signature=测试签名&city=440300&nickname=binary&birthday=1525918298004&province=440000&timestamp=${Date.now()}`,
        params:props,
        
    })
}

export function getAll(props) {
    return service({
        method: 'GET',
        url: `${props}timestamp=${Date.now()}`
    })
}