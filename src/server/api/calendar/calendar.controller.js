import Calendar from "./calendar.model";

import pkg      from "../../../../package.json";

/**
 * Create a new Calendar based on JSON data
 * posted to the API.
 * @param  {JSON}     The new Calendar
 * @return {JSON}     The new Calendar
 */
let create = function(req, res) {

  let newCalendar = new Calendar(req.body);

  newCalendar.save(function(err, calendar) {

    if(err) {
      return res.status(500).render("error", {
        description: pkg.description,
        errorCode: 500,
        errorMessage: err,
        keywords: pkg.keywords,
        title: "500 Error : " + err + " - " + pkg.title,
        url: pkg.homepage
      });
    } else {
      return res.status(200).json(calendar);
    }

  });

};

/**
 * Remove a specific Calendar based on the Calendar ID.
 * @param  {String}   The Calendar ID
 * @return {null}     204 Status
 */
let remove = function(req, res) {

  Calendar.findByIdAndRemove(req.params.id, function(err, user) {

    if(err) {
      return res.status(500).render("error", {
        description: pkg.description,
        errorCode: 500,
        errorMessage: err,
        keywords: pkg.keywords,
        title: "500 Error : " + err + " - " + pkg.title,
        url: pkg.homepage
      });
    } else {
      return res.status(204).end();
    }

  });

};

/**
 * Find all Calendars for a specific email address.
 * @param  {String}     The email address
 * @return {Object}     An array of Calendar objects
 */
let find = function(req, res) {

  Calendar.find({
    email: req.params.email
  }, function(err, calendars) {

    if(err) {
      return res.status(500).render("error", {
        description: pkg.description,
        errorCode: 500,
        errorMessage: err,
        keywords: pkg.keywords,
        title: "500 Error : " + err + " - " + pkg.title,
        url: pkg.homepage
      });
    } else {
      return res.status(200).json(calendars);
    }

  });

};

/**
 * Get all Calendars.
 * @return {Object}     An array of Calendar objects
 */
let getAll = function(req, res) {

  Calendar.find({}, function(err, calendars) {

    if(err) {
      return res.status(500).render("error", {
        description: pkg.description,
        errorCode: 500,
        errorMessage: err,
        keywords: pkg.keywords,
        title: "500 Error : " + err + " - " + pkg.title,
        url: pkg.homepage
      });
    } else {
      return res.status(200).json(calendars);
    }

  });

};

/**
 * Get a specific Calendar based on the Calendar ID.
 * @param  {String}   The Calendar ID
 * @return {JSON}     The Calendar object
 */
let getOne = function(req, res) {

  Calendar.findById(req.params.id , function(err, calendar) {

		if(err) {
      return res.status(500).render("error", {
        description: pkg.description,
        errorCode: 500,
        errorMessage: err,
        keywords: pkg.keywords,
        title: "500 Error : " + err + " - " + pkg.title,
        url: pkg.homepage
      });
    } else {
      return res.status(200).json(calendar);
    }

  });

};

/**
 * Update a specific calendar based on the Calendar ID.
 * Only the name and windows values may be updated; they
 * will overwrite the previous values.
 * @param  {JSON}     The updated Calendar object
 * @return {JSON}     The updated Calendar object
 */
let update = function(req, res) {

  let newCalendar = req.body;

  Calendar.findById(req.params.id, function(err, calendar) {

    calendar.name = newCalendar.name;
    calendar.windows = newCalendar.windows;

    calendar.save(function(err, calendar) {

      if(err) {
        return res.status(500).render("error", {
          description: pkg.description,
          errorCode: 500,
          errorMessage: err,
          keywords: pkg.keywords,
          title: "500 Error : " + err + " - " + pkg.title,
          url: pkg.homepage
        });
      } else {
        return res.status(200).json(calendar);
      }

    });

  });

};

// Export all the relevant functions
exports.Calendar = {
  create: create,
  remove: remove,
  find: find,
  getAll: getAll,
  getOne: getOne,
  update: update
}