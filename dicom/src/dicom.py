import pydicom

# dataset = pydicom.dcmread("./src/assets/CT-MONO2-16-ankle.dcm")

# print(dataset)
def process_dicom(dicom_src: str):
    dicom_data = pydicom.dcmread(dicom_src)
    return dicom_data


# .
dataset = process_dicom("./train/5.dcm")

jsondata = {
    "Manufacturer": str(dataset.Manufacturer),
    "SeriesTime": str(dataset.SeriesTime),
    "PatientName": str(dataset.PatientName),
    "InstitutionName": str(dataset.InstitutionName),
    "ReferringPhysicianName": str(dataset.ReferringPhysicianName),
    "StudyDescription": str(dataset.StudyDescription),
    "StudyDate": str(dataset.StudyDate),
    "SeriesDate": str(dataset.SeriesDate),
    "SeriesNumber": dataset.SeriesNumber
    }
    
rawdata = dict(dataset)
# print()