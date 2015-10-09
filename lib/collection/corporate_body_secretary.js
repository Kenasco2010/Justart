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
  corporateRepSignature: {
    type: String,
    label: "Signature (corporate Representative)",
    max: 200
  }
}));
