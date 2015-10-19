Meteor.methods({
    sendEmail: function () {;

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: "kennedy.anyinatoe@meltwater.org",
            from: "kennedy.anyinatoe@meltwater.org",
            subject: "Test of message",
            text: "This is just a test to check the message"
        });
    }
});
