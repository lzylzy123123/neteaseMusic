import { crycodes } from "@/assets/data/crycode";

export default function findcity(province,city){
    const p = crycodes.find(item=>item.code==province)
    const prov = p.province
    const c = p.cities.find(item=>item.code==city)
    const cty = c.name
    return[prov,cty]
}
