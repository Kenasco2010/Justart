CompanyAuditors = new Mongo.Collection("companyAuditors");
CompanyAuditors.attachSchema(new SimpleSchema({

    //Principal Place of Business
    TIN: {
        type: String,
        label: "Your TIN",
        max: 200
    },
    auditorsFirmName: {
        type: String,
        label: "Your auditor's firm Name",
        max: 200
    },
    auditorsFirmAddress: {
        type: String,
        label: "Your auditors firm address",
        max: 200
    },
    PMBOrDTD: {
        type: String,
        label: "PMB/DTD:",
        max: 200
    },
    NameOrHouseNo: {
        type: String,
        label: "Location of your house (house no/near location)",
        max: 200
    },

    street: {
        type: String,
        label: "Your Street",
        max: 200
    },
    city: {
        type: String,
        label: "Your city",
        max: 200
    },

    district: {
        type: String,
        label: "Your district",
        max: 200
    },
    Region: {
        type: String,
        label: "Your region",
        max: 200
    },
    audtorsMobileNo: {
        type: String,
        label: "Your mobile number",
        max: 200
    },
    audtorsOfficeNo: {
        type: String,
        label: "Your office number",
        max: 200
    },
    auditorOwner: {
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
