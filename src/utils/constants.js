const GOOGLE_API_KEY="AIzaSyDpWSXz5Eq-B2nY5CnkIWsu5aoxFr7LcoQ";
 export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;


 export const COMMENTS_API =
 "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
 GOOGLE_API_KEY +
 "&videoId="

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const RELATED_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=17&type=video&key=" +
  GOOGLE_API_KEY +
  "&relatedToVideoId=";