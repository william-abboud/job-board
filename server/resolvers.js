export const resolvers = {
    Query: {
        jobs: async () => [
            {
                id: 'id1',
                title: 'Software Engineer',
                description: 'Build cool stuff',
            }
        ],
    }
};