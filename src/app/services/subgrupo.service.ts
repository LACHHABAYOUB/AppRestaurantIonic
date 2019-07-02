import { Injectable } from '@angular/core';
import { Utils } from '../helpers/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

  constructor(public httpClient: HttpClient) { }

  listar(): Promise<any[]> {
    return new Promise((resolve, reject) => {
    //  this.httpClient.get(`${Utils.urlService}/menu`)
      this.httpClient.get(`${Utils.urlService}/menu`)


        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            reject(error);
          });
    });
  }
}
