import { Router }   from "express"
import { Calendar } from "./api/calendar/calendar.controller"

const router = new Router();
const apiPath = "/api/" + (require("../../package.json")).version;

// API routes
router.get(apiPath + "/calendar/", Calendar.getAll);
router.get(apiPath + "/calendar/:id", Calendar.getOne);
router.post(apiPath + "/calendar/create", Calendar.create);
router.get(apiPath + "/calendar/delete/:id", Calendar.remove);
router.get(apiPath + "/calendar/find/:email", Calendar.find);
router.post(apiPath + "/calendar/update/:id", Calendar.update);

// Export the router
export default router;