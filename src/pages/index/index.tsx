import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import Movement from '@/components/index/movement';
import Project from '@/components/index/project';
import Menu from '@/components/index/menu';

@observer
class Index extends Component {
    render() {
        return (
            <View className="index">
                <Movement />
                <Project />
                <Menu />
            </View>
        );
    }
}

export default Index;
