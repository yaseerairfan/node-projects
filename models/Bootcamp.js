const mongoose=require('mongoose');
const bootcamp=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters long'],
    },
    slug:String,
    description:{
        type:String,
        required:[true,'please add a description'],
        maxlength:[500,'description can not be more than 500 characters long'],
    },
    website:{
        type:String,
        match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,'Please add a correct url']
    },
    phone:{
        type:String,
        maxlength:[20,'Phone number cannot be longer than 20 characters']
    },
    email:{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please enter a valid email'
        ]
    },
    address:{
        type:String,
        required:[true,'Please enter a address']
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
       
        },
        coordinates: {
            type: [Number],
         
            index:'2dsphere'
          },
          formattedAddress:String,
          street:String,
          state:String,
          city:String,
          zipcode:String,
          country:String,

    },
    careers:{
        type:[String],
        required:true,
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,'Rating should be atleast 1'],
        max:[10,'Rating cannot be more than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default:false
    },
    jobAssistance:{
        type:Boolean,
        default:false
    },
    jobGuarantee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Date,
        default:Date.now
    }
}

)
module.exports=mongoose.model('Bootcamp',bootcamp);