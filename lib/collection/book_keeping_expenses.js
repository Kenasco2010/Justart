BookKeepingExpenses = new Mongo.Collection("BookKeepingExpenses");
BookKeepingExpenses.attachSchema(new SimpleSchema({

    //Principal Place of Business
    items: {
        type: String,
        label: "Name of Item",
        max: 200
    },
    prices: {
        type: String,
        label: "Price of Item",
        max: 200
    },
    bookKeepingExpensesOwner: {
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
