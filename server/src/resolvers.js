const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.TrackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.TrackAPI.getAuthor(authorId);
        },
    },
};

module.exports = resolvers;
