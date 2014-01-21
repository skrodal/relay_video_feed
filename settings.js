var SETTINGS = {
    /** 
     * Which backend to use for Video on demand. Choose from the following providers: 
     * 
     * Camtasia Relay (from UNINETT eCampus), Vimeo or Youtube 
     */
    vodprovider: "relay",

    /** 
     * Where to get content from the different providers
     *
     * Relay: Username
     * Vimeo: Use the channel concept
     * Youtube: USe the playlist concept
     */
    relay_user:         "relay_user_name",
    vimeo_channel:      "add_channel",
    youtube_playlist:   "add_playlist",
 
    /* Show twitter stream, search for hashtag*/
    twitter: false,
    count: 20,
    hashtag: "#uninett_relay_video_feed",

    /* Enable Disqus comments*/
    comments: false,
    disqus_shortname: "uninett_relay_video_feed",
    dev_mode: 1

};