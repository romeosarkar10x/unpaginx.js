const config = {
    request: {
        baseUrl: "https://unstop.com/api/public/live-leaderboard/63985/assessmentnewround",
        method: "GET",
        headers: {
            Cookie: "",
            Authorization: "Bearer <bearer-token>",
        },
    },
    helperFunctions: {
        transformResponseJson: (responseJson) => responseJson.data,
        previousPageUrl: (responseJson) => responseJson.prev_page_url,
        nextPageUrl: (responseJson) => responseJson.next_page_url,
        numberOfObjectsPerPage: (responseJson) => responseJson.per_page,
        totalNumberOfObjects: (responseJson) => responseJson.total,
        totalNumberOfPages: null,
    },
    settings: {
        numberOfSimultaneousRequests: 10,
        outputFilename: "unpaginxOutput.json",
    },
};

export default config;
