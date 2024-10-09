import { tweet } from "@/data/tweet"
import TweetItem from "../tweet/tweet-item"


const ProfileFeed = () => {
  return (
    <div>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  )
}

export default ProfileFeed
