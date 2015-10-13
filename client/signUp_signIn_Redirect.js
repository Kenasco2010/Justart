
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn") {
            Router.go('/');
            swal('Welcome back!, we appreciate you');

        }
        if (state === "signUp"){
            Router.go('/');
            swal('Welcome, Justart helps you find comfort');

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
