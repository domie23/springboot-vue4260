<template>
  <div>
        <div class="container">
      <div class="login-form">
        <h1 class="h1">高校党务系统注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm">
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">学号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.xuehao" class="input" type="text" placeholder="学号">
			   </div>
			 </div> -->
			<el-form-item label="学号" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.xuehao" autocomplete="off" placeholder="学号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">学生姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.xueshengxingming" class="input" type="text" placeholder="学生姓名">
			   </div>
			 </div> -->
			<el-form-item label="学生姓名" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.xueshengxingming" autocomplete="off" placeholder="学生姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">出生年月</div>
			   <div class="input-container">
			     <input v-model="ruleForm.chushengnianyue" class="input" type="text" placeholder="出生年月">
			   </div>
			 </div> -->
			<el-form-item label="出生年月" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.chushengnianyue" autocomplete="off" placeholder="出生年月"  />
			</el-form-item>
			<!-- <div v-if="tableName=='xuesheng'" class="input-group">
			   <div class="label">户籍</div>
			   <div class="input-container">
			     <input v-model="ruleForm.huji" class="input" type="text" placeholder="户籍">
			   </div>
			 </div> -->
			<el-form-item label="户籍" class="input" v-if="tableName=='xuesheng'">
			  <el-input v-model="ruleForm.huji" autocomplete="off" placeholder="户籍"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">用户账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yonghuzhanghao" class="input" type="text" placeholder="用户账号">
			   </div>
			 </div> -->
			<el-form-item label="用户账号" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.yonghuzhanghao" autocomplete="off" placeholder="用户账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">用户姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yonghuxingming" class="input" type="text" placeholder="用户姓名">
			   </div>
			 </div> -->
			<el-form-item label="用户姓名" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.yonghuxingming" autocomplete="off" placeholder="用户姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.dianhua" class="input" type="text" placeholder="电话">
			   </div>
			 </div> -->
			<el-form-item label="电话" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.dianhua" autocomplete="off" placeholder="电话"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">出生年月</div>
			   <div class="input-container">
			     <input v-model="ruleForm.chushengnianyue" class="input" type="text" placeholder="出生年月">
			   </div>
			 </div> -->
			<el-form-item label="出生年月" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.chushengnianyue" autocomplete="off" placeholder="出生年月"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jijifenzi'" class="input-group">
			   <div class="label">户籍</div>
			   <div class="input-container">
			     <input v-model="ruleForm.huji" class="input" type="text" placeholder="户籍">
			   </div>
			 </div> -->
			<el-form-item label="户籍" class="input" v-if="tableName=='jijifenzi'">
			  <el-input v-model="ruleForm.huji" autocomplete="off" placeholder="户籍"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">党员账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.dangyuanzhanghao" class="input" type="text" placeholder="党员账号">
			   </div>
			 </div> -->
			<el-form-item label="党员账号" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.dangyuanzhanghao" autocomplete="off" placeholder="党员账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">党员姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.dangyuanxingming" class="input" type="text" placeholder="党员姓名">
			   </div>
			 </div> -->
			<el-form-item label="党员姓名" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.dangyuanxingming" autocomplete="off" placeholder="党员姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">联系方式</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxifangshi" class="input" type="text" placeholder="联系方式">
			   </div>
			 </div> -->
			<el-form-item label="联系方式" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.lianxifangshi" autocomplete="off" placeholder="联系方式"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">出生年月</div>
			   <div class="input-container">
			     <input v-model="ruleForm.chushengnianyue" class="input" type="text" placeholder="出生年月">
			   </div>
			 </div> -->
			<el-form-item label="出生年月" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.chushengnianyue" autocomplete="off" placeholder="出生年月"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">户籍</div>
			   <div class="input-container">
			     <input v-model="ruleForm.huji" class="input" type="text" placeholder="户籍">
			   </div>
			 </div> -->
			<el-form-item label="户籍" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.huji" autocomplete="off" placeholder="户籍"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangyuan'" class="input-group">
			   <div class="label">住址</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zhuzhi" class="input" type="text" placeholder="住址">
			   </div>
			 </div> -->
			<el-form-item label="住址" class="input" v-if="tableName=='dangyuan'">
			  <el-input v-model="ruleForm.zhuzhi" autocomplete="off" placeholder="住址"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">组织账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhizhanghao" class="input" type="text" placeholder="组织账号">
			   </div>
			 </div> -->
			<el-form-item label="组织账号" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.zuzhizhanghao" autocomplete="off" placeholder="组织账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">组织名称</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhimingcheng" class="input" type="text" placeholder="组织名称">
			   </div>
			 </div> -->
			<el-form-item label="组织名称" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.zuzhimingcheng" autocomplete="off" placeholder="组织名称"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">创立者</div>
			   <div class="input-container">
			     <input v-model="ruleForm.chuanglizhe" class="input" type="text" placeholder="创立者">
			   </div>
			 </div> -->
			<el-form-item label="创立者" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.chuanglizhe" autocomplete="off" placeholder="创立者"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">组织人数</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhirenshu" class="input" type="text" placeholder="组织人数">
			   </div>
			 </div> -->
			<el-form-item label="组织人数" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.zuzhirenshu" autocomplete="off" placeholder="组织人数"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">联系电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxidianhua" class="input" type="text" placeholder="联系电话">
			   </div>
			 </div> -->
			<el-form-item label="联系电话" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.lianxidianhua" autocomplete="off" placeholder="联系电话"  />
			</el-form-item>
			<!-- <div v-if="tableName=='dangjianzuzhi'" class="input-group">
			   <div class="label">组织详情</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhixiangqing" class="input" type="text" placeholder="组织详情">
			   </div>
			 </div> -->
			<el-form-item label="组织详情" class="input" v-if="tableName=='dangjianzuzhi'">
			  <el-input v-model="ruleForm.zuzhixiangqing" autocomplete="off" placeholder="组织详情"  />
			</el-form-item>
			<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      ruleForm: {
      },
      tableName:"",
      rules: {},
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
      },
  created() {
    
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
    // 注册
    login() {
	var url=this.tableName+"/register";
      if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
        this.$message.error(`学号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if((!this.ruleForm.xueshengxingming) && `xuesheng` == this.tableName){
        this.$message.error(`学生姓名不能为空`);
        return
      }
      if(`xuesheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`xuesheng` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if((!this.ruleForm.yonghuzhanghao) && `jijifenzi` == this.tableName){
        this.$message.error(`用户账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `jijifenzi` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `jijifenzi` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if((!this.ruleForm.yonghuxingming) && `jijifenzi` == this.tableName){
        this.$message.error(`用户姓名不能为空`);
        return
      }
      if(`jijifenzi` == this.tableName && this.ruleForm.dianhua&&(!this.$validate.isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }
      if(`jijifenzi` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if((!this.ruleForm.dangyuanzhanghao) && `dangyuan` == this.tableName){
        this.$message.error(`党员账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `dangyuan` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `dangyuan` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if((!this.ruleForm.dangyuanxingming) && `dangyuan` == this.tableName){
        this.$message.error(`党员姓名不能为空`);
        return
      }
      if(`dangyuan` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }
      if(`dangyuan` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if((!this.ruleForm.zuzhizhanghao) && `dangjianzuzhi` == this.tableName){
        this.$message.error(`组织账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `dangjianzuzhi` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `dangjianzuzhi` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if(`dangjianzuzhi` == this.tableName && this.ruleForm.zuzhirenshu&&(!this.$validate.isIntNumer(this.ruleForm.zuzhirenshu))){
        this.$message.error(`组织人数应输入整数`);
        return
      }
      this.$http({
        url: url,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
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
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}

	.container {
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
    				background-image: url(http://codegen.caihongy.cn/20220122/08c762ab31944b998e9d14a08c207810.png);
		    
		.login-form {
			right: 50%;
			top: 50%;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			font-size: 14px;
			font-weight: 500;
      box-sizing: border-box;

			width: 400px;
			height: auto;
			padding: 120px 16px 16px;
			margin: 0 0 0 300px;
			border-radius: 900px 900px 400px 400px;
			border-width: 20px;
			border-style: solid;
			border-color: rgba(220, 236, 238, 1);
			background-color: rgba(255, 255, 255, 1);
			box-shadow: 0 -30px 0px 45px rgba(193, 217, 213, 1);

			.h1 {
				width: 80%;
				height: auto;
				line-height:auto;
				color: rgba(255, 255, 255, 1);
				font-size: 28px;
				padding: 10px 0;
				margin: -140px auto 66px;
				border-radius: 48px;
				border-width: 0;
				border-style: solid;
				border-color: rgba(255,0,0,0);
				background-color: rgba(134, 157, 153, 1);
				box-shadow: 0 0 6px rgba(255,0,0,0);
				text-align: center;
			}

			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

        .el-form-item {
          width: 100%;
          display: flex;

          & /deep/ .el-form-item__content {
            flex: 1;
            display: flex;
          }
        }

				.input {
          width: 100%;
          height:auto;
          padding: 0;
          margin: 0 0 12px 0;
          border-radius: 0;
          border-width: 0;
          border-style: solid;
          border-color: rgba(255,0,0,0);
          background-color: rgba(236, 236, 236, 1);
          box-shadow: 0 0 6px rgba(255,0,0,0);

					& /deep/ .el-form-item__label {
            width: 90px;
            line-height:44px;
            color: rgba(0, 0, 0, 1);
            font-size: 14px;
            padding: 0 10px 0 0;
            margin: 0;
            border-radius: 0;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            background-color: rgba(255,0,0,0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
					}

					& /deep/ .el-input__inner {
            width: 100%;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 0;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(112, 112, 112, 1);
            background-color: rgba(255, 255, 255, 0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
					}
				}

        .send-code {
          & /deep/ .el-input__inner {
            width: 100%;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 0;
            border-width: 1px;
            border-style: solid;
            border-color: #606266;
            background-color: rgba(255, 255, 255, 0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
          }

          .register-code {
            margin: 0;
            padding: 0;
            width: 30%;
            height: 44px;
            line-height:44px;
            color: #fff;
            font-size: 14px;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            border-radius: 0;
            background-color: rgba(134, 157, 153, 1);
            box-shadow: 0 0 6px rgba(255,0,0,0);
          }
        }

				.btn {
					margin: 0  25%;
          padding: 25px;
					width: 50%;
					height: auto;
          line-height:auto;
					color: #fff;
					font-size: 34px;
					border-width: 0;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 54px;
					background-color: rgba(134, 157, 153, 1);
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

				.close {
          margin: 20px 10px;
          padding: 0;
          width: 88px;
          height: 44px;
          line-height:44px;
          color: rgba(130, 130, 130, 1);
          font-size: 14px;
          border-width: 0;
          border-style: solid;
          border-color: #409EFF;
          border-radius: 4px;
          background-color: rgba(24, 20, 20, 0);
          box-shadow: 0 0 0px rgba(255,0,0,0);
				}

			}
		}
	}
</style>
