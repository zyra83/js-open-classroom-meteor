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
