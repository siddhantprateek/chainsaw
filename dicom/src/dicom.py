import pydicom

dataset = pydicom.dcmread("./src/assets/CT-MONO2-16-ankle.dcm")

# print(dataset)

jsondata = {
    "Manufacturer": str(dataset.Manufacturer),
    "SeriesTime": str(dataset.SeriesTime),
    "PatientName": str(dataset.PatientName),
    "InstitutionName": str(dataset.InstitutionName),
    "ReferringPhysicianName": str(dataset.ReferringPhysicianName),
    "StudyDescription": str(dataset.StudyDescription),
    "StudyDate": str(dataset.StudyDate),
    "SeriesDate": str(dataset.SeriesDate),
    "SeriesNumber": 123
    }

