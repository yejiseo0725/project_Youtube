import Video from "../models/Video";

export const home = (req, res) => {
    Video.find({}, (error, videos) => {
        return res.render("home", { pageTitle: "Home", videos });
    });
};
export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};
export const getUproad = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
    const { title } = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: "Just Now",
        views: 0,
        id: videos.length + 1,
    }
    videos.push(newVideo);
    return res.redirect("/");
};




