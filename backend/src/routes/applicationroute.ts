import express from "express"
import multer from "multer"
import { createApplication } from "../controllers/applicationcontroller"
import { getUserApplications } from "../controllers/applicationcontroller"
import { getGigApplications } from "../controllers/applicationcontroller"
import { scheduleInterview } from "../controllers/applicationcontroller"
import { hireApplicant } from '../controllers/applicationcontroller';
import { rejectApplicant } from '../controllers/applicationcontroller';


const router = express.Router()

const storage = multer.memoryStorage() // You can also use diskStorage
const upload = multer({ storage })

// Route to create a new application
// 'resume' is the field name for the PDF
router.post("/", upload.single("resume"), createApplication)

router.patch("/schedule-interview/:applicationId", scheduleInterview);
router.patch('/hire/:applicationId', hireApplicant); // PATCH because it's a partial update
router.patch('/reject/:applicationId', rejectApplicant);



// Route to get all applications of a user
router.get("/", getUserApplications)
router.get("/gig/:gigId", getGigApplications)


export default router
