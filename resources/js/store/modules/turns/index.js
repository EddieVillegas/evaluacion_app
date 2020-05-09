const store = {
    namespaced: true,
    state:{
        turns:[],
        turn:{}
    },
    actions:{
        SET_TURNS({commit}, payload){
            commit('SET_TURNS', payload)
        },
        DELETE_TURN({commit, state}, payload){
            const turns = state.turns.data.filter(({id}) => id !== payload.id)
            commit('SET_DATA_TURNS', turns)
        }
    },
    mutations:{
        SET_TURNS(state, payload){
            state.turns = payload.turns
        },
        SET_DATA_TURNS(state, data){
            state.turns.data = data
        }
    },
    getters:{
        turns : (state) => state.turns 
    }
}

export default store