// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;


contract DiacomContract {

    string public Manufacturer;
    string public SeriesTime;
    string public PatientName;
    string public InstitutionName;
    string public PhysicianName;
    string public StudyDescription;
    string public StudyDate;
    string public SeriesDate;
    uint public SeriesNumber;

    constructor() {
        Manufacturer = "";
        SeriesTime = "";
        PatientName = "";
        InstitutionName = "";
        PhysicianName = "";
        StudyDescription = "";
        StudyDate = "";
        SeriesDate = "";
        SeriesNumber = 0;
    }

    function set(
        string memory _Manufacturer,
        string memory _SeriesTime,
        string memory _PatientName,
        string memory _InstitutionName,
        string memory _PhysicianName,
        string memory _StudyDescription,
        string memory _StudyDate,
        string memory _SeriesDate,
        uint _SeriesNumber
    ) public {
        Manufacturer = _Manufacturer;
        SeriesTime = _SeriesTime;
        PatientName = _PatientName;
        SeriesNumber = _SeriesNumber;
        InstitutionName = _InstitutionName;
        PhysicianName = _PhysicianName;
        StudyDescription = _StudyDescription;
        StudyDate = _StudyDate;
        SeriesDate = _SeriesDate; 
    }

    function getManufacturer() view public returns (string memory) {
        return Manufacturer;
    }

    function getSeriesTime() view public returns (string memory) {
        return SeriesTime;
    }

    function getPatientName() view public returns (string memory) {
        return PatientName;
    }

    function getInstitutionName() view public returns (string memory) {
        return InstitutionName;
    }

    function getPhyscianName() view public returns (string memory) {
        return PhysicianName;
    }

    function getStudyDescription() view public returns (string memory) {
        return StudyDescription;
    }

    function getStudyDate() view public returns (string memory) {
        return StudyDate;
    }

    function getSeriesDate() view public returns (string memory) {
        return SeriesDate;
    }

    function getSeriesNumbe() view public returns (uint) {
        return SeriesNumber;
    }

}