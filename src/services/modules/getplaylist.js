import service from "../request"
export function getlistById(id) {
    return service({
        method: 'GET',
        url: `/playlist/detail?id=${id}&timestamp=${Date.now()}`,
    })
}