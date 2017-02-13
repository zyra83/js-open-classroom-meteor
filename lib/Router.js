Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'accueil'
});

// http://localhost:3000/post/2
Router.route('/post/:_id', {
    name: 'post',
    data: function(){
        return {
            id: this.params._id
        }
    }
});

// http://localhost:3000/add/1/2
Router.route('/add/:num1/:num2', {
    name: "add",
    template: "calc",
    data: function(){
        var num1 = parseInt(this.params.num1);
        var num2 = parseInt(this.params.num2);
        
        return {
            res: num1 + num2
        };
    }
});

// http://localhost:3000/sub/1/2
Router.route('/sub/:num1/:num2', {
    name: "sub",
    template: "calc",
    data: function(){
        var num1 = parseInt(this.params.num1);
        var num2 = parseInt(this.params.num2);
        
        return {
            res: num1 - num2
        };
    }
});

// http://localhost:3000/multi/1/2
Router.route('/multi/:num1/:num2', {
    name: "multi",
    template: "calc",
    data: function(){
        var num1 = parseInt(this.params.num1);
        var num2 = parseInt(this.params.num2);
        
        return {
            res: num1 * num2
        };
    }
});

// http://localhost:3000/div/1/2
Router.route('/div/:num1/:num2', {
    name: "div",
    template: "calc",
    data: function(){
        var num1 = parseInt(this.params.num1);
        var num2 = parseInt(this.params.num2);
        
        return {
            res: num1 / num2
        };
    }
});
