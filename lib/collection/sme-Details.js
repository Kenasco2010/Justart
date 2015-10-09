SmeDetails = new Mongo.Collection("smeDetails");
SmeDetails.attachSchema(new SimpleSchema({
    //Principal Place of Business
    noOfEmployees: {
        type: String,
        label: "No of Employees Envisaged",
        max: 200
    },
    revenueEnvisaged: {
        type: String,
        label: "Revenue Envisaged",
        max: 200
    }
}));
