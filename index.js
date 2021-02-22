const axios = require('axios');
const instagram = async(username) => {

    if (!username) return console.error("Username is undefined.");
    const options = {
        method: 'GET',
        url: `https://www.instagram.com/${username}/?__a=1`
    };

    try {
        const fetch = await axios(options);
        const data = fetch.data;

        const user = data.graphql.user;
        let media = user.edge_owner_to_timeline_media.edges;
        if (!media) return console.error("No media found on that profile.");
		
		media = media.map(edge=>{return{url:`https://www.instagram.com/p/${edge.node.shortcode }/`,imageUrl:edge.node.display_url,caption:edge.node.edge_media_to_caption.edges[0]?edge.node.edge_media_to_caption.edges[0].node.text:null,likesCount:edge.node.edge_liked_by.count,commentsCount:edge.node.edge_media_to_comment.count,timestamp:edge.node.taken_at_timestamp,isVideo:edge.node.is_video}});

        return {
            fullName: user.full_name,
            username: user.username,
            id: user.id,
            avatar: user.profile_pic_url_hd,
            biography: user.biography,
            followers: user.edge_followed_by.count,
            isPrivate: user.is_private,
            isVerified: user.is_verified,
            latestPost: media[0],
			allPosts: media
        }
    } catch (error) {
        return console.log(error);
    }
}

module.exports = instagram;