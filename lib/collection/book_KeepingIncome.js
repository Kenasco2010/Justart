Transactions = new Mongo.Collection("transactions");
Transactions.attachSchema(new SimpleSchema({

    //Principal Place of Business
    transactionName: {
        type: String,
        label: "Type of income received",
        max: 200
    },
    amount: {
        type: String,
        label: "Amount Received",
        max: 200
    },
    date: {
        type: String,
        label: "Date Received",
        max: 200
    },
    type: {
        type: String,
        label: "Type of Transaction",
        allowedValues: ['Cash In', 'Cash Out'],
        max: 200
    },

    transactionOwner: {
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
