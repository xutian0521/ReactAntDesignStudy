import React from 'react';
import ShoppingList from './ShoppingList';
import Square from './Square';

class Content extends React.Component {
    render() {
        return (<div><ShoppingList name='张三' >标签里面的内容</ShoppingList>
            <Square>自定义按钮</Square></div>);
    }
}
export default Content;