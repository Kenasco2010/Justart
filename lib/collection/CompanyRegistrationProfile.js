CompanyRegistrationProfiles = new Mongo.Collection("companyRegistrationProfiles");
CompanyRegistrationProfiles.attachSchema(new SimpleSchema({
    nameOfCompany: {
        type: String,
        label: "Business Name",
        max: 200,

    },
    presentedBy: {
        type: String,
        label: "TIN (if available)",
        max: 200,
        optional: true
    },
    principalActivity: {
        type: String,
        label: "Principal Activity",
        max: 1000
    },
    iSICCode: {
        type: String,
        label: "ISIC Code (If any)",
        max: 200
    },
    //Business Address Information
    nameOrHouseNo: {
        type: String,
        label: "Location of Business (house no/near location)",
        max: 200
    },
    street: {
        type: String,
        label: "Street of Business",
        max: 200
    },
    city: {
        type: String,
        label: "City of Business",
        max: 200
    },
    district: {
        type: String,
        label: "District of Business",
        max: 200
    },
    Region: {
        type: String,
        label: "Region of Business",
        max: 200
    },
    ownershipOfPremises: { //options Rented, Owner Occupied, Free User
        type: String,
        allowedValues: ['Rented', 'Owner Occupied', 'Free User'],
        label: "Ownership of Premises",
        max: 200
    },
     landlordsName: { //Fill only if rented
        type: String,
        label: "Landlord's Name",
        max: 200,
         optional: true
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
    companyRegProOwner: {
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
