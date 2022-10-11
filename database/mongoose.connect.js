const mongoose = require('mongoose');

exports .connect = async () => {
     await mongoose.connect(process.env.MONGO_URL,{keepAlive:true,
        useNewUrlparser:true,useUnifiedTopology:true});
       return mongoose.connection;
};

mongoose.connection.on('connected',()=>{
    console.log('mongodDB connected');
});

mongoose.connection.on('disconnected',()=>{
    console.log('mongodDB connected');
});

