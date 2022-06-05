
//(1) 전역 컴포넌드 등록: todo-footer
//컴포넌트 내용: template "<p>This is another global child component</p>"
Vue.component('todo-footer', {
    template : "<p>This is another global child component</p>"
});

//지역 컴포넌트 내용 변수에 저장
var cmp ={
    template : "<p>This is another local child component</p>"
};
var app = new Vue({
    el:'#app',
    data:{
        message: 'This is a parent component'
    },

    //(2) 지역 컴포넌트 등록: todo-list  
    components:{
        'todo-list': cmp
    }

});