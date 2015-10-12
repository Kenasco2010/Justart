DirectorParticulars = new Mongo.Collection("directorParticulars");
DirectorParticulars.attachSchema(new SimpleSchema({

    //Principal Place of Business
    TIN: {
        type: String,
        label: "Director's TIN",
        max: 200
    },
    firstName: {
        type: String,
        label: "Director's First Name",
        max: 200
    },
    middleName: {
        type: String,
        label: "Director's middle name",
        max: 200
    },
    surName: {
        type: String,
        label: "Director's Surname",
        max: 200
    },
    age: {
        type: String,
        label: "Director's age",
        max: 200
    },
    foreName: {
        type: String,
        label: "Any Former Forename",
        max: 200
    },
    nationality: {
        type: String,
        label: "Director's nationality",
        max: 200
    },
    nameOHouseNo: {
        type: String,
        label: "Location of your house (house no/near location)",
        max: 200
    },
    street: {
        type: String,
        label: "Name of street where Director lives",
        max: 200
    },
    city: {
        type: String,
        label: "Director's city",
        max: 200
    },
    district: {
        type: String,
        label: "Director's district",
        max: 200
    },
    Region: {
        type: String,
        label: "Director's region of stay",
        max: 200
    },
    businessOccupation: {
        type: String,
        label: "Director's Business Occupation",
        max: 200
    },
    Directorships: {
        type: String,
        label: "Particulars of other Directorships",
        max: 200
    },
    dirPartOwner: {
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
