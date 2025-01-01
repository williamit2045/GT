const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  alias: {
    type: String,
    required: false,
  },
  madeCohortIds: {
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
  cids: {
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
  cohortCount: {
    type: Number,
    default: 0,
    ref: 'User' //how do I make sure this value counts cids above?
  },
  cohortUids: { // an array of the user id's of all users in the set of all cohorts this user belongs to
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  cohortUidCount: { //how to I make this value just be a count of uidsOfAllCohorts above?
    type: Number,
    default: 0,
    index: true,
  },
  expiringCids: { //an array of all cohorts expiring within an as-of-yet undesignated timeframe (1 month? user-specified?)
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
}, { timestamps: true });

// Middleware to synchronize `cids` with `madeCids` and update `cohortCount`
userSchema.pre("save", async function (next) {
  // Add madeCids to cids if not already included
  this.madeCohortIds.forEach(madeCid => {
    if (!this.cids.includes(madeCid)) {
      this.cids.push(madeCid);
    }
  });

  // Update cohortCount based on the length of cids
  this.cohortCount = this.cids.length;

  // Calculate cohortUidCount based on unique users in `cohortsUids`
  this.cohortUidCount = [...new Set(this.cohortUids)].length;
  next();
});

// Helper method to join a cohort and update counters
userSchema.methods.joinCohort = async function (cohortId) {
  if (!this.cids.includes(cohortId)) {
    this.cids.push(cohortId);
    this.cohortCount += 1;
    await this.save();
  }
};

// Helper method to leave a cohort and update counters
userSchema.methods.leaveCohort = async function (cohortId) {
  this.cids = this.cids.filter(cid => cid.toString() !== cohortId.toString());
  this.cohortCount = this.cids.length;
  await this.save();
};

module.exports = mongoose.model('User', userSchema);
