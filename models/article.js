import mongoose from "mongoose";
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    },  
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {type: Date,default: Date.now},
    updatedAt: {type: Date,default: Date.now},
});

ArticleSchema.pre('save',function(next){
    this.updatedAt = Date.now();
    next();
});

export default mongoose.models.Article || mongoose.model('Article',ArticleSchema);