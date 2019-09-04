import React ,{Component} from 'react';
import data from "./data";
import { List, Typography } from 'antd';


class IndexList extends Component{
    render(){
        return <List loading={true}></List>;
    }
}

export default IndexList;