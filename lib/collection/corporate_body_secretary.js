CorporateSecretarys = new Mongo.Collection("companySecretarys");
CorporateSecretarys.attachSchema(new SimpleSchema({
  corporateName: {
    type: String,
    label: "Your corporate Name",
    max: 200
  },
  corporateAddress: {
    type: String,
    label: "your corporate address",
    max: 200
  },
  corporateStamp: {
    type: String,
    label: "Please provide a corporate stamp",
    max: 200
  },
  corporateTIN: {
    type: String,
    label: "Your corporate TIN",
    max: 200
  },
  corporateRep: {
    type: String,
    label: "Name of person representing the corporate",
    max: 200
  },
  RepTIN: {
    type: String,
    label: "Representative TIN",
    max: 200
  },
  picture: { //Business Logo if any
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Please Choose Picture'
      }
    }
  },
  corpsecOwner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function(){
      if (this.isInsert){
        return Meteor.userId();
      }
    }
  },
}));
