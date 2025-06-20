import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import dangtuanhuodong from '@/views/modules/dangtuanhuodong/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import zhuanye from '@/views/modules/zhuanye/list'
    import dangyuan from '@/views/modules/dangyuan/list'
    import dangyuanzhuanru from '@/views/modules/dangyuanzhuanru/list'
    import dangyuanzhuanchu from '@/views/modules/dangyuanzhuanchu/list'
    import jiaofeitongji from '@/views/modules/jiaofeitongji/list'
    import dangfeijiaona from '@/views/modules/dangfeijiaona/list'
    import banji from '@/views/modules/banji/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import config from '@/views/modules/config/list'
    import dangjianzuzhi from '@/views/modules/dangjianzuzhi/list'
    import dangzhibu from '@/views/modules/dangzhibu/list'
    import jijifenzi from '@/views/modules/jijifenzi/list'
    import rudangziliao from '@/views/modules/rudangziliao/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '建党资讯',
        component: news
      }
      ,{
	path: '/dangtuanhuodong',
        name: '党团活动',
        component: dangtuanhuodong
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xueyuan',
        name: '学院',
        component: xueyuan
      }
      ,{
	path: '/zhuanye',
        name: '专业',
        component: zhuanye
      }
      ,{
	path: '/dangyuan',
        name: '党员',
        component: dangyuan
      }
      ,{
	path: '/dangyuanzhuanru',
        name: '党员转入',
        component: dangyuanzhuanru
      }
      ,{
	path: '/dangyuanzhuanchu',
        name: '党员转出',
        component: dangyuanzhuanchu
      }
      ,{
	path: '/jiaofeitongji',
        name: '缴费统计',
        component: jiaofeitongji
      }
      ,{
	path: '/dangfeijiaona',
        name: '党费缴纳',
        component: dangfeijiaona
      }
      ,{
	path: '/banji',
        name: '班级',
        component: banji
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/dangjianzuzhi',
        name: '党建组织',
        component: dangjianzuzhi
      }
      ,{
	path: '/dangzhibu',
        name: '党支部',
        component: dangzhibu
      }
      ,{
	path: '/jijifenzi',
        name: '积极分子',
        component: jijifenzi
      }
      ,{
	path: '/rudangziliao',
        name: '入党资料',
        component: rudangziliao
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
