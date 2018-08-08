import { Component, OnInit, OnDestroy } from '@angular/core';

import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  openModalWindow: boolean = false;
  imagePointer: number = 0;

  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;

  designaArray: Array<Image> = [
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken1.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken2.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken3.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken4.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken5.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken6.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken7.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken8.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken9.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken10.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken11.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken12.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken13.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken14.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken15.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken16.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken17.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken18.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken19.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken20.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Kjøkken21.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Spiserom.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
    new Image(
      '../assets/JPG/Designa_Kjøkken/Vaskerom.jpg',
      null,
      'Stort og fint kjøkken',
      null
    ),
  ];

  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(this.designaArray).delay(300);

  // array with a single image inside (the first one)
  singleImage: Observable<Array<Image>> = Observable.of([
    new Image(
      '../assets/images/gallery/img1.jpg',
      '../assets/images/gallery/thumbs/img1.jpg',
      'Description 1',
      'http://www.google.com'
    )]
  );

  // array of images initialized inside the onNgInit() of this component
  // in an asynchronous way subscribing to an Observable with a delay.
  // This is not a real use-case, but it's a way to simulate a scenario where
  // you have to subscribe to an Observable to get data and to set public vars
  designaArraySubscribed: Array<Image>;

  customDescription: Description = {
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image',
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  private subscription: Subscription;
  private designaArraySubscription: Subscription;


  constructor() { }

  ngOnInit() {
    this.designaArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.designaArraySubscribed = this.designaArray;
    });
  }

  openImageModal(image: Image) {
    this.imagePointer = this.designaArray.indexOf(image);
    this.openModalWindow = true;
  }

  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  onVisibleIndex(event: ImageModalEvent) {
    const numbah = JSON.stringify(event.result);
    const index = parseInt(numbah) - 1;
    this.customFullDescription.customFullDescription = this.designaArray[index].description;
  }

  onCloseImageModal(event: ImageModalEvent) {
    this.openModalWindow = false;
    this.openModalWindowObservable = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.designaArraySubscription) {
      this.designaArraySubscription.unsubscribe();
    }
  }
}
