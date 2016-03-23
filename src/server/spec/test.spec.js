var request = require("request");
var AsyncSpec = require("node-jasmine-async");

var baseURL = "http://localhost:4444";
var apiURL = "http://localhost:4444/api/1.0.0/calendar";

/**
 * Test if a string represents a JSON object.
 * @param  {Object}   The input to be tested
 * @return {Boolean}  The result of the test
 */
var isJSON = function isJSON(str) {

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;

};

// We're going to create a new record
// before each test, using dummy data
var newRecord = {};
var dummyData =  {
	date: new Date,
	email: "test@record.com",
	name: "test calendar",
	year: "2016",
	windows: []
}

describe("The server-side app", function () {

	var async = new AsyncSpec(this);

  /**
   * Create a new record before each test
   */
	async.beforeEach(function(done) {

		var options = {
  		method: "post",
  		body: dummyData,
  		json: true,
  		url: apiURL + "/create"
		};

		request(options, function (err, response, body) {

			if(err) {
				console.log(err);
			}

      newRecord = response.body;
			done()

    });

	});

  /**
   * Delete the newly created record after each test
   */
	async.afterEach(function(done) {

		request.get(apiURL + "/delete/" + newRecord._id, function (err, response, body) {

			if(err) {
				console.log(err);
			}

			done();

		});

	});

  async.it("returns a 200 status code for the index route", function (done) {

    request.get(baseURL, function (err, response, body) {

      expect(response.statusCode).toBe(200);

			done();

    });

  });

  async.it("returns an HTML page for the index route", function (done) {

    request.get(baseURL, function (err, response, body) {

      expect(response.body).toContain("<title>Advent Calendar</title>");
			expect(response.headers["content-type"]).toContain("text/html");
      expect(typeof(response.body)).toBe("string");

			done();

    });

  });

  describe("API", function () {

    /**
     * Should successfully return a JSON object.
     */
    async.it("gets all the calendars", function (done) {

			request.get(apiURL + "", function (err, response, body) {

				expect(response.statusCode).toBe(200);
				expect(isJSON(response.body)).toBe(true);
				expect(response.headers["content-type"]).toContain("application/json");

				done();

	    });

    });

    /**
     * Should successfully return a JSON object representing
     * a single Calendar. The Calendar returned should be the
     * dummy data we added before the test.
     */
    async.it("gets all the calendars for a specific email address", function (done) {

			request.get(apiURL + "/find/test@record.com" , function (err, response, body) {

				var record = JSON.parse(body)[0];

				expect(response.statusCode).toBe(200);
				expect(isJSON(response.body)).toBe(true);
				expect(response.headers["content-type"]).toContain("application/json");
				expect(record.name).toMatch("test calendar");

				done();

	    });

    });

    /**
     * Should successfully return a JSON object for calendar
     * with the ID of that which we added before the test.
     * The Calendar returned should be the dummy data we
     * added before the test.
     */
    async.it("gets a calendar with a specific ID", function (done) {

			request.get(apiURL + "/" + newRecord._id , function (err, response, body) {

				var record = JSON.parse(body);

				expect(response.statusCode).toBe(200);
				expect(isJSON(response.body)).toBe(true);
				expect(response.headers["content-type"]).toContain("application/json");
				expect(record.name).toMatch("test calendar");

				done();

	    });

    });

    async.it("creates a calendar", function (done) {

      // We're going to create another calendar, different
      // to that which we added before the test.
			var testEmail = "hgiweguiegw@oqeigei.com";
			var newDummyData = JSON.parse(JSON.stringify(dummyData));
			newDummyData.email = testEmail;
			var testRecord = {};

      // First confirm that no calendars can be found for this
      // new email address.
			request.get(apiURL + "/find/" + testEmail , function (err, response, body) {

				expect(response.statusCode).toBe(200);
				expect(isJSON(response.body)).toBe(true);
				expect(response.headers["content-type"]).toContain("application/json");
				expect(JSON.parse(body).length).toBe(0);

				var options = {
		  		method: "post",
		  		body: newDummyData,
		  		json: true,
		  		url: apiURL + "/create"
				};

        // Now create a new calendar with the new email address
        // and expect the Calendar to be returned.
				request(options, function (err, response, body) {

					expect(response.statusCode).toBe(200);
					expect(response.headers["content-type"]).toContain("application/json");
					expect(body.email).toMatch(testEmail);

          // Delete the new calendar.
					request.get(apiURL + "/delete/" + body._id, function (err, response, body) {

						if(err) {
							console.log(err);
						}

						done();

					});

		    });

	    });

    });

    async.it("updates a calendar", function (done) {

      // We're going to update the calendar we just created
      // before the test.
			var testName = "test record - updated";
			var newDummyData = JSON.parse(JSON.stringify(dummyData));
			newDummyData.name = testName;

      // First confirm that the name of the calendar is
      // 'test calendar', as per the dummy data
      request.get(apiURL + "/" + newRecord._id , function (err, response, body) {

				var record = JSON.parse(body);

				expect(record.name).toMatch("test calendar");

				var options = {
					method: "post",
					body: newDummyData,
					json: true,
					url: apiURL + "/update/" + record._id
				};

        // Now update the Calendar, using the new dummy data
        // and confirm that it's the same Calendar and that
        // the name has changed.
				request(options, function (err, response, body) {

					expect(response.statusCode).toBe(200);
					expect(response.headers["content-type"]).toContain("application/json");
          expect(body._id).toMatch(newRecord._id);
        	expect(body.name).toMatch(testName);

          done();

				});

			});

    });
  });
});