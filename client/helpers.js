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
  directPart = DirectorParticulars.findOne({"dirPartOwner": id});
  return directPart
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
}

});

Template.RegistrationSummaryDocument.helpers({
  companyRegistrationProfile: function () {
        //var id = CompanyRegistrationProfiles.params._id;
        return CompanyRegistrationProfiles.find({"companyRegProOwner": Meteor.userId()}).fetch()
      },
      principalBusinessPlace: function () {
        return PrincipalPlaceOfBusiness.find({"prPlaBusinessOwner": Meteor.userId()}).fetch()
      },
      companyPostalAdd: function () {
        return CompanyPostalAddress.find({"postAddOwner": Meteor.userId()}).fetch()
      },
      directorPart: function () {
        return DirectorParticulars.find({"dirPartOwner": Meteor.userId()}).fetch()
      },
      compSec: function () {
        return CompanySecretary.find({"secOfCompOwner": Meteor.userId()}).fetch()
      },
      corpSec: function () {
        return CorporateSecretarys.find({"corpsecOwner": Meteor.userId()}).fetch()
      },
      compAudit: function () {
       return CompanyAuditors.find({"auditorOwner": Meteor.userId()}).fetch()
     },
     capDetails: function () {
      return CapitalDetails.find({"capitalDetOwner": Meteor.userId()}).fetch()
    },
    dirSign: function () {
      return DirectorSignature.find({"dirSignOwner": Meteor.userId()}).fetch()
    },
    secSign: function () {
      return SecretarySignature.find({"secSignOwner": Meteor.userId()}).fetch()

    },
    smeDetail: function () {
      return SmeDetails.find({"smeDetOwner": Meteor.userId()}).fetch()

    }


  });
Template.UpdateCompRegProfile.helpers({
  updateCompRegDoc: function(){
    return CompanyRegistrationProfiles.findOne(Session.get("updateCompRegDoc"));
  },
    autoUpdateCompRegDoc: function () {
        return CompanyRegistrationProfiles.findOne(Session.get("updateCompRegDoc"));
    }
});
//DirectorSignature
//    SecretarySignature
//SmeDetails
//CorporateSecretarys
