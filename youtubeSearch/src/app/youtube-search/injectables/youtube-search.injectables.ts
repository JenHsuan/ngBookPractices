import {
    YoutubeSearchService,
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from '../services/youtube-search.service';

export const youtubeSearchInjectables: Array<any> = [
    { provider: YoutubeSearchService, useClass: YoutubeSearchService},
    { provider: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    { provider: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
