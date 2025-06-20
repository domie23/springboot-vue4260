<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
	  style="background: transparent;"
    >  
     <el-row>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学号" prop="xuehao">
          <el-input v-model="ruleForm.xuehao" readonly              placeholder="学号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学生姓名" prop="xueshengxingming">
          <el-input v-model="ruleForm.xueshengxingming"               placeholder="学生姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='xuesheng'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="xueshengtouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in xueshengxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="学院" prop="xueyuan">
          <el-select v-model="ruleForm.xueyuan"  placeholder="请选择学院">
            <el-option
                v-for="(item,index) in xueshengxueyuanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="专业" prop="zhuanye">
          <el-select v-model="ruleForm.zhuanye"  placeholder="请选择专业">
            <el-option
                v-for="(item,index) in xueshengzhuanyeOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="班级" prop="banji">
          <el-select v-model="ruleForm.banji"  placeholder="请选择班级">
            <el-option
                v-for="(item,index) in xueshengbanjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="出生年月" prop="chushengnianyue">
          <el-input v-model="ruleForm.chushengnianyue"               placeholder="出生年月" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="户籍" prop="huji">
          <el-input v-model="ruleForm.huji"               placeholder="户籍" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='jijifenzi'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="jijifenzitouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jijifenzi'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jijifenzixingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jijifenzi'"  label="学院" prop="xueyuan">
          <el-select v-model="ruleForm.xueyuan"  placeholder="请选择学院">
            <el-option
                v-for="(item,index) in jijifenzixueyuanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jijifenzi'"  label="专业" prop="zhuanye">
          <el-select v-model="ruleForm.zhuanye"  placeholder="请选择专业">
            <el-option
                v-for="(item,index) in jijifenzizhuanyeOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jijifenzi'"  label="班级" prop="banji">
          <el-select v-model="ruleForm.banji"  placeholder="请选择班级">
            <el-option
                v-for="(item,index) in jijifenzibanjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="出生年月" prop="chushengnianyue">
          <el-input v-model="ruleForm.chushengnianyue"               placeholder="出生年月" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jijifenzi'"  label="户籍" prop="huji">
          <el-input v-model="ruleForm.huji"               placeholder="户籍" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jijifenzi'"  label="党支部" prop="dangzhibu">
          <el-select v-model="ruleForm.dangzhibu"  placeholder="请选择党支部">
            <el-option
                v-for="(item,index) in jijifenzidangzhibuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="党员账号" prop="dangyuanzhanghao">
          <el-input v-model="ruleForm.dangyuanzhanghao" readonly              placeholder="党员账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="党员姓名" prop="dangyuanxingming">
          <el-input v-model="ruleForm.dangyuanxingming"               placeholder="党员姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='dangyuan'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="dangyuantouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in dangyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="学院" prop="xueyuan">
          <el-select v-model="ruleForm.xueyuan"  placeholder="请选择学院">
            <el-option
                v-for="(item,index) in dangyuanxueyuanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="专业" prop="zhuanye">
          <el-select v-model="ruleForm.zhuanye"  placeholder="请选择专业">
            <el-option
                v-for="(item,index) in dangyuanzhuanyeOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="班级" prop="banji">
          <el-select v-model="ruleForm.banji"  placeholder="请选择班级">
            <el-option
                v-for="(item,index) in dangyuanbanjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="出生年月" prop="chushengnianyue">
          <el-input v-model="ruleForm.chushengnianyue"               placeholder="出生年月" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="户籍" prop="huji">
          <el-input v-model="ruleForm.huji"               placeholder="户籍" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="政治面貌" prop="zhengzhimianmao">
          <el-select v-model="ruleForm.zhengzhimianmao"  placeholder="请选择政治面貌">
            <el-option
                v-for="(item,index) in dangyuanzhengzhimianmaoOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'" label="入党时间" prop="rudangshijian">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.rudangshijian" 
                type="datetime"
                placeholder="入党时间">
            </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='dangyuan'"  label="党支部" prop="dangzhibu">
          <el-select v-model="ruleForm.dangzhibu"  placeholder="请选择党支部">
            <el-option
                v-for="(item,index) in dangyuandangzhibuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangyuan'"  label="住址" prop="zhuzhi">
          <el-input v-model="ruleForm.zhuzhi"               placeholder="住址" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="组织账号" prop="zuzhizhanghao">
          <el-input v-model="ruleForm.zuzhizhanghao" readonly              placeholder="组织账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='dangjianzuzhi'" label="图片" prop="tupian">
          <file-upload
          tip="点击上传图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
          @change="dangjianzuzhitupianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="组织名称" prop="zuzhimingcheng">
          <el-input v-model="ruleForm.zuzhimingcheng"               placeholder="组织名称" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="创立者" prop="chuanglizhe">
          <el-input v-model="ruleForm.chuanglizhe"               placeholder="创立者" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="组织人数" prop="zuzhirenshu">
          <el-input v-model="ruleForm.zuzhirenshu"               placeholder="组织人数" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua"               placeholder="联系电话" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="组织详情" prop="zuzhixiangqing">
          <el-input v-model="ruleForm.zuzhixiangqing"               placeholder="组织详情" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='dangjianzuzhi'" label="创立日期" prop="chuangliriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chuangliriqi" 
                type="date"
                placeholder="创立日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="管理党支部" prop="guanlidangzhibu">
          <el-input v-model="ruleForm.guanlidangzhibu"               placeholder="管理党支部" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='dangjianzuzhi'"  label="管理成员" prop="guanlichengyuan">
          <el-input v-model="ruleForm.guanlichengyuan"               placeholder="管理成员" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      xueshengxingbieOptions: [],
      xueshengxueyuanOptions: [],
      xueshengzhuanyeOptions: [],
      xueshengbanjiOptions: [],
      jijifenzixingbieOptions: [],
      jijifenzixueyuanOptions: [],
      jijifenzizhuanyeOptions: [],
      jijifenzibanjiOptions: [],
      jijifenzidangzhibuOptions: [],
      dangyuanxingbieOptions: [],
      dangyuanxueyuanOptions: [],
      dangyuanzhuanyeOptions: [],
      dangyuanbanjiOptions: [],
      dangyuanzhengzhimianmaoOptions: [],
      dangyuandangzhibuOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.xueshengxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/xueyuan/xueyuan`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengxueyuanOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/zhuanye/zhuanye`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengzhuanyeOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/banji/banji`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengbanjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.jijifenzixingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/xueyuan/xueyuan`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jijifenzixueyuanOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/zhuanye/zhuanye`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jijifenzizhuanyeOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/banji/banji`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jijifenzibanjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/dangzhibu/dangzhibu`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jijifenzidangzhibuOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.dangyuanxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/xueyuan/xueyuan`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.dangyuanxueyuanOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/zhuanye/zhuanye`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.dangyuanzhuanyeOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/banji/banji`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.dangyuanbanjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.dangyuanzhengzhimianmaoOptions = "预备党员,正式党员".split(',')
    this.$http({
      url: `option/dangzhibu/dangzhibu`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.dangyuandangzhibuOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
  },
  methods: {
    xueshengtouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    jijifenzitouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    dangyuantouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    dangjianzuzhitupianUploadChange(fileUrls) {
        this.ruleForm.tupian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.xuehao)&& 'xuesheng'==this.flag){
        this.$message.error('学号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'xuesheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.xueshengxingming)&& 'xuesheng'==this.flag){
        this.$message.error('学生姓名不能为空');
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if( 'xuesheng' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if( 'xuesheng' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if((!this.ruleForm.yonghuzhanghao)&& 'jijifenzi'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'jijifenzi'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.yonghuxingming)&& 'jijifenzi'==this.flag){
        this.$message.error('用户姓名不能为空');
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if( 'jijifenzi' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }
      if( 'jijifenzi' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if((!this.ruleForm.dangyuanzhanghao)&& 'dangyuan'==this.flag){
        this.$message.error('党员账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'dangyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.dangyuanxingming)&& 'dangyuan'==this.flag){
        this.$message.error('党员姓名不能为空');
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if( 'dangyuan' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }
      if( 'dangyuan' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if((!this.ruleForm.zuzhizhanghao)&& 'dangjianzuzhi'==this.flag){
        this.$message.error('组织账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'dangjianzuzhi'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
        if(this.ruleForm.tupian!=null) {
                this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
        }
      if( 'dangjianzuzhi' ==this.flag && this.ruleForm.zuzhirenshu&&(!isIntNumer(this.ruleForm.zuzhirenshu))){
       this.$message.error(`组织人数应输入整数`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
