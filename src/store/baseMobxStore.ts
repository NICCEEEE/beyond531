import { action } from 'mobx';

export default class BaseMobxStore {
    @action
    set(name, value) {
        if (typeof name === 'string') {
            return this._singleSet(name, value);
        }
        if (Object.prototype.toString.call(name) === '[object Object]') {
            Object.keys(name).forEach(key => {
                this._singleSet(key, name[key]);
            });
        }
    }

    _singleSet(name, value) {
        if (typeof this[name] === 'undefined') {
            // eslint-disable-next-line no-console
            console.warn(`property ${name} is undefined`);
        }
        this[name] = value;
    }
}
