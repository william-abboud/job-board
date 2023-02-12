import { Job, Company, User } from './db.js';

export const resolvers = {
    Query: {
        company: (_, { id }) => Company.findById(id),
        job: (_, { id }) => Job.findById(id),
        jobs: async () => Job.findAll(),
        companies: async () => Company.findAll(),
        users: async () => User.findAll(),
    },
    Mutation: {
        createJob: async (_, { job }) => Job.create(job),
        deleteJob: async (_, { id }) => Job.delete(id),
        updateJob: async (_, { job }) => Job.update(job),
    },
    Job: {
        company: async (job) => Company.findById(job.companyId),
    },
    Company: {
        jobs: async (company) => Job.findAll(job => job.companyId === company.id),
    },
};