async function getEmployees(event) {
  try {
    const input = event?.input;
    console.log("getEmployees called");
    const {ID, fromDate, toDate } = input;

    const queryParams = new URLSearchParams({
      ID: ID,
      fromDate: fromDate,
      toDate: toDate,
    });
    const employeesResponse = await fetch(
      `${process.env.EMPLOYEES_API_BASE}/employees?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const data = await employeesResponse.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

module.exports = { getEmployees };
