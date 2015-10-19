BookKeepingIncomes = new Mongo.Collection("bookKeepingIncomes");
BookKeepingIncomes.attachSchema(new SimpleSchema({

    //Principal Place of Business
    typeOfIncome: {
        type: String,
        label: "Type of income received",
        max: 200
    },
    amount: {
        type: String,
        label: "Amount Received",
        max: 200
    },

    bookKeepingIncomesOwner: {
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
    createdAt: {
        type: Date,
        label: Date,
        autoform: {
            omit: true
        },
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
}));
