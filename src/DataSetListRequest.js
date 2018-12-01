define(["OsmMessageType"], function (OsmMessageType) {
    /**
     * @alias DataSetListRequest
     * @constructor
     */
    var DataSetListRequest = function () {
        this.type = OsmMessageType.DATASET_LIST_REQUEST;
    };
    return DataSetListRequest;
});