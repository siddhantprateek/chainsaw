// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./MedicalDiacomContract.sol";

contract DicomMetaData {
    string private _Manufacturer;
    string private _SeriesTime;
    string private _PatientName;
    string private _InstitutionName;
    string private _PhysicianName;
    string private _StudyDescription;
    string private _StudyDate;
    string private _SeriesDate;
    uint256 private _SeriesNumber;

    constructor(
        string memory _Manufacturered,
        string memory _SeriesTimed,
        string memory _PatientNamed,
        string memory _InstitutionNamed,
        string memory _PhysicianNamed,
        string memory _StudyDescriptioned,
        string memory _StudyDated,
        string memory _SeriesDated,
        uint256 _SeriesNumbered
    ) {
        _Manufacturer = _Manufacturered;
        _SeriesTime = _SeriesTimed;
        _PatientName = _PatientNamed;
        _InstitutionName = _InstitutionNamed;
        _PhysicianName = _PhysicianNamed;
        _StudyDescription = _StudyDescriptioned;
        _StudyDate = _StudyDated;
        _SeriesDate = _SeriesDated;
        _SeriesNumber = _SeriesNumbered;
    }

    function getManufacturer() external view returns(string memory){
        return _Manufacturer;
    }

    function getSeriesTime() external view returns(string memory){
        return _SeriesTime;
    }

    function getPatientName() external view returns(string memory){
        return _PatientName;
    }

    function getIntituteName() external view returns(string memory){
        return _InstitutionName;
    }

    function getPhysicianName() external view returns(string memory){
        return _PhysicianName;
    }

    function getStudyDescription() external view returns(string memory) {
        return _StudyDescription;
    }

    function getStudyDate() external view returns(string memory) {
        return _StudyDate;
    }

    function getSeriesDate() external view returns(string memory) {
        return _SeriesDate;
    }

    function getSeriesNumber() external view returns(uint){
        return _SeriesNumber;
    }

}
