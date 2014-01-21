$(".tweet").tweet({
    avatar_size: 48,
    count: SETTINGS.count,
    query: SETTINGS.hashtag,
    loading_text: "loading social...",
    refresh_interval: 30
});