// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract MedicalDiacomContract {
    string private Manufacturer;
    string private SeriesTime;
    string private PatientName;
    string private InstitutionName;
    string private PhysicianName;
    string private StudyDescription;
    string private StudyDate;
    string private SeriesDate;
    uint256 private SeriesNumber;

    mapping(uint256 => address) public ownerTokens;

    constructor(
		
	) {
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
}
