Template.signup.events({
    'click #at-signIn': function () {
        Router.go("/sign-in")
    }
});
Template.RegistrationSummaryDocument.events({
    'click #compRegProfupdate': function () {
        Session.set("updateCompRegDoc", this._id);
        //alert("hello")
    }
});

