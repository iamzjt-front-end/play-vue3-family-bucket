// import { createStore } from 'vuex';
import { createStore } from '../mini/mini-vuex';

type State = {
	count: number;
}

const store = createStore({
	state() {
		return {
			count: 666
		};
	},
	mutations: {
		add(state: State) {
			state.count++;
		}
	},
	actions: {
		addAsync({ commit }: any) {
			setTimeout(() => {
				commit('add');
			}, 1000);
		}
	}
});

export default store;
