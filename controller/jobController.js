import Job from "../models/job.js";



export const saveJobData = async (req, res) => {
	try {
		const newJob = new Job(req.body);

		await newJob.save();
		res.status(200).json({message:"Job saved successfully"});
	} catch (error) {
		console.error("Error while calling jobController "+error.message);
		res.status(500).json({message:"Error while saving new JOb"});		
	}
}

export const getJobData = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(200).json(jobs);
	} catch (error) {
		console.error("Error while calling jobController "+error.message);
		res.status(500).json({message:"Error while saving new JOb"});		
	}
}

