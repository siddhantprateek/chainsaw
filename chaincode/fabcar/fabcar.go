// SPDX-License-Identifier: MIT

package main

import (
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// SmartContract to provide functions for manage Assets
type SmartContract struct {
	contractapi.Contract
}

// Voter describes basic voter's details
type Voter struct {
	VoterId   string `json:"voter_id"`
	VoterName string `json:"voter_name"`
	DOB       string `json:"dob"`
	Vote      string `json:"vote"`
}

func (s *SmartContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
	voters := []Voter{
		Voter{VoterId: "154JSAD", VoterName: "Malika", DOB: "20111995", Vote: "BJP"},
		Voter{VoterId: "321JGATD", VoterName: "Harsh Mehta", DOB: "20111989", Vote: "BJD"},
		Voter{VoterId: "56SADHE3", VoterName: "Karishma Shah", DOB: "20111998", Vote: "CONG"},
	}

	for i, voter := range voters {
		voterAsBytes, _ := json.Marshal(voter)
		err := ctx.GetStub().PutState("VOTER"+strconv.Itoa(i), voterAsBytes)

		if err != nil {
			return fmt.Errorf("Failed to put to world state, %s", err.Error())
		}
	}

	return nil
}

func main() {

	chaincode, err := contractapi.NewChaincode(new(SmartContract))

	if err != nil {
		fmt.Printf("Error create fabcar chaincode: %s", err.Error())
	}

	if err := chaincode.Start(); err != nil {
		fmt.Printf("Error starting fabcar chaincode: %s", err.Error())
	}

}
