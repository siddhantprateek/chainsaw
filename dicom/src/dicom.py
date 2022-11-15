import pydicom

# read all the training files
def readAllDicomFiles():
    files = []
    with open('/test_file.txt') as f:
        lines  = f.readlines()
        files.append(str(lines))
    return files    

# dataset = pydicom.dcmread("./src/assets/CT-MONO2-16-ankle.dcm")

# @desp: process dicom file and extract metadata
# @returns: dicom file metadata
def process_dicom(dicom_src: str):
    dicom_data = pydicom.dcmread(dicom_src)
    return dicom_data


if __name__ == '__main__':

    # @desp: read all the dicom files and generated metadata corresponding to it
    # file_collection = readAllDicomFiles()
    # for file in file_collection:
    #     dataset = process_dicom(f'./test_files/${file}')

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
