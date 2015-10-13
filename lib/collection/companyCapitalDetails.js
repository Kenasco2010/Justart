CapitalDetails = new Mongo.Collection("capitalDetails");
CapitalDetails.attachSchema(new SimpleSchema({

    //Principal Place of Business
    authorisedShares: {
        type: String,
        label: "Authorised shares",
        max: 200
    },
    statedCapital: {
        type: String,
        label: "Stated Capital",
        max: 200
    },
    //Number of Authorised Shares of Each Class:p
    ordinaryShares: {
        type: String,
        label: "Ordinary Shares",
        max: 200
    },
    preferenceShares: {
        type: String,
        label: "Preference Shares",
        max: 200
    },
//Number of Issued Shares of Each Class:
ordinaryShares: {
    type: String,
    label: "Ordinary Shares",
    max: 200
},
preferenceShares: {
    type: String,
    label: "Preference Shares",
    max: 200
},
// Amount Paid In Cash of Each Class:
ordinaryShares: {
    type: String,
    label: "Ordinary Shares",
    max: 200
},
preferenceShares: {
    type: String,
    label: "Preference Shares",
    max: 200
},
// Amount Paid Otherwise than in Cash of Each Class:
ordinaryShares: {
    type: String,
    label: "Ordinary Shares",
    max: 200
},
preferenceShares: {
    type: String,
    label: "Preference Shares",
    max: 200
},
// Amount Remaining to be Paid on Each Class:
ordinaryShares: {
    type: String,
    label: "ordinaryShares (Unpaid)",
    max: 200
},
ordinaryShares: {
    type: String,
    label: "ordinaryShares (Due)",
    max: 200
},
preferenceShares: {
    type: String,
    label: "Preference Shares (Due)",
    max: 200
},
preferenceShares: {
    type: String,
    label: "Preference Shares (Due)",
    max: 200
},
address: {
    type: String,
    label: "Address at which register of members is kept and maintained",
    max: 200
},
    capitalDetOwner: {
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
