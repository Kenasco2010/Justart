SentRegForm = new Mongo.Collection("sentRegForm");
SentRegForm.attachSchema(new SimpleSchema({
    regFormId: {
        type: String,
        label: "Registration Form Id",
        max: 200
    },
    regFormUser: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            if (this.isInsert){
                return Meteor.userId();
            }
        }
    }
}));
