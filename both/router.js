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


Router.route('/faq', function(){
    this.render("faq");
},
{
    name: "faq"
});

Router.route('/fill-company-registration-form/welcome', function() {
        if(Meteor.user()){
            this.render("dashboardIntro");
        }else{
            Router.go("/sign-in")
        }
    },
    {
        name:"dashboardIntro",
        layoutTemplate: "dashboardLayout"

    });

Router.route('/fill-company-registration-form/company-profile', function() {
        if(Meteor.user()){
            this.render("companyRegProfile");
        }else{
            Router.go("/sign-in")
        }
    },
    {
        name:"companyRegProfile",
        layoutTemplate: "dashboardLayout"

    });

Router.route('/fill-company-registration-form/principal-place-of-business', function() {
        this.render("principalPlaceOfBusiness");
    },
    {
        name:"principalPlaceOfBusiness",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/company-postal-address', function() {
        this.render("companyPostalAddress");
    },
    {
        name:"companyPostalAddress",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/directors-particulars', function() {
        this.render("directorsParticulars");
    },
    {
        name:"directorsParticulars",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/secretary-particulars', function() {
        this.render("secretarysParticulars");
    },
    {
        name:"secretarysParticulars",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/corporate-secretary-particulars', function() {
        this.render("corporateSecretarysParticulars");
    },
    {
        name:"corporateSecretarysParticulars",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/company-auditor', function() {
        this.render("companyAuditor");
    },
    {
        name:"companyAuditor",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/company-capital', function() {
        this.render("companyCapitalDetails");
    },
    {
        name:"companyCapitalDetails",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/directors-signature', function() {
        this.render("companyDirectorSignature");
    },
    {
        name:"companyDirectorSignature",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/secretary-signature', function() {
        this.render("companySecretarySignature");
    },
    {
        name:"companySecretarySignature",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/sme-details', function() {
        this.render("smeDetails");
    },
    {
        name:"smeDetails",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/fill-company-registration-form/company-dashboard', function() {
        this.render("companyDashboardtwo");
    },
    {
        name:"companyDashboardtwo"
    });

Router.route('/fill-company-registration-form/fill-form', function() {
        this.render("home");
    },
    {
        name:"home",
        layoutTemplate: "dashboardLayout"

    });

Router.route('/company-registration-summary', function() {
        this.render("RegistrationSummaryDocument");
    },
    {
        name:"RegistrationSummaryDocument",
        layoutTemplate: "dashboardLayout"

    });

/*UPDATE FORMS*/
Router.route('/fill-company-registration-form/update-company-profile', function() {
        this.render("UpdateCompRegProfile");
    },
    {
        name:"UpdateCompRegProfile",
        layoutTemplate: "dashboardLayout"

    });
