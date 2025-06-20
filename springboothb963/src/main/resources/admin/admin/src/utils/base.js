const base = {
    get() {
        return {
            url : "http://localhost:8080/springboothb963/",
            name: "springboothb963",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboothb963/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校党务系统"
        } 
    }
}
export default base
