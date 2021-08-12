// /// <reference types="@types/googlemaps" />
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { } from 'googlemaps';
// import { google } from '@google/maps';
import { Loader } from '@googlemaps/js-api-loader';
import { ToritoService } from './services/torito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'torito';
  map!: google.maps.Map;

  /**
   *
   */
  constructor(private toritoService: ToritoService) {
    
  }
  ngAfterViewInit(): void {
    this.loadGoogleScript();
  }

  ngOnInit(): void {
    // this.initMap();
  }

  private loadGoogleScript() {
    const loader = new Loader({
      apiKey: 'AIzaSyC2JyVSt2Nm8P3xtafC0uiHfgkKknlZshc',
      version: 'weekly'
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 20.6729964, lng: -103.3729546 },
        zoom: 13,
      });

      const markerLatLng = { lat: 20.672639052109954, lng: -103.33054856661418 };

      this.runGeocoder();
    });
  }

  private runGeocoder(): void {
    // const geocoder = new google.maps.Geocoder();
    // const addresses = ['Av. Guadalupe entre Tchaikovski y Periferico.'];

    // addresses.forEach((x) => {
    //   geocoder.geocode({ address: x }, (result, status) => {
    //     if (status === 'OK') {
    //       const marker = new google.maps.Marker({
    //         map: this.map,
    //         position: result[0].geometry.location
    //       });
    //     }
    //     else {
    //       console.error("Error: " + status);
    //     }
    //   });
    // });
    this.toritoService.getRecentToritos()
    .subscribe(value => {
      console.log(value);
      value.forEach(x => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: {lat: x.location.lat, lng: x.location.lng} 
        });
      });
    });
  }
}