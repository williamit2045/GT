const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
    cohort: {
        type: String,
        required: true,
        index: true,
    },
    uids: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    userCount: {
        type: Number,
        default: 0,
    },
    userCids: {
        type: [Schema.Types.ObjectId],
        ref: 'Cohort',
        default: [],
    },
    userCidCount: {
        type: Number,
        default: 0,
    },
    expirationDate: {
        type: Date,
    },
    hasExpirationDate: {
        type: Boolean,
        default: function () {
            return !!this.expirationDate;
        },
    },
    sharedSets: {
        type: [String], // List of shared set names
        default: [],
    },
    belongsToSharedSet: {
        type: Boolean,
        default: function () {
            return this.sharedSets.length > 0;
        },
    },
    morphemeType: {
        type: [String], // e.g., ['inference', 'axiom', 'opinion']
        default: [],
    },
    topics: {
        type: [String], // e.g., complex topics or general topics
        default: [],
    },/*
    hasComplexTopic: {
        type: Boolean,
        default: function () {
            return this.topics.some((topic) => topic.includes('complex')); // Simplistic complexity check
        },
    },*/
}, { timestamps: true });

module.exports = mongoose.model('Cohort', cohortSchema);
