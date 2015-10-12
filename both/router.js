Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});
Router.route('/', function () {
        this.render("index");
    },
    {
        name: "index"
    });

Router.route('/setup-company-profile', function() {
    this.render("setUpCompanyProfile");
},
    {
        name:"setUpCompanyProfile"
});


Router.route('/my-dashboard', function() {
        this.render("companyDashboard");
    },
    {
        name:"companyDashboard",
        data: function(){
            return{
                companyinformation: Companies.find().fetch()
            }
        }
    });

Router.route('/sign-up', function() {
        this.render("signup");
    },
    {
        name:"signup"
    });
Router.route('/sign-in', function() {
        this.render("signin");
    },
    {
        name:"signin"
    });
Router.route('/signout', function(){
        this.render('signin')
    },
    {
        name: 'signout',
        data: function(){
            return Meteor.logout();

        }
    });

Router.route('/create-company-profile', function() {
        if (Meteor.user()){
            this.render("companyRegProfile");
        }
        else{
            Router.go("/sign-in")
        }
    },
    {
        name:"companyRegProfile"
    });
Router.route('/principal-place-of-business', function() {
        this.render("principalPlaceOfBusiness");
    },
    {
        name:"principalPlaceOfBusiness"
    });
Router.route('/company-postal-address', function() {
        this.render("companyPostalAddress");
    },
    {
        name:"companyPostalAddress"
    });
Router.route('/directors-particulars', function() {
        this.render("directorsParticulars");
    },
    {
        name:"directorsParticulars"
    });
Router.route('/secretary-particulars', function() {
        this.render("secretarysParticulars");
    },
    {
        name:"secretarysParticulars"
    });
Router.route('/corporate-secretary-particulars', function() {
        this.render("corporateSecretarysParticulars");
    },
    {
        name:"corporateSecretarysParticulars"
    });
Router.route('/company-auditor', function() {
        this.render("companyAuditor");
    },
    {
        name:"companyAuditor"
    });
Router.route('/company-capital', function() {
        this.render("companyCapitalDetails");
    },
    {
        name:"companyCapitalDetails"
    });
Router.route('/directors-signature', function() {
        this.render("companyDirectorSignature");
    },
    {
        name:"companyDirectorSignature"
    });
Router.route('/secretary-signature', function() {
        this.render("companySecretarySignature");
    },
    {
        name:"companySecretarySignature"
    });
Router.route('/sme-details', function() {
        this.render("smeDetails");
    },
    {
        name:"smeDetails"
    });
Router.route('/company-dashboard', function() {
        this.render("companyDashboardtwo");
    },
    {
        name:"companyDashboardtwo"
    });

Router.route('/faq', function(){
    this.render("faq");
},
{
    name: "faq"
});
