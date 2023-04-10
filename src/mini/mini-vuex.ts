import { reactive, inject, UnwrapNestedRefs } from 'vue';

const STORE_KEY = '__store__';

function useStore() {
	return inject(STORE_KEY);
}

class Store {
	private $options: any;
	private _state: UnwrapNestedRefs<{ data: any }>;
	private readonly _mutaions: { [key: string]: Function };
	private readonly _actions: { [key: string]: Function };

	constructor(options: any) {
		this.$options = options;
		this._state = reactive({
			data: options.state()
		});
		this._mutaions = options.mutations;
		this._actions = options.actions;
	}

	// 给app.use(store)调用
	install(app: any) {
		app.provide(STORE_KEY, this);
	}

	get state() {
		return this._state.data;
	}

	commit = (type: string, payload: any) => {
		const entry = this._mutaions[type];
		entry && entry(this.state, payload);
	};

	dispatch = (type: string, payload: any) => {
		const entry = this._actions[type];
		entry && entry(this, payload);
	}
}

function createStore(options: any) {
	return new Store(options);
}

export {
	useStore,
	createStore
};
