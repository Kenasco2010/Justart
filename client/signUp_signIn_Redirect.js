
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn") {
            Router.go('/');
            sAlert.info('Welcome Back!');

        }
        if (state === "signUp"){
            Router.go('/');
            sAlert.info('Welcome to Justart!');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});

Template.signin.events({
    'click #at-btn': function () {
        //sAlert.info('Welcome Back!');
        //alert("helloooooo")
    }
})
