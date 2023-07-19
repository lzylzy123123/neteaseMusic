import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '@/services/modules/users';
import { UID } from '@/services/modules/data';

export const fetchList = createAsyncThunk('fetchlist',
    async function fetchList() {
        const res = await getUser('playlist')
        const lists = res.data.playlist
        const newlists = lists.map((item) => {
            let sex = ''
            let signature = ''
            let birth = ''
            if (item.creator.gender == 1) {
                sex = '男'
            }
            else if (item.creator.gender == 2) {
                sex = '女'
            }
            else {
                sex = '保密'
            }
            if (item.creator.signature == '') {
                signature = '填写简介'
            }
            if (item.creator.birthday == 0) {
                birth = '未填写'
            }
            return {
                nickName: item.creator.nickname,
                birthday: birth,
                sex: sex,
                signature: signature,
                listName: item.creator.name,
                coverImgUrl: item.coverImgUrl,
                listId: item.id,
                userId: item.userId,
                name: item.name
            }
        })
        const createlist = []
        const otherlist = []
        newlists.map((item) => {
            if (item.userId == UID) {
                if (item.name != '我喜欢的音乐') {
                    createlist.push(item)
                }
            }
            else {
                otherlist.push(item)
            }
        })
        // console.log(lists)
        return {
            createlist,
            otherlist
        }
    }
)
const ListSlice = createSlice({
    name: 'playlist',
    initialState: {
        createlist: [
            {
                nickName: '',
                birthday: '',
                sex: '',
                signature: '',
                listName: '',
                coverImgUrl: '',
                listId: '',
                name: ''
            }
        ],
        otherlist: [
            {
                nickName: '',
                birthday: '',
                sex: '',
                signature: '',
                listName: '',
                coverImgUrl: '',
                listId: '',
                name: ''
            }
        ]
    },
    reducers: {
        changeList(state, { payload }) {

            state.createlist[0].nickName = payload.data
            // console.log(state.createlist[0].nickName)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchList.pending, (state) => {
            })
            .addCase(fetchList.fulfilled, (state, { payload }) => {
                state.createlist = payload.createlist
                state.otherlist = payload.otherlist
            })
            .addCase(fetchList.rejected, (state, err) => {
                console.log(err)
            });
    }
})

export const { changeList } = ListSlice.actions
export default ListSlice.reducer
