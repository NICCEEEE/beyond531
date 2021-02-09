import { observable, action } from 'mobx';
import BaseMobxStore from './baseMobxStore';

class GlobalStore extends BaseMobxStore {
    @observable count = 0;

    @action init() {}
}

const globalStore = new GlobalStore();
export default globalStore;
