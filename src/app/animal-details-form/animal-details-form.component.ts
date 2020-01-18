import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-details-form',
  templateUrl: './animal-details-form.component.html',
  styleUrls: ['./animal-details-form.component.css']
})
export class AnimalDetailsFormComponent implements OnInit {
  animalDetails = {};

  animalTypes = [
    { value: 'rabit', name: 'Rabit' },
    { value: 'dog', name: 'Dog' },
    { value: 'bird', name: 'Bird' },
    { value: 'cow', name: 'cow' },
    { value: 'goat', name: 'Goat' },
  ];

  animalHealthCondition = [
    { value: 'good', name: 'Good' },
    { value: 'treatment', name: 'Need treatment' },
  ];

  treatmentType = [
    { value: 'normal', name: 'Normal Checkup' },
    { value: 'hospitalization', name: 'Hospitalization' },
    { value: 'operation', name: 'Operation' }
  ];
  constructor() { }

  ngOnInit() {
    this.animalDetails = {
      name: '',
      images: '',
      type: '',
      healthCondition: '',
      treatmentType: '',
      diseaseName: '',
      age: '',
      isDomestic: false,
      ownerName: '',
      ownerContactNumber: '',
      needOtherHospitalHelp: false
    };
  }

  submitAnimalDetails() {
    console.log(this.animalDetails);
  }

  processImage(inputImage) {
    console.log(inputImage.files);
  }
}
