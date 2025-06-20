
var projectName = '高校党务系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '党团活动',
	url: './pages/dangtuanhuodong/list.html'
}, 
{
	name: '公告信息',
	url: './pages/gonggaoxinxi/list.html'
}, 

{
	name: '建党资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboothb963/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"学院","menuJump":"列表","tableName":"xueyuan"}],"menu":"学院管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"专业","menuJump":"列表","tableName":"zhuanye"}],"menu":"专业管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"积极分子","menuJump":"列表","tableName":"jijifenzi"}],"menu":"积极分子管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"党员","menuJump":"列表","tableName":"dangyuan"}],"menu":"党员管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"党建组织","menuJump":"列表","tableName":"dangjianzuzhi"}],"menu":"党建组织管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除","审核"],"menu":"党员转入","menuJump":"列表","tableName":"dangyuanzhuanru"}],"menu":"党员转入管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除","审核"],"menu":"党员转出","menuJump":"列表","tableName":"dangyuanzhuanchu"}],"menu":"党员转出管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除"],"menu":"入党资料","menuJump":"列表","tableName":"rudangziliao"}],"menu":"入党资料管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"党团活动","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","报表","导出"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"党支部","menuJump":"列表","tableName":"dangzhibu"}],"menu":"党支部管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除","报表","导出"],"menu":"缴费统计","menuJump":"列表","tableName":"jiaofeitongji"}],"menu":"缴费统计管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"建党资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"党团活动列表","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"入党资料","menuJump":"列表","tableName":"rudangziliao"}],"menu":"入党资料管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"党团活动列表","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"党团活动列表","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"积极分子","tableName":"jijifenzi"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除","转出"],"menu":"党员转入","menuJump":"列表","tableName":"dangyuanzhuanru"}],"menu":"党员转入管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"党员转出","menuJump":"列表","tableName":"dangyuanzhuanchu"}],"menu":"党员转出管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["支付","查看","删除"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"党团活动列表","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"党员","tableName":"dangyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"党员","menuJump":"列表","tableName":"dangyuan"}],"menu":"党员管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除","审核","转出"],"menu":"党员转入","menuJump":"列表","tableName":"dangyuanzhuanru"}],"menu":"党员转入管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除","审核"],"menu":"党员转出","menuJump":"列表","tableName":"dangyuanzhuanchu"}],"menu":"党员转出管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除","报表","导出"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"党支部","menuJump":"列表","tableName":"dangzhibu"}],"menu":"党支部管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除","报表","导出"],"menu":"缴费统计","menuJump":"列表","tableName":"jiaofeitongji"}],"menu":"缴费统计管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"党团活动列表","menuJump":"列表","tableName":"dangtuanhuodong"}],"menu":"党团活动模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"党建组织","tableName":"dangjianzuzhi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
