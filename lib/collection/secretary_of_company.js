CompanySecretary = new Mongo.Collection("companySecretary");
CompanySecretary.attachSchema(new SimpleSchema({

    //Principal Place of Business
    TIN: {
        type: String,
        label: "Secretary TIN",
        max: 200
    },
    firstName: {
        type: String,
        label: "Your First Name",
        max: 200
    },
    middleName: {
        type: String,
        label: "Your Middle Name",
        max: 200
    },
    surName: {
        type: String,
        label: "Your Surname",
        max: 200
    },
    age: {
        type: String,
        label: "Your Age",
        max: 200
    },
    foreName: {
        type: String,
        label: "Any Former Forename",
        max: 200
    },
    nationality: {
        type: String,
        label: "Your nationality",
        max: 200
    },
    nameOHouseNo: {
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
    businessOccupation: {
        type: String,
        label: "Your Business Occupation",
        max: 200
    }

}));
