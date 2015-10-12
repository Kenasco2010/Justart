CompanyPostalAddress = new Mongo.Collection("companyPostalAddress");
CompanyPostalAddress.attachSchema(new SimpleSchema({

    //Principal Place of Business
    careOf: {
        type: String,
        label: "Care Of (C/O)",
        max: 200
    },
    postalType: { //Tick box (p o box, pmb, DTD)
        type: String,
        label: "Type of Postal Address",
        max: 200
    },
    city: {
        type: String,
        label: "City where the company is",
        max: 200
    },
    district: {
        type: String,
        label: "District where the company is",
        max: 200
    },
    Region: {
        type: String,
        label: "Region where the company is",
        max: 200
    },
    phoneNo: {
        type: String,
        label: "Please separate phone numbers with comma (,)",
        max: 200
    },
    mobileNo: {
        type: String,
        label: "Please separate mobile numbers with comma (,)",
        max: 200
    },
    Fax: {
        type: String,
        label: "Please separate fax numbers with comma (,)",
        max: 200
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    webiste: {
        type: String,
        label: "Company's Website",
        max: 200
    },
    postAddOwner: {
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
