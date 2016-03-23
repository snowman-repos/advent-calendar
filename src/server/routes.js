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

// // All undefined asset or API routes should return a 404
// router.all("/*", function(req, res) {
// 		return res.status(404).render("error", {
//       errorCode: 404,
//       errorMessage: "Page not found"
//     });
// });

// Export the router
export default router;