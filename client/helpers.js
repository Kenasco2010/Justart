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
//UPDATE
Template.updateCompRegProfile.helpers({
  updateCompRegDoc: function(){
    return CompanyRegistrationProfiles.findOne(Session.get("updateCompRegDoc"));
  },
    autoUpdateCompRegDoc: function () {
        return CompanyRegistrationProfiles.findOne(Session.get("updateCompRegDoc"));
    }
});
Template.updatePrincipalPlaceOfBusiness.helpers({
    autoUpdatePrincBusDoc: function () {
        return PrincipalPlaceOfBusiness.findOne(Session.get("updatePrincBusDoc"));
    }
});
Template.updateCompanyPostalAddress.helpers({
    autoUpdateCompPostAdd: function () {
        return CompanyPostalAddress.findOne(Session.get("updatecompPostAddDoc"));
    }
});
Template.updateDirectorsParticulars.helpers({
    autoUpdatedirectorPart: function () {
        return DirectorParticulars.findOne(Session.get("updateDirectorPartDoc"));
    }
});
Template.updateSecretarysParticulars.helpers({
    autoUpdatesecretaryPart: function () {
        return CompanySecretary.findOne(Session.get("updateSecretaryPartDoc"));
    }
});
Template.updateCorporateSecretarysParticulars.helpers({
    autoUpdatecorpsecretaryPart: function () {
        return CorporateSecretarys.findOne(Session.get("updateCorpSecretaryPartDoc"));
    }
});
Template.updateCompanyAuditor.helpers({
    autoUpdatecompAuditorDoc: function () {
        return CompanyAuditors.findOne(Session.get("updateCompAuditorDoc"));
    }
});
Template.updateCompanyCapitalDetails.helpers({
    autoUpdateCapitalDetailDoc: function () {
        return CapitalDetails.findOne(Session.get("updateCapitalDetailsDoc"));
    }
});
Template.updateCompanyDirectorSignature.helpers({
    autoUpdatedirSignDoc: function () {
        return DirectorSignature.findOne(Session.get("updateDirSignDoc"));
    }
});
Template.updateCompanySecretarySignature.helpers({
    autoUpdatesecSignDoc: function () {
        return SecretarySignature.findOne(Session.get("updateSecSignDoc"));
    }
});
Template.updateSmeDetails.helpers({
    autoUpdateSmeDetailsDoc: function () {
        return SmeDetails.findOne(Session.get("updatesmeDetailsDoc"));
    }
});

Template.bookKeeping.helpers({
    transactionCashIn: function () {
        return Transactions.find({transactionOwner: Meteor.userId(), type:"Cash In"}).fetch()
    },
    transactionCashOut: function () {
        return Transactions.find({transactionOwner: Meteor.userId(), type:"Cash Out"}).fetch()
    },

    expenseBooking: function () {
        return Transactions.find({transactionOwner: Meteor.userId()}).fetch()
    },

    addUpIncome: function () {
        var all = Transactions.find({transactionOwner: Meteor.userId()}).fetch();
        var total = 0;
        var length = 0
        var amount = 0

        for (var i = 0; i < all.length; i++) {
            amount = parseInt(all[i].amount)
            console.log(amount);
            total = total + amount
        };
        return total
    },
    addUpExpense: function () {
        var all = BookKeepingExpenses.find({transactionOwner: Meteor.userId()}).fetch()
        var total = 0;
        var length = 0
        var amount = 0

        for (var i = 0; i < all.length; i++) {
            amount = parseInt(all[i].prices)
            console.log(amount);
            total = total + amount
        };
        return total
    }
});
