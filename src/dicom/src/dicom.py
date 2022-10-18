import pydicom

dataset = pydicom.dcmread("./assets/CT-MONO2-16-ankle.dcm")

print(dataset)