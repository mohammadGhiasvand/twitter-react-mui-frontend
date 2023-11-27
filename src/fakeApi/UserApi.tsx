import StaticAvatarPic from "../assets/me.jpg";
import StaticCoverPic from "../assets/dummy4.jpg";
import PostPic from "../assets/react.svg";

export const fakeUser = {
  name: "Mohammad Ghiasvand",
  username: "moh_gh",
  profileSrc: StaticAvatarPic,
  coverPicSrc: StaticCoverPic,
  userId: 5,
  bio: "Hello, I am Fullstack software engineer who is designing this amazing application.",
  education: "Software Engineer",
  location: "Sweden, Jönköping",
  joinedBy: "November 2023",
  followers: "1,1K",
  followings: "3",
  postPic: PostPic,
};

export const fakeTrendingHashtags = [
  {
    topic: "Sports",
    hashtag: "football",
    tweets: "60.1K",
  },
  {
    topic: "Animals",
    hashtag: "catpurring",
    tweets: "23.9K",
  },
  {
    topic: "Singer",
    hashtag: "taylorswift",
    tweets: "220.4K",
  },
  {
    topic: "Technology",
    hashtag: "openai",
    tweets: "38.8K",
  },
  {
    topic: "Cooking",
    hashtag: "steak",
    tweets: "9.3K",
  },
];
