import { getlistById } from "@/services/modules/getplaylist";
import findcity from "@/utils/findcity";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchdetail = createAsyncThunk('postmes',
    async function fetchlistdetail(item) {
        const res = await getlistById(item);
        const {province,city}=res.data.playlist.creator
        const { name, coverImgUrl, tracks,id } = res.data.playlist
        const musicname = tracks.map(item => {
            return item.name
        })
        return {
            name,
            coverImgUrl,
            musicname,
            id,
            province,
            city
        }
    }
)
const DetailSlice = createSlice({
    name: "listdetail",
    initialState: {
        in: [
            {
                id:'',
                name: '',
                coverImgUrl: '',
                musicname: [],
                province:'',
                city:''
            }
        ]
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchdetail.pending, (state) => {
            })
            .addCase(fetchdetail.fulfilled, (state, { payload }) => {
                if(state.in.some(item=>item.id==payload.id)){
                    return
                }
                else if(state.in.some(item=>item.id=='')){
                    state.in.pop()
                }
                else{
                    // console.log(1);
                    const pos = findcity(payload.province,payload.city)
                    payload.province = pos[0]
                    payload.city = pos[1]
                    state.in.push(payload)
                    
                }
                // console.log(state.musicname);
            })
            .addCase(fetchdetail.rejected, (state, err) => {
                console.log(err)
            });
    }
})

// export const { changeWidth } = leftSlice.actions
export default DetailSlice.reducer