import mongoose from "mongoose";
import article from "./article";

const CommentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    articleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true,
    },
    parentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null, 
    },
    content:{
        type: String,
        required: true,
    },
    likes:{
        type: Number,
        default:0,
    },
    createdAt: {type: Date,default: Date.now},
    updatedAt: {type: Date,default: Date.now},
});

CommentSchema.pre('save',function(next){
    this.updatedAt = Date.now();
    next();
});

export default mongoose.models.Comment || mongoose.model('Comment',CommentSchema);