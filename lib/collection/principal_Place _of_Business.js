PrincepalPlaceOfBusiness = new Mongo.Collection("princepalPlaceOfBusiness");
PrincepalPlaceOfBusiness.attachSchema(new SimpleSchema({

    //Principal Place of Business
    nameOHouseNo: {
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
        max: 200
    },

}));
