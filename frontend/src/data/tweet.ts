import {Tweet} from '@/types/tweet';
import {user} from './user';

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia magico',
    image: 'https://www.direcional.com.br/wp-content/uploads/2020/08/morar-em-Belo-Horizonte.jpg',
    likeCount: 523,    
    commentCount:2,
    retweetCount: 61,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 20, 0 )

}