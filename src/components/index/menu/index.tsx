import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import style from './index.module.scss';

@observer
class Menu extends Component {
    render() {
        return <View className={style.menu}>菜单</View>;
    }
}

export default Menu;
