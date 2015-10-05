Companies = new Mongo.Collection("companies");
Companies.attachSchema(new SimpleSchema({
    businessName: {
        type: String,
        label: "Business Name",
        max: 200
    },
    TIN: {
        type: String,
        label: "TIN (if available)",
        max: 200,
        optional: true
    },
    briefDescription: {
        type: String,
        label: "Description",
        max: 1000
    },
    address: {
        type: String,
        label: "Address",
        max: 200
    },
    location: {
        type: String,
        label: "Location of Business",
        max: 200
    },
    contact: {
        type: String,
        label: "Business contact",
        max: 200
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                accept: 'image/*',
                label: 'Choose picture'
            }
        }
    },

}));
