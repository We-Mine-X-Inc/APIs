"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTRACT_FIELDS_TO_POPULATE = exports.ContractStage = exports.MinerIntakeStage = exports.MinerResaleStage = exports.MinerHostingConfigurationStage = void 0;
var MinerHostingConfigurationStage;
(function (MinerHostingConfigurationStage) {
    MinerHostingConfigurationStage[MinerHostingConfigurationStage["UNKNOWN"] = 0] = "UNKNOWN";
    MinerHostingConfigurationStage[MinerHostingConfigurationStage["CLIENT_SETUP_INSTRUCTIONS_SENT"] = 1] = "CLIENT_SETUP_INSTRUCTIONS_SENT";
    MinerHostingConfigurationStage[MinerHostingConfigurationStage["CLIENT_SETUP_INFO_RECEIVED"] = 2] = "CLIENT_SETUP_INFO_RECEIVED";
    MinerHostingConfigurationStage[MinerHostingConfigurationStage["MINER_SETUP_COMPLETION_SENT"] = 3] = "MINER_SETUP_COMPLETION_SENT";
    MinerHostingConfigurationStage[MinerHostingConfigurationStage["SUCCESSFULLY_HOSTING"] = 4] = "SUCCESSFULLY_HOSTING";
})(MinerHostingConfigurationStage = exports.MinerHostingConfigurationStage || (exports.MinerHostingConfigurationStage = {}));
var MinerResaleStage;
(function (MinerResaleStage) {
    MinerResaleStage[MinerResaleStage["UNKNOWN"] = 0] = "UNKNOWN";
    MinerResaleStage[MinerResaleStage["MINER_SENT_TO_CUSTOMER"] = 1] = "MINER_SENT_TO_CUSTOMER";
    MinerResaleStage[MinerResaleStage["SHIPMENT_TRACKING_INFO_SENT"] = 2] = "SHIPMENT_TRACKING_INFO_SENT";
    MinerResaleStage[MinerResaleStage["MINER_RECEIVED_BY_CUSTOMER"] = 3] = "MINER_RECEIVED_BY_CUSTOMER";
})(MinerResaleStage = exports.MinerResaleStage || (exports.MinerResaleStage = {}));
var MinerIntakeStage;
(function (MinerIntakeStage) {
    MinerIntakeStage[MinerIntakeStage["UNKNOWN"] = 0] = "UNKNOWN";
    MinerIntakeStage[MinerIntakeStage["OWNER_CONTACT_INFO_GATHERED"] = 1] = "OWNER_CONTACT_INFO_GATHERED";
    MinerIntakeStage[MinerIntakeStage["QUOTES_SOURCED"] = 2] = "QUOTES_SOURCED";
    MinerIntakeStage[MinerIntakeStage["CONTRACT_AGREEMENTS_SENT"] = 3] = "CONTRACT_AGREEMENTS_SENT";
    MinerIntakeStage[MinerIntakeStage["CONTRACT_AGREEMENTS_SIGNED"] = 4] = "CONTRACT_AGREEMENTS_SIGNED";
    MinerIntakeStage[MinerIntakeStage["HARDWARE_ORDERS_PLACED"] = 5] = "HARDWARE_ORDERS_PLACED";
    MinerIntakeStage[MinerIntakeStage["SUPPLIER_INVOICES_RECEIVED"] = 6] = "SUPPLIER_INVOICES_RECEIVED";
    MinerIntakeStage[MinerIntakeStage["SHIPMENT_TRACKING_INFO_RECEIVED"] = 7] = "SHIPMENT_TRACKING_INFO_RECEIVED";
    MinerIntakeStage[MinerIntakeStage["HARDWARE_REACHED_CUSTOMS"] = 8] = "HARDWARE_REACHED_CUSTOMS";
    MinerIntakeStage[MinerIntakeStage["HARDWARE_RECEIVED"] = 9] = "HARDWARE_RECEIVED";
    MinerIntakeStage[MinerIntakeStage["ISOLATED_QA"] = 10] = "ISOLATED_QA";
    MinerIntakeStage[MinerIntakeStage["FACILITY_QA"] = 11] = "FACILITY_QA";
    MinerIntakeStage[MinerIntakeStage["RETURNED_TO_SUPPLIER"] = 12] = "RETURNED_TO_SUPPLIER";
    MinerIntakeStage[MinerIntakeStage["SUCCESSFULLY_INTOOK"] = 13] = "SUCCESSFULLY_INTOOK";
})(MinerIntakeStage = exports.MinerIntakeStage || (exports.MinerIntakeStage = {}));
var ContractStage;
(function (ContractStage) {
    ContractStage[ContractStage["UNKNOWN"] = 0] = "UNKNOWN";
    ContractStage[ContractStage["ACTIVE"] = 1] = "ACTIVE";
    ContractStage[ContractStage["INACTIVE"] = 2] = "INACTIVE";
    ContractStage[ContractStage["CANCELED"] = 3] = "CANCELED";
    ContractStage[ContractStage["COMPANY_ONLY"] = 4] = "COMPANY_ONLY";
})(ContractStage = exports.ContractStage || (exports.ContractStage = {}));
exports.CONTRACT_FIELDS_TO_POPULATE = [
    { path: "customer" },
    { path: "miner" },
    { path: "hostingContract.finalCompanyPool" },
    {
        path: "hostingContract.poolMiningOptions",
        populate: { path: "pool" },
    },
];
//# sourceMappingURL=contract.interface.js.map