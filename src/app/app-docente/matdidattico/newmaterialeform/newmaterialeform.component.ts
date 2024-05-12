import { Component, OnInit } from '@angular/core';
import {MaterialeDTO} from '../../../dto/materialeDTO';
import {MatdidatticoService} from '../../../services/matdidattico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import Swal from "sweetalert2";
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFireStorage, AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import {Insegnamento} from '../../../domain/insegnamento';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';


@Component({
  selector: 'app-newmaterialeform',
  templateUrl: './newmaterialeform.component.html',
  styleUrls: ['./newmaterialeform.component.scss']
})
export class NewmaterialeformComponent implements OnInit {

  mat = new MaterialeDTO(0,'','',0,'','','','');



  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  constructor(private matService: MatdidatticoService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              public datepipe: DatePipe,
              private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  ngOnInit() {
    this.mat.data = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
    this.mat.idInsegnamento = +this.route.snapshot.paramMap.get('idIns');
  }


  goBack() {
    this.location.back();
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    /* if (file.type.split('/')[0] !== 'image') {
       console.error('unsupported file type :( ');
       return;
     }*/

    // The storage path
    const path = `materiale/${file.name}`;

    this.mat.url = path;

    this.mat.nome = file.name.substring(45, 0);

    // Totally optional metadata
    // const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
/*
    this.task = this.storage.upload(path, file, { customMetadata });

*/
    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
    tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          console.log(snap);
          // Update firestore on completion
          // this.db.collection('photos').add({ path, size: snap.totalBytes });
        }
      }),
      finalize(() => {
        this.storage.ref(path).getDownloadURL().subscribe(url => {
          if (url) {
            this.mat.url = url;
            console.log(url);
            Swal.fire(
              'Eseguito!',
              'File caricato con successo, fare click su "Invio" per confermare',
              'success'
            );
          }
        });
        // this.downloadURL.subscribe( async url => {
        //   if (url) {
        //     // this.mat.url = url;
        //     console.log(url);
        //     Swal.fire(
        //       'Eseguito!',
        //       'File caricato con successo, fare click su "Invio" per confermare',
        //       'success'
        //     );
        //   }
        // });
        // this.downloadURL = this.storage.ref(path).getDownloadURL();
        // this.downloadURL.subscribe(url=>{
        //   if(url){
        //     // this.mat.url = url;
        //     Swal.fire(
        //       'Eseguito!',
        //       'File caricato con successo, fare click su "Invio" per confermare',
        //       'success'
        //     );
        //   }


        // this.mat.url = this.urlmio;
      })


    );


    // The file's download URL
  }



  onSubmit() {
    this.matService.newMat(this.mat).subscribe(data => this.mat = data);
    Swal.fire({
      title:  'Inserito!',
      text: 'Materiale didattico inserito con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();
    /*this.db.collection('/mat').add({
      data: this.mat.data,
      idMateriale: 404,
      insegnamento_idInsegnamento: this.mat.idInsegnamento,
      nome: this.mat.nome,
      url: this.mat.url
    });*/
  }



}
