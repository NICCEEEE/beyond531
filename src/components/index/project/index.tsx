import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import style from './index.module.scss';

@observer
class Project extends Component {
    render() {
        return <View className={style.projects}>计划</View>;
    }
}

export default Project;
