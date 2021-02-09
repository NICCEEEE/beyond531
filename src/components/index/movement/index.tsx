import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import style from './index.module.scss';

@observer
class Movement extends Component {
    render() {
        return <View className={style.container}>动作</View>;
    }
}

export default Movement;
