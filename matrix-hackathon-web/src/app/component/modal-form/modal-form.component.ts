import { LocationService } from './../../services/locationService';
import { Localizacao } from './../../model/localizacao.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MouseEvent, AgmMap } from '@agm/core';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';




@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  constructor(private service: LocationService, private toastyService: ToastaService,
    private toastyConfig: ToastaConfig) { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  isCheckedSeg: boolean;
  isCheckedStat: boolean;
  status: boolean;
  seguranca: boolean;
  localizacao: Localizacao;
  liberaExcluir: boolean;
  showForm: boolean;
  taAdd: boolean = false;
  travaMapaBoolean: boolean;
  @Output() variableEvent: EventEmitter<any> = new EventEmitter();

  todasLocations: Array<Localizacao>;

   toastOptions: ToastOptions = {
    title: "My title",
    msg: "The message",
    showClose: true,
    timeout: 5000,
    theme: 'default',
    onAdd: (toast:ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
    },
    onRemove: function(toast:ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
    }
};


  ngOnInit() {
    this.toastyConfig.theme = 'default';
    this.localizacao = new Localizacao();
    /* this.service.getAllLocations().subscribe(response =>{
     this.todasLocations = response;
   }) */
    if (this.localizacao.id == null || this.localizacao.id == undefined) {
      this.liberaExcluir = true;
    }
    else {
      this.liberaExcluir = false;
    }

  }



  closeForm() {
    this.showForm = false;
    this.taAdd = false;
    console.log(this.localizacao.id);
    if ((this.localizacao.coordX != 0 || this.localizacao.coordY != 0) && this.localizacao.id == undefined) {
      this.markers.forEach(marker => {
        if (this.localizacao.coordX == marker.lat && this.localizacao.coordY == marker.lng) {
          this.markers.splice(this.markers.indexOf(marker), 1);
        }
      })
      this.localizacao = new Localizacao();
    }
  }

  checaValorStatus(event: any) {
    this.status = event;
    this.localizacao.status = this.status;
    console.log(this.status);
  }
  checaValorSeguranca(event: any) {
    this.seguranca = event;
    this.localizacao.seguranca = this.seguranca;
    console.log(this.seguranca);
  }

  saveLocation() {
    console.log(this.localizacao.nomeLocalidade);
    if (this.localizacao.nomeLocalidade == undefined || this.localizacao.numero == null || this.localizacao.coordX == 0
      || this.localizacao.coordY == null) {
      this.toastyService.error(this.toastOptions);
    }
    else {
      this.service.postLocation(this.localizacao).subscribe(response => {
        this.todasLocations.forEach(location => {
          if (this.localizacao.id == location.id) {
            this.service.deleteLocation(location);
            console.log(this.localizacao);
            this.service.getAllLocations().subscribe(newAll => {
              this.todasLocations = newAll;
            });
            console.log(this.todasLocations);
          }
        });
        this.localizacao = new Localizacao();
      });
    }

    this.taAdd = false;
  }

  clickedMarker(id: number, lat: number, lng: number, index: number, nome: string, numero: string, showForm: boolean) {
    if (this.taAdd == false) {
      this.showForm = true;
      this.localizacao.id = id;
      this.localizacao.coordX = lat;
      this.localizacao.coordY = lng;
      this.localizacao.seguranca = this.seguranca;
      this.localizacao.status = this.status;
      this.localizacao.nomeLocalidade = nome;
      this.localizacao.numero = numero;
      this.liberaExcluir = true;
      this.taAdd = true;
    }
  }

  excluirLocation(location: Localizacao) {
    if (this.localizacao.id) {
      this.service.deleteLocation(location.id);
      console.log("deletou de boa");
    }
  }

  mapClicked($event: MouseEvent) {
    if (this.taAdd == false) {
      this.showForm = true;
      this.localizacao = new Localizacao();
      this.liberaExcluir = false;
      this.localizacao.coordX = $event.coords.lat;
      this.localizacao.coordY = $event.coords.lng;
      this.markers.push({
        id: this.markers.length + 1,
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      })
      this.taAdd = true;
    }
  }

  markers: marker[] = [
    {
      id: 1,
      nome: "teste",
      numero: "1232813129",
      lat: 51.678418,
      lng: 7.809007,
      label: "C",
      draggable: false
    }
  ];

}
