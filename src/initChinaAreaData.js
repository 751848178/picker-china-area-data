const chinaAreaData = require("china-area-data/vux/china_address_v4.json");


/**
 * 初始化通过地区名获取地区编码
 */
const initNameCodeMap = () => {
    let NameCodeMap = {};
    chinaAreaData.forEach(area => NameCodeMap[area.name] = area.value);
    return NameCodeMap;
};

/**
 * 初始化通过地区编码获取地区名
 */
const initCodeNameMap = () => {
    let CodeNameMap = {};
    chinaAreaData.forEach(area => CodeNameMap[area.value] = area.name);
    return CodeNameMap;
};

/**
 * 初始化省市区数据
 */
const initAreaData = parent => {
    let areaData = getAreaDataByParent(parent);
    areaData.forEach(area => {
        area.children = getAreaDataByParent(area.value);
        area.children.forEach(child => {
            child.children = getAreaDataByParent(child.value);
        });
    });
    return areaData;
};

/**
 * 根据父级编码获取子列表
 * @param {string} parent 父级编码
 */
const getAreaDataByParent = parent => chinaAreaData.filter(data => data.parent === parent);


const areaData = initAreaData(); // 省市区三级联动数组，[{name:"name", value: "value", children: []}] children: [{name:"name", value: "value", children: []}]
const CodeNameMap = initCodeNameMap(); // 一个大对象：通过省市区编号获取名称，{"北京市": "101000"}
const NameCodeMap = initNameCodeMap(); // 一个大对象：通过省市区名称获取编号，{"101000": "北京市"}


module.exports = {
    NameCodeMap,
    CodeNameMap,
    areaData
};