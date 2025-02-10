import config from "config.js";

(async function main() {
    // first request
    {
        const response = await fetch(config.request.baseUrl, {
            method: config.request.method,
            headers: config.request.headers,
            keepalive: true,
        });

        const responseJson = await response.json();
    }
})();

/*
Field	Description
total	Total number of records
per_page	Number of records per page
current_page	Current page number
last_page	Total number of pages
next_page_url	URL for the next page (null if last page)
prev_page_url	URL for the previous page (null if first page)
*/
