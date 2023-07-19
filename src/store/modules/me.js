import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, getUser, getUserByCookie } from '@/services/modules/users';

export const fetchMeAction = createAsyncThunk('fetchMe',
    async function fetchstate() {
        const res3 = await getAll('/register/anonimous?')
        const { cookie, userId } = res3.data
        const res = await getUser('account')
        const res2 = await getUser('detail')
        const res4 = await getUserByCookie('subcount')
        const res5 = await getUserByCookie('binding')
        const { artistCount, createdPlaylistCount } = res4.data
        const userName = res.data.account.userName
        const { level, listenSongs, createDays } = res2.data
        return {
            userName,
            level,
            listenSongs,
            createDays,
            userId,
            cookie,
            artistCount,
            createdPlaylistCount
        }
    }
)

const MeSlice = createSlice({
    name: "me",
    initialState: {
        userName: '',
        level: '',
        listenSongs: '',
        createDays: '',
        userId: '',
        cookie: '',
        artistCount: '',
        createdPlaylistCount: '',
    },
    reducers: {
        changeUserName(state, { payload }) {
            state.userName = payload
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchInit.pending, (state) => {
    //         })
    //         .addCase(fetchInit.fulfilled, (state, { payload }) => {
    //             // state.userName = payload.userName
    //             // state.level = payload.level
    //             // state.listenSongs = payload.level
    //             state.userId = payload.userId
    //             // state.createDays = payload.createDays
    //             state.cookie = payload.cookie
    //             // state.artistCount = payload.artistCount
    //             // state.createdPlaylistCount = payload.createdPlaylistCount
    //             // state.id = payload.id
    //         })
    //         .addCase(fetchInit.rejected, (state, err) => {
    //             console.log(err);
    //         });
    // },
    extraReducers(builder) {
        builder
            .addCase(fetchMeAction.pending, (state) => {
            })
            .addCase(fetchMeAction.fulfilled, (state, { payload }) => {
                state.userName = payload.userName
                state.level = payload.level
                state.listenSongs = payload.level
                state.userId = payload.userId
                state.createDays = payload.createDays
                state.cookie = payload.cookie
                state.artistCount = payload.artistCount
                state.createdPlaylistCount = payload.createdPlaylistCount
                // state.id = payload.id
            })
            .addCase(fetchMeAction.rejected, (state, err) => {
                console.log(err)
            });
    }
})

export const { changeUserName } = MeSlice.actions
export default MeSlice.reducer