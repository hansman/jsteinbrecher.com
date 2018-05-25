import tree from './state';

const Actions = {

	setState(field, value) {
		tree.set(field, value);
		tree.commit();
	}

};

export default Actions;
