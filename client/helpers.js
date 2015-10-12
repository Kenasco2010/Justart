Template.dashboardNavigation.helpers({
    checkCompanyRegProfileDb: function () {
       var id = Meteor.userId();
        CompanyRegProfilesDB = CompanyRegistrationProfiles.findOne({"companyRegProOwner": id});
        return CompanyRegProfilesDB

    },
    checkPrincipalBusinessPlaceDatabase: function () {
        var id = Meteor.userId();
        PrincipalBusinessDB = PrincipalPlaceOfBusiness.findOne({"prPlaBusinessOwner": id});
        return PrincipalBusinessDB
    },
    checkCompanyPostalAdd: function () {
    var id = Meteor.userId();
    CompanyPostalAdd = CompanyPostalAddress.findOne({"postAddOwner": id});
    return CompanyPostalAdd
    },
    checkDirectorParticulars: function () {
    var id = Meteor.userId();
    DirectorParticulars = DirectorParticulars.findOne({"dirPartOwner": id});
    return DirectorParticulars
    },
    checkCompanySecDB: function () {
    var id = Meteor.userId();
    CompanySecDB = CompanySecretary.findOne({"secOfCompOwner": id});
    return CompanySecDB
    },
    checkCorpSecDB: function () {
    var id = Meteor.userId();
        CorpSecDB = CorporateSecretarys.findOne({"corpsecOwner": id});
    return CorpSecDB
    },
    checkAuditorDB: function () {
        var id = Meteor.userId();
        auditorDB = CompanyAuditors.findOne({"auditorOwner": id});
        return auditorDB
    },
    checkCapitalDetails: function () {
        var id = Meteor.userId();
        capitalDetails = CapitalDetails.findOne({"capitalDetOwner": id});
        return capitalDetails
    },
 checkDirectorSign: function () {
        var id = Meteor.userId();
     directorSign = DirectorSignature.findOne({"dirSignOwner": id});
        return directorSign
    },
 checkSecSign: function () {
        var id = Meteor.userId();
        secSign = SecretarySignature.findOne({"secSignOwner": id});
        return secSign
    },
 checkSmeDetails: function () {
        var id = Meteor.userId();
        smeDetails = SmeDetails.findOne({"smeDetOwner": id});
        return smeDetails
    },


});

Template.RegistrationSummaryDocument.helpers({
    //CompanyRegistrationProfiles
    //    PrincipalPlaceOfBusiness
    //CompanyPostalAddress
    //    DirectorParticulars
    //CompanySecretary
    //    CorporateSecretarys
    //CompanyAuditors
    //    CapitalDetails
    //DirectorSignature
    //    SecretarySignature
    //SmeDetails
});
