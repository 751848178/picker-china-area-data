# 适用于picker组件的中国省市区级联数据

## 安装

    npm install picker-china-area-data -S

## 依赖

    china-area-data v4.0.0

## 代码仓库

[picker-china-area-data](https://github.com/751848178/picker-china-area-data "适用于picker组件的中国省市区级联数据")

## 使用

    import { areaData, CodeNameMap, NameCodeMap } from "picker-china-area-data";
    
    1、areaData是省市区三级联动数据（不带“全部”选项）
        let area = {"name":"区域名称","value":"区域编码","children":[]};
        {
            "name": "区域名称",
            "value": "区域编码",
            "children": [area, ...]
        }
    2、CodeNameMap是个对象，key对应区域编码,value对应区域名称 用法例如：CodeNameMap["110000"]输出"北京市"
    3、NameCodeMap是个对象，key对应区域名称,value对应区域编码 用法例如：NameCodeMap["北京市"]输出"110000"

## 额外

可以配合组件 [easy-react-mobile-picker](https://www.npmjs.com/package/picker-china-area-data "类似IOS样式的Picker组件") 使用

    import Picker from "easy-react-mobile-picker";
    import { areaData } from "picker-china-area-data";

    <Picker visible={true} cascader slides={areaData} confirm={this.valChange} cancel={e => this.togglePicker(false)} />

