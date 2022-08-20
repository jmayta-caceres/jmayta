/**
 * Retrieve a GET request for URL given, and return a JSON response.
 *
 * @export
 * @param {string} apiURL
 * @return {JSON} any
 */
export async function fetchData(apiURL) {
  try {
    // ↓ returns resolves to the Response object representing the response to request.
    const response = await fetch(apiURL);
    // ↓ returns a Promise that resolves with the result of parsing the request body as JSON
    const data = await response.json();
    // ↓ returns the data in JSON format
    return data;
  } catch (error) {
    console.error("Ups, something wrong happened 'fetching' data...");
    console.warn("Loading static data...");
    return staticData();
  }
}
