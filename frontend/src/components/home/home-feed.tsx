import { tweet } from "@/data/tweet"
import TweetItem from "../tweet/tweet-item"


const HomeFeed = () => {
  return (
    <div>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  )
}

export default HomeFeed
