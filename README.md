<a href='http://dytuk.me/discord' target='_blank'>![alt Discord](https://img.shields.io/discord/659873886271438848?color=7289da&logo=discord&logoColor=white)</a> <a href='https://dytuk.me/bmac' target='_blank'>![alt support](https://img.shields.io/badge/donate-blue)</a>

# Latest Instagram Post
Fetch the latest post from any Instagram account and receive limited data.

# Installation
[![NPM](https://nodei.co/npm/latest-instapost.png)](https://nodei.co/npm/latest-instapost)

#  Usage
```javascript
const instagram = require('latest-instapost');

module.exports = async () => {
    const info = await instagram('danielytuk');
	console.log(info)
};
```

# Output
```
{
    fullName: 'Daniel',
    username: 'danielytuk',
    id: '6150148239',
    avatar: 'https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-19/s320x320/92845880_245778243453368_3987615454863556608_n.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_ohc=wnEA3gkoDIIAX8G-1t0&tp=1&oh=d844f074bd9e4d12f4ae2b7ec9cfadf3&oe=605AB271',
    biography: '20yr’ British YouTuber. (plus: Musician. CSR. Editor).',
    followers: 48,
    isPrivate: false,
    isVerified: false,
    latestPost: {
        url: 'https://www.instagram.com/p/CKJdR_hDsYc/',
        imageUrl: 'https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/e35/140005980_795784707638186_3254693728953030451_n.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=102&_nc_ohc=l5BHTfxFMiMAX9idgn6&tp=1&oh=e65c705cd0b42f74f7eb17fefff3e44a&oe=605CD5E7',
        caption: 'Thank you (as always) for all the support on the channel 💖💖💖',
        likesCount: 1,
        commentsCount: 0,
        timestamp: 1610890106,
        isVideo: false
    },
    allPosts: [{
        url: 'https://www.instagram.com/p/CKJdR_hDsYc/',
        imageUrl: 'https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/e35/140005980_795784707638186_3254693728953030451_n.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=102&_nc_ohc=l5BHTfxFMiMAX9idgn6&tp=1&oh=e65c705cd0b42f74f7eb17fefff3e44a&oe=605CD5E7',
        caption: 'Thank you (as always) for all the support on the channel 💖💖💖',
        likesCount: 1,
        commentsCount: 0,
        timestamp: 1610890106,
        isVideo: false
    }, {
        url: 'https://www.instagram.com/p/CJ1e2ZdFtsi/',
        imageUrl: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/136707184_1284906141890852_3761290746568862971_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=108&_nc_ohc=1LiO22zH8IkAX9PLr6A&tp=1&oh=34df7161e4e260061e4cf9d79af98919&oe=605CA4B0',
        caption: 'Went to a job interview today and, well... it results to one thing... waiting!!!!\n' +
            'Oh, you’re seeing the face of someone who’s had only 4 hours sleep.',
        likesCount: 2,
        commentsCount: 1,
        timestamp: 1610219840,
        isVideo: false
    }]
}
```