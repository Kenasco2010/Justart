DirectorSignature = new Mongo.Collection("directorSignature");
DirectorSignature.attachSchema(new SimpleSchema({

    //Principal Place of Business
    directorName: {
        type: String,
        label: "Director's Name",
        max: 200
    },
    picture: { //Business Logo if any
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                accept: 'image/*',
                label: 'Upload Scanned Signature'
            }
        }
    },
}));
