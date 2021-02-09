import { observable, action } from 'mobx';
import BaseMobxStore from './baseMobxStore';

class RootStore extends BaseMobxStore {
    @observable count = 0;

    @action init() {}

    @action add() {
        this.count += 1;
    }
}

const rootStore = new RootStore();
export default rootStore;
