import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
    // 내 비디오 형식 정의
    title: String,
    description: String,
    createAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    },
});

const video = mongoose.model("Video", videoSchema);
export default video;