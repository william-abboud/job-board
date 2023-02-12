import { Job, Company, User } from './db.js';

export const resolvers = {
    Query: {
        company: (_, { id }) => Company.findById(id),
        job: (_, { id }) => Job.findById(id),
        jobs: async () => Job.findAll(),
        companies: async () => Company.findAll(),
        users: async () => User.findAll(),
    },
    Job: {
        company: async (job) => Company.findById(job.companyId),
    },
    Company: {
        jobs: async (company) => Job.findAll(job => job.companyId === company.id),
    }
};